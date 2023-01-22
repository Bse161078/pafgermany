import Grid from "@mui/material/Grid/Grid";
import React, {useEffect, useState} from "react";
import {
    CustomLabelHeader,
    CustomLabelHeaderLarge, CustomLabelHeaderLarge1,
    CustomLabelLabelMedium, CustomLabelLabelSmallHeader,
    CustomLabelLabelSmallMedium
} from "src/components/common/label";
import YellowDividerIcon from 'src/assets/images/yellow-divider.svg';
import SmsIcon from "src/assets/images/sms.png";
import LocationIcon from "src/assets/images/location.png";
import Divider from "@mui/material/Divider/Divider";
import {CustomButtonLarge, CustomButtonLargeWithIcon} from "src/components/common/button";
import FacebookIcon from 'src/assets/images/facebook.svg';
import YoutubeIcon from 'src/assets/images/youtube.svg';
import InstagramIcon from 'src/assets/images/instagram.svg';
import LinkedinIcon from 'src/assets/images/linkedin.svg';
import {CustomAuthTextField, CustomTextField} from "src/components/common/text";
import {transformValidateObject, validateEmail, validatePassword, validateUserInput} from "../../../utils";
import {CustomTextFieldMultiline} from "../../common/text";
import Paper from "@mui/material/Paper/Paper";
import {getSelectedImage} from "../../../utils/file";
import UploadDocIcon from 'src/assets/images/upload-doc-icon1.svg';
import Button from "@mui/material/Button/Button";
import {CustomLabelLabelLarge} from "../../common/label";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {getFirebaseStorage, getFireStoreDb} from "../../../config/firebase";
import {useLocation, useOutletContext, Outlet, useNavigate} from 'react-router-dom';
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { getStorage, ref, uploadBytes ,getDownloadURL  } from "firebase/storage";
import axios from 'axios';
import {doc, getDoc, setDoc,updateDoc, arrayUnion} from "firebase/firestore";
import Loader from "../../common/Loader";
import ResponsiveConfirmationDialog from "../../common/ResponsiveConfirmation";
import uuid from 'react-uuid';
import {BASE_URL} from "../../../constants";



export const initialRegister = {
    title: {value: null, error: "Document Title cant be empty", showError: false},
    instructions: {value: null, error: "Instructions cant be empty", showError: false}
};


const initialConfirmation = {
    show: false,
    title: "",
    text: "",
    data: null,
    isUpdate: false,
    buttonYes: null,
    buttonNo: null
}

const Translation = () => {
    const [user, setUser] = useState(initialRegister);
    const [count, setCount] = useState(0);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [terms,setTerms]=useState({privacyPolicy:false,cancellationPolicy:false,validInfo:false});
    const [showFileError,setShowFileError]=useState(null);
    const [numPages, setNumPages] = useState(null);
    const [confirmation, setConfirmation] = useState(initialConfirmation);
    const {userId} = useOutletContext();
    const [loading, setLoading] = useState(false);


    let navigate = useNavigate();


    useEffect(()=>{
       if(selectedDoc){
           setShowFileError(null);
       }
    },[selectedDoc])

    const onChange = (e, type) => {
        let data;

        data = {
            ...user,
            [type]: {
                ...user[type],
                value: e.target.value,
                showError: false
            }
        };


        setUser(data);
        setCount(count + 1);

    }


    const onChangeLink=(page)=>{
        navigate(`${page}`);
        window.scrollTo(0, 0)

    }

    const onChangeFile = (e) => {
        getSelectedImage(e.target.files[0], setSelectedDoc);
    }

    const onChangeCheckbox=(type,value)=>{
        setTerms({...terms,[type]:value.target.checked})
    }

    const onFileUpload=async ()=>{
        try{
            const storage = getFirebaseStorage();
            const fileName=Date.now()+"_"+selectedDoc.raw.name;
            const storageRef = ref(storage, fileName);
            const updateFileSnapshot=await uploadBytes(storageRef, selectedDoc.raw)
            const downloadUrl=await getDownloadURL(updateFileSnapshot.ref);
            return {fileName,downloadUrl}
        }catch (e) {
            throw new Error(e);
        }
    }


    const countPages=async(url)=>{
        const response=await axios.post(`${BASE_URL}/count-pages`,{url})
        return response.data;
    }

    const openLink = (url) => {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.click();
        document.body.removeChild(a);

    }

    const paySubscription=async (data)=>{
        const response =  await axios.post(`${BASE_URL}/checkout`, {data});
        openLink(response.data.url);
        setLoading(false);
    }


    const handleTranslation=async ()=>{
        try{
            setLoading(true);
            const firebaseUploadedFile=await onFileUpload();
            const pages=await countPages(firebaseUploadedFile.downloadUrl);
            setNumPages(pages.numberOfPages);
            const userRef = doc(getFireStoreDb(), "users", userId);
            const userData = transformValidateObject(user);
            userData.pages=pages.numberOfPages;
            userData.fileMetaData=firebaseUploadedFile;
            userData.id=uuid();
            userData.type='translation';
            userData.userId=userId;
            await updateDoc(userRef, {
                translation: arrayUnion(userData)
            });
            paySubscription(userData);
        }catch (e) {
            setLoading(false);

            setConfirmation({
                show: true, title: "Error",
                text: e.toString()
                , data: {}, isUpdate: false,
                buttonYes:
                    <Button autoFocus onClick={(e) => {
                        setConfirmation(initialConfirmation)
                    }}>{"ok"}</Button>,
            })
        }
    }

    const onRegisterUser=()=>{
        if (terms.privacyPolicy && terms.cancellationPolicy ) {
            const validate = validateUserInput({...user}, "","Password must have at least 8 characters");
            if (validate.isValid) {
                if (!selectedDoc) {
                    setShowFileError("Upload Document cant be empty")
                }else{
                    handleTranslation();
                }
            } else {
                setUser(validate.data);
                setCount(count + 1);
            }
        }

    }


    const fileName = selectedDoc && selectedDoc.raw && selectedDoc.raw.name;

    return (
        <Grid container justifyContent={"center"}

              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>

            {loading && <Loader/>}
            {
                confirmation.show &&
                <ResponsiveConfirmationDialog
                    title={confirmation.title} text={confirmation.text}
                    buttons={confirmation.buttonYes}
                    otherButton={confirmation.buttonNo}
                />
            }

            <Grid item md={9} xs={11} container sx={{marginTop: {xs: "5px", md: "20px"}}}
                  justifyContent={"space-between"}>
                <Grid item xs={12} container direction={"column"} justifyContent={"space-between"}>
                    <Grid item>
                        <CustomLabelHeaderLarge text={"Document for translation"} color={"red"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "20px"}}>
                        <CustomLabelHeader text={"fill out a few details to start Submit Document for translation"}
                                           color={"black"} opacity={"0.5"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "20px"}}>
                        <img src={YellowDividerIcon}/>
                    </Grid>

                    <Grid container direction={"column"}>
                        <Grid item container style={{marginTop: "20px"}}>
                            <Grid item xs={12} container>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Document Title"}
                                        color={"black"} fontWeight={"bold"} textAlign={"center"}
                                        lineHeight={1.7}/>
                                </Grid>
                                <Grid item container>
                                    <CustomAuthTextField placeholder={""}
                                                         value={user.title.value}
                                                         onChange={(e) => onChange(e, "title")}
                                                         showError={user.title.showError}
                                                         error={user.title.error}/>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item container style={{marginTop: "20px"}} justifyContent={"space-between"}>
                            <Grid item container xs={12} sm={5.5} sx={{marginTop: {xs: "20px", sm: "0px"}}}>
                                <div style={{width:"100%"}}>
                                    <Grid container justifyContent={"flex-start"}>
                                    <Grid item>
                                        <CustomLabelLabelMedium
                                            text={"Instructions"}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            lineHeight={1.7}/>
                                    </Grid>
                                    <Grid item container>
                                        <CustomTextFieldMultiline placeholder={""}
                                                                  value={user.instructions.value}
                                                                  onChange={(e) => onChange(e, "instructions")}
                                                                  showError={user.instructions.showError}
                                                                  rows={5}
                                                                  error={user.instructions.error}/>
                                    </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12} container xs={12} sm={5.5} sx={{marginTop: {xs: "20px", sm: "0px"}}}>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Upload Document"}
                                        color={"black"} fontWeight={"bold"} textAlign={"center"}
                                        lineHeight={1.7}/>
                                </Grid>
                                <Grid item container>
                                    <Paper style={{
                                        width: "100%",
                                        background: "white",
                                        padding: "20px",
                                        borderRadius: "10px"
                                    }}>
                                        <Grid container direction={"column"} alignItems={"center"}
                                              justifyContent={"center"}>
                                            <Grid item>
                                                <img src={UploadDocIcon}/>
                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <Button
                                                    component="label"
                                                    style={{border: "2px solid red", padding: "10px 30px 10px 30px"}}>
                                                    <CustomLabelLabelLarge
                                                        text={fileName ? "Replace File" : "Choose File"}
                                                        color={"black"}/>
                                                    <input accept=".pdf" type="file" onChange={onChangeFile} hidden/>
                                                </Button>
                                            </Grid>
                                            {
                                                fileName &&
                                                <Grid item style={{marginTop: "20px"}}>
                                                    <CustomLabelHeader text={fileName} color={"black"}
                                                                       fontWeight={"bold"}/>
                                                </Grid>
                                            }

                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium text={"Maximum file size: 256 MB"}
                                                                        color={"black"}
                                                                        fontWeight={"bold"} opacity={"0.5"}/>
                                            </Grid>

                                        </Grid>
                                    </Paper>
                                    {true && <FormHelperText
                                        style={{
                                            fontSize: "0.75rem",
                                            textAlign: "left",
                                            color: "#d32f2f",
                                            fontWeight: "400",
                                        }}>
                                        {showFileError}</FormHelperText>}
                                </Grid>

                            </Grid>
                        </Grid>


                        <Grid contaienr direction={"column"} style={{marginTop: "40px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium text={"Price:"}
                                                        color={"black"}
                                                        fontWeight={"bold"} opacity={"1"}/>

                            </Grid>
                            <Grid item>
                                <CustomLabelHeaderLarge1 text={"€ 35.00 Euro Per Page"}
                                                        color={"black"}
                                                        fontWeight={"bold"}/>
                            </Grid>
                        </Grid>

                        <Grid item container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <Checkbox onChange={(value)=>onChangeCheckbox("privacyPolicy",value)} checked={terms.privacyPolicy}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px"}}>
                                <CustomLabelLabelSmallHeader
                                    text={"I have read "}
                                    color={"black"} fontWeight={"bold"} textAlign={"left"}
                                    opacity={1} lineHeight={1.7}>
                            <span style={{cursor:"pointer"}} onClick={(e)=>onChangeLink('/terms-condition')}>
                                <CustomLabelLabelSmallHeader
                                    inline={"inline"}
                                    text={"the terms and condition "}
                                    color={"red"} fontWeight={"bold"} textAlign={"left"}
                                    opacity={1} lineHeight={1.7}/>
                            </span>
                                    <span>
                                <CustomLabelLabelSmallHeader
                                    inline={"inline"}
                                    text={"and "}
                                    color={"black"} fontWeight={"bold"} textAlign={"left"}
                                    opacity={1} lineHeight={1.7}/>
                            </span>
                                    <span style={{cursor:"pointer"}} onClick={(e)=>onChangeLink('/privacy-policy')}>
                                <CustomLabelLabelSmallHeader
                                    inline={"inline"}
                                    text={" the privacy policy"}
                                    color={"red"} fontWeight={"bold"} textAlign={"left"}
                                    opacity={1} lineHeight={1.7}/>
                            </span>
                                </CustomLabelLabelSmallHeader>
                            </Grid>
                        </Grid>

                        <Grid item container style={{marginTop: "5px"}} alignItems={"center"}>
                            <Grid item>
                                <Checkbox onChange={(e)=>onChangeCheckbox("cancellationPolicy",e)} checked={terms.cancellationPolicy}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px"}}>
                                <CustomLabelLabelSmallHeader
                                    text={"I have read"}
                                    color={"black"} fontWeight={"bold"} textAlign={"left"}
                                    opacity={1} lineHeight={1.7}>
                            <span style={{cursor:"pointer"}} onClick={(e)=>onChangeLink('/cancellation-policy')}>
                               <CustomLabelLabelSmallHeader
                                   inline={"inline"}
                                   text={" the cancellation policy"}
                                   color={"red"} fontWeight={"bold"} textAlign={"left"}
                                   opacity={1} lineHeight={1.7}/>

                            </span>
                                    <span>
                               <CustomLabelLabelSmallHeader
                                   inline={"inline"}
                                   text={" here by widthdraw from my right of cancellation"}
                                   color={"black"} fontWeight={"bold"} textAlign={"left"}
                                   opacity={1} lineHeight={1.7}/>

                            </span>
                                </CustomLabelLabelSmallHeader>
                            </Grid>
                        </Grid>



                        <Grid container style={{marginTop: "20px"}}>
                            <Grid item onClick={(e)=>( terms.privacyPolicy && terms.cancellationPolicy) && onRegisterUser()}>
                                <CustomButtonLarge disabled={!terms.privacyPolicy || !terms.cancellationPolicy}
                                                   text={"Submit"} background={"red"} border={"2px solid red"}/>
                            </Grid>
                        </Grid>



                    </Grid>

                </Grid>

            </Grid>
        </Grid>
    )
}

export default Translation;