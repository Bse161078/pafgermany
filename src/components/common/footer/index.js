import Grid from "@mui/material/Grid/Grid";
import PafLogo2 from "../../../assets/images/paf-logo-2.png";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../label";
import TelegramIcon from "../../../assets/images/telegram.png";
import TwitterIcon from "../../../assets/images/twitter.png";
import VimeoIcon from "../../../assets/images/vimeo.png";
import WhatsAppIcon from "../../../assets/images/whatsapp.png";
import FacebookIcon from "../../../assets/images/facebook.png";
import YellowLineIcon from "../../../assets/images/yellow-line.png";
import ForwardArrowIcon from "../../../assets/images/forward-arrow.png";
import LocationIcon from "../../../assets/images/location.png";
import SmsIcon from "../../../assets/images/sms.png";
import React from "react";

import {useLocation,useOutletContext,Outlet,useNavigate} from 'react-router-dom';

const Footer=(props)=>{
    const {onClick} = props;

    return(
        <Grid item xs={12} container style={{marginTop: "50px",background:"#FAFAFA",padding:"20px 0px"}} justifyContent={"center"}>
            <Grid item xs={11} md={9} container justifyContent={"space-between"} alignItems={"flex-start"}>
                <Grid item container xs={12} md={5.5} justifyContent={{xs: "center", md: "flex-start"}}>
                    <Grid item>
                        <img src={PafLogo2} style={{width: "100%"}}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <CustomLabelLabelMedium
                            text={"Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte."}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>
                    <Grid item xs={12} container style={{marginTop: "40px"}}
                          justifyContent={{xs: "center", md: "flex-start"}}>
                        <Grid item
                              sx={{padding: "12px 12px 10px 12px", background: "#4995BE", borderRadius: "50%"}}>
                            <img src={TelegramIcon}/>
                        </Grid>
                        <Grid item style={{
                            padding: "12px 12px 10px 12px",
                            marginLeft: "10px",
                            background: "#00ACEE",
                            borderRadius: "50%"
                        }}>
                            <img src={TwitterIcon}/>
                        </Grid>
                        <Grid item style={{
                            padding: "12px 12px 10px 12px",
                            marginLeft: "10px",
                            background: "#8134AF",
                            borderRadius: "50%"
                        }}>
                            <img src={VimeoIcon}/>
                        </Grid>
                        <Grid item style={{
                            padding: "12px 12px 10px 12px",
                            marginLeft: "10px",
                            background: "#25D366",
                            borderRadius: "50%"
                        }}>
                            <img src={WhatsAppIcon}/>
                        </Grid>
                        <Grid item style={{
                            padding: "12px 12px 10px 12px",
                            marginLeft: "10px",
                            background: "#3B5998",
                            borderRadius: "50%"
                        }}>
                            <img src={FacebookIcon}/>
                        </Grid>

                    </Grid>
                </Grid>


                <Grid item container xs={12} md={5.5} sx={{marginTop: {xs: "20px", md: "0px"}}}>
                    <Grid item xs={12} md={6} container direction={"column"}
                          alignItems={{xs: "center", md: "flex-start"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Quick Links"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "5px"}}>
                            <img src={YellowLineIcon} style={{height: "4px"}}/>
                        </Grid>

                        <Grid>
                            <Grid item container alignItems={"center"}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}} onClick={(e)=>onClick('/contact-us')}>
                                <Grid item>
                                    <img src={ForwardArrowIcon}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Contact Us"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/faq')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>
                                <Grid item>
                                    <img src={ForwardArrowIcon}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"FAQ"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/cost')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>
                                <Grid item>
                                    <img src={ForwardArrowIcon}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Cost & Fees"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/privacy-policy')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>
                                <Grid item>
                                    <img src={ForwardArrowIcon}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Privacy Policy"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/cancellation-policy')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>
                                <Grid item>
                                    <img src={ForwardArrowIcon}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Cancellation Policy"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} alignItems={{xs: "center", md: "flex-start"}}
                          sx={{marginTop: {xs: "20px", md: "0px"}}} container direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Contact"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "5px"}}>
                            <img src={YellowLineIcon} style={{height: "4px"}}/>
                        </Grid>

                        <Grid item xs>
                            <Grid container alignItems={"center"}
                                  justifyContent={{xs: "flex-start", sm: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px"}}>
                                <Grid item>
                                    <img src={LocationIcon}/>
                                </Grid>
                                <Grid item xs>
                                    <Grid container direction={"column"}>
                                        <Grid item>
                                            <CustomLabelHeaderLarge
                                                text={"Address"}
                                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                        </Grid>
                                        <Grid item>
                                            <CustomLabelLabelMedium
                                                text={"Langenhorner Chaussee 155 22415 Hamburg – Germany"}
                                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid container alignItems={"center"}
                                  justifyContent={{xs: "flex-start", sm: "flex-start", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px"}}>
                                <Grid item>
                                    <img src={SmsIcon}/>
                                </Grid>
                                <Grid item >
                                    <Grid container direction={"column"}>
                                        <Grid item>
                                            <CustomLabelHeaderLarge
                                                text={"Email Address"}
                                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                        </Grid>
                                        <Grid item>
                                            <CustomLabelLabelMedium
                                                text={"info@pafgermany.com"}
                                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>




                    </Grid>
                </Grid>


            </Grid>
        </Grid>
    )
}

export default Footer;