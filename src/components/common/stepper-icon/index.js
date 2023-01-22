import TickIcon from "src/assets/images/tick.png";
import TranslateIcon from "src/assets/images/translate.png";
import Stepper3Icon from 'src/assets/images/stepper-3.png';
import NotificationIcon from 'src/assets/images/notification.png';
import SearchIcon from 'src/assets/images/search.png';
import Step6Icon from 'src/assets/images/step6.png';
import BankIcon from 'src/assets/images/bank.png';

import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";
import React from "react";

const StepperIcon=(props)=>{
    const { active, completed, className,icon,color } = props;


    let SelectedStepperImage;


    if(icon===1){
        SelectedStepperImage=TickIcon;
    }else if(icon===2){
        SelectedStepperImage=TranslateIcon;
    }else if(icon===3){
        SelectedStepperImage=Stepper3Icon;
    }else if(icon===4){
        SelectedStepperImage=NotificationIcon;
    }else if(icon===5){
        SelectedStepperImage=SearchIcon;
    }else if(icon===6){
        SelectedStepperImage=Step6Icon;
    }else if(icon===7){
        SelectedStepperImage=BankIcon;
    }

    return (
        <Grid item container sx={{padding:{xs:"5px",sm:"5px 15px 5px 15px",md:"20px"},background:color,borderRadius:"50%"}} alignItems={"center"}  justifyContent={"center"}>
        <Box component={"img"} sx={{width:{xs:"15px",sm:"20px",md:"35px"},height:{xs:"15px",sm:"35px"}}} src={SelectedStepperImage}/>
        </Grid>
    );
}


export default StepperIcon;