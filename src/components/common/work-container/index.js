import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import ProfessionalsIcon from "../../../assets/images/professionals.png";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../label";
import ArrowForwardIosIcon from "@mui/material/SvgIcon/SvgIcon";
import RecongnitionIcon from "../../../assets/images/receongnition.png";
import BusinessIcon from "../../../assets/images/business.png";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


let professionalsTitle,nursingTitle,itSpecialistTitle,engineeringTitle,physiciansTitle,scientistTitle,recognitionTitle,whatRecognitionTitle,
    whyRecognitionTitle,academicQualificationTitle,workEnvTitle,workContractTitle,salaryTaxSocialTitle;


const WorkContainer = (props) => {
    const {hover, onLeave,onClick,type,selectedSubMenu} = props;
    const {selectedLanguage} = useSelector((state) => state.languageReducer);
    const [count,setCount]=useState(0);

    const loadConstant = async () => {
        ({
            professionalsTitle,nursingTitle,itSpecialistTitle,engineeringTitle,physiciansTitle,scientistTitle,recognitionTitle,whatRecognitionTitle,
            whyRecognitionTitle,academicQualificationTitle,workEnvTitle,workContractTitle,salaryTaxSocialTitle
        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setCount(count+1);
    }

    useEffect(()=>{
        loadConstant();
    },[selectedLanguage])



    return (
        <Grid container sx={{
            position: "absolute",
            zIndex: 10,
            display: hover.work ? "block" : "none",
            filter:"blur(0px)"
        }}
              onMouseLeave={() => onLeave && onLeave("work")}
        >
            <Grid item sx={{position: "relative", top: 25, left: {md: "80px", lg: "160px"}}}>
                {/*<ArrowDropUpIcon style={{color: "white", fontSize: "48px"}}/>*/}
            </Grid>
            <Paper style={{padding: "20px", background: "white", borderRadius: "20px"}}>
                <Grid container justifyContent={"space-between"} alignItems={"flex-start"}>
                    <Grid item xs={3.8} container direction={"column"} alignItems={"flex-start"}>
                        <Grid item>
                            <img src={ProfessionalsIcon} style={{width: "100%"}}/>
                        </Grid>
                        <Grid item style={{marginLeft: "5px"}}>
                            <CustomLabelHeaderLarge
                                text={professionalsTitle}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/nursing',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={nursingTitle}
                                    color={selectedSubMenu==="/nursing"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/it-specialist',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={itSpecialistTitle}
                                    color={selectedSubMenu==="/it-specialist"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/engineering',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={engineeringTitle}
                                    color={selectedSubMenu==="/engineering"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/physicians',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={physiciansTitle}
                                    color={selectedSubMenu==="/physicians"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/scientists',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={scientistTitle}
                                    color={selectedSubMenu==="/scientists"?"red":"black"}
                                    fontWeight={"bold"}
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
                                text={recognitionTitle}
                                color={"black"}
                                fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"flex-start"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/recognition',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={whatRecognitionTitle}
                                    color={selectedSubMenu==="/recognition"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/why-recognition',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={whyRecognitionTitle}
                                    color={selectedSubMenu==="/why-recognition"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/academic-qualifications',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={academicQualificationTitle}
                                    color={selectedSubMenu==="/academic-qualifications"?"red":"black"}
                                    fontWeight={"bold"}
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
                                text={workEnvTitle}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/work-contract',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={workContractTitle}
                                    color={selectedSubMenu==="/work-contract"?"red":"black"}
                                    fontWeight={"bold"}
                                    opacity={0.8} lineHeight={1.7} textAlign={"justify"}/>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}
                              style={{marginTop: "10px", marginLeft: "5px"}}>
                            <Grid item>
                                <ArrowForwardIosIcon sx={{fontSize: {xs: "12px", lg: "18px"}}}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "5px",cursor:"pointer"}} onClick={(e)=>onClick('/salary-tax',type)}>
                                <CustomLabelLabelMedium
                                    className={"hoverRedLabel"}
                                    text={salaryTaxSocialTitle}
                                    color={selectedSubMenu==="/salary-tax"?"red":"black"}
                                    fontWeight={"bold"}
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