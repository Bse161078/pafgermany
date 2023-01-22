import Grid from "@mui/material/Grid/Grid";
import React from "react";
import {
    CustomLabelHeader,
    CustomLabelHeaderLarge, CustomLabelHeaderLarge1,
    CustomLabelLabelMedium,
    CustomLabelLabelSmallMedium
} from "../common/label";
import YellowDividerIcon from 'src/assets/images/yellow-divider.svg';
import SmsIcon from "../../assets/images/sms.png";
import LocationIcon from "../../assets/images/location.png";
import Divider from "@mui/material/Divider/Divider";
import {CustomButtonLarge, CustomButtonLargeWithIcon} from "../common/button";
import FacebookIcon from 'src/assets/images/facebook.svg';
import YoutubeIcon from 'src/assets/images/youtube.svg';
import InstagramIcon from 'src/assets/images/instagram.svg';
import LinkedinIcon from 'src/assets/images/linkedin.svg';
import {CustomTextField} from "../common/text";

const ContactUs = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item xs={12} md={5.5} container direction={"column"} justifyContent={"space-between"}>
                    <Grid item>
                        <CustomLabelHeaderLarge text={"Quick Contact"} color={"red"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop:"10px"}}>
                        <img src={YellowDividerIcon}/>
                    </Grid>
                    <Grid item style={{marginTop:"10px"}}>
                        <CustomLabelHeaderLarge1
                            text={"Have Questions? Dont Hesitate to Contact Us"}
                            color={"black"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomLabelLabelMedium
                            text={"Please feel free to get in touch with us using the contact form below. We would love to hear for you welcomed and every pain avoided.\n" +
                            "\n"}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>


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
                                        text={"Location"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"PAF Germany - Portal für ausländische Fachkräfte GmbH Langenhorner Chaussee 15522415 Hamburg - Deutschland\n" +
                                        ""}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Divider style={{width:"100%"}} style={{marginTop:"20px"}}/>
                    <Grid container alignItems={"center"}
                          justifyContent={{xs: "flex-start", sm: "flex-start", md: "flex-start"}} spacing={2}
                          style={{marginTop: "10px"}}>
                        <Grid item>
                            <img src={SmsIcon}/>
                        </Grid>
                        <Grid item>
                            <Grid container direction={"column"}>
                                <Grid item>
                                    <CustomLabelHeaderLarge
                                        text={"Email"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"support@pafgermany.com"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{width:"100%"}} style={{marginTop:"20px"}}/>

                    <Grid container justifyContent={"space-between"} style={{marginTop:"40px"}}>
                        <Grid item xs={12} md={5.5}>
                            <CustomButtonLargeWithIcon icon={FacebookIcon} text={"Follow us on Facebook"} background={"#3B5998"}
                                                       border={"2px solid #3B5998"}/>

                        </Grid>
                        <Grid item xs={12} md={5.5} sx={{marginTop:{xs:"20px",md:"0px"}}}>
                            <CustomButtonLargeWithIcon icon={YoutubeIcon} text={"Follow us on Youtube"} background={"#D32F2F"}
                                                       border={"2px solid #D32F2F"}/>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent={"space-between"} style={{marginTop:"20px"}}>
                        <Grid item xs={12} md={5.5}>
                            <CustomButtonLargeWithIcon icon={InstagramIcon} text={"Follow us on Instagram"} background={"#D81B60"}
                                                       border={"2px solid #D81B60"}/>

                        </Grid>
                        <Grid item xs={12} md={5.5} sx={{marginTop:{xs:"20px",md:"0px"}}}>
                            <CustomButtonLargeWithIcon icon={LinkedinIcon} text={"Follow us on Linkedin"} background={"#0E76A8"}
                                                       border={"2px solid #0E76A8"}/>
                        </Grid>
                    </Grid>

                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem
                         style={{width: "2px", background: "#FFFFFF", marginLeft: "20px"}}/>

                <Grid item xs={12} md={5.5} container direction={"column"} justifyContent={"space-between"}>
                    <div>
                        <Grid item>
                            <CustomLabelHeaderLarge text={"Let’s Contact"} color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"10px"}}>
                            <img src={YellowDividerIcon}/>
                        </Grid>
                        <Grid item style={{marginTop:"10px"}}>
                            <CustomLabelHeaderLarge1
                                text={"Send Your Message"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"Please feel free to get in touch with us using the contact form below. We would love to hear for you.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>

                        <Grid container>
                            <Grid container justifyContent={"space-between"}>
                                <Grid item xs={12} md={5.5}>
                                    <Grid container direction={"column"} alignItems={"flex-start"}
                                          style={{marginTop: "20px"}}>
                                        <Grid item>
                                            <CustomLabelLabelMedium
                                                text={"Name"}
                                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                lineHeight={1.7}/>
                                        </Grid>
                                        <Grid item container>
                                            <CustomTextField placeholder={"Harry"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={5.5}>
                                    <Grid container direction={"column"} alignItems={"flex-start"}
                                          style={{marginTop: "20px"}}>
                                        <Grid item>
                                            <CustomLabelLabelMedium
                                                text={"Email"}
                                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                lineHeight={1.7}/>
                                        </Grid>
                                        <Grid item container>
                                            <CustomTextField placeholder={"Harry@gmail.com"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent={"space-between"}>
                                <Grid item xs={12} md={5.5}>
                                    <Grid container direction={"column"} alignItems={"flex-start"}
                                          style={{marginTop: "20px"}}>
                                        <Grid item>
                                            <CustomLabelLabelMedium
                                                text={"Phone"}
                                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                lineHeight={1.7}/>
                                        </Grid>
                                        <Grid item container>
                                            <CustomTextField placeholder={"1(234) 567-8900"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={5.5}>
                                    <Grid container direction={"column"} alignItems={"flex-start"}
                                          style={{marginTop: "20px"}}>
                                        <Grid item>
                                            <CustomLabelLabelMedium
                                                text={"Subject"}
                                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                lineHeight={1.7}/>
                                        </Grid>
                                        <Grid item container>
                                            <CustomTextField placeholder={""}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid container justifyContent={"space-between"}>
                                <Grid item xs={12} md={5.5}>
                                    <Grid container direction={"column"} alignItems={"flex-start"}
                                          style={{marginTop: "20px"}}>
                                        <Grid item>
                                            <CustomLabelLabelMedium
                                                text={"Message"}
                                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                lineHeight={1.7}/>
                                        </Grid>
                                        <Grid item container>
                                            <CustomTextField placeholder={"1(234) 567-8900"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container style={{marginTop:"20px"}}>
                                <Grid item>
                                    <CustomButtonLarge text={"Submit"} background={"#E53935"} border={"2px solid #E53935"}/>
                                </Grid>
                            </Grid>

                        </Grid>
                    </div>


                </Grid>
            </Grid>
        </Grid>
    )
}

export default ContactUs;