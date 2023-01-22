import Grid from "@mui/material/Grid/Grid";
import {CustomButtonLarge} from "../button";
import Divider from "@mui/material/Divider/Divider";
import MenuItem from "../menu-item";
import React from "react";
import {CustomLabelHeaderExtraLarge, CustomLabelHeaderLarge} from "../label";
import LineIcon from "../../../assets/images/line.png";
import DotIcon from "../../../assets/images/dot.png";


const PageHeaderContainerHome=(props)=>{
    const {title,details,subDetails}=props;
    return(
        <Grid container alignItems={"flex-start"} justifyContent={"center"} style={{zIndex: 1}}>
            <Grid item xs={9} container direction={"column"}>
                <Grid item>
                    <CustomLabelHeaderLarge text={"Start Planning Your New Dream"}/>
                </Grid>
                <Grid item style={{marginTop: "10px"}}>
                    <CustomLabelHeaderExtraLarge text={"Make the first step to a"}/>
                </Grid>
                <Grid item>
                    <CustomLabelHeaderExtraLarge text={"new life in "}>
                        <span style={{color: "#FFCC00"}}>Germany</span>
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
                <Grid item container style={{marginTop: "20px"}}>
                    <Grid item>
                        <CustomButtonLarge text={"Sign Up"} background={"red"} border={"2px solid red"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default PageHeaderContainerHome;