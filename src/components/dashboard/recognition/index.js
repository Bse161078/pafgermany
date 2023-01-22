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
import {CustomButtonLarge, CustomButtonLargeWithIcon, CustomButtonSmall} from "src/components/common/button";
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
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import axios from 'axios';
import {doc, getDoc, setDoc, updateDoc, arrayUnion} from "firebase/firestore";
import Loader from "../../common/Loader";
import ResponsiveConfirmationDialog from "../../common/ResponsiveConfirmation";
import uuid from 'react-uuid';
import DashboardIcon1 from 'src/assets/images/dashboard-icon1.svg';
import DashboardIcon2 from 'src/assets/images/dashboard-icon2.svg';
import DashboardIcon3 from 'src/assets/images/dashboard-icon3.svg';
import DashboardIcon4 from 'src/assets/images/dashboard-icon4.svg';
import TranslationIcon from 'src/assets/images/translation.svg';
import RecognitionIcon from 'src/assets/images/recognition.svg';
import AcademicIcon from 'src/assets/images/academic.svg';
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

const RecognitionDashboard = () => {
    const [showCompletionCertError, setShowCompletionCertError] = useState(null);
    const [showAttorneyError, setShowAttorneyError] = useState(null);
    const [identityError, setIdentityError] = useState(null);

    const [cert, setCert] = useState(null);
    const [attorney, setAttorney] = useState(null);
    const [identity, setIdentity] = useState(null);
    const [confirmation, setConfirmation] = useState(initialConfirmation);
    const [loading, setLoading] = useState(false);
    const {userData, userId} = useOutletContext();
    const [storedRecognition, setStoredRecognition] = useState(null);
    const [count, setCount] = useState(0);

    const [terms, setTerms] = useState({privacyPolicy: false, cancellationPolicy: false, validInfo: false});

    let navigate = useNavigate();

    const navigateToLink = (url) => {
        navigate(url);
    }

    useEffect(() => {
        const recognitionDoc = (userData && userData.recognition) || [];

        if (recognitionDoc.length > 0) {
            setStoredRecognition(recognitionDoc[recognitionDoc.length - 1]);
            setCount(count + 1);
        }

    }, [])


    useEffect(() => {
        if (cert) {
            setShowCompletionCertError(null);
        }
    }, [cert])

    useEffect(() => {
        if (attorney) {
            setShowAttorneyError(null);
        }
    }, [attorney])

    useEffect(() => {
        if (identity) {
            setIdentityError(null);
        }
    }, [identity])


    const onChangeFileCert = (e) => {
        getSelectedImage(e.target.files[0], setCert);
    }
    const onChangeFileAttorney = (e) => {
        getSelectedImage(e.target.files[0], setAttorney);
    }
    const onChangeFileIdentity = (e) => {
        getSelectedImage(e.target.files[0], setIdentity);
    }
    const onChangeLink = (page) => {
        navigate(`${page}`);
        window.scrollTo(0, 0)

    }

    const onChangeCheckbox = (type, value) => {
        setTerms({...terms, [type]: value.target.checked})
    }


    const openLink = (url) => {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.click();
        document.body.removeChild(a);

    }

    const paySubscription = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/checkout`, {data});
            openLink(response.data.url);
            setLoading(false)

        } catch (e) {
            throw new Error(e.toString());
        }
    }


    const onFileUpload = async (selectedDoc) => {
        try {
            const storage = getFirebaseStorage();
            const fileName = Date.now() + "_" + selectedDoc.raw.name;
            const storageRef = ref(storage, fileName);
            const updateFileSnapshot = await uploadBytes(storageRef, selectedDoc.raw)
            const downloadUrl = await getDownloadURL(updateFileSnapshot.ref);
            return {fileName, downloadUrl}
        } catch (e) {
            throw new Error(e);
        }
    }

    const handleRecognition = async () => {
        try {
            setLoading(true);
            const userRef = doc(getFireStoreDb(), "users", userId);
            const uploadCertDoc = await onFileUpload(cert);
            const uploadPowerOfAttorneyDoc = await onFileUpload(attorney);
            const uploadIdentityDoc = await onFileUpload(identity);
            const recognition = {
                cert: uploadCertDoc,
                attorney: uploadPowerOfAttorneyDoc,
                identity: uploadIdentityDoc,
                id: uuid(),
            }


            await updateDoc(userRef, {
                recognition: arrayUnion(recognition)
            });


            recognition.type = 'recognition';
            recognition.userId = userId;
            recognition.pages = 1;
            recognition.title = "Recognition";

            paySubscription(recognition);
        } catch (e) {
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


    const onRegisterUser = () => {
        if (terms.privacyPolicy && terms.cancellationPolicy) {
            let isSuccess = true
            if (!cert) {
                isSuccess = false;
                setShowCompletionCertError("Field cant be empty")
            }
            if (!attorney) {
                isSuccess = false;
                setShowAttorneyError("Field cant be empty")
            }
            if (!identity) {
                isSuccess = false;
                setIdentityError("Field cant be empty")
            }

            if (isSuccess) {
                handleRecognition();
            }

        } else {
        }
    }



    const storedCert = storedRecognition && storedRecognition.cert;
    const storedAttorney = storedRecognition && storedRecognition.attorney;
    const storedIdentity = storedRecognition && storedRecognition.identity;


    const certFileName = (storedCert && storedCert.fileName && (storedCert.fileName).split("_")[1]) || (cert && cert.raw && cert.raw.name);
    const attorneyFileName = (storedAttorney && storedAttorney.fileName && (storedAttorney.fileName).split("_")[1]) ||
        (attorney && attorney.raw && attorney.raw.name);
    const identityFileName = (storedIdentity && storedIdentity.fileName && (storedIdentity.fileName).split("_")[1]) ||
        (identity && identity.raw && identity.raw.name);


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


            <Grid item md={10} xs={11} container sx={{marginTop: {xs: "5px", md: "20px"}}}
                  justifyContent={"space-between"}>
                <Grid item xs={12} container direction={"column"} justifyContent={"space-between"}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge text={"Documents for recognition"} color={"red"}
                                                    fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelHeader text={"fill out a few details to start Submit Document for recognition"}
                                               color={"black"} opacity={"0.5"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <img src={YellowDividerIcon}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "40px"}} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeader
                                text={"Certificate of completion, diploma or Professional license in native language or in German translation"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item container style={{marginTop: "10px"}}>
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
                                                    text={certFileName ? storedRecognition?"In Progress":"Replace File" : "Choose File"}
                                                    color={"black"}/>
                                                {!storedRecognition &&
                                                    <input accept=".pdf" type="file"
                                                           onChange={onChangeFileCert} hidden/>
                                                }
                                            </Button>
                                        </Grid>
                                        {
                                            certFileName &&
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelHeader text={(certFileName)} color={"black"}
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
                                {showCompletionCertError && <FormHelperText
                                    style={{
                                        fontSize: "0.75rem",
                                        textAlign: "left",
                                        color: "#d32f2f",
                                        fontWeight: "400",
                                    }}>
                                    {showCompletionCertError}</FormHelperText>}
                            </Grid>

                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "40px"}} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeader
                                text={"Signed power of attorney for the PAF to authorize your representation towards German authorities"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelHeader
                                text={"Download The Power Of Attorney File Fill It Then Upload It In The Next Input"}
                                color={"#FFD11B"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelHeader text={"Download"}
                                               textDecoration={"underline"}
                                               color={"red"}/>
                        </Grid>
                        <Grid item container style={{marginTop: "10px"}}>
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
                                                    text={attorneyFileName ? storedRecognition?"In Progress":"Replace File" : "Choose File"}
                                                    color={"black"}/>
                                                {!storedRecognition &&
                                                    <input accept=".pdf" type="file" onChange={onChangeFileAttorney}
                                                           hidden/>
                                                }
                                            </Button>
                                        </Grid>
                                        {
                                            attorneyFileName &&
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelHeader text={attorneyFileName} color={"black"}
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
                                {showAttorneyError && <FormHelperText
                                    style={{
                                        fontSize: "0.75rem",
                                        textAlign: "left",
                                        color: "#d32f2f",
                                        fontWeight: "400",
                                    }}>
                                    {showAttorneyError}</FormHelperText>}
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "40px"}} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeader text={"Proof of identity (ID card or Passport Copy)"}
                                               color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item container style={{marginTop: "10px"}}>
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
                                                    text={identityFileName ? storedRecognition?"In Progress":"Replace File" : "Choose File"}
                                                    color={"black"}/>
                                                {!storedRecognition &&
                                                    <input accept=".pdf" type="file" onChange={onChangeFileIdentity}
                                                           hidden/>
                                                }
                                            </Button>
                                        </Grid>
                                        {
                                            identityFileName &&
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelHeader text={identityFileName} color={"black"}
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
                                {identityError && <FormHelperText
                                    style={{
                                        fontSize: "0.75rem",
                                        textAlign: "left",
                                        color: "#d32f2f",
                                        fontWeight: "400",
                                    }}>
                                    {identityError}</FormHelperText>}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                {
                    !storedRecognition &&
                    <>
                        <Grid container direction={"row"} alignItems={"center"} style={{marginTop: "40px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium text={"Price :"}
                                                        color={"black"}
                                                        fontWeight={"bold"} opacity={"1"}/>

                            </Grid>
                            <Grid item style={{marginLeft: "20px"}}>
                                <CustomLabelHeaderLarge1 text={"€ 300 Euro"}
                                                         color={"black"}
                                                         fontWeight={"bold"}/>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"You will be charged 300 euro after uploading all the required documents"}
                                color={"black"}
                                fontWeight={"bold"} opacity={"0.5"}/>
                        </Grid>
                        <Grid item container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <Checkbox onChange={(value) => onChangeCheckbox("privacyPolicy", value)}
                                          checked={terms.privacyPolicy}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px"}}>
                                <CustomLabelLabelSmallHeader
                                    text={"I have read "}
                                    color={"black"} fontWeight={"bold"} textAlign={"left"}
                                    opacity={1} lineHeight={1.7}>
                            <span style={{cursor: "pointer"}} onClick={(e) => onChangeLink('/terms-condition')}>
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
                                    <span style={{cursor: "pointer"}} onClick={(e) => onChangeLink('/privacy-policy')}>
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
                                <Checkbox onChange={(e) => onChangeCheckbox("cancellationPolicy", e)}
                                          checked={terms.cancellationPolicy}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px"}}>
                                <CustomLabelLabelSmallHeader
                                    text={"I have read"}
                                    color={"black"} fontWeight={"bold"} textAlign={"left"}
                                    opacity={1} lineHeight={1.7}>
                            <span style={{cursor: "pointer"}} onClick={(e) => onChangeLink('/cancellation-policy')}>
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
                            <Grid item
                                  onClick={(e) => (terms.privacyPolicy && terms.cancellationPolicy) && onRegisterUser()}>
                                <CustomButtonLarge disabled={!terms.privacyPolicy || !terms.cancellationPolicy}
                                                   text={"Submit"} background={"red"} border={"2px solid red"}/>
                            </Grid>
                        </Grid>
                    </>
                }

            </Grid>
        </Grid>
    )
}

export default RecognitionDashboard;