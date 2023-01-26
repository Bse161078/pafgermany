import Paper from "@mui/material/Paper/Paper";
import Grid from "@mui/material/Grid/Grid";
import LearnGermanyIcon from "../../../assets/images/learn-german.webp";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../label";
import ArrowForwardIosIcon from "@mui/material/SvgIcon/SvgIcon";
import DiscoveringIcon from "../../../assets/images/discovering.webp";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

let languageLessonTitle,integrationCoursesTitle,discoverGermanyTitle,economyTitle,immigrationTitle,livingExpensesTitle,educationTitle,
    learnGermanyTitle;

const LivingContainer=(props)=>{
    const {hover, onLeave,onClick,type,selectedSubMenu} = props;
    const {selectedLanguage} = useSelector((state) => state.languageReducer);
    const [count,setCount]=useState(0);

    const loadConstant = async () => {
        ({
            languageLessonTitle,integrationCoursesTitle,discoverGermanyTitle,economyTitle,immigrationTitle,livingExpensesTitle,educationTitle,
            learnGermanyTitle
        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setCount(count+1);
    }

    useEffect(()=>{
        loadConstant();
    },[selectedLanguage])


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
                    <Grid item xs={5.8} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item style={{width:"100%"}}>
                            <img src={LearnGermanyIcon} style={{width: "100%",borderRadius:"20px"}}/>
                        </Grid>
                        <Grid item style={{marginLeft: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={learnGermanyTitle}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/learn-german',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={languageLessonTitle}
                                    color={selectedSubMenu==="/learn-german"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/integration-courses',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={integrationCoursesTitle}
                                    color={selectedSubMenu==="/integration-courses"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={0.4}></Grid>
                    <Grid item xs={5.8} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item style={{width:"100%"}}>
                            <img src={DiscoveringIcon} style={{width: "100%",borderRadius:"20px"}}/>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px"}}>
                            <CustomLabelHeaderLarge
                                text={discoverGermanyTitle}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/economy',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={economyTitle}
                                    color={selectedSubMenu==="/economy"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/immigration',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={immigrationTitle}
                                    color={selectedSubMenu==="/immigration"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/living-expenses',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={livingExpensesTitle}
                                    color={selectedSubMenu==="/living-expenses"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/education',type)}>
                                <CustomLabelLabelMedium
                                    text={educationTitle}
                                    color={selectedSubMenu==="/education"?"red":"black"}
                                    fontWeight={"bold"}
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