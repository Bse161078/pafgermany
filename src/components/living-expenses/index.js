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


const LivingExpenses = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Gross is not the same as net"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Mit einem sozialversicherungspflichtigen Arbeitsplatz wirst du automatisch sozialversichert. Das heißt, dass du Beiträge an die Rentenkasse, Arbeitslosen-, Kranken- und Pflegeversicherung abführst. Die Beiträge gehen direkt von deinem Gehalt ab und werden von deinem Arbeitgeber an die Institutionen überwiesen. Ebenfalls automatisch wird deine Lohnsteuer von deinem Gehalt an das Finanzamt abgeführt. Somit ergibt sich eine Differenz zwischen deinem im Arbeitsvertrag verhandelten Bruttogehalt und deinem ausgezahlten Gehalt, welches auch als Nettogehalt bezeichnet wird. Die Höhe der Beiträge sind abhängig von deinem Einkommen, Bundesland, Steuerklasse, Krankenkasse und Familienstand. Dein Arbeitgeber zahlt dazu auch noch einen Beitrag in die Sozialversicherung für dich ein, diese Beiträge deines Arbeitgeber sind nicht Teil deines Gehalts. Wenn du vorab wissen möchtest, wie hoch dein Netto-Gehalt ausfällt, kannst du das mit einem Brutto-Netto-Rechner berechnen.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Working hours, vacation & holidays"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"The average workweek for full-time employed workers was 41 hours in 2019. Of course, actual working hours depend on the occupation, employer, and negotiated contract or any collective bargaining agreement that governs working conditions for entire industries. On average, employers in Germany grant their employees 28 days of vacation. Here, too, the entitlement varies according to profession, age and employer. In addition to the vacation entitlement, there are also public holidays, which in turn vary according to state and year. Bavaria and Baden-Württemberg have the most public holidays, while the northern states have only 10.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Cost of living in Germany"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"The cost of living varies greatly, influenced primarily by where you live and the cost of renting or maintaining your home. For example, costs in metropolitan areas and large cities are clearly at a different level than in rural areas. In 2020, the average cost of living was €2,507 per household per month, of which around 37% was for housing and energy costs. In Germany, there is a pronounced discounter market competition for food, which ensures that despite rising prices, the pure food prices remain moderate in European comparison. Would you like to take your chance in Germany now? Then your first step is quickly made with registration. We will check the recognition of your qualification and, if you wish, we will support you in all further steps!\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Cost of living in Germany"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"Albert Einstein once said, “The best things in life are not those that money can buy.” That may well be true. However, in 2019, Germans spent an average of €2,574.00 per household per month on all utility costs. Most money was spent on housing, energy and home maintenance (€890.00). These were followed But leisure and culture are not neglected either: every month, Germans spend € 284.00 on activities such as sports and visits to the cinema.\n" +
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

export default LivingExpenses;