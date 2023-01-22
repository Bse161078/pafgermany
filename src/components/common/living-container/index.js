import Paper from "@mui/material/Paper/Paper";
import Grid from "@mui/material/Grid/Grid";
import LearnGermanyIcon from "../../../assets/images/learn-german.webp";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../label";
import ArrowForwardIosIcon from "@mui/material/SvgIcon/SvgIcon";
import DiscoveringIcon from "../../../assets/images/discovering.webp";
import React from "react";


const LivingContainer=(props)=>{
    const {hover, onLeave,onClick} = props;

    return(
        <Grid container sx={{
            position: "absolute",
            zIndex: 2,
            display: hover.living ? "block" : "none"
        }}
              onMouseLeave={() => onLeave && onLeave("living")}
        >
            {/*<Grid item sx={{position: "relative", top: 25, left: {md: "80px", lg: "160px"}}}>*/}
            {/*<ArrowDropUpIcon style={{color: "white", fontSize: "48px"}}/>*/}
            {/*</Grid>*/}
            <Paper style={{padding: "20px", background: "white", borderRadius: "20px"}}>
                <Grid container>
                    <Grid item xs={5} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item>
                            <img src={LearnGermanyIcon} style={{width: "100%",borderRadius:"20px"}}/>
                        </Grid>
                        <Grid item style={{marginLeft: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Learn German"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/learn-german')}>
                                <CustomLabelLabelMedium
                                    text={"Language Lessons"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/integration-courses')}>
                                <CustomLabelLabelMedium
                                    text={"Integration Courses"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item>
                            <img src={DiscoveringIcon} style={{width: "100%",borderRadius:"20px"}}/>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={"Discover Germany"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/economy')}>
                                <CustomLabelLabelMedium
                                    text={"Economy"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/immigration')}>
                                <CustomLabelLabelMedium
                                    text={"Immigration"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/living-expenses')}>
                                <CustomLabelLabelMedium
                                    text={"Living Expenses & Salary"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/education')}>
                                <CustomLabelLabelMedium
                                    text={"Education"}
                                    color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Paper>
        </Grid>
    )
}

export default LivingContainer;