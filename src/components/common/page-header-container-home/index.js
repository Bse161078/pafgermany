import Grid from "@mui/material/Grid/Grid";
import {CustomButtonLarge} from "../button";
import Divider from "@mui/material/Divider/Divider";
import MenuItem from "../menu-item";
import React, {useEffect, useState} from "react";
import {CustomLabelHeaderExtraLarge, CustomLabelHeaderLarge} from "../label";
import LineIcon from "../../../assets/images/line.png";
import DotIcon from "../../../assets/images/dot.png";
import {useDispatch, useSelector} from "react-redux";


let startPlanningTitle,makeStepTitle,neLifeTitle,germanyTitle,signUpTitle;

const PageHeaderContainerHome=(props)=>{
    const {title,details,subDetails,type,userId,onClick}=props;

    const dispatch = useDispatch();
    const {selectedLanguage} = useSelector((state) => state.languageReducer);
    const [loading, setLoading] = useState(false);
    const [count,setCount]=useState(0);


    const loadConstant = async () => {
        setLoading(true);
        ({
            startPlanningTitle,makeStepTitle,neLifeTitle,germanyTitle,signUpTitle
        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setLoading(false);
        setCount(count+1)
    }

    useEffect(()=>{
        loadConstant();
    },[selectedLanguage])



    return(
        <Grid container alignItems={"flex-start"} justifyContent={"center"} style={{zIndex: 1,position:"relative"}}>
            <Grid item xs={9} container direction={"column"}>
                <Grid item>
                    <CustomLabelHeaderLarge text={startPlanningTitle}/>
                </Grid>
                <Grid item style={{marginTop: "10px"}}>
                    <CustomLabelHeaderExtraLarge text={makeStepTitle}/>
                </Grid>
                <Grid item>
                    <CustomLabelHeaderExtraLarge text={neLifeTitle+" "}>
                        <span style={{color: "#FFCC00"}}>{germanyTitle}</span>
                    </CustomLabelHeaderExtraLarge>
                </Grid>
                <Grid item container style={{marginTop: "5px"}} spacing={1}>
                    <Grid item>
                        <img src={LineIcon} style={{width: "72px"}}/>
                    </Grid>
                    <Grid item>
                        <img src={DotIcon}/>
                    </Grid>
                    <Grid item>
                        <img src={DotIcon}/>
                    </Grid>
                    <Grid item>
                        <img src={DotIcon}/>
                    </Grid>
                </Grid>
                {!userId &&
                    <Grid item container style={{marginTop: "20px"}}>
                        <Grid item onClick={(e) => onClick("register")}>
                            <CustomButtonLarge text={signUpTitle} background={"red"} border={"2px solid red"}/>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Grid>
    )
}


export default PageHeaderContainerHome;