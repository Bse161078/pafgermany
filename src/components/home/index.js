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
import { useNavigate} from "react-router-dom"


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

const Home = () => {

    let navigate = useNavigate();


    const [hover, setHover] = useState(initialHover);

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


    return (
        <>
            <Grid container style={{position: "relative", top: -80}}
                  justifyContent={"center"}>
                <Grid item xs={9} container justifyContent={"space-between"}>
                    <Grid item xs={12} md={3.5} container>
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
                                        <CustomLabelHeader text={"Apply Online Visa"} color={"black"}
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
                                            text={"We are reliable immigration consultants to handle your immigration case."}
                                            color={"black"} fontWeight={"normal"}/>
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
                    <Grid item xs={12} md={3.5} container sx={{marginTop: {xs: "20px", md: "0px"}}}>
                        <Paper style={{width: "100%", borderRadius: "10px", position: "relative"}}>
                            <Grid item container justifyContent={"flex-end"}>
                                <Grid item style={{
                                    padding: "10px",
                                    background: "black",
                                    borderRadius: "0% 10px 0% 100%",
                                    position: "relative"
                                }}>
                                    <Grid style={{position: "relative", top: -3, left: 5}}>
                                        <CustomLabelLabelMedium text={"02"} color={"white"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container style={{padding: "5px 15px 20px 15px"}}>
                                <Grid container alignItems={"center"}>
                                    <Grid item>
                                        <img src={ProcessStep2}/>
                                    </Grid>
                                    <Grid item sx={{marginLeft: {xs: "0px", md: "20px"}}}>
                                        <CustomLabelHeader text={"Apply Online Visa"} color={"black"}
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
                                            text={"To process your visa application with our experienced registered agents."}
                                            color={"black"} fontWeight={"normal"}/>
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
                    <Grid item xs={12} md={3.5} container sx={{marginTop: {xs: "20px", md: "0px"}}}>
                        <Paper style={{width: "100%", borderRadius: "10px", position: "relative"}}>
                            <Grid item container justifyContent={"flex-end"}>
                                <Grid item style={{
                                    padding: "10px",
                                    background: "black",
                                    borderRadius: "0% 10px 0% 100%",
                                    position: "relative"
                                }}>
                                    <Grid style={{position: "relative", top: -3, left: 5}}>
                                        <CustomLabelLabelMedium text={"03"} color={"white"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container style={{padding: "5px 15px 20px 15px"}}>
                                <Grid container alignItems={"center"}>
                                    <Grid item>
                                        <img src={ProcessStep3}/>
                                    </Grid>
                                    <Grid item sx={{marginLeft: {xs: "0px", md: "20px"}}}>
                                        <CustomLabelHeader text={"Apply Online Visa"} color={"black"}
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
                                            text={"Our goal has been provide immigration in all over country and universities."}
                                            color={"black"} fontWeight={"normal"}/>
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
            <Grid item xs={12} container style={{marginTop: "20px"}} justifyContent={"center"}>
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
                                text={"Who Are PAF"}
                                color={"#FFCC00"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelHeaderExtraLarge
                                text={"Would You like to work in Germany? "}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <img src={DividerYellow}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"In this case, you need a visa, language skills, and the recognition of your education."}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"We’re here to help! Right here: PAF is your portal for all questions regarding the recognition process of your qualifications in Germany.\n" +
                                "We support you in all steps of the bureaucratic application process, in finding a reputable job and in your first steps in Germany."}
                                color={"black"} fontWeight={"bold"} opacity={0.6} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container style={{marginTop: "20px"}}
                              justifyContent={{xs: "center", md: "flex-start"}}>
                            <Grid item>
                                <CustomButtonLarge text={"Sign Up"} background={"red"} border={"2px solid red"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} container style={{marginTop: "60px",}} justifyContent={"center"}>
                <Grid item xs={9} container direction={"column"} alignItems={"center"}>
                    <Grid item>
                        <CustomLabelLabelMedium
                            text={"Our Services"}
                            color={"#FFCC00"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <CustomLabelHeaderExtraLarge
                            text={"Immigration Services"}
                            color={"black"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <img src={DividerYellow}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <CustomLabelLabelMedium
                            text={"PAF is a multilingual portal for foreign professionals who are given the opportunity and assistance to enter and work in Germany. We support you in the hurdle-laden recognition of your profession, in finding a reputable employer, and in your first steps in Germany. "}
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
                                text={"Education Immigration"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte"}
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
                                text={"Business Immigration"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte"}
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
                                text={"Skilled Immigration"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte"}
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
                            text={"We offer 360 degree consultation and support"}
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
                                                    text={"Inspection, sorting and processing "}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"of your documents, which are a necessary for the recognition procedure."}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={"Step1 "}
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
                                            text={"Step 2"}
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
                                                    text={"Translation of your documents "}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"into the German language by a certified translator. Translated documents are mandatory."}
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
                                                    text={"Submitting your documents"}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"in the relevant recognition authority. Due to the large number of chambers and organizations for the individual professions, there are different procedures, documents and contact points. By cooperating with the various institutions, PAF can submit the documents specifically and completely to the relevant organization."}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={"Step 3"}
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
                                            text={"Step 4"}
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
                                                    text={"Deficit notice"}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"If qualifications are missing or insufficient, we will arrange the respective qualification for you."}
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
                                                    text={"Search for the right job"}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"PAF supports you in finding the right employer with coaching for interviews and contract review of the employment contract."}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={"Step 5"}
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
                                            text={"Step 6"}
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
                                                    text={"Acquisition of living space"}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Our trained staff will assist you in finding suitable accommodation near your work location."}
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
                                                    text={"Opening bank accounts"}
                                                    color={"#FF0000"} fontWeight={"bold"}/>

                                            </Grid>
                                            <Grid item style={{marginTop: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"In Germany, you need to have a bank account for your salary payments, which are transferred to your current account by your employer. We also help you to open a bank account in Germany."}
                                                    color={"black"} fontWeight={"bold"} color={"black"}
                                                    fontWeight={"bold"}
                                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1.5} sm={2} md={2} lg={1.5}></Grid>
                                    <Grid item xs={5} style={{marginTop: -10}}>
                                        <CustomLabelHeaderLarge
                                            text={"Step 7"}
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
                        text={"Choose Immigration"}
                        color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                </Grid>
                <Grid item style={{marginTop: "20px"}}>
                    <CustomLabelHeaderLarge
                        text={"Immigration - Choose "}
                        color={"black"} fontWeight={"bold"}>
                        <span style={{color: "#FFCC00"}}>your profession!</span>
                    </CustomLabelHeaderLarge>
                </Grid>
                <Grid container justifyContent={"space-around"} style={{marginTop: "30px", width: "100%"}}>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}>
                        <Grid item>
                            <Box component={"img"} src={ArchitectIcon} sx={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Engineering"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Germany is famous for its engineering expertise and the quality of its mach..."}
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
                                    text={"Read more"}
                                    color={"#FF0000"} fontWeight={"bold"}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}>
                        <Grid item>
                            <img src={StudentIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Scientists"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte..."}
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
                                    text={"Read more"}
                                    color={"#FF0000"} fontWeight={"bold"}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}>
                        <Grid item>
                            <img src={ItIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"IT Specialist"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Nowadays, digital applications and intelligent technology define ou..."}
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
                                    text={"Read more"}
                                    color={"#FF0000"} fontWeight={"bold"}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2.8} container alignItems={"center"} direction={"column"}>
                        <Grid item>
                            <img src={NursingIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marinTop: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Nursing"}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Thanks to the excellent living conditions in Germany, a considerable proportion..."}
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
                                    text={"Read more"}
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
                                text={"PAF Consultants"}
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
                                text={"Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte.\n" +
                                "Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte.\n" +
                                "Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmteLorem ipsum dolor sitame coctetur adipiscing."}
                                color={"black"} fontWeight={"normal"}
                                opacity={0.6} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item container style={{marginTop: "20px"}}
                              justifyContent={{xs: "center", md: "space-between"}}>
                            <Grid item>
                                <CustomButtonLarge text={"Get Consultations"} background={"red"}
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