import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import React from "react";


const CustomButtonLarge = (props) => {
    return (
        <Button
            sx={{padding:{xs:"10px 20px",md:"10px 30px"}}}
            disabled={props.disabled}
            style={{
                background: props.background || '#4E20EA', width: "100%", opacity: props.disabled ? 0.8 : 1,
                borderRadius: 10, fontSize: 13, fontWeight: 'bold',borderColor:props.borderColor,
                fontFamily: 'Poppins', textTransform: 'none',border:props.border
            }}
            variant="contained"

        >
            <Typography
                sx={{
                    fontSize: {xs: "10px",sm:"14px",md:"10px",lg:"13px",xlg:"17px"},
                    fontWeight:"bold"
                }}
                style={{
                    color: props.color || 'white',
                    fontFamily: 'Poppins',
                }}>
                {props.text}
            </Typography></Button>)
}



const CustomButtonLargeWithIcon = (props) => {
    return (
        <Button
            sx={{padding:{xs:"10px 20px",md:"10px 30px"}}}
            disabled={props.disabled}
            style={{
                background: props.background || '#4E20EA', width: "100%", opacity: props.disabled ? 0.8 : 1,
                borderRadius: 10, fontSize: 13, fontWeight: 'bold',borderColor:props.borderColor,
                fontFamily: 'Poppins', textTransform: 'none',border:props.border
            }}
            variant="contained"

        >
            <img src={props.icon}/>
            <Typography
                sx={{
                    fontSize: {xs: "10px",sm:"14px",md:"10px",lg:"13px",xlg:"15px"},
                    fontWeight:"bold"
                }}
                style={{
                    color: props.color || 'white',
                    fontFamily: 'Poppins',
                }}>
                {props.text}
            </Typography></Button>)
}





const CustomButtonSmall = (props) => {
    return (
        <Button
            sx={{padding:{xs:"10px 15px 10px 15px"}}}
            disabled={props.disabled}
            style={{
                background: props.background || '#4E20EA', width: "100%", opacity: props.disabled ? 0.8 : 1,
                borderRadius: 20, fontSize: 13, fontWeight: 'bold',borderColor:props.borderColor,
                fontFamily: 'SF UI Text Bold', textTransform: 'none',border:props.border
            }}
            variant="contained"

        >
            <Typography
                sx={{
                    fontSize: {xs: "12px",sm:"15px",md:"17px"},
                }}
                style={{
                    color: props.color || 'white',
                    fontFamily: 'SF UI Text Bold',
                }}>
                {props.text}
            </Typography></Button>)
}


const ButtonWithoutBackground = (props) => {
    return (
        <Button
            sx={{padding:{xs:"10px 15px 10px 15px"}}}
            disabled={props.disabled}
            style={{
                background: "transparent", width: "100%", opacity: props.disabled ? 0.8 : 1,
                borderRadius: 20, fontSize: 13, fontWeight: 'bold',borderColor:props.borderColor,
                fontFamily: 'Poppins', textTransform: 'none',border:"1px solid red"
            }}
            variant="contained"

        >
            <Typography
                sx={{
                    fontSize: {xs: "12px",sm:"15px",md:"17px"},
                }}
                style={{
                    color: props.color || 'white',
                    fontFamily: 'Poppins',
                }}>
                {props.text}
            </Typography></Button>)
}


export {CustomButtonLarge,CustomButtonSmall,CustomButtonLargeWithIcon}