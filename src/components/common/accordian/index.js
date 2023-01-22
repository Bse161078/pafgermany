import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../label";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import Grid from "@mui/material/Grid/Grid";
import React from "react";
import AddIcon from '@mui/icons-material/Add';


const CustomAccordian=(props)=>{
    const {title,description}=props;
    return(
        <Accordion style={{background:"#F5F5F5"}}>
            <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <CustomLabelHeaderLarge text={title} color={"black"} fontWeight={"bold"}/>
            </AccordionSummary>
            <AccordionDetails>
                <CustomLabelLabelMedium
                    text={description}
                    color={"black"}
                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordian