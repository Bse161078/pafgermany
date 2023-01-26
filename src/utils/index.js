
import  Languages from 'src/assets/json/languages';
import {isPossiblePhoneNumber} from 'react-phone-number-input'


export const validateInput = (objectToValidate) => {
    let isValid = true
    for (const prop in objectToValidate) {
        if (!objectToValidate[prop].optional) {
            if ((objectToValidate[prop].value  && !containsOnlySpaces(objectToValidate[prop].value) && objectToValidate[prop].value.length > 0)
                || (typeof objectToValidate[prop].value === "number" && !isNaN(objectToValidate[prop].value))) {
                objectToValidate[prop].showError = false;
            } else {
                objectToValidate[prop].showError = true;
                isValid = false;
            }
        }
    }
    return {isValid, data: objectToValidate};
}


export const transformValidateObject = (obejctToTransform) => {
    let newObject = {};
    for (const prop in obejctToTransform) {
        if (prop === "location" && obejctToTransform[prop].value) {
            newObject[prop] = `${(obejctToTransform[prop].value).lat},${(obejctToTransform[prop].value).lng}`;
        } else {
            if (obejctToTransform[prop])
                newObject[prop] = obejctToTransform[prop].value;
        }
    }
    return newObject;
}


export const getBasicInfoFromLocalStorage = () => {
    return localStorage.getItem("basic_info") && localStorage.getItem("basic_info").length > 0 ? JSON.parse(localStorage.getItem("basic_info")) : [];
}


export const addBasicInfoToLocalStorage = (newData) => {
    newData = JSON.parse(JSON.stringify(newData));
    //let basicInfo = getBasicInfoFromLocalStorage();
    newData.progress = 1;
    //basicInfo.push(newData);
    //localStorage.setItem("basic_info", JSON.stringify(basicInfo));
    return newData;
}


export const updateBasicInfoOfSelectedRoster = (basicInfo, index, newData, progress) => {
    basicInfo = JSON.parse(JSON.stringify(basicInfo));
    const selectedRoster = basicInfo[index];
    const updatedRoster = {...selectedRoster, ...newData}
    if (!updatedRoster.progress || updatedRoster.progress < progress) updatedRoster.progress = progress;
    basicInfo[index] = updatedRoster;
    return basicInfo;
}


export const addNewHouseholdMember = (basicInfo, newData) => {
    basicInfo = JSON.parse(JSON.stringify(basicInfo));
    newData = JSON.parse(JSON.stringify(newData));
    newData.progress = 1;
    basicInfo.push(newData)
    return basicInfo;
}


export const getBasicInfoOwner = (basicInfoList) => {
    const owner = basicInfoList.filter((basicInfo) => basicInfo.relationWithOwner == "0");
    return owner.length > 0 && owner[0];
}





export const getGrandRelation = (basicInfoList) => {
    const relation = basicInfoList.filter((basicInfo) => basicInfo.relationWithOwner == "7");
    return relation.length > 0 && relation[0];
}



export const checkIfFatherExist = (basicInfoList) => {
    const relation = basicInfoList.filter((basicInfo) => basicInfo.relationWithOwner == "5" && basicInfo.gender==="0");
    return relation.length > 0 ;
}

export const relationIsValidIfOwnerIsTrans = (relation) => {

    if (relation == "1" || relation == "2" || relation == "3" ||
        relation == "4") {
        return false
    }
    return true
}


export const relationIsValidForMaritalStatus = (relation) => {

    if (relation == "1" || relation == "2" || relation == "3" ||
        relation == "4") {
        return false
    }
    return true
}


export const getRosterByIndex = (index) => {
    const rosterList = getBasicInfoFromLocalStorage();
    return rosterList[index];
}


export const getMaritalStatusCount = (basicInfoList) => {
    return (basicInfoList.filter((basicInfo) => basicInfo.relationWithOwner == "1")).length;
}

export const validateBasicInfo = (data, membersData, selectedRosterIndex) => {
    data = JSON.parse(JSON.stringify(data));
    let isValid = true;
    let owner = JSON.parse(JSON.stringify(getBasicInfoOwner(membersData.data.person_info)));


    if ((data.relationWithOwner.value == "0")
        && parseInt(data.age.value) <= 10) {
        data.age.error = "Age should be more than 10 years";
        data.age.showError = true;
        isValid = false;
    }
    if (owner && (data.relationWithOwner.value == "2")
        && (parseInt(owner.age) - parseInt(data.age.value)) < 13) {
        data.age.error = "Age difference between son/daughter should be at least 13 years";
        data.age.showError = true;
        isValid = false;
    }
    if (owner && (data.relationWithOwner.value == "5")
        && (parseInt(data.age.value) - parseInt(owner.age)) < 13) {
        data.age.error = "The age difference between father and son should be at least 13 years";
        data.age.showError = true;
        isValid = false;
    }
    if (owner && (data.relationWithOwner.value == "7")
        && (data.age.value - owner.age) <= 25) {
        data.age.error = "Grandparents, Grandparents, Grandchildren, Great Grandchildren must be at least 25 years apart in age.\n";
        data.age.showError = true;
        isValid = false;
    }
    if ((data.relationWithOwner.value == "1" || data.relationWithOwner.value == "3")
        && (parseInt(data.age.value)) <= 12) {
        data.age.error = "Age of spouse and daughter-in-law should not be less than 12 years";
        data.age.showError = true;
        isValid = false;
    }
    if (data.relationWithOwner.value == "1") {
        if (owner && owner.gender == data.gender.value) {
            data.gender.error = "Husband/Wife gender must not be same";
            data.gender.showError = true;
            isValid = false;
        }
    }
    if ((data.relationWithOwner.value == "1" || data.relationWithOwner.value == "7"
        || data.relationWithOwner.value == "3" || data.relationWithOwner.value === "5")
        && (data.gender.value == "2")) {
        data.gender.error = "Gender cant be transgender";
        data.gender.showError = true;
        isValid = false;
    }
    if ((owner && owner.gender == "2" && (!relationIsValidIfOwnerIsTrans(data.relationWithOwner.value)))) {
        data.relationWithOwner = {
            ...data.relationWithOwner,
            error: "Please select valid relationship",
            showError: true
        };
        isValid = false;
    }
    if ((owner && owner.maritalStatus && owner.maritalStatus == "0"
        && (!relationIsValidForMaritalStatus(data.relationWithOwner.value)))) {
        data.relationWithOwner = {
            ...data.relationWithOwner,
            error: "Please select valid relationship",
            showError: true
        };
        isValid = false;
    }

    if (selectedRosterIndex !== 0 && owner && owner.maritalStatus == "1" && owner.gender == "1"
        && getMaritalStatusCount(membersData.data.person_info) >= 1) {
        data.relationWithOwner = {
            ...data.relationWithOwner,
            error: "براہ کرم درست رشتہ منتخب کریں",
            showError: true
        };
        isValid = false;
    }

    return {isValid, data}
}

export const checkMaritalStatusOwner = (basicInfoList) => {
    return basicInfoList.filter((basicInfo) => basicInfo.relationWithOwner == '1').length > 0 ? true : false
}


export const checkIfMaritalStatusExist = (data, basicInfoList) => {
    if (data.relationWithOwner == '0') {
        return checkMaritalStatusOwner(basicInfoList);
    } else if (data.relationWithOwner === '1') {
        return true;
    }
}


export const getFilteredRelationships = (relationList, roster, basicInfoList, selectedRosterIndex) => {

    let parsedRelationList = JSON.parse(JSON.stringify(relationList));
    const owner = getBasicInfoOwner(basicInfoList);
    const grandSonRelation = parsedRelationList[4];
    if (owner) {

        if (owner.maritalStatus == "0" || owner.gender === "2" || roster.gender == "2" ||
            roster.maritalStatus == "0") {

            if (owner.maritalStatus === '0' || owner.gender === "2") {
                parsedRelationList = parsedRelationList.filter((relation, index) =>
                    (index !== 1 && index !== 2 && index !== 3 && index !== 4));
            }

            if (roster.maritalStatus === '0' || roster.gender === "2") {
                parsedRelationList = parsedRelationList.filter((relation, index) =>
                    (index !== 1 && index !== 3 && index !== 5 && index !== 9));
            }

        } else if (owner.maritalStatus === "1" && selectedRosterIndex === -1) {
            const maritalStatusCount = getMaritalStatusCount(basicInfoList);
            if (owner.gender === "1") {
                if (maritalStatusCount >= 1) {
                    parsedRelationList = parsedRelationList.filter((relation, index) => index != 1);
                }
            } else {
                if (maritalStatusCount >= 4) {
                    parsedRelationList = parsedRelationList.filter((relation, index) => index != 1);
                }
            }

        } else if (owner.maritalStatus === "2" || owner.maritalStatus === '3') {
            parsedRelationList = parsedRelationList.filter((relation, index) => index != 1);

        }

        if ((parseInt(owner.age) - 25) <= 1) {
            parsedRelationList = parsedRelationList.filter((relation, index) => relation !== grandSonRelation)
        }

    } else {
        if (roster.gender == "2" || roster.maritalStatus == "0") {
            parsedRelationList = parsedRelationList.filter((relation, index) =>
                (index !== 1 && index !== 2 && index !== 3 && index !== 4))
        }
        parsedRelationList = parsedRelationList.filter((relation, index) => index === 0);
    }

    if(parseInt(roster.age)<10){
        parsedRelationList = parsedRelationList.filter((relation, index) => relation!==relationList[0]);
    }

    return parsedRelationList;
}


export const getFilteredMaritalStatusList = (parsedMaritalStatusList, data, basicInfoList, minMaxAge,survey) => {

    data = JSON.parse(JSON.stringify(data));
    parsedMaritalStatusList = JSON.parse(JSON.stringify(parsedMaritalStatusList));

    if(data.gender=='2'){
        return [parsedMaritalStatusList[0]]
    }else if(data.age>=10 && data.age<=14 && survey && survey.causeForNotAvailableForWork=='4'){
        return [parsedMaritalStatusList[0]]
    }else if (data && data.relationWithOwner!=='0') {
        if (minMaxAge.max < 12) {
            return [parsedMaritalStatusList[0]]
        } else {
            if (data.gender == '2') {
                return [parsedMaritalStatusList[0]];
            } else {
                if (checkIfMaritalStatusExist(data, basicInfoList)) {
                    return [parsedMaritalStatusList[1]]
                } else if (data.relationWithOwner == '3' ||
                    data.relationWithOwner == '5' ||
                    data.relationWithOwner == '9') {

                    delete parsedMaritalStatusList[0];
                    return parsedMaritalStatusList;
                } else {
                    if (data.age && parseInt(data.age) < 12) {
                        return [parsedMaritalStatusList[0]];
                    } else {
                        return parsedMaritalStatusList;
                    }
                }
            }
        }
    } else {
        if (data.age && parseInt(data.age) < 12) {
            return [parsedMaritalStatusList[0]];
        } else {
            return parsedMaritalStatusList;
        }
    }
}


export const getFilteredGenderList = (genderList, roster, rosterList, minMaxAge) => {
    genderList = JSON.parse(JSON.stringify(genderList));
    const owner = getBasicInfoOwner(rosterList);

    if(roster.age<14){
        genderList=genderList.slice(0,2)
    }

    if (roster.relationWithOwner === '7') {
        const grand = getGrandRelation(rosterList);
        if (grand) {
            if (grand.gender == '0') {
                return [genderList[1]]
            } else if (grand.gender == '1') {
                return [genderList[0]];
            }
        }
    }else if(roster.relationWithOwner==="5"){
        const father=checkIfFatherExist(rosterList);
        if(father){
            return [genderList[1]];
        }else{
            return genderList.slice(0,genderList.length-1);
        }
    } else if (roster.relationWithOwner == '1') {
        if (owner) {
            if (owner.gender == '0') {
                return [genderList[1]]
            } else if (owner.gender == '1') {
                return [genderList[0]];
            }
        } else {
            genderList = genderList.filter((gender, index) => index != 2);
            return genderList;
        }
    } else {
        if (roster.maritalStatus && roster.maritalStatus != '0' || (minMaxAge.max < 14 )
        || (roster.relationWithOwner==="1" || roster.relationWithOwner==="3"
            || roster.relationWithOwner==="9")) {
            genderList = genderList.filter((gender, index) => index != 2);
        }
    }
    return genderList
}


export const getFilteredCauseForNotAvailableForWork = (causeForNotAvailableForWorkList, roster) => {
    let filteredCauseList = JSON.parse(JSON.stringify(causeForNotAvailableForWorkList));
    const age= parseInt(roster.age)

    if (roster) {
        if (roster.educationStatus == "0") {
            return [filteredCauseList[0]]
        }else if (age<5 || age>14 && age<60) {
            return filteredCauseList.filter((cause,index)=>index!==4)
        }


    }

    return filteredCauseList;
}


export const getFilteredMigrationList = (previousMigrationCauseList, roster) => {
    let filteredMigrationList = JSON.parse(JSON.stringify(previousMigrationCauseList));
    if (roster) {

        if (roster.educationStatus && roster.educationStatus.value && roster.educationStatus.value == '2') {
            filteredMigrationList.splice(0, 1)
        }

        if (roster.maritalStatus && roster.maritalStatus.value && roster.maritalStatus.value == "0") {
            filteredMigrationList = filteredMigrationList.filter((list) => list !== previousMigrationCauseList[1]);
        }
    }

    return filteredMigrationList;
}




export const removeRoster = (index) => {
    let rosterList = getBasicInfoFromLocalStorage();
    rosterList.splice(index, 1);
    localStorage.setItem("basic_info", JSON.stringify(rosterList));
}

export const rosterCount = () => {
    let rosterList = getBasicInfoFromLocalStorage();
    return rosterList.length
}


export const getHouseholdInfo = () => {
    return localStorage.getItem("household") &&
    localStorage.getItem("household").length > 0 && localStorage.getItem("household") !== "undefined" ? JSON.parse(localStorage.getItem("household")) : null;

}

export const updateHouseholdInfo = (householdInfo, newData, progress) => {
    if (!householdInfo.progress || parseInt(householdInfo.progress) < progress) newData.progress = progress;

    let tempHouseholdInfo = JSON.parse(JSON.stringify(householdInfo));
    const updatedHouseholdInfo = {...tempHouseholdInfo, ...newData};
    //localStorage.setItem("household", JSON.stringify(updatedHouseholdInfo))
    return updatedHouseholdInfo;
}


export const getFilterWallsStatusList = (hosueholdInfo, houseWallsStatusList) => {
    houseWallsStatusList = JSON.parse(JSON.stringify(houseWallsStatusList));
    return houseWallsStatusList;
}


export const getFiltersHouseCeilingList = (hosueholdInfo, houseCeilingList) => {

    houseCeilingList = JSON.parse(JSON.stringify(houseCeilingList));
    const houseWallsStatus = hosueholdInfo && parseInt(hosueholdInfo.houseWallsType);
    if (houseWallsStatus || houseWallsStatus === 0) {
        if (houseWallsStatus === 0) {
            return houseCeilingList.filter((ceiling, index) => index !== 4 && index!==1)
        } else if (houseWallsStatus === 1) {
            return houseCeilingList.filter((ceiling, index) => index !== 0 && index !== 4)
        } else if (houseWallsStatus === 2 || houseWallsStatus === 3) {
            return houseCeilingList.filter((ceiling, index) => index !== 0 && index !== 2)
        } else if (houseWallsStatus === 4) {
            return [houseCeilingList[4]]
        }
    }

    return houseCeilingList;
}


export const validateUserInput = (objectToValidate,notValidPhoneTitle,notValidatePasswordTitle) => {
    let isValid = true
    for (const prop in objectToValidate) {

        if (!objectToValidate[prop].optional || (prop === "email" && objectToValidate[prop].value && (objectToValidate[prop].value).trim().length > 0)) {
            if ((objectToValidate[prop].value && (objectToValidate[prop].value).trim().length > 0) && !containsOnlySpaces(objectToValidate[prop].value)
                || (typeof objectToValidate[prop].value === "number" && !isNaN(objectToValidate[prop].value))) {
                if ( prop === "email") {
                    if (!objectToValidate[prop].value.toLowerCase().match(/^\S+@\S+\.\S+$/)) {
                        objectToValidate[prop] = {
                            ...objectToValidate[prop],
                            showError: true,
                            error: "Please provide valid email address"
                        };
                        isValid = false;
                    } else {
                        objectToValidate[prop].showError = false;
                    }
                }else if ((prop === "password" || prop==="new_password") && notValidatePasswordTitle && notValidatePasswordTitle.length>0) {
                    if (!validatePassword(objectToValidate[prop].value)) {
                        objectToValidate[prop] = {
                            ...objectToValidate[prop],
                            showError: true,
                            error: notValidatePasswordTitle
                        };
                        isValid = false;
                    } else {
                        objectToValidate[prop].showError = false;
                    }
                } else if (prop === "phone") {
                    if (!isPossiblePhoneNumber("+92" + objectToValidate[prop].value)) {
                        objectToValidate[prop] = {
                            ...objectToValidate[prop],
                            showError: true,
                            error: notValidPhoneTitle
                        };
                        isValid = false;
                    } else {
                        objectToValidate[prop].showError = false;
                    }
                } else {
                    objectToValidate[prop].showError = false;
                }
            } else {
                objectToValidate[prop].showError = true;
                isValid = false;
            }
        }
    }
    return {isValid, data: objectToValidate};
}


export const checkLengthAndNumber = (str, length) => {
    return str.replace(/[^0-9\+]/g, '') && str.replace(/[^0-9\+]/g, '').length <= length ?
        str.replace(/[^0-9\+]/g, '') : null
}

export const replaceSpecialCharacterFromPhone = (str) => {
    return str.replaceAll("_", "");
}


export const saveToken = (token) => {
    localStorage.setItem("token", token)
}

export const getToken = () => {
    return localStorage.getItem("token")
}


export const removeAccessToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("basic_info");
    localStorage.removeItem("household");
}





export const updateAccountInfo = (data) => {
    return {
        phone: {value: data.phone, error: "براہ کرم فیلڈ کو پر کریں", showError: false},
        district: {value: data.district, error: "براہ کرم فیلڈ کو پر کریں", showError: false},
        tehsil: {value: data.tehsil, error: "براہ کرم فیلڈ کو پر کریں", showError: false},
        address: {value: data.address, error: "براہ کرم فیلڈ کو پر کریں", showError: false},
        uniqueCode: {value: data.uniqueCode, error: "براہ کرم فیلڈ کو پر کریں", showError: false, optional: true},
        qrCode: {value: null, error: "براہ کرم فیلڈ کو پر کریں", showError: false, optional: true},

    }
}

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}


export const getBasicInfoList = (membersData) => {
    return membersData && membersData.data && membersData.data.person_info ? membersData.data.person_info : [];

}

export const updateBasicInfo = (basicInfo, newData, index) => {
    const filteredBasicInfo = getBasicInfoList(basicInfo);
    let tempBasicInfo = JSON.parse(JSON.stringify(filteredBasicInfo));
    let personInfo = basicInfo[index];
    tempBasicInfo[index] = {...personInfo, newData};
    return {data: {person_info: tempBasicInfo}};
}


export const getFormattedHouseholdInfo = (household) => {
    return household && household.data && household.data.household ?
        household.data.household : {};
    ;

}

export const updateHouseInfo = (householdInfo, newInfo, progress) => {
    let formattedHouseholdInfo = JSON.parse(JSON.stringify(getFormattedHouseholdInfo(householdInfo)));
    if (!formattedHouseholdInfo.progress || parseInt(formattedHouseholdInfo.progress) < progress) formattedHouseholdInfo.progress = progress;
    return {data: {household: {...formattedHouseholdInfo, ...newInfo}}}
}


export const checkIfSubmitted = (members) => {
    const membersList = getBasicInfoList(members);
    return membersList.length > 0 && membersList[0].IsSubmitted;
}













export const getGenderCount = (members, index) => {
    const membersList = getBasicInfoList(members);
    let count = 0;
    for (let member of membersList) {
        if (member.gender == index) {
            count += 1;
        }
    }
    return count;
}


export const createSubmitBody = (members, household, remarks) => {
    const householdInfo=getFormattedHouseholdInfo(household);
    return {data: {person_info: getBasicInfoList(members), household: {...householdInfo,...getCommunicationFlags(householdInfo.houseCommunication)}, respondent:remarks}}
}




export const isNumeric = (value) => {
    return /^-?\d+$/.test(value);
}


export const getHouseCommunicationIndex = (parsedHouseCommunicationList, houseCommunication) => {
    const communicationList = houseCommunication.split(",");

    const codes = [];
    for (let communication of communicationList) {
        const index = parsedHouseCommunicationList.findIndex((f) => communication === f);
        if (index !== -1) codes.push(index);
    }

    return codes.join(",")
}


export const getHouseCommunicationFromCode = (parsedHouseCommunicationList, houseCommunication) => {
    const communicationList = houseCommunication.split(",");

    const values = [];

    for (let code of communicationList) {
        const value = parsedHouseCommunicationList[code];
        if (value) values.push(value);
    }
    return values
}



export const getCommunicationFlags = (houseCommunicationCode) => {
    let communicationFlags = {};
    for (let communication of houseCommunicationCode) {
        if (communication == "0") communicationFlags = {...communicationFlags, hasTV: true};
        if (communication == "1") communicationFlags = {...communicationFlags, hasRadio: true};
        if (communication == "2") communicationFlags = {...communicationFlags, hasTelephone: true};
        if (communication == "3") communicationFlags = {...communicationFlags, hasMobile: true};
        if (communication == "4") communicationFlags = {...communicationFlags, hasInternet: true};
        if (communication == "5") communicationFlags = {...communicationFlags, hasNewsPaper: true};
    }
    return communicationFlags;
}




export const getAllDistricts = (districts) => {
    let filteredDistricts = [];
    if (districts) {
        for (const prop in districts) {
            const divisionDistricts=districts[prop];
            if(divisionDistricts && divisionDistricts.length>0){
                filteredDistricts=filteredDistricts.concat(divisionDistricts);
            }
        }
    }
    if(filteredDistricts && filteredDistricts.length>0)
    filteredDistricts=filteredDistricts.sort((a, b) => (a.value).localeCompare(b.value))

    return filteredDistricts;
}


export const getDistricts = (selectedProvince, divisions, districts) => {

    if (selectedProvince && districts && divisions) {
        if (divisions[selectedProvince]) {
            const filteredDistrictKeys = divisions[selectedProvince].map((division) => division.label);
            let filteredDistricts = [];
            for (let key of filteredDistrictKeys) {
                filteredDistricts = filteredDistricts.concat(districts[key]);
            }
            return filteredDistricts;
        } else {
            return []
        }

    } else {
        return [];
    }
}

export const getTehsils = (selectedDistrict, tehsils) => {
    if (selectedDistrict && tehsils) {
        const filteredTehsils = tehsils[selectedDistrict];
        return filteredTehsils ? filteredTehsils : [];
    } else {
        return [];

    }
}

export const moveScrollToTop = (id) => {
    window.scrollTo(0, 0)

}




export const checkIfIndexIsValid = (value) => {
    return isNumeric(value) && value != "-1" && value
}


export const ownerIfChanged = (prev, current) => {
    if (current.relationWithOwner == "0" && prev.relationWithOwner != "0") {
        return true;
    }
    return false;
}


export const resetAllRelations = (rosterList, selectedRosterIndex) => {
    rosterList = JSON.parse(JSON.stringify(rosterList));
    let index = 0;
    for (let i = 0; i < rosterList.length; i++) {
        if (selectedRosterIndex !== i) {
            const selectedRoster = rosterList[i];
            if (selectedRoster) {
                selectedRoster.relationWithOwner = "";
                selectedRoster.progress = "1";
            }
        }
    }
    return rosterList;
}


export const checkIfHead = (selectedRoster) => {
    if (selectedRoster && selectedRoster.relationWithOwner && selectedRoster.relationWithOwner == "0") {
        return true;
    }
    return false;
}


export const checkIfHouseCommunicationExist = (householdCommunication, index) => {

    if (householdCommunication) {
        return (householdCommunication.split(",").indexOf(index + "")) !== -1
    }
    return false;
}


export const checkIfHeadExist = (basicInfoList) => {
    return getBasicInfoOwner(basicInfoList)
}


export const getFilteredAge = (roster, rosterList) => {
    const owner = getBasicInfoOwner(rosterList);
    const isMarried = roster.maritalStatus && roster.maritalStatus !== '0' ? true : false;
    const isTransgender = roster.gender && roster.gender == '2';
    if (roster && roster.relationWithOwner) {
        const relation = roster.relationWithOwner;
        if (relation == "0") {
            if (isMarried) {
                return {min: 12, max: 100}
            }else if (isTransgender) {
                return {min: 14, max: 100}
            } else {
                return {min: 10, max: 100}
            }
        }
        else if (relation == "2") {
            return {min: 1, max: (parseInt(owner.age) - 13)}
        } else if (relation == "4") {
            return {min: 1, max: (parseInt(owner.age) - 25)}
        } else if (relation == "5") {
            return {min: (parseInt(owner.age) + 13), max: 100}
        } else if (relation == "9") {
            return {min: (parseInt(owner.age) + 25), max: 100}
        } else if (relation == "1" || relation == "3") {
            return {min: 12, max: 100};
        }
    }
    return {min: 0, max: 100}
}


export const getFilteredEducationDeptList = (roster, educationDeptList) => {
    educationDeptList = JSON.parse(JSON.stringify(educationDeptList));
    const passedEducationRank = roster.passedEducationalRank && parseInt(roster.passedEducationalRank);
    if ((passedEducationRank || passedEducationRank===0 ) && passedEducationRank >= 0 && passedEducationRank <= 9) {
        return [educationDeptList[0]];
    } else if (passedEducationRank && passedEducationRank === 10) {
        return educationDeptList.filter((educationDeptList, index) => index !== 6 && index !== 7 && index!==0);
    } else if (passedEducationRank && passedEducationRank === 11) {
        return educationDeptList.filter((educationDeptList, index) => index!==0 && index !== 4 && index !== 5 && index !== 6);
    } else if (passedEducationRank && passedEducationRank > 9) {
        return educationDeptList.filter((educationDeptList, index) => index !== 0);
    }

    return educationDeptList;
}

export const getFilteredCauseIfNoWork = (roster, causeIfNoWorkList) => {
    causeIfNoWorkList = JSON.parse(JSON.stringify(causeIfNoWorkList));
    const age = roster.age && parseInt(roster.age);

    if (age && (age < 5 || (age > 14 && age < 60))) {
        causeIfNoWorkList = causeIfNoWorkList.filter((cause, index) => index !== 2);
    }
    return causeIfNoWorkList;
}

export const getFilteredDisability = (roster, disabilityList) => {
    disabilityList = JSON.parse(JSON.stringify(disabilityList));
    const causeForNotAvailableForWork = roster.causeForNotAvailableForWork && parseInt(roster.causeForNotAvailableForWork);

    if (causeForNotAvailableForWork && causeForNotAvailableForWork == 5) {
        disabilityList = [disabilityList[0]];
    }
    return disabilityList;
}


export const getFilteredResidentialDurationList = (roster, residentialDurationList) => {
    residentialDurationList = JSON.parse(JSON.stringify(residentialDurationList));
    const age = roster.age && parseInt(roster.age);
    const birthCountry = roster.birthCountry && parseInt(roster.birthCountry);
    if (age || age === 0) {
        if (age < 1) {
            return residentialDurationList.slice(0, 2);
        } else if (age >= 1 && age <= 4) {
            residentialDurationList= residentialDurationList.slice(0, 3);
        } else if (age >= 5 && age <= 9) {
            residentialDurationList= residentialDurationList.slice(0, 4);
        } else if (age >= 10 && age <= 14) {
            residentialDurationList= residentialDurationList.slice(0, 5);
        } else if (age >= 15 && age <= 19) {
            residentialDurationList= residentialDurationList.slice(0, 6);
        } else if (age >= 20 && age <= 24) {
            residentialDurationList =  residentialDurationList.slice(0, 7);
        } else if (age >= 25) {
            residentialDurationList =  residentialDurationList.slice(0, 8);
        }
    }

    if(birthCountry!==0){
        residentialDurationList=residentialDurationList.filter((residential,index)=>index!==0);
    }

    return residentialDurationList;
}


export const getFilteredHouseGenderList = (rosterList, genderList) => {
    genderList = JSON.parse(JSON.stringify(genderList));
    const owner = getBasicInfoOwner(rosterList);
    // if (owner) {
    //     const ownerGender = parseInt(owner.gender);
    //     return [genderList[ownerGender]];
    // }
    return genderList;

}


export const getFilteredHouseCooking = (householdInfo, houseCookingSourceList) => {
    houseCookingSourceList = JSON.parse(JSON.stringify(houseCookingSourceList));
    const houseLightSource = householdInfo && parseInt(householdInfo.houseLightSource);
    if (houseLightSource || houseLightSource === 0) {
        if (houseLightSource !== 0)
            return houseCookingSourceList.filter((cooking, index) => index !== 4);
    }
    return houseCookingSourceList;

}


export const getFilteredWaterSourceTypeList = (householdInfo, houseWaterSourceTypeList) => {
    houseWaterSourceTypeList = JSON.parse(JSON.stringify(houseWaterSourceTypeList));
    const houseCookingSource = householdInfo && parseInt(householdInfo.houseCookingSource);
    if (householdInfo.houseWaterSource == "0") {
        return houseWaterSourceTypeList.slice(0, 5);
    } else if (householdInfo.houseWaterSource == "1") {
        return houseWaterSourceTypeList.slice(5, houseWaterSourceTypeList.length);

    }
    return [];

}


export const getFilteredLightSource = (householdInfo, houseLightSourceList) => {
    houseLightSourceList = JSON.parse(JSON.stringify(houseLightSourceList));
    const houseCookingSource = householdInfo && parseInt(householdInfo.houseCookingSource);
    if (houseCookingSource || houseCookingSource === 0) {
        if (houseCookingSource !== 1)
            return houseLightSourceList.filter((light, index) => index !== 3);
    }
    return houseLightSourceList;

}

export const getFilteredWashroomTypeList = (householdInfo, houseWashroomSubList) => {
    houseWashroomSubList = JSON.parse(JSON.stringify(houseWashroomSubList));
    if (householdInfo && householdInfo.houseWashroomFacility) {
        if (householdInfo.houseWashroomFacility == "0" || householdInfo.houseWashroomFacility == "1") {
            return houseWashroomSubList.slice(0, houseWashroomSubList.length);

        }
    }
    return houseWashroomSubList;

}


export const convertToFormCodes = (allData, type) => {
    allData = JSON.parse(JSON.stringify(allData));
    for (let i = 0; i < allData.length; i++) {
        const data = JSON.parse(JSON.stringify(allData[i]));
        for (const prop in data) {

            if (data[prop]) {
                if (prop == "relationWithOwner" || prop === "gender" || prop === "maritalStatus" || prop === "religion"
                    || prop === "motherLanguage" || prop === "nationality" || prop === "isLiterate" || prop==="passedEducationalDept"
                    || prop === "jobStatus" || prop === "workType" || prop === "educationStatus" || prop === "wasAvailableForWork"
                    || prop === "residentialDurationList" || prop === "previousMigrationCause" || prop === "disability"
                    || prop === "houseResidentialStatus" || prop === "houseOwnerGender" || prop === "houseRoomCount" ||
                    prop === "houseBuiltDuration" || prop === "houseWallsType" || prop === "houseCeilingType"
                    || prop === "houseLightSource" || prop === "houseCookingSource" || prop === "houseKitchenFacility"
                    || prop === "houseBathroomFacility" || prop === "houseWashroomFacility" || prop==="residentialDuration"
                    || prop === "personOutsideCountry" || prop==="houseWaterSource"
                ) {
                    if (type === "inc") {
                        data[prop] = (parseInt(data[prop]) + 1) + ""
                    } else if (type === "des") {
                        data[prop] = (parseInt(data[prop]) - 1) + ""
                    }
                } else if (prop === "educationalMedium") {
                    if (type === "inc") {
                        if (data[prop] == "0") {
                            data[prop] = "a";
                        } else if (data[prop] == "1") {
                            data[prop] = "b";
                        } else if (data[prop] == "2") {
                            data[prop] = "c";
                        }
                    } else if (type === "des") {
                        if (data[prop] == "a") {
                            data[prop] = "0";
                        } else if (data[prop] == "b") {
                            data[prop] = "1";
                        } else if (data[prop] == "c") {
                            data[prop] = "2";
                        }
                    }
                } else if (prop === "notDoingWorkCause") {
                    if (type === "inc") {
                        data[prop] = (parseInt(data[prop]) + 8) + ""
                    } else if (type === "des") {
                        data[prop] = (parseInt(data[prop] - 8)) + "";
                    }
                } else if (prop === "causeForNotAvailableForWork" || prop === "difficultySeeing" || prop === "difficultyHearing" || prop === "difficultyWalkingClimbing"
                 || prop==="walkingDifficulty" || prop==="seeingDifficulty" ||  prop === "difficultyTalking" || prop==="rememberingDifficulty" || prop === "difficultyRemembering"
                  || prop==="talkingDifficulty" || prop==="hearingDifficulty" || prop==="holdingDifficulty"  || prop === "difficultyWashingWriting") {
                    if (type === "inc") {
                        data[prop] = (parseInt(data[prop]) + 2) + ""
                    } else if (type === "des") {
                        data[prop] = (parseInt(data[prop] - 2)) + "";
                    }
                } else if (prop === "houseWaterSourceType") {
                    if (type === "inc") {
                        if (data["houseWaterSource"]) {
                            if (data["houseWaterSource"] == 1) {
                                data[prop] = (parseInt(data[prop]) + 1) + ""
                            } else if (data["houseWaterSource"] == 2) {
                                data[prop] = (parseInt(data[prop]) + 6) + ""
                            }
                        }
                    } else if (type === "des") {
                        if (data["houseWaterSource"] == 0) {
                            data[prop] = (parseInt(data[prop]) - 1) + ""
                        } else if (data["houseWaterSource"] == 1) {
                            data[prop] = (parseInt(data[prop]) - 6) + ""
                        }
                    }
                } else if (prop === "houseWashroomFacilityType") {
                    if (type === "inc") {
                        data[prop] = (parseInt(data[prop]) + 4) + ""
                    } else if (type === "des") {
                        data[prop] = (parseInt(data[prop]) - 4) + ""
                    }
                }else if (prop === "rural") {
                    if (type === "inc") {
                        if (data[prop] == "0") {
                            data[prop] = "U";
                        } else if (data[prop] == "1") {
                            data[prop] = "R";
                        }
                    } else if (type === "des") {
                        if (data[prop] == "U") {
                            data[prop] = "0";
                        } else if (data[prop] == "R") {
                            data[prop] = "1";
                        }
                    }
                }
            }
        }
        allData[i] = data;

    }
    return allData;
}


export const saveDataToLocalStorage=(key,data)=>{

    data=JSON.parse(JSON.stringify(data));
    const prevData=JSON.parse(localStorage.getItem(key))||{};
    localStorage.setItem(key,JSON.stringify({...prevData,...data}));
}


export const getDatFromLocalStorage=(key)=>{
    const locallyStoredData=localStorage.getItem(key);
    return (locallyStoredData && JSON.parse(locallyStoredData)) || {};
}


export const removeDataFromLocalStorage=(key)=>{
    localStorage.removeItem(key);
}



export const containsOnlySpaces=(str)=>{
    return str && !(str+"").replace(/\s/g, '').length;
}


export const validatePassword=(str)=>{
    return str && str.length>=8
}

export const validateUsername=(str)=>{
    return str && str.length>=5
}

export const validateEmail=(str)=>{
    return str && str.match(/^\S+@\S+\.\S+$/)
}



export const checkRelationWithOwnerExist = (basicInfoList) => {
    const owner = basicInfoList.filter((basicInfo) => basicInfo.relationWithOwner && parseInt(basicInfo.relationWithOwner)>0);
    return owner.length<=0?true:false;
}


export const getFilteredWorkTypeList = (roster, workTypeList) => {
    workTypeList = JSON.parse(JSON.stringify(workTypeList));
    const age = roster.age && parseInt(roster.age);

    if (age && (age <= 10)) {
        workTypeList = workTypeList.slice(4,workTypeList.length);
    }
    return workTypeList;
}


export const getFilteredPassedEducationList = (roster, passedEducationalRankList) => {
    passedEducationalRankList = JSON.parse(JSON.stringify(passedEducationalRankList));
    const age = roster.age && parseInt(roster.age);

    if (age && (age <= 10)) {
        passedEducationalRankList = passedEducationalRankList.slice(0,8);
    }
    return passedEducationalRankList;
}



export const getAllNationalities=()=>{
   return ["Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Barbudans", "Batswana", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Herzegovinian", "Honduran", "Hungarian", "I-Kiribati", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Ni-Vanuatu", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite", "Zambian", "Zimbabwean"]
}


export const getAllLanguages=()=>{
    const languageList=[];
    for(const prop in Languages){
        languageList.push(Languages[prop].name)
    }
    return languageList
}

export const getAllSkilledProfession=()=>{
    return ["Nursing professionals","Craftspeople","IP Specialist","Engineering","Physicians","Scientist"]
}

export const getAllGraduationStatus=()=>{
    return ["Primary School","Secondary School","High School","Associate degree","Diploma","Bachelor","Master","PHD"]
}

export const getAllLanguageStatus=()=>{
    return ["I don't have","A1","A2","B1","B2","C1"]
}


export const getSelectedLanguage=()=>{
    return localStorage.getItem("language") || "English";
}