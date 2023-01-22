import Grid from "@mui/material/Grid/Grid";
import React from "react";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium, CustomLabelLabelSmallMedium} from "../common/label";
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
import LearnGerman from "src/assets/images/learn-german-big.webp";
import ManyYearsExpIcon from "src/assets/images/many-years-exp.svg";
import CompleteAccurateIcon from "src/assets/images/complete-accurate.svg";
import ImmigrantSpecialistIcon from "src/assets/images/immigrant-specialist.svg";
import VisaPerson from "src/assets/images/visa-persone.webp";


const Immigration = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Immigration To Germany"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"You apply for your visa at the German consulate or embassy in your home country. The necessary forms are usually available in your national language. You can apply for a job search visa and use it to search for a suitable job in Germany. Before you can start working here, you apply for a temporary residence permit, which you can later change to a permanent residence permit under certain circumstances. The EU Blue Card also entitles you to reside in Germany and the EU, but it is aimed exclusively at academics. The issuance of the residence permit is individual. You should normally meet the following requirements.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"The recognition of your education"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"In order to obtain a residence permit, you need a recognition of your education. Our experienced team takes care of this recognition professionally. Our experts know from the countless applications they have already successfully submitted what to look out for and know the authorities and responsibilities very well. Therefore, register now. The recognition process can take up to 1.5 years in some cases.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"German language skills"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Without any knowledge of German, you can communicate well in everyday life in the big cities, but you should be able to speak German better on the job, in official matters, and outside of metropolitan areas in order to be able to handle your affairs independently. In the first phase, the PAF team will be happy to assist you in all of these areas upon request. And we can also help you find the right German course. You can find out more about this on our “Language courses” page.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Family immigration"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"If you initially enter Germany alone in order to join your family later, your family will also apply for a residence permit. In order to do so, you must prove that you have sufficient knowledge of German. We will arrange a suitable language course for you upon request.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                </Grid>

                <Grid container xs={12} md={4.5}>
                    <div>
                        <Grid container>
                            <Paper style={{
                                width: "100%",
                                padding: "40px 20xp 40px 20px",
                                borderRadius: "20px",
                                background: "#F5F5F5"
                            }}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding: "20px"}}>
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
                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image1}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Document check"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image2}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Translations of your documents"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image3}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Application to the authorities"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image4}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Support with job search"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image5}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Help with bank account opening"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container justifyContent={"center"} style={{marginTop: "20px"}}>
                                            <CustomButtonLarge text={"Sign Up"} background={"red"}
                                                               border={"2px solid red"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid container style={{marginTop: "40px"}}>
                            <Paper style={{
                                width: "100%",
                                padding: "40px 20xp 40px 20px",
                                borderRadius: "20px",
                                background: "#F5F5F5"
                            }}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding: "20px"}}>
                                    <Grid item>
                                        <CustomLabelHeaderLarge
                                            text={"Free Immigration Assessment"}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            lineHeight={1.7}/>

                                    </Grid>

                                    <Grid item container alignItems={"center"}>

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

                                        <Grid container direction={"column"} alignItems={"flex-start"}
                                              style={{marginTop: "20px"}}>
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

                                        <Grid container direction={"column"} alignItems={"flex-start"}
                                              style={{marginTop: "20px"}}>
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


                                        <Grid container justifyContent={"center"} style={{marginTop: "20px"}}>
                                            <CustomButtonLarge text={"Submit"} background={"red"}
                                                               border={"2px solid red"}/>
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

export default Immigration;