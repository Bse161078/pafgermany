import Grid from "@mui/material/Grid/Grid";
import React from "react";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../common/label";
import NursingDetail from "src/assets/images/nursing-detail.webp";
import NursingDetail1Image1 from "src/assets/images/nursing-des-img1.svg";
import NursingDetail1Image2 from "src/assets/images/nursing-des1-img2.svg";
import NursingDetail1Image3 from "src/assets/images/nursing-des1-img3.svg";
import NursingDetail2Image1 from "src/assets/images/nursing-des2-img.svg";
import NursingDetail2Image2 from "src/assets/images/nursing-des2-img2.svg";
import NursingTick from "src/assets/images/nursing-tick.webp";
import NursingImage3 from "src/assets/images/nursing-img3.webp";
import Paper from "@mui/material/Paper/Paper";
import NursingDetail4Image1 from "src/assets/images/nursing-des4-img1.svg";
import NursingDetail4Image2 from "src/assets/images/nursing-des4-img2.svg";
import NursingDetail4Image3 from "src/assets/images/nursing-des4-img3.svg";
import NursingDetail4Image4 from "src/assets/images/nursing-des4-img4.svg";
import NursingDetail4Image5 from "src/assets/images/nursing-des4-img5.svg";
import {CustomButtonLarge} from "../common/button";
import {CustomTextField} from "../common/text";


const Nursing = () => {
    return (
        <Grid container justifyContent={"center"} sx={{marginTop: {xs:"calc(50vh - 250px)",sm:"calc(50vh - 250px)",lg:"calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs:"5px",md:"20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>
                    <Grid item>
                        <CustomLabelHeaderLarge
                            text={"Nursing professions have a secure future"}
                            color={"red"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item container style={{marginTop: "20px"}}>
                        <img style={{width: "100%"}} src={NursingDetail}/>
                    </Grid>
                    <Grid item style={{marginTop: "20px"}}>
                        <CustomLabelLabelMedium
                            text={"Are you a qualified nurse, geriatric nurse, anesthesia technician or special needs nurse? Then start now in the German health care system. Hospitals, care facilities of all kinds, and social care services have been looking for motivated and dedicated employees of all skill levels for years. And as Germany’s population continues to grow older, now followed by the low-birth-rate generations, the need will continue to grow dramatically. What are you waiting for? Register now so we can take care of recognizing your education!"}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>

                    <Grid container>
                        <Grid container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <img src={NursingDetail1Image1}/>
                            </Grid>
                            <Grid item xs container direction={"column"} style={{marginLeft: "20px"}}>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Dedicated Team"}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"There are many variations of passages of Nursing Professional available.\n"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <img src={NursingDetail1Image2}/>
                            </Grid>
                            <Grid item xs container direction={"column"} style={{marginLeft: "20px"}}>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Great Support"}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"There are many variations of passages of Nursing Professional available."}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <img src={NursingDetail1Image3}/>
                            </Grid>
                            <Grid item xs container direction={"column"} style={{marginLeft: "20px"}}>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Government Certified"}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"There are many variations of passages of Nursing Professional available."}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Entry requirements for international nursing professionals"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"If you want to work in a nursing profession in Germany, you need an official license to practice the profession. Usually, the following requirements must be met in order to be able to practice a nursing profession in Germany: Recognition of your qualification: Your qualification in a nursing profession must first be recognized in Germany. We arrange for your certificates to be checked by the relevant authorities. Whether your qualification is equivalent to a German degree can only be determined by the competent authorities, which vary from state to state depending on the profession. The German professional recognition is then valid nationwide. If your qualification is not recognized, you can take an assessment test or attend an adaptation course to prove your level of knowledge and the required skills. Sufficient knowledge of German: Depending on the state in which you will be working, you must have German language skills at level B2 or B1 of the Common European Framework of Reference for Languages (CEFR). In our PAF academy language courses, we help you to acquire these language skills. Medical test: In order to work in a nursing profession in Germany, you need a certificate issued by a German doctor confirming that you are physically and mentally healthy and therefore eligible to work in a nursing profession. We also take care of this. Criminal record: To prove your trustworthiness, you need a valid criminal record. Depending on your profession, country of origin, and federal state, you will either need a criminal record from your home country or one issued in Germany.\n"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}} justifyContent={"space-around"}>
                        <Grid item xs={5.5}>
                            <Grid container direction={"column"} alignItems={"center"}>
                                <Grid item>
                                    <img src={NursingDetail2Image1}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"Nurse"}
                                        color={"red"} fontWeight={"bold"}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"1.7 million people are employed in the nursing sector, geriatric nursing included.\n"}
                                        color={"black"} textAlign={"center"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Grid container direction={"column"} alignItems={"center"}>
                                <Grid item>
                                    <img src={NursingDetail2Image2}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"Job positions"}
                                        color={"red"} fontWeight={"bold"}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"Over 40,000 job positions in care facilities are vacant."}
                                        color={"black"} textAlign={"center"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Visa & Residency"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"To enter Germany, you need a visa, which can be applied for at the German embassy or consulate in your country.\n" +
                                "\n"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}} justifyContent={"space-between"}>
                        <Grid item xs={12} md={5.5} container>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"You can apply for visa and immigration"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"More than 20+ years of experience"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"Trusted by people"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"Provide Immigration Services Experience Agents"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5.5} container>
                            <img src={NursingImage3} style={{width: "100%"}}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "40px"}}>
                        <CustomLabelLabelMedium
                            text={"To be able to work in Germany after entering the country, you will need a residence permit if you are not a citizen of the EU, Liechtenstein, Iceland, Norway, or Switzerland.We will of course support you in obtaining your visa and residence permit.\n" +
                            "\n"}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>

                    </Grid>

                </Grid>

                <Grid container xs={12} md={4.5}>
                    <div>
                        <Grid container>
                            <Paper style={{width: "100%", padding: "40px 20xp 40px 20px",borderRadius:"20px", background: "#F5F5F5"}}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding:"20px"}}>
                                    <Grid item>
                                        <CustomLabelLabelMedium
                                            text={"Full service for your start in"}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            opacity={0.7} lineHeight={1.7}/>

                                    </Grid>
                                    <Grid item>
                                        <CustomLabelLabelMedium
                                            text={"Germany"}
                                            color={"#FFCC00"} fontWeight={"bold"} textAlign={"center"}
                                            opacity={1} lineHeight={1.7}/>
                                    </Grid>

                                    <Grid item container alignItems={"center"}>
                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image1}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Document check"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image2}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Translations of your documents"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image3}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Application to the authorities"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image4}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Support with job search"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image5}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Help with bank account opening"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container justifyContent={"center"} style={{marginTop:"20px"}}>
                                            <CustomButtonLarge text={"Sign Up"} background={"red"} border={"2px solid red"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                         </Grid>

                        <Grid container style={{marginTop:"40px"}}>
                            <Paper style={{width: "100%", padding: "40px 20xp 40px 20px",borderRadius:"20px", background: "#F5F5F5"}}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding:"20px"}}>
                                    <Grid item>
                                        <CustomLabelHeaderLarge
                                            text={"Free Immigration Assessment"}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            lineHeight={1.7}/>

                                    </Grid>

                                    <Grid item container alignItems={"center"}>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
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

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
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

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={"Select Immigration"}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextField placeholder={"Harry"}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={"Message"}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextField placeholder={""}/>
                                            </Grid>
                                        </Grid>





                                        <Grid container justifyContent={"center"} style={{marginTop:"20px"}}>
                                            <CustomButtonLarge text={"Submit"} background={"red"} border={"2px solid red"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>


                    </div>



                </Grid>
            </Grid>
        </Grid>
    )
}

export default Nursing;