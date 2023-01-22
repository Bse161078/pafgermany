import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import ProfessionalsIcon from "../../../assets/images/professionals.png";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../label";
import ArrowForwardIosIcon from "@mui/material/SvgIcon/SvgIcon";
import RecongnitionIcon from "../../../assets/images/receongnition.png";
import BusinessIcon from "../../../assets/images/business.png";
import React from "react";


const WorkContainer = (props) => {
    const {hover, onLeave,onClick} = props;
    return (
        <Grid container sx={{
            position: "absolute",
            zIndex: 2,
            display: hover.work ? "block" : "none"
        }}
              onMouseLeave={() => onLeave && onLeave("work")}
        >
            <Grid item sx={{position: "relative", top: 25, left: {md: "80px", lg: "160px"}}}>
                {/*<ArrowDropUpIcon style={{color: "white", fontSize: "48px"}}/>*/}
            </Grid>
            <Paper style={{padding: "20px", background: "white", borderRadius: "20px"}}>
                <Grid container justifyContent={"space-between"}>
                    <Grid item xs={3.8} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item>
                            <img src={ProfessionalsIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marginLeft: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Professionals"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/nursing')}>
                                <CustomLabelLabelMedium
                                    text={"Nursing"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/it-specialist')}>
                                <CustomLabelLabelMedium
                                    text={"IT Specialist"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/engineering')}>
                                <CustomLabelLabelMedium
                                    text={"Engineering"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/physicians')}>
                                <CustomLabelLabelMedium
                                    text={"Physicians"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/scientists')}>
                                <CustomLabelLabelMedium
                                    text={"Scientists"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3.8} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item>
                            <img src={RecongnitionIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Recognition"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/recognition')}>
                                <CustomLabelLabelMedium
                                    text={"Whats is recognition?"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/why-recognition')}>
                                <CustomLabelLabelMedium
                                    text={"Why you need recognition?"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/academic-qualifications')}>
                                <CustomLabelLabelMedium
                                    text={"Academic qualifications"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3.8} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item>
                            <img src={BusinessIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marginLeft: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Working Environment"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/work-contract')}>
                                <CustomLabelLabelMedium
                                    text={"Work contract"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/salary-tax')}>
                                <CustomLabelLabelMedium
                                    text={"Salary, tax & social charges"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default WorkContainer;