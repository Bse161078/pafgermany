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


const LanguageLessons = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>
                    <Grid item container style={{marginTop: "20px"}}>
                        <img style={{width: "100%"}} src={LearnGerman}/>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"How much GERMAN do you need?"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Even if you can communicate well in English in many places, especially in big cities, you will not be able to avoid learning German.For example, to work as a professional in Germany, it is essential to learn German. But not only for your professional start in Germany, but for your fulfilled and happy life here, the German language is a door opener.For certain positions and activities, a proof of your German language level is required, in some cases already for the application of your visa.Language courses with an official language certificate are available from many recognized telc-certified and countless private institutes, under a wide range of conditions. If you wish, we can help you find a suitable and accredited language school. We work exclusively with certified and reputable partners in this area.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent={"space-between"}>
                        <Grid item xs={12} md={3.8} container style={{marginTop: "20px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "#EEEEEE"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={ManyYearsExpIcon} style={{
                                            maxWidth: "100%",
                                            background: "red",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Many years of work experience"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"There are many variations of passages of Lorem Ipsum available"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3.8} container style={{marginTop: "20px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "#EEEEEE"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CompleteAccurateIcon} style={{
                                            maxWidth: "100%",
                                            background: "red",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Complete and accurate advice"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"There are many variations of passages of Lorem Ipsum available."}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3.8} container style={{marginTop: "20px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "#EEEEEE"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={ImmigrantSpecialistIcon} style={{
                                            maxWidth: "100%",
                                            background: "red",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Immigration specialists"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"There are many variations of passages of Lorem Ipsum available"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"What are the levels of language?"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"The assessment of your German language skills is based on the Common European Framework of Reference for Languages (CEFR), which defines the following levels of language competence:\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item style={{
                            padding: "10px",
                            width: "25px",
                            height: "25px",
                            background: "#FFCC00",
                            borderRadius: "50%"
                        }}>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px", marginTop: "-2px"}}>
                            <Grid container direction={"column"} justifyContent={"flex-start"}>
                                <CustomLabelHeaderLarge
                                    text={"Levels A1 and A2:"}
                                    color={"black"} fontWeight={"bold"}/>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Basic knowledge and level of the German language"}
                                        color={"black"} fontWeight={"normal"}
                                        opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"A1 – beginner"}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"A1 – beginner"}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item style={{
                            padding: "10px",
                            width: "25px",
                            height: "25px",
                            background: "#FFCC00",
                            borderRadius: "50%"
                        }}>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px", marginTop: "-2px"}}>
                            <Grid container direction={"column"} justifyContent={"flex-start"}>
                                <CustomLabelHeaderLarge
                                    text={"Levels B1 and B2:"}
                                    color={"black"} fontWeight={"bold"}/>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"Advanced knowledge with which you can communicate in a differentiated way in everyday life and at work.\n" +
                                        ""}
                                        color={"black"} fontWeight={"normal"}
                                        opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"B1 – Advanced"}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"B1 – beginner"}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item style={{
                            padding: "10px",
                            width: "25px",
                            height: "25px",
                            background: "#FFCC00",
                            borderRadius: "50%"
                        }}>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px", marginTop: "-2px"}}>
                            <Grid container direction={"column"} justifyContent={"flex-start"}>
                                <CustomLabelHeaderLarge
                                    text={"Levels C1 and C2:"}
                                    color={"black"} fontWeight={"bold"}/>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"German at native speaker level, business fluent, and competent\n" +
                                        ""}
                                        color={"black"} fontWeight={"normal"}
                                        opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"C1 – Almost like native speakers"}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"C2 – You speak German at the very highest level"}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid container style={{marginTop: "20px"}} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Where can you learn German?"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"There are countless possibilities to learn German. Since in some cases a proof of German language skills is already necessary for obtaining a visa, you can and must of course already learn German in your home country.\n" +
                                ""}
                                color={"black"} fontWeight={"normal"}
                                opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
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
                                        text={"Best Exam Preparation with us"}
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
                                        text={"Exam Preparation with our center"}
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
                                        text={"Talk to one of our consultant today!"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5.5} container>
                            <img src={VisaPerson} style={{width: "100%"}}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "40px"}}>
                        <CustomLabelLabelMedium
                            text={"You can take an online course or attend a classroom course in many countries around the world. You can start with online courses, you can meet in a language cafe, you can compare various language courses. It will cost you time and in the end a lot of money. As with all training, the quality is crucial to whether you are successful afterwards or have simply paid apprenticeship money. With our many years of experience and cooperation with certified institutes, we only arrange suitable language courses that will bring you safely to your desired language level.\n" +
                            ""}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>

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

export default LanguageLessons;