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

const Profile = () => {

    let navigate = useNavigate();
    const {userData,userId} = useOutletContext();

    const [stats,setStats]=useState({submission:0,inProgress:0,approved:0,rejected:0});
    const [count,setCount]=useState(0);


    useEffect(()=>{
        const translationDoc=(userData && userData.translation) || [];

        const submission=translationDoc.length;
        const paidForms=(translationDoc.filter((translation)=>translation.paid)).length;
        setStats({...stats,submission:paidForms});
        setCount(count+1);

    },[])

    const navigateToLink=(url)=>{
        navigate(url);
    }

    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>


            <Grid item md={10} xs={11} container sx={{marginTop: {xs: "5px", md: "20px"}}}
                  justifyContent={"space-between"}>
                <Grid item xs={12} container direction={"column"} justifyContent={"space-between"}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge text={"Dashboard"} color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <img src={YellowDividerIcon}/>
                        </Grid>
                    </Grid>
                    <Grid item container style={{marginTop: "40px"}} justifyContent={"space-between"}>
                        <Grid container item xs={11} sm={5} lg={2.8}
                              style={{position: "relative", background: "black", borderRadius: "15px"}}>
                            <Paper style={{
                                width: "100%",
                                height: "154px",
                                borderRadius: "15px",
                                position: "relative",
                                left: "8px"
                            }}>
                                <Grid container justifyContent={"space-around"} style={{height: "100%"}}
                                      alignItems={"center"}>
                                    <Grid item>
                                        <img src={DashboardIcon1}/>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction={"column"} alignItems={"center"}>
                                            <Grid item>
                                                <CustomLabelLabelMedium text={"Submission"} color={"#757575"}
                                                                        fontWeight={"bold"}/>
                                            </Grid>
                                            <Grid item style={{marginTop: "30px"}}>
                                                <CustomLabelLabelMedium text={stats.submission} color={"#757575"}
                                                                        fontWeight={"bold"}/>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid container item xs={11} sm={5} lg={2.8}
                              sx={{marginTop: {xs: "20px",sm:"0px", lg: "0px"}}}
                              style={{position: "relative", background: "yellow", borderRadius: "15px"}}>
                            <Paper style={{
                                width: "100%",
                                height: "154px",
                                borderRadius: "15px",
                                position: "relative",
                                left: "8px"
                            }}>
                                <Grid container justifyContent={"space-around"} style={{height: "100%"}}
                                      alignItems={"center"}>
                                    <Grid item>
                                        <img src={DashboardIcon2}/>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction={"column"} alignItems={"center"}>
                                            <Grid item>
                                                <CustomLabelLabelMedium text={"In Progress"} color={"#757575"}
                                                                        fontWeight={"bold"}/>
                                            </Grid>
                                            <Grid item style={{marginTop: "30px"}}>
                                                <CustomLabelLabelMedium text={stats.inProgress} color={"#757575"}
                                                                        fontWeight={"bold"}/>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid container item xs={11} sm={5} lg={2.8}
                              sx={{marginTop: {xs: "20px",sm:"20px", lg: "0px"}}}
                              style={{position: "relative", background: "green", borderRadius: "15px"}}>
                            <Paper style={{
                                width: "100%",
                                height: "154px",
                                borderRadius: "15px",
                                position: "relative",
                                left: "8px"
                            }}>
                                <Grid container justifyContent={"space-around"} style={{height: "100%"}}
                                      alignItems={"center"}>
                                    <Grid item>
                                        <img src={DashboardIcon3}/>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction={"column"} alignItems={"center"}>
                                            <Grid item>
                                                <CustomLabelLabelMedium text={"Approved"} color={"#757575"}
                                                                        fontWeight={"bold"}/>
                                            </Grid>
                                            <Grid item style={{marginTop: "30px"}}>
                                                <CustomLabelLabelMedium text={"0"} color={"#757575"}
                                                                        fontWeight={"bold"}/>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid container item xs={11} sm={5} lg={2.8}
                              sx={{marginTop: {xs: "20px",sm:"20px", lg: "0px"}}}
                              style={{position: "relative", background: "red", borderRadius: "15px"}}>
                            <Paper style={{
                                width: "100%",
                                height: "154px",
                                borderRadius: "15px",
                                position: "relative",
                                left: "8px"
                            }}>
                                <Grid container justifyContent={"space-around"} style={{height: "100%"}}
                                      alignItems={"center"}>
                                    <Grid item>
                                        <img src={DashboardIcon4}/>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction={"column"} alignItems={"center"}>
                                            <Grid item>
                                                <CustomLabelLabelMedium text={"Rejected"} color={"#757575"}
                                                                        fontWeight={"bold"}/>
                                            </Grid>
                                            <Grid item style={{marginTop: "30px"}}>
                                                <CustomLabelLabelMedium text={"0"} color={"#757575"}
                                                                        fontWeight={"bold"}/>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container direction={"column"} style={{marginTop:"40px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge text={"Apply for services"} color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <img src={YellowDividerIcon}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={{xs:"center",sm:"space-between"}} style={{marginTop:"40px"}}>
                        <Grid item xs={10} sm={3}
                              sx={{marginTop: {xs: "20px",sm:"0px"}}}>
                            <Paper elevation={4} style={{width:"100%",background:"white",padding:"20px 0px",height:"320px"}}>
                                <Grid container style={{height:"100%"}} direction={"column"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Grid item>
                                        <Grid container justifyContent={"center"} alignItems={"Center"}
                                              style={{background:"#F5F5F5",padding:"10px 20px 10px 20px",borderRadius:"10px"}}>
                                            <Grid item>
                                                <img src={TranslationIcon}/>
                                            </Grid>
                                            <Grid item style={{marginLeft:"10px"}}>
                                                <CustomLabelLabelMedium text={"Translation"} color={"black"}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <CustomLabelHeader text={"Document Legal Translation"} color={"black"} fontWeight={"bold"}/>
                                    </Grid>
                                    <Grid item onClick={(e)=>navigate('/dashboard/translate')}>
                                        <CustomButtonLarge text={"Submit"} background={"red"} color={"white"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} sm={3}
                              sx={{marginTop: {xs: "20px",sm:"0px"}}}>
                            <Paper style={{width:"100%",background:"white",padding:"20px 0px",height:"320px"}}>
                                <Grid container style={{height:"100%"}} direction={"column"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Grid item>
                                        <Grid container justifyContent={"center"} alignItems={"Center"}
                                              style={{background:"#F5F5F5",padding:"10px 20px 10px 20px",borderRadius:"10px"}}>
                                            <Grid item>
                                                <img src={RecognitionIcon}/>
                                            </Grid>
                                            <Grid item style={{marginLeft:"10px"}}>
                                                <CustomLabelLabelMedium text={"Recognition"} color={"red"}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <CustomLabelHeader text={"Document Recognition"} color={"black"} fontWeight={"bold"}/>
                                    </Grid>
                                    <Grid item onClick={(e)=>navigate('/dashboard/recognition')}>
                                        <CustomButtonLarge text={"Submit"} background={"red"} color={"white"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} sm={3}
                              sx={{marginTop: {xs: "20px",sm:"0px"}}}>
                            <Paper style={{width:"100%",background:"white",padding:"20px 0px",height:"320px"}}>
                                <Grid container style={{height:"100%"}} direction={"column"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Grid item>
                                        <Grid container justifyContent={"center"} alignItems={"Center"}
                                              style={{background:"#F5F5F5",padding:"10px 20px 10px 20px",borderRadius:"10px"}}>
                                            <Grid item>
                                                <img src={AcademicIcon}/>
                                            </Grid>
                                            <Grid item style={{marginLeft:"10px"}}>
                                                <CustomLabelLabelMedium text={"Academy"} color={"#FFCC00"}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <CustomLabelHeader text={"PAF Academy"} color={"black"} fontWeight={"bold"}/>
                                    </Grid>
                                    <Grid item >
                                        <CustomButtonLarge text={"Coming Soon"} background={"red"} color={"white"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </Grid>
    )
}

export default Profile;