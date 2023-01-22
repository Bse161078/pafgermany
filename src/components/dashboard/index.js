import React, {useEffect, useState} from "react";
import {useLocation, useOutletContext, Outlet, useNavigate} from 'react-router-dom';
import {getFireStoreDb, initializeFirebase} from "src/config/firebase";
import {doc, getDoc} from "firebase/firestore";
import Loader from "src/components/common/Loader";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";


const Dashboard = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userData, setUserData] = useState(null);
    const location = useLocation().pathname;

    const getUserData = async (id) => {
        const userRef = doc(getFireStoreDb(), "users", id);

        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            return null;
        } else {
            return userDoc.data();
        }
    }

    useEffect(() => {
        if(location!=='/dashboard/profile' && location!=='/dashboard/translate' && location!=='/dashboard/recognition'){
            initializeFirebase();
            setLoading(true);
            const auth = getAuth();
            onAuthStateChanged(auth, async (user) => {
                if (user && user.uid) {

                    const userData = await getUserData(user.uid);
                    setUserData(userData);
                    setUserId(user.uid);
                    setLoading(false);
                    navigate('profile')
                } else {
                    setLoading(false)
                    navigate('/');
                }
            });
        }
    }, [location])


    return (
        <>
            {loading && <Loader/>}
            <Outlet context={{userId, userData}}/>
        </>
    )
}

export default Dashboard;