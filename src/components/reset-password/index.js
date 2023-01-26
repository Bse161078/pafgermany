import Grid from "@mui/material/Grid/Grid";
import AuthBackground from 'src/assets/images/auth-background.png';
import {CustomLabelHeaderExtraLarge, CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../common/label";
import React, {useEffect, useState} from "react";
import {CustomAuthTextField, CustomTextField} from "../common/text";
import {CustomButtonLarge} from "../common/button";
import Box from "@mui/material/Box/Box";
import {
    transformValidateObject,
    validateEmail,
    validatePassword,
    validateUserInput,
    validateUsername
} from "../../utils";
import {getFireStoreDb, initializeFirebase} from "../../config/firebase";
import Button from "@mui/material/Button/Button";

import { doc, setDoc,getDoc } from "firebase/firestore";
import { getAuth, verifyPasswordResetCode,sendPasswordResetEmail,fetchSignInMethodsForEmail,confirmPasswordReset    } from "firebase/auth";
import {useLocation,useOutletContext,Outlet,useNavigate} from 'react-router-dom';
import Loader from "../common/Loader";
import ResponsiveConfirmationDialog from "../common/ResponsiveConfirmation";
import qs from 'query-string';


export const initialRegister = {
    email: {value: null, error: "Email cant be empty", showError: false},
    password: {value: '', error: "Password Password cant be empty", showError: false},
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

const ResetPassword=()=>{
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialRegister);
    let navigate = useNavigate();
    const [confirmation, setConfirmation] = useState(initialConfirmation);
    const [count,setCount]=useState(0);

    const params = useLocation().search;
    const parsed = qs.parse(params);


    const handleResetPassword=async (auth, actionCode, continueUrl, lang)=> {

        try{
            const email=await verifyPasswordResetCode(auth, actionCode);
            setUser({...user,email:{...user.email,value:email}})
        }catch (e) {
            setConfirmation({
                show: true, title: "Error",
                text: e.toString()
                , data: {}, isUpdate: false,
                buttonYes:
                    <Button autoFocus onClick={(e) => {
                        setConfirmation(initialConfirmation);
                        navigate('/login')
                    }}>{"ok"}</Button>,
            })
        }
    }


    useEffect(()=>{
        initializeFirebase();
        const mode = parsed.mode;
        // Get the one-time code from the query parameter.
        const actionCode = parsed.oobCode;
        // (Optional) Get the continue URL from the query parameter if available.
        const continueUrl = parsed.continueUrl;
        // (Optional) Get the language code if available.
        const lang = parsed.lang || 'en';
        const auth = getAuth();
        handleResetPassword(auth, actionCode, continueUrl, lang);

    },[])


    const onChange = (e, type, isCheckbox) => {
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


        setUser(data);
        setCount(count + 1);

    }


    const getUserData = async (id) => {


        const userRef = doc(getFireStoreDb(), "users", id);

        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            return null;
        } else {
            return userDoc.data();
        }
    }


    const resetPassword=async (auth,password)=>{
        try{
            const actionCode = parsed.oobCode;
            setLoading(true);
            const resetPassword=await confirmPasswordReset(auth,actionCode,password);
            navigate('/login');
            setLoading(false);
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

    const onResetPassword=()=>{
        const validate = validateUserInput({...user}, "","Password must have at least 8 characters");
        if(validate.isValid){

            if (user.password.value === user.confirmPassword.value) {
                const auth = getAuth();
                const parsedUser=transformValidateObject(user);
                resetPassword(auth,parsedUser.password)
            }else{
                setUser({
                    ...user, confirmPassword: {
                        ...user.confirmPassword, error: "Password doesn't matched with confirm password",
                        showError: true
                    }
                });
                setCount(count)
            }
        }else{
            setUser(validate.data);
            setCount(count + 1);
        }
    }

    console.log("user = ",user);


    return(
        <Grid container style={{width:"100vw",height:"100vh"}} justifyContent={"center"}>

            {loading && <Loader/>}
            {
                confirmation.show &&
                <ResponsiveConfirmationDialog
                    title={confirmation.title} text={confirmation.text}
                    buttons={confirmation.buttonYes}
                    otherButton={confirmation.buttonNo}
                />
            }

            <Grid item xs={0} md={4} sx={{height:"100vh",overflow:"hidden",display:{xs:"none",md:"block"}}}>
                <Box component={"img"} src={AuthBackground} sx={{height:"100vh"}}/>
            </Grid>
            <Grid item xs={0} md={2}></Grid>
            <Grid item xs={11} md={4} container direction={"column"} justifyContent={"center"} alignItems={"flex-start"}>
                <Grid item>
                    <CustomLabelHeaderExtraLarge
                        text={"Reset Password"}
                        color={"#FFCC00"} fontWeight={"bold"}/>
                </Grid>
                <Grid item style={{marginTop:"20px"}}>
                    <CustomLabelLabelMedium
                        text={""}
                        color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                        opacity={1} lineHeight={1.7} textAlign={"center"}/>
                </Grid>

                <Grid item container style={{marginTop:"20px"}}>
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
                <Grid item container style={{marginTop:"20px"}}>
                    <Grid item>
                        <CustomLabelLabelMedium
                            text={"Confirm Password"}
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


                <Grid container style={{marginTop:"20px"}} justifyContent={"space-between"}>
                    <Grid item onClick={(e)=>onResetPassword()}>
                        <CustomButtonLarge text={"Reset Password"} background={"red"} border={"2px solid red"}/>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={0} md={2}></Grid>
        </Grid>
    )
}

export default ResetPassword;