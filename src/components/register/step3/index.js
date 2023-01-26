import Grid from "@mui/material/Grid/Grid";
import AuthBackground from 'src/assets/images/auth-background.png';
import {
    CustomLabelHeaderExtraLarge,
    CustomLabelHeaderLarge,
    CustomLabelLabelMedium,
    CustomLabelLabelSmallHeader
} from "src/components/common/label";
import React, {useEffect, useState} from "react";
import {CustomAuthTextField, CustomTextField} from "src/components/common/text";
import {CustomButtonLarge} from "src/components/common/button";
import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {useLocation, useOutletContext, Outlet, useNavigate} from 'react-router-dom';
import {
    getAllGraduationStatus,
    getAllSkilledProfession,
    transformValidateObject,
    validateEmail,
    validatePassword,
    validateUserInput
} from "src/utils";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {getFireStoreDb, initializeFirebase} from "src/config/firebase";
import YellowDivider from 'src/assets/images/yellow-divider.svg';
import Paper from "@mui/material/Paper/Paper";
import ProgressBar from "../../common/progressbar";
import Radio from "@mui/material/Radio/Radio";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import {Country, State, City} from 'country-state-city';
import {getAllLanguages, getAllLanguageStatus, getAllNationalities, validateUsername} from "../../../utils";
import {CustomDropdown} from "../../common/text";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import DoneIcon from '@mui/icons-material/Done';
import {doc, getDoc, setDoc} from "firebase/firestore";
import Loader from "../../common/Loader";
import axios from "axios";
import {BASE_URL} from "../../../constants";


export const initialRegister = {
    workExperience: {value: null, error: "Years of work Experience cant be empty", showError: false},
    skilledProfession: {value: null, error: "Skilled Profession cant be empty", showError: false},
    residenceCountry: {value: null, error: "Your Residence Country cant be empty", showError: false},
    otherLanguagesSpeak: {value: "no", error: "Date of birth cant be empty", showError: false},
    graduationStatus: {value: '', error: "Graduation Status cant be empty", showError: false},
    germanLanguageStatus: {value: '', error: "German Language Level Status cant be empty", showError: false},
};


const RegisterStep3 = (props) => {
    let navigate = useNavigate();
    const [user, setUser] = useState(initialRegister);
    const [count, setCount] = useState(0);
    const [terms, setTerms] = useState({privacyPolicy: false, cancellationPolicy: false, validInfo: false})
    const [staticData, setStaticData] = useState({
        countries: [],
        skilledProfessions: [],
        graduationStatuses: [],
        languageStatuses: []
    });
    const {userId} = useOutletContext();
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const countries = (Country.getAllCountries()).map((country) => country.name);
        const skilledProfessions = getAllSkilledProfession();
        const graduationStatuses = getAllGraduationStatus();
        const languageStatuses = getAllLanguageStatus();
        setStaticData({countries,skilledProfessions,graduationStatuses,languageStatuses})
        setCount(count + 1);


    }, [])


    const onChange = (e, type, isCheckbox) => {
        let data;

        if (isCheckbox) {
            data = {
                ...user,
                [type]: {
                    ...user[type],
                    value: e,
                    showError: false
                }
            };
        } else {
            data = {
                ...user,
                [type]: {
                    ...user[type],
                    value: e.target.value,
                    showError: false
                }
            };
        }


        if (type === "username") {
            if (validateUsername(data.username.value)) {
                data = {...data, username: {...data.username, showError: false, error: ""}}
            } else {
                data = {
                    ...data,
                    username: {...data.username, showError: true, error: "Username must have at least 5 characters"}
                }
            }
        }


        setUser(data);
        setCount(count + 1);

    }


    const createBitRixUser=async()=>{
        try {
            const response=await axios.post(`${BASE_URL}/user-bitrix`,{userId})
            return response.data;

        }catch (e) {
            return
        }
    }



    const registerUser = async () => {

        setLoading(true);
        const userData = transformValidateObject(user);
        userData.progress = 3;
        await setDoc(doc(getFireStoreDb(), "users", userId), userData,{ merge: true });

        await createBitRixUser();
        setLoading(false);
        navigate('/');
    }

    const onRegisterUser = () => {
        const validate = validateUserInput({...user}, "", "Password must have at least 8 characters");
        if (validate.isValid) {
                registerUser();
        } else {
            setUser(validate.data);
            setCount(count + 1);
        }

    }


    let CountriesContainer =  (staticData.countries).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)

    let SkilledProfessionContainer =  (staticData.skilledProfessions).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)

    let GraduationStatusContainer =  (staticData.graduationStatuses).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)

    let LanguageStatusContainer =  (staticData.languageStatuses).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)


    return (
        <Grid container style={{width: "100vw", height: "100vh", overflow: "auto"}} justifyContent={"center"}>
            {loading && <Loader/>}
            <Grid item xs={11} md={8} container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                    <CustomLabelHeaderExtraLarge
                        text={"Check for eligibility"}
                        color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                </Grid>
                <Grid item style={{marginTop: "5px"}}>
                    <img src={YellowDivider}/>
                </Grid>
                <Grid container justifyContent={"space-between"} style={{marginTop: "20px"}}>
                    <Grid item xs={5.5}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Paper
                                    style={{width: "48px", height: "48px", background: "#FF0000", borderRadius: "50%"}}>
                                    <Grid container justifyContent={"center"} alignItems={"center"}
                                          style={{height: "100%"}}>
                                        <DoneIcon style={{color: "white"}}/>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid style={{marginTop: "20px"}}>
                                <ProgressBar progress={100}/>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={5.5}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Paper
                                    style={{width: "48px", height: "48px", background: "#FF0000", borderRadius: "50%"}}
                                    elevation={10}>
                                    <Grid container justifyContent={"center"} alignItems={"center"}
                                          style={{height: "100%"}}>
                                        <CustomLabelLabelMedium color={"white"} text={"02"} fontWeight={"normal"}/>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid style={{marginTop: "20px"}}>
                                <ProgressBar progress={50}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container style={{marginTop: "30px"}}>
                    <Grid item xs={"auto"}>
                        <Grid container direction={"column"} alignItems={"center"}>
                            <Grid item>
                                <CustomLabelHeaderLarge
                                    text={"Personal Data"}
                                    color={"black"} fontWeight={"bold"}/>
                            </Grid>
                            <Grid item style={{marginTop: "5px"}}>
                                <img src={YellowDivider}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Years of work Experience?"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomAuthTextField placeholder={"type username here"}
                                                 value={user.workExperience.value}
                                                 onChange={(e) => onChange(e, "workExperience")}
                                                 showError={user.workExperience.showError}
                                                 type={"number"}
                                                 error={user.workExperience.error}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "30px", md: "0px"}}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Skilled Profession"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomDropdown value={user.skilledProfession.value}
                                            onChange={(e) => onChange(e, "skilledProfession")}
                                            container={SkilledProfessionContainer}
                                            showError={user.skilledProfession.showError}
                                            error={user.skilledProfession.error}
                            /> </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={12} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Your Residence Country?"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomDropdown value={user.residenceCountry.value}
                                            onChange={(e) => onChange(e, "residenceCountry")}
                                            container={CountriesContainer}
                                            showError={user.residenceCountry.showError}
                                            error={user.residenceCountry.error}
                            />
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={12} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Do you speak any other languages?"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control=
                                    {<Radio checked={user.otherLanguagesSpeak.value === "yes"}
                                            onChange={(e) => e.target.value && onChange("yes", "otherLanguagesSpeak", true)}/>}
                                                  label="Yes"/>
                                <FormControlLabel value="no" control=
                                    {<Radio checked={user.otherLanguagesSpeak.value === "no"}
                                            onChange={(e) => e.target.value && onChange("no", "otherLanguagesSpeak", true)}/>}
                                                  label="No"
                                                  style={{marginLeft: "10px"}}/>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Graduation Status"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomDropdown value={user.graduationStatus.value}
                                            onChange={(e) => onChange(e, "graduationStatus")}
                                            container={GraduationStatusContainer}
                                            showError={user.graduationStatus.showError}
                                            error={user.graduationStatus.error}
                            /> </Grid>
                    </Grid>
                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "30px", md: "0px"}}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"German Language Level Status"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomDropdown value={user.germanLanguageStatus.value}
                                            onChange={(e) => onChange(e, "germanLanguageStatus")}
                                            container={LanguageStatusContainer}
                                            showError={user.germanLanguageStatus.showError}
                                            error={user.germanLanguageStatus.error}
                            />

                        </Grid>
                    </Grid>
                </Grid>


                <Grid container style={{marginTop: "30px", paddingBottom: "40px"}}>
                    <Grid item onClick={(e) => (onRegisterUser())}>
                        <CustomButtonLarge
                            text={"Next Step"} background={"red"} border={"2px solid red"}/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>

    )
}

export default RegisterStep3;