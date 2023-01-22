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
import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AddIcon from '@mui/icons-material/Add';
import CustomAccordian from "../common/accordian";


const Faq = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid container justifyContent={"space-between"}>
                    <Grid item xs={5.8} container direction={"column"}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"HOW WE HELP CLIENTS"}
                                color={"red"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>

                        </Grid>
                        <Grid item style={{marginTop:"10px"}}>
                            <CustomLabelHeaderLarge1
                                text={"Read All Frequently Asked Questions"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"left"}/>

                        </Grid>
                    </Grid>

                    <Grid item container xs={5.8} alignItems={"center"}>
                        <CustomLabelLabelMedium
                            text={"Here you can find the answers to frequently asked questions about the recognition of foreign professional qualifications in Germany and on other subjects.\n" +
                            ""}
                            color={"black"}
                            opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>
                </Grid>


                <Grid container style={{marginTop:"40px"}} direction={"column"}>
                    <Grid item>
                       <CustomAccordian title={"Where do I apply for recognition?"}
                                        description={"Register here at pafgermany.com and upload your certificates and documents. We will take care of your application for recognition."}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"Can my qualification be recognized?"}
                                         description={"Within the recognition procedure, it is checked whether the contents of your training are comparable with those of the equivalent German training. In some cases, you may have to undergo additional qualifications, present a language certificate, take part in a qualifying interview or pass another examination. You can find more information here\n"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"Can I work in Germany without recognition?"}
                                         description={"If you come from a third country, you generally have to have your university degree recognized. Exceptions apply only to IT specialists and academic, non-regulated professions. Start your recognition here You can find out more about the recognition of academic professions here"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"What does the recognition procedure cost?"}
                                         description={"If you come from a third country, you generally have to have your university degree recognized. Exceptions apply only to IT specialists and academic, non-regulated professions. Start your recognition here You can find out more about the recognition of academic professions here"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"Is the recognition at the same time a visa for Germany?"}
                                         description={"No. The recognition procedure is a separate, upstream procedure. You can apply for your visa with the notification of recognition. Start recognition now"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"Can I also apply for recognition from abroad?"}
                                         description={"Yes, absolutely! We even recommend it. Start recognition now"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"How long does such a recognition process take?"}
                                         description={"When you register with PAF, we review your documents, check them for completeness and then submit your application to the relevant authority. The processing at the authority takes an average of 3 months, in exceptional cases also significantly longer. Start recognition now"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"Is there financial support for the recognition?"}
                                         description={"Yes, there is the possibility of financial support under certain conditions. We will check if you are eligible upon request. Register now\n"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"I no longer have any certificates or documents. What can I do?"}
                                         description={"In this case, depending on the profession, there is the possibility of proving your qualifications through theoretical and practical work samples and, if necessary, examinations. Start recognition now\n"}/>
                    </Grid>

                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"Do I need German language skills for the recognition procedure? German language skills?"}
                                         description={"No, you do not need any knowledge of German for the application itself. However, for some professions and thus also for the recognition, knowledge of German must be proven. German language skills are also recommended for your stay in Germany. Start recognition now"}/>
                    </Grid>


                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={"What documents are required for the application for recognition?"}
                                         description={"You need to submit the following documents when you register in the PAF portal: Proof of identity Certificates and proof of the content and duration of your professional qualification We will check your documents for completeness and contact you if further documents are needed Register now"}/>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    )
}

export default Faq;