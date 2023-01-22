import Grid from "@mui/material/Grid/Grid";
import AuthBackground from 'src/assets/images/auth-background.png';
import {
    CustomLabelHeaderExtraLarge,
    CustomLabelHeaderLarge,
    CustomLabelLabelMedium,
    CustomLabelLabelSmallHeader
} from "../common/label";
import React, {useEffect, useState} from "react";
import {CustomAuthTextField, CustomTextField} from "../common/text";
import {CustomButtonLarge} from "../common/button";
import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {useLocation, useOutletContext, Outlet, useNavigate} from 'react-router-dom';
import {transformValidateObject, validateEmail, validatePassword, validateUserInput} from "../../utils";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {getFireStoreDb, initializeFirebase} from "src/config/firebase";
import {doc, getDoc} from "firebase/firestore";
import Loader from "../common/Loader";


export const initialRegister = {
    firstName: {value: null, error: "First name cant be empty", showError: false},
    lastName: {value: null, error: "Last name cant be empty", showError: false},
    email: {value: null, error: "Email cant be empty", showError: false},
    password: {value: '', error: "Password cant be empty", showError: false},
    confirmPassword: {value: '', error: "Confirm Password cant be empty", showError: false},
};


const Register = (props) => {
    let navigate = useNavigate();
    const [user, setUser] = useState(initialRegister);
    const [count, setCount] = useState(0);
    const [terms, setTerms] = useState({privacyPolicy: false, cancellationPolicy: false, validInfo: false})
    const [loading, setLoading] = useState(false);
    const [userId,setUserId]=useState(null);

    useEffect(() => {
        initializeFirebase();
        setLoading(true);
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user && user.uid) {
                const docRef = doc(getFireStoreDb(), "users", user.uid);
                setUserId(user.uid);
                const userDetails = await getDoc(docRef);
                if (userDetails.exists()) {
                    const userData=userDetails.data();
                    if(userData.progress===1){
                        navigate('step2');
                    }else if(userData.progress===2){
                        navigate('step3')
                    }else if(userData.progress===3){
                        navigate('/dashboard')
                    }else{
                        navigate('step1')
                    }
                } else {
                    // doc.data() will be undefined in this case
                    navigate('step1');
                }

                setLoading(false)

            } else {
                setLoading(false)
                navigate('step1');
            }
        });


    }, [])


    return (
        <>
            {loading && <Loader/>}
            <Outlet context={{userId }}/>
        </>

    )
}

export default Register;