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
import CostIcon from "src/assets/images/cost-icon.svg";


const CostFees = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={12} direction={"column"}>


                    <Grid container justifyContent={"space-between"}>
                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Document Recognition"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"Document preparation, processing, and submission to the authorities, as well as the follow-up and monitoring.\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"300 EURO"} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Job recruitment"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"we will find you a reliable pre-selected employer\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"Free"} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Document Translation (Optional)"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"you require to translate most of your documents. We are offering you that service through our certified translators in Germany.\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"35 Euro per page"} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Visa Cost"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"Visa costs vary from country to country and can cost between 50-150€, in many cases the costs are covered by the employer.\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"50-150 Euro"} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Visa support (Optional)"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"our dedicated team are specialized to support you by obtai...\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"78 Euro"} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Government Fees"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"Fees that you have to pay to the authorities & government vary depending on the chamber, authority, or organization\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"100-600 Euro"} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Flight Ticket"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"If your flight ticket is not covered by your employer, you need to refer to the daily flight ticket prices.\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"n.a"} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={"Accommodation"}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={"Most of the time your employer is covering your accommodation, If your accommodation is not covered by your employer, the average cost per bed\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={"12-25 Euro per day"} background={"red"} border={"2px solid red"}/>
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

export default CostFees;