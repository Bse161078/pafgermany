import React, {useEffect, useState} from "react";
import {CustomLabelHeaderLarge} from "src/components/common/label";
import Grid from "@mui/material/Grid/Grid";
import AirportIcon from 'src/assets/images/airport.png';
import PafIcon from 'src/assets/images/paf.png';
import DownArrowIcon from 'src/assets/images/down-arrow.png';

import {CustomLabelHeader} from "src/components/common/label";
import MenuItem from "../common/menu-item";
import {CustomButtonLarge} from "../common/button";
import Divider from "@mui/material/Divider/Divider";
import {CustomLabelHeaderExtraLarge, CustomLabelLabelMedium} from "../common/label";
import LineIcon from 'src/assets/images/line.png';
import DotIcon from 'src/assets/images/dot.png';
import Paper from "@mui/material/Paper/Paper";
import ReceiptEditIcon from 'src/assets/images/receipt-edit.png';
import TickIcon from 'src/assets/images/tick-icon.png';
import ProcessStep2 from 'src/assets/images/process-step2.png';
import ProcessStep3 from 'src/assets/images/process-step3.png';
import About from 'src/assets/images/about.png';
import DividerYellow from 'src/assets/images/divider-yellow.png';
import Circle from 'src/assets/images/circle.png';
import Book from 'src/assets/images/book.png';
import Briefcase from 'src/assets/images/briefcase.png';
import Step3 from 'src/assets/images/step3.png';
import Stepper from "@mui/material/Stepper/Stepper";
import Step from "@mui/material/Step/Step";
import StepLabel from "@mui/material/StepLabel/StepLabel";
import StepContent from "@mui/material/StepContent/StepContent";
import StepButton from "@mui/material/StepButton/StepButton";
import StepIcon from "@mui/material/StepIcon";
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import {styled} from '@mui/material/styles';
import CircleWithImage from "src/components/common/stepper-icon";
import MapIcon from 'src/assets/images/map.png';
import ArchitectIcon from 'src/assets/images/architect.png';
import StudentIcon from 'src/assets/images/student.png';
import ItIcon from 'src/assets/images/it-specialist.png';
import NursingIcon from 'src/assets/images/nursing.png';
import ReadMoreIcon from 'src/assets/images/read-more.png';
import ConsultantIcon1 from 'src/assets/images/consultant-image1.png';
import ConsultantIcon2 from 'src/assets/images/consultant-image2.png';
import PafLogo2 from 'src/assets/images/paf-logo-2.png';
import TelegramIcon from 'src/assets/images/telegram.png';
import TwitterIcon from 'src/assets/images/twitter.png';
import VimeoIcon from 'src/assets/images/vimeo.png';
import WhatsAppIcon from 'src/assets/images/whatsapp.png';
import FacebookIcon from 'src/assets/images/facebook.png';
import YellowLineIcon from 'src/assets/images/yellow-line.png';
import ForwardArrowIcon from 'src/assets/images/forward-arrow.png';
import LocationIcon from 'src/assets/images/location.png';
import SmsIcon from 'src/assets/images/sms.png';
import ProfessionalsIcon from 'src/assets/images/professionals.png';
import RecongnitionIcon from 'src/assets/images/receongnition.png';
import BusinessIcon from 'src/assets/images/business.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Box from "@mui/material/Box/Box";
import MenuIcon from '@mui/icons-material/Menu';
import LearnGermanyIcon from 'src/assets/images/learn-german.webp';
import DiscoveringIcon from 'src/assets/images/discovering.webp';
import WorkContainer from "../common/work-container";
import LivingContainer from "../common/living-container";
import { useNavigate,useOutletContext} from "react-router-dom"
import {useSelector} from "react-redux";


const ColorlibConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 100,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 1,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));


const initialHover = {home: false, work: false, living: false, cost: false};


let freeAssessmentTitle,receiveResultTitle,bookAppointmentTitle,processVisaApplication,immigrationExpertsTitle,speakToImmigrantTitle,
    makeStepTitle,whoPafTitle,wouldLikeWorkTitle,wouldLikeWorkDesc1,wouldLikeWorkDesc2,ourServicesTitle,ourServicesDesc1,educationImmigrationTitle,
    educationImmigrationDesc,businessImmigrationTitle,businessImmigrationDesc,skilledImmigrationTitle,skilledImmigrationDesc1,
    skilledImmigrationDesc2,inspectingSortingTitle,inspectingSortingDesc1,translationDocTitle,translationDocDesc1,translationDocDesc2,deficitTitle,
    deficitDesc1,deficitDesc2,acquisitionLivingTitle,acquisitionLivingDesc1,openingBackTitle,openingBackDesc1,step1Title,step2Title,step3Title,
    step4Title,step5Title,step6Title,step7Title,chooseImmigrationTitle,immigrationChooseTitle,yourProfessionTile,engineeringDesc1,readMoreTitle,
    scientistsTitle,scientistsDesc1,scientistsDesc2,nursingDesc1,pafConsultantTitle,pafConsultantDesc1,getConsultantTitle,immigrationServicesTitle,
    submitDocTitle,submitDocDesc1,searchForJobTitle,searchForJobDesc,itSpecialistTitle,nursingTitle,engineeringTitle;


const Home = () => {


    const {onClick,userId} = useOutletContext();

    let navigate = useNavigate();


    const {selectedLanguage} = useSelector((state) => state.languageReducer);
    const [loading, setLoading] = useState(false);
    const [count,setCount]=useState(0);


    const [hover, setHover] = useState(initialHover);


    const loadConstant = async () => {
        setLoading(true);
        ({
            freeAssessmentTitle,receiveResultTitle,bookAppointmentTitle,processVisaApplication,immigrationExpertsTitle,speakToImmigrantTitle,
            makeStepTitle,whoPafTitle,wouldLikeWorkTitle,wouldLikeWorkDesc1,wouldLikeWorkDesc2,ourServicesTitle,ourServicesDesc1,educationImmigrationTitle,
            educationImmigrationDesc,businessImmigrationTitle,businessImmigrationDesc,skilledImmigrationTitle,skilledImmigrationDesc1,
            skilledImmigrationDesc2,inspectingSortingTitle,inspectingSortingDesc1,translationDocTitle,translationDocDesc1,translationDocDesc2,deficitTitle,
            deficitDesc1,deficitDesc2,acquisitionLivingTitle,acquisitionLivingDesc1,openingBackTitle,openingBackDesc1,step1Title,step2Title,step3Title,
            step4Title,step5Title,step6Title,step7Title,chooseImmigrationTitle,immigrationChooseTitle,yourProfessionTile,engineeringDesc1,readMoreTitle,
            scientistsTitle,scientistsDesc1,scientistsDesc2,nursingDesc1,pafConsultantTitle,pafConsultantDesc1,getConsultantTitle,engineeringTitle,
            immigrationServicesTitle,submitDocTitle,submitDocDesc1,searchForJobTitle,searchForJobDesc,itSpecialistTitle,nursingTitle
        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setLoading(false);
        setCount(count+1)
    }

    useEffect(()=>{
        loadConstant();
    },[selectedLanguage])

    useEffect(() => {
        setHover({...initialHover, home: true})
    }, [])

    const onEnter = (type) => {
        setHover({...initialHover, [type]: true})
    }


    const onLeave = (type) => {
        setHover({...initialHover, [type]: false})
    }

    const onChangeLink=(page)=>{
        navigate(`/${page}`);
    }


    const handleBookAppointment=(e)=>{
        if(userId){
            onChangeLink('dashboard/recognition')
        }else{
            onChangeLink('login')
        }
    }


    const openLink = (url) => {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.target="_blank"
        a.click();
        document.body.removeChild(a);

    }


    return (
        <>
            <Grid container style={{position: "relative", top: -80,zIndex:11}}
                  justifyContent={"center"}>
                <Grid item xs={9} container justifyContent={!userId?"space-between":"flex-start"}>
                    {!userId &&
                        <Grid item xs={12} md={3.5} container style={{cursor: "pointer"}}
                              onClick={(e) => onClick('register')}>
                            <Paper style={{width: "100%", borderRadius: "10px", position: "relative"}}>
                                <Grid item container justifyContent={"flex-end"}>
                                    <Grid item style={{
                                        padding: "10px",
                                        background: "black",
                                        borderRadius: "0% 10px 0% 100%",
                                        position: "relative"
                                    }}>
                                        <img src={TickIcon} style={{
                                            width: "20px",
                                            height: "20px",
                                            position: "relative",
                                            top: -3,
                                            left: 5
                                        }}/>
                                    </Grid>
                                </Grid>
                                <Grid container style={{padding: "0px 15px 20px 15px"}}>
                                    <Grid container alignItems={"center"}>
                                        <Grid item>
                                            <img src={ReceiptEditIcon}/>
                                        </Grid>
                                        <Grid item sx={{marginLeft: {xs: "0px", md: "20px"}}}>
                                            <CustomLabelHeader text={freeAssessmentTitle} color={"black"}
                                                               fontWeight={"bold"}/>
                                        </Grid>
                                        <Divider style={{
                                            width: "100%",
                                            height: "2px",
                                            marginTop: "10px",
                                            background: "#00000033"
                                        }}/>
                                        <Grid item style={{marginTop: "20px"}}>
                                            <CustomLabelLabelMedium
                                                text={receiveResultTitle}
                                                opacity={"0.5"}
                                                color={"black"} fontWeight={"bold"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={5} container
                                      style={{
                                          position: "absolute",
                                          bottom: 0,
                                          height: "40%",
                                          borderRadius: "0% 100% 0% 0%",
                                          background: "rgba(0, 0, 0, 0.04)",
                                      }}>
                                </Grid>
                            </Paper>
                        </Grid>
                    }
                    <Grid item xs={12} md={3.5} container sx={{marginTop: {xs: "20px", md: "0px"}}} style={{cursor: "pointer"}}
                    onClick={handleBookAppointment}>
                        <Paper style={{width: "100%", borderRadius: "10px", position: "relative"}}>
                            <Grid item container justifyContent={"flex-end"}>
                                <Grid item style={{
                                    padding: "10px",
                                    background: "black",
                                    borderRadius: "0% 10px 0% 100%",
                                    position: "relative"
                                }}>
                                    <Grid style={{position: "relative", top: -3, left: 5}}>
                                        <CustomLabelLabelMedium text={userId ? "01":"02"} color={"white"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container style={{padding: "5px 15px 20px 15px"}}>
                                <Grid container alignItems={"center"}>
                                    <Grid item>
                                        <img src={ProcessStep2}/>
                                    </Grid>
                                    <Grid item sx={{marginLeft: {xs: "0px", md: "20px"}}}>
                                        <CustomLabelHeader text={bookAppointmentTitle} color={"black"}
                                                           fontWeight={"bold"}/>
                                    </Grid>
                                    <Divider style={{
                                        width: "100%",
                                        height: "2px",
                                        marginTop: "10px",
                                        background: "#00000033"
                                    }}/>
                                    <Grid item style={{marginTop: "20px"}}>
                                        <CustomLabelLabelMedium
                                            text={processVisaApplication}
                                            opacity={"0.5"}
                                            color={"black"} fontWeight={"bold"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} container
                                  style={{
                                      position: "absolute",
                                      bottom: 0,
                                      height: "40%",
                                      borderRadius: "0% 100% 0% 0%",
                                      background: "rgba(0, 0, 0, 0.04)",
                                  }}>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3.5} container sx={{marginTop: {xs: "20px", md: "0px"},marginLeft:{xs:"0px",md:userId && "20px"},
                    cursor:"pointer"}} onClick={(e)=>openLink("whatsapp://send?abid=phonenumber&text=Hello%2C%20World!")}>
                        <Paper style={{width: "100%", borderRadius: "10px", position: "relative"}}>
                            <Grid item container justifyContent={"flex-end"}>
                                <Grid item style={{
                                    padding: "10px",
                                    background: "black",
                                    borderRadius: "0% 10px 0% 100%",
                                    position: "relative"
                                }}>
                                    <Grid style={{position: "relative", top: -3, left: 5}}>
                                        <CustomLabelLabelMedium text={userId ? "02":"03"} color={"white"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container style={{padding: "5px 15px 20px 15px"}}>
                                <Grid container alignItems={"center"}>
                                    <Grid item>
                                        <img src={ProcessStep3}/>
                                    </Grid>
                                    <Grid item sx={{marginLeft: {xs: "0px", md: "20px"}}}>
                                        <CustomLabelHeader text={immigrationExpertsTitle} color={"black"}
                                                           fontWeight={"bold"}/>
                                    </Grid>
                                    <Divider style={{
                                        width: "100%",
                                        height: "2px",
                                        marginTop: "10px",
                                        background: "#00000033"
                                    }}/>
                                    <Grid item style={{marginTop: "20px"}}>
                                        <CustomLabelLabelMedium
                                            text={speakToImmigrantTitle}
                                            color={"black"} fontWeight={"bold"} opacity={"0.5"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} container
                                  style={{
                                      position: "absolute",
                                      bottom: 0,
                                      height: "40%",
                                      borderRadius: "0% 100% 0% 0%",
                                      background: "rgba(0, 0, 0, 0.04)",
                                  }}>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container style={{marginTop: "20px",cursor:"pointer"}}
                  onClick={(e)=>openLink("https://www.youtube.com/embed/fLtb6EQTmhM")} justifyContent={"center"}>
                <Grid item xs={9} container justifyContent={"space-between"} alignItems={"flex-start"}>
                    <Grid item container alignItems={"flex-start"} justifyContent={"center"} xs={12} md={6}
                          sx={{position: "relative", left: {xs: 0, md: -55}}}>
                        <Grid xs={10} md={12}>
                            <img src={About} style={{width: "100%"}}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} container direction={"column"}
                          alignItems={{xs: "center", md: "flex-start"}} style={{marginTop: "30px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={whoPafTitle}
                                color={"#FFCC00"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelHeaderExtraLarge
                                text={wouldLikeWorkTitle}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <img src={DividerYellow}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={wouldLikeWorkDesc1}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={wouldLikeWorkDesc2}
                                color={"black"} fontWeight={"bold"} opacity={0.6} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container style={{marginTop: "20px"}}
                              justifyContent={{xs: "center", md: "flex-start"}}>
                            {!userId &&
                                <Grid item onClick={(e) => onClick("register")}>
                                    <CustomButtonLarge text={"Sign Up"} background={"red"} border={"2px solid red"}/>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} container style={{marginTop: "60px",}} justifyContent={"center"}>
                <Grid item xs={9} container direction={"column"} alignItems={"center"}>
                    <Grid item>
                        <CustomLabelLabelMedium
                            text={ourServicesTitle}
                            color={"#FFCC00"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <CustomLabelHeaderExtraLarge
                            text={immigrationServicesTitle}
                            color={"black"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <img src={DividerYellow}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <CustomLabelLabelMedium
                            text={ourServicesDesc1}
                            color={"black"} fontWeight={"bold"} opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} container style={{marginTop: "60px"}} justifyContent={"center"}>
                <Grid item xs={9} container justifyContent={"space-between"}>
                    <Grid item xs={12} sm={3.5} container direction={"column"} alignItems={"center"}>
                        <Grid item style={{width: "70px", height: "70px", position: "relative"}} container
                              alignItems={"center"}>
                            <img src={Circle} style={{width: "100%", zIndex: 0}}/>
                            <img src={Book} style={{position: "absolute", top: 25, left: -25, zIndex: 1}}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelHeaderLarge
                                text={educationImmigrationTitle}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={educationImmigrationDesc}
                                color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                                opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3.5} container direction={"column"} alignItems={"center"}
                          sx={{marginTop: {xs: "10px", md: "0px"}}}>
                        <Grid item style={{width: "70px", height: "70px", position: "relative"}} container
                              alignItems={"center"}>
                            <img src={Circle} style={{width: "100%", zIndex: 0}}/>
                            <img src={Briefcase} style={{position: "absolute", top: 25, left: -25, zIndex: 1}}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelHeaderLarge
                                text={businessImmigrationTitle}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={businessImmigrationDesc}
                                color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                                opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3.5} container direction={"column"} alignItems={"center"}
                          sx={{marginTop: {xs: "10px", md: "0px"}}}>
                        <Grid item style={{width: "70px", height: "70px", position: "relative"}} container
                              alignItems={"center"}>
                            <img src={Circle} style={{width: "100%", zIndex: 0}}/>
                            <img src={Step3} style={{position: "absolute", top: 25, left: -25, zIndex: 1}}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelHeaderLarge
                                text={skilledImmigrationTitle}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={skilledImmigrationDesc1}
                                color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                                opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} container style={{marginTop: "60px"}} justifyContent={"center"}>
                <Grid item xs={9} container justifyContent={"center"} direction={"column"} alignItems={"center"}>
                    <Grid item style={{marginTop: "20px"}}>
                        <CustomLabelHeaderLarge
                            text={skilledImmigrationDesc2}
                            color={"black"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <img src={DividerYellow}/>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} container style={{marginTop: "60px"}} justifyContent={"center"}>
                <Grid item xs={9} container justifyContent={"center"} style={{position: "relative"}}
                      direction={"column"} alignItems={"center"}>
                    <Stepper activeStep={1} orientation="vertical" sx={{
                        '.MuiStepConnector-vertical': {
                            marginLeft: {xs: "8px", sm: "20px", md: "35px"},
                        },
                        '.MuiStepConnector-line': {
                            height: {xs: "300px", md: "260px"},
                            borderLeftWidth: {xs: "4px", sm: "6px", md: "8px"},
                            borderLeftStyle: "dotted",
                            borderColor: "#FF0000"
                        },
                    }}>
                        <Step active={true}>
                            <StepLabel StepIconProps={{color: "#FF0000"}} StepIconComponent={CircleWithImage}>
                                <Grid container style={{position: "absolute", left: 0}}>
                                    <Grid item xs={5}>
                                        <Paper style={{
                                            width: "100%",
                                            padding: "40px 20px 20px 20px",
                                            borderRadius: "20px",
                                            marginTop: -10,
                                            maxHeight: "320px",
                                            overflow: "auto"
                                        }}>
                                            <Grid item>
                                                <CustomLabelHeaderLarge
                                                    text={inspectingSortingTitle}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={inspectingSortingDesc1}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={step1Title}
                                            color={"#FF0000"} fontWeight={"bold"}/>
                                    </Grid>
                                </Grid>
                            </StepLabel>
                        </Step>
                        <Step active={true}>
                            <StepLabel StepIconProps={{color: "#FF0000"}}
                                       StepIconComponent={CircleWithImage}>
                                <Grid container style={{position: "absolute", left: 0}}>
                                    <Grid item xs={5} style={{marginTop: -10}} container justifyContent={"flex-end"}>
                                        <CustomLabelHeaderLarge
                                            text={step2Title}
                                            color={"#FF0000"} fontWeight={"bold"}/>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5}>
                                        <Paper style={{
                                            width: "100%",
                                            padding: "40px 20px 20px 20px",
                                            borderRadius: "20px",
                                            marginTop: -10,
                                            maxHeight: "320px",
                                            overflow: "auto"
                                        }}>
                                            <Grid item>
                                                <CustomLabelHeaderLarge
                                                    text={translationDocTitle}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={translationDocDesc1}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </StepLabel>
                        </Step>
                        <Step active={true}>
                            <StepLabel StepIconProps={{color: "#FF0000"}}
                                       StepIconComponent={CircleWithImage}>
                                <Grid container style={{position: "absolute", left: 0}}>
                                    <Grid item xs={5}>
                                        <Paper style={{
                                            width: "100%",
                                            padding: "40px 20px 20px 20px",
                                            borderRadius: "20px",
                                            marginTop: -10,
                                            maxHeight: "320px",
                                            overflow: "auto"
                                        }}>
                                            <Grid item>
                                                <CustomLabelHeaderLarge
                                                    text={submitDocTitle}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={submitDocDesc1}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={step3Title}
                                            color={"#FF0000"} fontWeight={"bold"}/>
                                    </Grid>
                                </Grid>
                            </StepLabel>
                        </Step>
                        <Step active={true}>
                            <StepLabel StepIconProps={{color: "#EEEEEEA6"}}
                                       StepIconComponent={CircleWithImage}>
                                <Grid container style={{position: "absolute", left: 0, maxHeight: "160px"}}>
                                    <Grid item xs={5} style={{marginTop: -10}} container justifyContent={"flex-end"}>
                                        <CustomLabelHeaderLarge
                                            text={step4Title}
                                            color={"#FF0000"} fontWeight={"bold"}/>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5}>
                                        <Paper style={{
                                            width: "100%",
                                            padding: "40px 20px 20px 20px",
                                            borderRadius: "20px",
                                            marginTop: -10,
                                            maxHeight: "320px",
                                            overflow: "auto"
                                        }}>
                                            <Grid item>
                                                <CustomLabelHeaderLarge
                                                    text={deficitTitle}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={deficitDesc1}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </StepLabel>
                        </Step>
                        <Step active={true}>
                            <StepLabel StepIconProps={{color: "#EEEEEEA6"}}
                                       StepIconComponent={CircleWithImage}>
                                <Grid container style={{position: "absolute", left: 0}}>
                                    <Grid item xs={5}>
                                        <Paper style={{
                                            width: "100%",
                                            padding: "40px 20px 20px 20px",
                                            borderRadius: "20px",
                                            marginTop: -10,
                                            maxHeight: "320px",
                                            overflow: "auto"
                                        }}>
                                            <Grid item>
                                                <CustomLabelHeaderLarge
                                                    text={searchForJobTitle}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={searchForJobDesc}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={step5Title}
                                            color={"#FF0000"} fontWeight={"bold"}/>
                                    </Grid>
                                </Grid>
                            </StepLabel>
                        </Step>
                        <Step active={true}>
                            <StepLabel StepIconProps={{color: "#EEEEEEA6"}}
                                       StepIconComponent={CircleWithImage}>
                                <Grid container style={{position: "absolute", left: 0, maxHeight: "160px"}}>
                                    <Grid item xs={5} style={{marginTop: -10}} container justifyContent={"flex-end"}>
                                        <CustomLabelHeaderLarge
                                            text={step6Title}
                                            color={"#FF0000"} fontWeight={"bold"}/>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5}>
                                        <Paper style={{
                                            width: "100%",
                                            padding: "40px 20px 20px 20px",
                                            borderRadius: "20px",
                                            marginTop: -10,
                                            maxHeight: "320px",
                                            overflow: "auto"
                                        }}>
                                            <Grid item>
                                                <CustomLabelHeaderLarge
                                                    text={acquisitionLivingTitle}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={acquisitionLivingDesc1}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </StepLabel>
                        </Step>
                        <Step active={true}>
                            <StepLabel StepIconProps={{color: "#EEEEEEA6"}}
                                       StepIconComponent={CircleWithImage}>
                                <Grid container style={{position: "absolute", left: 0}}>
                                    <Grid item xs={5}>
                                        <Paper style={{
                                            width: "100%",
                                            padding: "40px 20px 20px 20px",
                                            borderRadius: "20px",
                                            marginTop: -10,
                                            maxHeight: "320px",
                                            overflow: "auto"
                                        }}>
                                            <Grid item>
                                                <CustomLabelHeaderLarge
                                                    text={openingBackTitle}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={openingBackDesc1}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={step7Title}
                                            color={"#FF0000"} fontWeight={"bold"}/>
                                    </Grid>
                                </Grid>
                            </StepLabel>
                        </Step>

                    </Stepper>
                </Grid>
            </Grid>


            <Grid item xs={12} container direction={"column"} alignItems={"center"}
                  style={{
                      padding: "20px",
                      marginTop: "20rem",
                      position: "relative",
                      backgroundImage: `url(${MapIcon})`
                  }}>
                <Grid item>
                    <CustomLabelLabelMedium
                        text={chooseImmigrationTitle}
                        color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                </Grid>
                <Grid item style={{marginTop: "20px"}}>
                    <CustomLabelHeaderLarge
                        text={immigrationChooseTitle}
                        color={"black"} fontWeight={"bold"}>
                        <span style={{color: "#FFCC00"}}>{yourProfessionTile}</span>
                    </CustomLabelHeaderLarge>
                </Grid>
                <Grid container justifyContent={"space-around"} style={{marginTop: "30px", width: "100%"}}>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}
                    style={{cursor:"pointer"}} onClick={(e)=>onChangeLink('engineering')}>
                        <Grid item>
                            <Box component={"img"} src={ArchitectIcon} sx={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={engineeringTitle}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={engineeringDesc1}
                                color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                                opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container alignItems={"center"} justifyContent={"center"}
                              spacing={1}>
                            <Grid item>
                                <img src={ReadMoreIcon}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={readMoreTitle}
                                    color={"#FF0000"} fontWeight={"bold"}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}
                        style={{cursor:"pointer"}}  onClick={(e)=>onChangeLink('scientists')}>
                        <Grid item>
                            <img src={StudentIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={scientistsTitle}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={scientistsDesc1}
                                color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                                opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container alignItems={"center"} justifyContent={"center"}
                              spacing={1}>
                            <Grid item>
                                <img src={ReadMoreIcon}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={readMoreTitle}
                                    color={"#FF0000"} fontWeight={"bold"}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}
                          style={{cursor:"pointer"}}  onClick={(e)=>onChangeLink('it-specialist')}>
                        <Grid item>
                            <img src={ItIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={itSpecialistTitle}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={scientistsDesc2}
                                color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                                opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container alignItems={"center"} justifyContent={"center"}
                              spacing={1}>
                            <Grid item>
                                <img src={ReadMoreIcon}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={readMoreTitle}
                                    color={"#FF0000"} fontWeight={"bold"}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}
                          style={{cursor:"pointer"}}  onClick={(e)=>onChangeLink('nursing')}>
                        <Grid item>
                            <img src={NursingIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={nursingTitle}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={nursingDesc1}
                                color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                                opacity={0.6} lineHeight={1.7} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container alignItems={"center"} justifyContent={"center"}
                              spacing={1}>
                            <Grid item>
                                <img src={ReadMoreIcon}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={readMoreTitle}
                                    color={"#FF0000"} fontWeight={"bold"}/>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} container style={{marginTop: "60px"}} justifyContent={"center"}>
                <Grid item xs={10} lg={9} container justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item xs={12} md={5.5} container direction={"column"}
                          alignItems={{xs: "center", md: "space-between"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={pafConsultantTitle}
                                color={"#FFCC00"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Consultations for prospective immigrants "}
                                color={"black"} fontWeight={"bold"}>
                            </CustomLabelHeaderLarge>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <img src={DividerYellow}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={pafConsultantDesc1}
                                color={"black"} fontWeight={"normal"}
                                opacity={0.6} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item container style={{marginTop: "20px"}}
                              justifyContent={{xs: "center", md: "space-between"}}>
                            <Grid item onClick={(e)=>openLink("whatsapp://send?abid=phonenumber&text=Hello%2C%20World!")}>
                                <CustomButtonLarge text={getConsultantTitle} background={"red"}
                                                   border={"2px solid red"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={4} justifyContent={"center"}
                          sx={{marginTop: {xs: "20px", md: "0px"}}}>
                        <Grid item xs={8} md={12} justifyContent={"center"} style={{position: "relative"}}>
                            <Grid item xs={12}>
                                <img src={ConsultantIcon1} style={{width: "100%"}}/>
                            </Grid>
                            <Grid item style={{position: "absolute", bottom: -60, left: -80}}>
                                <img src={ConsultantIcon2} style={{width: "165px", height: "120px"}}/>
                            </Grid>
                            <Grid item sx={{position: "absolute", top: 20, right: -20}}>
                                <Grid item container style={{padding: "20px", background: "red", borderRadius: "50%"}}
                                      alignItems={"center"} justifyContent={"center"}>
                                    <img style={{width: "35px", height: "35px"}} src={TickIcon}/>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </>


    )
}

export default Home;