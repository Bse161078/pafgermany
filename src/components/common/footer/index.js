import Grid from "@mui/material/Grid/Grid";
import PafLogo2 from "../../../assets/images/paf-logo-2.png";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium, CustomLabelLabelSmallMedium} from "../label";
import TelegramIcon from "../../../assets/images/telegram.png";
import TwitterIcon from "../../../assets/images/twitter.png";
import VimeoIcon from "../../../assets/images/vimeo.png";
import WhatsAppIcon from "../../../assets/images/whatsapp.png";
import FacebookIcon from "../../../assets/images/facebook.png";
import YellowLineIcon from "../../../assets/images/yellow-line.png";
import ForwardArrowIcon from "../../../assets/images/forward-arrow.png";
import LocationIcon from "../../../assets/images/location.png";
import SmsIcon from "../../../assets/images/sms.png";
import React, {useEffect, useState} from "react";

import {useLocation,useOutletContext,Outlet,useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";


let footerDescriptionTitle,quickLinksTitle,contactUsTitle,faqTitle,privacyPolicyTitle,cancellationTitle,contactTitle,addressTitle,emailTitle,
    costAndFeesTitle;


const Footer=(props)=>{
    const {onClick} = props;
    const dispatch = useDispatch();
    const {selectedLanguage} = useSelector((state) => state.languageReducer);
    const [loading, setLoading] = useState(false);
    const [count,setCount]=useState(0);

    const loadConstant = async () => {
        setLoading(true);
        ({
            footerDescriptionTitle,quickLinksTitle,contactUsTitle,faqTitle,privacyPolicyTitle,cancellationTitle,contactTitle,addressTitle,
            costAndFeesTitle,emailTitle
        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setLoading(false);
        setCount(count+1)
    }

    useEffect(()=>{
        loadConstant();
    },[selectedLanguage])

    return(
        <Grid item xs={12} container style={{marginTop: "50px",background:"#FAFAFA",padding:"20px 0px"}} justifyContent={"center"}>
            <Grid item xs={11} md={9} container justifyContent={"space-between"} alignItems={"flex-start"}>
                <Grid item container xs={12} md={5.5} justifyContent={{xs: "center", md: "flex-start"}}>
                    <Grid item>
                        <img src={PafLogo2} style={{width: "70%"}}/>
                    </Grid>
                    <Grid item style={{marginTop: "10px"}}>
                        <CustomLabelLabelSmallMedium
                            text={footerDescriptionTitle}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>
                    <Grid item xs={12} container style={{marginTop: "20px"}}
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
                                text={quickLinksTitle}
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
                                    <CustomLabelLabelMedium
                                        text={contactUsTitle}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/faq')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>

                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={faqTitle}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/cost')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>

                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={costAndFeesTitle}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/privacy-policy')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>

                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={privacyPolicyTitle}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                                </Grid>
                            </Grid>
                            <Grid item container alignItems={"center"} onClick={(e)=>onClick('/cancellation-policy')}
                                  justifyContent={{xs: "center", md: "flex-start"}} spacing={2}
                                  style={{marginTop: "10px",cursor:"pointer"}}>

                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={cancellationTitle}
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
                                text={contactTitle}
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
                                            <CustomLabelLabelMedium
                                                text={addressTitle}
                                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                        </Grid>
                                        <Grid item>
                                            <CustomLabelLabelSmallMedium
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
                                            <CustomLabelLabelMedium
                                                text={emailTitle}
                                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                        </Grid>
                                        <Grid item>
                                            <CustomLabelLabelSmallMedium
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