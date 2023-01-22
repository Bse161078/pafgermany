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


const Economy = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Economy"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Trotz Pandemie betrug das Bruttoinlandsprodukt (BIP) in Deutschland im Jahr 2021 rund 3,5 Billionen Euro, was einem Wachstum um 2,9% im Vergleich zum Vorjahr entspricht. (Quelle Statista ) Mit einem soliden Mittelstand und einer etablierten Industrielandschaft gehört Deutschland seit Jahren zu den TOP5-Industrienationen weltweit und Platz eins in Europa. Um diese Wirtschaftskraft auch in Zukunft zu halten, werden Fachkräfte in sehr vielen Bereichen in Deutschland gesucht: im Gesundheitswesen, im Handwerk, im Tourismus, in der Gastronomie oder in der IT-Branche, um nur einige Bereiche zu nennen. Deutschland gilt auch weiterhin als Land mit großen Innovationen. Im Jahr 2021 wurden 58.568 Patentanmeldungen (Quelle statista.com) registriert. Auch das zeugt von einer stabilen Wirtschaft und einer weiterhin führenden Innovationskraft. Doch der Mangel an qualifizierten Nachwuchskräften ist die entscheidende Herausforderung. Ohne Zuwanderung von qualifizierten Fachkräften wir Deutschland auf langer Sicht seine führende Position in der Weltwirtschaft verlieren. Deutschland punktet mit seiner enorm guten Infrastruktur, seinem hoch entwickelten Unternehmens- und Dienstleistungssektor, seinem sozialen Bildungssystem und viele technologischen Innovationen.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Werde jetzt Teil und starte deine Registrierung."}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"The German success model"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"The German Mittelstand is synonymous with prosperity worldwide. In fact, 99% of all German companies are small and medium-sized enterprises. From a purely statistical point of view, only companies with fewer than 500 employees count as SMEs; in technical jargon, all owner-managed companies count as SMEs. Especially the 1,500 so-called hidden champions, companies that are among the top three in the world market of their industry, are part of the German Mittelstand. These companies are often little known and located in the provinces, but offer their employees a familiar and secure working environment. Furthermore, the German Mittelstand is characterized by great proximity to customers, and close personal relationships with suppliers, partners, and employees. And that is precisely why German SMEs are also the innovation engine of the economy. Here, there is traditional room for trial and error as a hands-on mentality and preferences for research and inventions. What are you waiting for? Take the first step to Germany now and register here\n" +
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

export default Economy;