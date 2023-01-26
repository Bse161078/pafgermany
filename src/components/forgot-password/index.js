import Grid from "@mui/material/Grid/Grid";
import AuthBackground from 'src/assets/images/auth-background.png';
import {CustomLabelHeaderExtraLarge, CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../common/label";
import React, {useState} from "react";
import {CustomAuthTextField, CustomTextField} from "../common/text";
import {CustomButtonLarge} from "../common/button";
import Box from "@mui/material/Box/Box";
import {transformValidateObject, validateEmail, validateUserInput, validateUsername} from "../../utils";
import {getFireStoreDb, initializeFirebase} from "../../config/firebase";
import Button from "@mui/material/Button/Button";

import { doc, setDoc,getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword,signOut,sendPasswordResetEmail,fetchSignInMethodsForEmail    } from "firebase/auth";
import {useLocation,useOutletContext,Outlet,useNavigate} from 'react-router-dom';
import Loader from "../common/Loader";
import ResponsiveConfirmationDialog from "../common/ResponsiveConfirmation";


export const initialRegister = {
    email: {value: null, error: "Email cant be empty", showError: false}
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

const ForgotPassword=()=>{
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialRegister);
    let navigate = useNavigate();
    const [confirmation, setConfirmation] = useState(initialConfirmation);
    const [count,setCount]=useState(0);

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


    const getUserData = async (id) => {


        const userRef = doc(getFireStoreDb(), "users", id);

        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            return null;
        } else {
            return userDoc.data();
        }
    }


    const forgotPassword=async (auth,email)=>{
        try{
            setLoading(true);
            const forgotPassword=await fetchSignInMethodsForEmail(auth,email);
            const sendEmail=await sendPasswordResetEmail(auth,email);
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

    const onForgotPassword=()=>{
        const validate = validateUserInput({...user}, "","Password must have at least 8 characters");
        if(validate.isValid){
            const auth = getAuth();
            const parsedUser=transformValidateObject(user);
            forgotPassword(auth,parsedUser.email)
        }else{
            setUser(validate.data);
            setCount(count + 1);
        }
    }


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
                        text={"Forgot Password"}
                        color={"#FFCC00"} fontWeight={"bold"}/>
                </Grid>
                <Grid item style={{marginTop:"20px"}}>
                    <CustomLabelLabelMedium
                        text={"Enter your email to receive verification link."}
                        color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                        opacity={1} lineHeight={1.7} textAlign={"center"}/>
                </Grid>

                <Grid item container style={{marginTop:"20px"}}>
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
                                             error={user.email.error}
                        />
                    </Grid>
                </Grid>


                <Grid container style={{marginTop:"20px"}} justifyContent={"space-between"}>
                    <Grid item onClick={(e)=>onForgotPassword()}>
                        <CustomButtonLarge text={"Send Email"} background={"red"} border={"2px solid red"}/>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={0} md={2}></Grid>
        </Grid>
    )
}

export default ForgotPassword;