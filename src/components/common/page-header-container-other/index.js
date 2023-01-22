import Grid from "@mui/material/Grid/Grid";
import {CustomButtonLarge} from "../button";
import Divider from "@mui/material/Divider/Divider";
import MenuItem from "../menu-item";
import React from "react";
import {CustomLabelHeaderExtraLarge, CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../label";
import LineIcon from "../../../assets/images/line.png";
import DotIcon from "../../../assets/images/dot.png";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const PageHeaderContainerOther=(props)=>{
    const {title,details,subDetails}=props;
    return(
        <Grid container alignItems={"flex-start"} justifyContent={"center"} sx={{zIndex: 1,marginTop:{xs:"20px",md:"40px"}}}>
            <Grid item xs={9} container direction={"column"}>
                <Grid item style={{marginTop: "10px"}}>
                    <CustomLabelHeaderExtraLarge text={title}/>
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
                <Grid item style={{marginTop: "20px"}}>
                    <Grid container alignItems={"center"} style={{padding:"20px 0px"}}>
                        <Grid item>
                            <HomeIcon style={{color:"white",fontSize:"32px"}}/>
                        </Grid>
                        <Grid item style={{marginLeft:"10px"}}>
                            <CustomLabelLabelMedium text={"Home"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginLeft:"10px"}}>
                            <ArrowForwardIcon style={{color:"white",fontSize:"24px"}}/>
                        </Grid>
                        <Grid item xs style={{marginLeft:"10px"}}>
                            <CustomLabelLabelMedium text={title} color={"#FFCC00"} fontWeight={"bold"}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default PageHeaderContainerOther;