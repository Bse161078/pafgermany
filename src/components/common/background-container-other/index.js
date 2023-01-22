import AirportIcon from "../../../assets/images/airport.png";
import Grid from "@mui/material/Grid/Grid";
import React from "react";


const BackgroundContainerOther=(props)=>{
    const {icon}=props;
    return(
        <Grid container sx={{width: "100vw", height: {xs:"50vh"}, position: "absolute", top: 0, zIndex: 0}}>
            <img src={icon} style={{width: "100%", height: "100%"}}/>
            <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(180deg, rgba(26, 26, 26, 0) 20%, rgba(26, 26, 26, 0.74) 87.48%)",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                transform: "matrix(1, 0, 0, -1, 0, 0)",
                zIndex: 0, position: "absolute"
            }}></div>
        </Grid>
    )
}

export default BackgroundContainerOther;