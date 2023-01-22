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
import {useLocation,useOutletContext,Outlet,useNavigate} from 'react-router-dom';
import {transformValidateObject, validateEmail, validatePassword, validateUserInput} from "src/utils";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";
import {initializeFirebase} from "src/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import {getFireStoreDb} from "../../../config/firebase";
import Loader from "../../common/Loader";
import Button from "@mui/material/Button/Button";
import ResponsiveConfirmationDialog from "../../common/ResponsiveConfirmation";


export const initialRegister = {
    firstName: {value: null, error: "First name cant be empty", showError: false},
    lastName: {value: null, error: "Last name cant be empty", showError: false},
    email: {value: null, error: "Email cant be empty", showError: false},
    password: {value: '', error: "Password cant be empty", showError: false},
    confirmPassword: {value: '', error: "Confirm Password cant be empty", showError: false},
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
const RegisterStep1 = (props) => {
    let navigate = useNavigate();
    const [user,setUser]=useState(initialRegister);
    const [count,setCount]=useState(0);
    const [terms,setTerms]=useState({privacyPolicy:false,cancellationPolicy:false,validInfo:false})
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(initialConfirmation);



    useEffect(()=>{
    },[])


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

        if (type === "password") {
            if (validatePassword(data.password.value)) {
                data = {...data, password: {...data.password, showError: false, error: ""}}
            } else {
                data = {...data, password: {...data.password, showError: true, error: "Password must have at least 8 characters"}}
            }
        }

        if (type === "email") {
            if (validateEmail(data.email.value)) {
                data = {...data, email: {...data.email, showError: false, error: ""}}
            } else {
                data = {...data, email: {...data.email, showError: true, error: "Please enter valid email address"}}
            }
        }


        setUser(data);
        setCount(count + 1);

    }


    const onChangeCheckbox=(type,value)=>{
        setTerms({...terms,[type]:value.target.checked})
    }

    const onChangeLink=(page)=>{
        navigate(`${page}`);
        window.scrollTo(0, 0)

    }


    const registerUser=async ()=>{
        setLoading(true);
        const auth = getAuth();
        const parsedUser=transformValidateObject(user);
        createUserWithEmailAndPassword(auth, parsedUser.email, parsedUser.password)
            .then(async (userCredential) => {

                // Signed in
                const firebaseUser = userCredential.user;
                const data={...transformValidateObject(user),progress:1}
                await setDoc(doc(getFireStoreDb(), "users", firebaseUser.uid), data);
                setLoading(false);

                navigate('/register/step2');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoading(false);
                setConfirmation({
                    show: true, title: "Error",
                    text: errorMessage
                    , data: {}, isUpdate: false,
                    buttonYes:
                        <Button autoFocus onClick={(e) => {
                            setConfirmation(initialConfirmation)
                        }}>{"ok"}</Button>,
                })
                // ..
            });
    }


    const onRegisterUser=()=>{
            if (terms.privacyPolicy && terms.cancellationPolicy && terms.validInfo) {
                const validate = validateUserInput({...user}, "","Password must have at least 8 characters");
                 if (validate.isValid) {

                    if (user.password.value === user.confirmPassword.value) {
                        registerUser();
                    }
                    else {
                        setUser({
                            ...user, confirmPassword: {
                                ...user.confirmPassword, error: "Password doesn't matched with confirm password",
                                showError: true
                            }
                        });
                        setCount(count)
                    }
                } else {
                    setUser(validate.data);
                    setCount(count + 1);
                }
            }

    }



    return (
        <Grid container style={{width: "100vw", height: "100vh"}} justifyContent={"center"}>
            {loading && <Loader/>}
            {
                confirmation.show &&
                <ResponsiveConfirmationDialog
                    title={confirmation.title} text={confirmation.text}
                    buttons={confirmation.buttonYes}
                    otherButton={confirmation.buttonNo}
                />
            }
            <Grid item xs={0} md={4} sx={{height: "100vh", overflow: "hidden", display: {xs: "none", md: "block"}}}>
                <Box component={"img"} src={AuthBackground} sx={{height: "100vh"}}/>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={11} md={6} container direction={"column"} justifyContent={"center"} alignItems={"flex-start"}
            >
                <Grid item>
                    <CustomLabelHeaderExtraLarge
                        text={"Sign up"}
                        color={"black"} fontWeight={"bold"}/>
                </Grid>
                <Grid item style={{marginTop: "20px"}}>
                    <CustomLabelLabelMedium
                        text={"Create account to start using PAF"}
                        color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                        opacity={1} lineHeight={1.7} textAlign={"center"}/>
                </Grid>

                <Grid item container style={{marginTop: "20px"}} justifyContent={"space-between"}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"First name"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomAuthTextField placeholder={"type first name here"}
                                                 value={user.firstName.value}
                                                 onChange={(e) => onChange(e, "firstName")}
                                                 showError={user.firstName.showError}
                                                 error={user.firstName.error}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "20px", md: "0px"}}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Last name"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomAuthTextField placeholder={"type last name here"}
                                                 value={user.lastName.value}
                                                 onChange={(e) => onChange(e, "lastName")}
                                                 showError={user.lastName.showError}
                                                 error={user.lastName.error}/>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item container style={{marginTop: "20px"}}>
                    <Grid item>
                        <CustomLabelLabelMedium
                            text={"Email"}
                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                            lineHeight={1.7}/>
                    </Grid>
                    <Grid item container>
                        <CustomAuthTextField placeholder={"type email here"}
                                             value={user.email.value}
                                             onChange={(e) => onChange(e, "email")}
                                             showError={user.email.showError}
                                             error={user.email.error}/>
                    </Grid>
                </Grid>

                <Grid item container style={{marginTop: "20px"}} justifyContent={"space-between"}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Password"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomAuthTextField placeholder={"type password here"}
                                                 type={"password"}
                                                 value={user.password.value}
                                                 onChange={(e) => onChange(e, "password")}
                                                 showError={user.password.showError}
                                                 error={user.password.error}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "20px", md: "0px"}}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Confirm password"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomAuthTextField placeholder={"type confirm password here"}
                                                 type={"password"}
                                                 value={user.confirmPassword.value}
                                                 onChange={(e) => onChange(e, "confirmPassword")}
                                                 showError={user.confirmPassword.showError}
                                                 error={user.confirmPassword.error}/>
                        </Grid>
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

                <Grid item container style={{marginTop: "5px"}} alignItems={"center"}>
                    <Grid item>
                        <Checkbox onChange={(e)=>onChangeCheckbox("validInfo",e)} checked={terms.validInfo}/>
                    </Grid>
                    <Grid item xs style={{marginLeft: "5px"}}>
                        <CustomLabelLabelSmallHeader
                            text={"Yes, I hereby confirm that I have filled in all the information conscientiously and truthfully and hereby instruct PAF Germany GmbH to apply for my professional recognition."}
                            color={"black"} fontWeight={"bold"} textAlign={"left"}
                            opacity={1} lineHeight={1.7}/>
                    </Grid>
                </Grid>

                <Grid container style={{marginTop: "20px"}}>
                    <Grid item onClick={(e)=>(terms.validInfo && terms.privacyPolicy && terms.cancellationPolicy) && onRegisterUser()}>
                        <CustomButtonLarge disabled={!terms.privacyPolicy || !terms.cancellationPolicy || !terms.validInfo}
                                           text={"Sign up"} background={"red"} border={"2px solid red"}/>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={0} md={1}></Grid>
        </Grid>
    )
}

export default RegisterStep1;