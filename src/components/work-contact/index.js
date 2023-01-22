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


const WorkContract = () => {
    return (
        <Grid container justifyContent={"center"} sx={{marginTop: {xs:"calc(50vh - 250px)",sm:"calc(50vh - 250px)",lg:"calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs:"5px",md:"20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>
                    <Grid item>
                        <CustomLabelHeaderLarge
                            text={"Your German Employment Contract"}
                            color={"red"} fontWeight={"bold"}/>
                    </Grid>


                    <Grid item style={{marginTop: "20px"}}>
                        <CustomLabelLabelMedium
                            text={"Once your qualifications have been successfully recognized, nothing stands in the way of your new employment relationship. In an employment relationship, your employment contract is your legal basis. If you are not sure, please contact us and we will check the legal aspects of your employment contract.\n" +
                            ""}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>



                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"The following points must be included in an employment contract in any case:"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"Name and address of the employer and the employee. Start date of the contract: the date on which your contract starts. Term: If your contract is for a fixed term, the end date must be stated. Probation period: duration of the probationary period with the definition of the notice period within the probationary period. Place of work: Where are the places of work for the fulfillment of your duties located Job description: What are your duties Salary: How much will you receive for your work, what bonuses or supplements will be paid, and when will the employee transfer your salary. When negotiating your salary, please keep in mind that in the standard case your salary is negotiated gross, your payment is then made net, i.e. after deduction of health, nursing care, pension and unemployment insurance. Working hours: Usually stated in hours per week Vacation: How many days of paid vacation are you entitled to per year? Period of notice: With what period of notice can you or your employer terminate the employment contract? Collective agreements and company agreements: Special regulations may apply in addition to your employment contract: In many areas, collective agreements apply or special works agreements apply. These must be referred to in the employment contract.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
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

export default WorkContract;