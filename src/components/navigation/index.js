import {useLocation, useNavigate, Outlet} from "react-router-dom"
import {useEffect, useRef, useState} from "react";
import React from "react";
import Grid from "@mui/material/Grid/Grid";
import AirportIcon from "../../assets/images/airport.png";
import Box from "@mui/material/Box/Box";
import PafIcon from "../../assets/images/paf.png";
import MenuItem from "../common/menu-item";
import WorkContainer from "../common/work-container";
import LivingContainer from "../common/living-container";
import MenuIcon from '@mui/icons-material/Menu';
import {CustomButtonLarge} from "../common/button";
import Divider from "@mui/material/Divider/Divider";
import BackgroundContainerHome from "../common/background-container-home";
import Footer from "../common/footer";
import NursingHeaderIcon from "../../assets/images/nursing-header.png";
import BackgroundContainerOther from "../common/background-container-other";
import PageHeaderContainerHome from "../common/page-header-container-home";
import PageHeaderContainerOther from "../common/page-header-container-other";
import Paper from "@mui/material/Paper/Paper";
import {
    CustomLabelHeaderExtraLargeNav,
    CustomLabelHeaderLarge,
    CustomLabelHeaderLarge1,
    CustomLabelHeaderLargeNav
} from "../common/label";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import NavBarDetail from "../nav-bar-detail";
import {getFireStoreDb, initializeFirebase} from "../../config/firebase";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
import Loader from "../common/Loader";
import ResponsiveConfirmationDialog from "../common/ResponsiveConfirmation";
import Button from "@mui/material/Button/Button";
import { doc, setDoc,getDoc } from "firebase/firestore";

const initialHover = {home: false, work: false, living: false, cost: false};


const initialConfirmation = {
    show: false,
    title: "",
    text: "",
    data: null,
    isUpdate: false,
    buttonYes: null,
    buttonNo: null
}


const Navigation = () => {
    const location = useLocation().pathname;
    let navigate = useNavigate();
    const [hover, setHover] = useState(initialHover);
    const [showMenu, setShowMenu] = useState(false);
    const textareaRef = useRef();
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(initialConfirmation);
    const [count,setCount]=useState(0);


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
        setHover({...initialHover, home: true})
        initializeFirebase();
        setLoading(true);

        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {


            if (user && user.uid) {
                const userData = await getUserData(user.uid);
                if (userData && userData.progress===3) {
                    setUserId(user.uid);
                }
            }

            setLoading(false);

        });

    }, [])

    const onEnter = (type) => {
        setHover({...initialHover, [type]: true})
    }


    const onLeave = (type) => {
        setHover({...initialHover, [type]: false})
    }

    useEffect(()=>{
        if(userId){
            navigate('/dashboard');
        }


    },[userId])

    useEffect(() => {
        navigate('/');
    }, []);


    const onChangeLink = (page) => {
        setShowMenu(false);
        navigate(`${page}`);
        window.scrollTo(0, 0)

    }

    const closeMenu = () => {
        setShowMenu(false);
    }


    const logoutUser=(e)=>{
        setLoading(true);
        const auth = getAuth();
        signOut(auth).then(() => {
            setUserId(null);
            setCount(0);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            setConfirmation({
                show: true, title: "Error",
                text: error.toString()
                , data: {}, isUpdate: false,
                buttonYes:
                    <Button autoFocus onClick={(e) => {
                        setConfirmation(initialConfirmation)
                    }}>{"ok"}</Button>,
            })
        });

    }


    let pageHeader;
    if (location !== "/") {
        if (location === "/nursing") {
            pageHeader = {title: "Nursing Professionals", icon: NursingHeaderIcon}
        } else if (location === "/it-specialist") {
            pageHeader = {title: "IT & SPECIALIST", icon: NursingHeaderIcon}
        } else if (location === "/engineering") {
            pageHeader = {title: "Engineering", icon: NursingHeaderIcon}
        } else if (location === "/physicians") {
            pageHeader = {title: "Physicians", icon: NursingHeaderIcon}
        } else if (location === "/scientists") {
            pageHeader = {title: "Scientists", icon: NursingHeaderIcon}
        } else if (location === "/recognition") {
            pageHeader = {title: "Recognition Procedure", icon: NursingHeaderIcon}
        } else if (location === "/why-recognition") {
            pageHeader = {title: "Why you need recognition?", icon: NursingHeaderIcon}
        } else if (location === "/academic-qualifications") {
            pageHeader = {title: "Academic qualifications?", icon: NursingHeaderIcon}
        } else if (location === "/work-contract") {
            pageHeader = {title: "Work-Contract?", icon: NursingHeaderIcon}
        } else if (location === "/salary-tax") {
            pageHeader = {title: "Salary, tax & social charges", icon: NursingHeaderIcon}
        } else if (location === "/learn-german") {
            pageHeader = {title: "language lessons", icon: NursingHeaderIcon}
        } else if (location === "/integration-courses") {
            pageHeader = {title: "Integrations Courses", icon: NursingHeaderIcon}
        } else if (location === "/economy") {
            pageHeader = {title: "Economy", icon: NursingHeaderIcon}
        } else if (location === "/immigration") {
            pageHeader = {title: "Immigration", icon: NursingHeaderIcon}
        } else if (location === "/living-expenses") {
            pageHeader = {title: "Living-Expenses-Salary", icon: NursingHeaderIcon}
        } else if (location === "/cost") {
            pageHeader = {title: "Cost & Fees", icon: NursingHeaderIcon}
        } else if (location === "/contact-us") {
            pageHeader = {title: "Contact Us", icon: NursingHeaderIcon}
        } else if (location === "/faq") {
            pageHeader = {title: "Frequently Asked Questions", icon: NursingHeaderIcon}
        } else if (location === "/privacy-policy") {
            pageHeader = {title: "Privacy Policy", icon: NursingHeaderIcon}
        } else if (location === "/cancellation-policy") {
            pageHeader = {title: "Cancellation Policy", icon: NursingHeaderIcon}
        } else if (location === "/terms-condition") {
            pageHeader = {title: "Terms and Conditions", icon: NursingHeaderIcon}
        } else if (location === "/dashboard" || location === '/dashboard/profile' || location === '/dashboard/translate'
            || location === '/dashboard/recognition') {
            pageHeader = {title: "My Account", icon: NursingHeaderIcon}
        }
    }


    return (
        <div style={{width: "100vw", height: "100vh"}}>
            {loading && <Loader/>}
            {
                confirmation.show &&
                <ResponsiveConfirmationDialog
                    title={confirmation.title} text={confirmation.text}
                    buttons={confirmation.buttonYes}
                    otherButton={confirmation.buttonNo}
                />
            }
            {showMenu &&
            <NavBarDetail closeMenu={closeMenu} onClick={onChangeLink}/>
            }
            <Grid container style={{paddingBottom: "50px"}}>
                {
                    location == "/" && <BackgroundContainerHome icon={AirportIcon}/>
                }
                {
                    location !== "/" && <BackgroundContainerOther icon={pageHeader.icon}/>
                }
                <Grid container style={{zIndex: 1, marginTop: "20px", height: location === "/" && "calc(100vh - 20px)"}}
                      justifyContent={"center"}>
                    <Grid container item xs={11} justifyContent={"space-between"}>
                        <Grid item>
                            <Box component={"img"} src={PafIcon}/>
                        </Grid>
                        <Grid item sx={{position: "relative", display: {xs: "none", sm: "block"}}}>
                            <Grid container spacing={{xs: 1, md: 2}}>
                                <MenuItem selected={hover.home} showDropDownIcon={false} title={"Home"}
                                          type={"home"} onEnter={onEnter} onLeave={onLeave} onClick={onChangeLink}
                                          page={"/"}/>
                                <MenuItem selected={hover.work} showDropDownIcon={true} title={"Working in Germany"}
                                          type={"work"} onEnter={onEnter} onLeave={null}/>
                                <MenuItem selected={hover.living} showDropDownIcon={true} title={"Living in Germany"}
                                          type={"living"} onEnter={onEnter} onLeave={null}/>
                                <MenuItem selected={hover.cost} showDropDownIcon={false} title={"Cost & Fees"}
                                          type={"cost"} onEnter={onEnter} onLeave={onLeave} onClick={onChangeLink}
                                          page={"/cost"}/>
                            </Grid>


                            <WorkContainer hover={hover} onLeave={onLeave} onClick={onChangeLink}/>

                            <LivingContainer hover={hover} onLeave={onLeave} onClick={onChangeLink}/>


                        </Grid>
                        <Grid item sx={{display: {xs: "block", sm: "none"}}}>
                            <Grid container justifyContent={"flex-end"} style={{cursor: "pointer"}}
                                  onClick={(e) => setShowMenu(true)}>
                                <MenuIcon style={{color: "white"}}/>
                            </Grid>
                        </Grid>
                        <Grid item sx={{display: {xs: "none", md: "block"}}}>
                            <Grid container alignItems={"center"}>
                                {!userId &&
                                <>
                                    <Grid item onClick={(e) => onChangeLink(`/login`)}>
                                        <CustomButtonLarge text={"Log in"} background={"transparent"}
                                                           border={"2px solid red"}
                                        />
                                    </Grid>
                                    <Grid item style={{marginLeft: "20px"}} onClick={(e) => onChangeLink(`/register`)}>
                                        <CustomButtonLarge text={"Sign Up"} background={"red"}
                                                           border={"2px solid red"}/>
                                    </Grid>
                                </>
                                }
                                {userId &&
                                <>
                                    <Grid item onClick={(e) => onChangeLink(`/dashboard`)}>
                                        <CustomButtonLarge text={"My Account"} background={"transparent"}
                                                           border={"2px solid red"}
                                        />
                                    </Grid>
                                    <Grid item style={{marginLeft: "20px"}} onClick={logoutUser}>
                                        <CustomButtonLarge text={"logout"} background={"red"}
                                                           border={"2px solid red"}/>
                                    </Grid>
                                </>
                                }
                                <Divider orientation="vertical" variant="middle" flexItem
                                         style={{width: "2px", background: "#FFFFFF", marginLeft: "20px"}}/>
                                <Grid item style={{marginLeft: "20px"}}>
                                    <MenuItem selected={false} showDropDownIcon={true} title={"English"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {
                        location === "/" && <PageHeaderContainerHome/>
                    }

                    {
                        location !== "/" && <PageHeaderContainerOther title={pageHeader.title}/>
                    }
                </Grid>


                <Outlet context={{onClick: onChangeLink}}/>

            </Grid>
            <Footer onClick={onChangeLink}/>
        </div>

    )
}

export default Navigation;