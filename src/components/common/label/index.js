import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import React from "react";




const CustomLabelHeaderExtraLargeNav = (props) => {
    return (
        <Typography
            sx={{
                fontSize: {xs:"24px"},
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
                textAlign:props.textAlign,
                fontWeight:props.fontWeight,
                lineHeight: 1.2
            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}


const CustomLabelHeaderLargeNav = (props) => {
    return (
        <Typography
            sx={{
                fontSize: {xs:"18px"},
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
                textAlign:props.textAlign,
                fontWeight:props.fontWeight,
                lineHeight: 1.2
            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}


const CustomLabelHeaderExtraLarge = (props) => {
    return (
        <Typography
            sx={{
                fontSize: {xs:"18px",md:"32px",lg:"52px"},
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
                textAlign:props.textAlign,
                fontWeight:"bold",
                lineHeight: 1.2
            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}


const CustomLabelHeaderLarge1 = (props) => {
    return (
        <Typography
            sx={{
                fontSize: {xs:"18px",md:"32px",lg:"42px"},
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
                textAlign:props.textAlign,
                fontWeight:"bold",
                lineHeight: 1.2
            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}

const CustomLabelHeaderLarge = (props) => {
    return (
        <Typography
            sx={{
                fontSize: {xs:"14px",md:"15px",lg:"24px"},
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
                textAlign:props.textAlign,
                fontWeight:props.fontWeight,
                opacity:props.opacity
            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}


const CustomLabelHeader = (props) => {
    return (
        <Typography
            sx={{
                fontSize: {xs:"8px",sm:"11px",md:"11px",lg:"15px",xlg:"17px"},
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
                fontWeight:props.fontWeight,
                opacity:props.opacity,
                textDecoration:props.textDecoration
            }}>
            {props.text}
        </Typography>
    )
}


const CustomLabelHeaderSmall = (props) => {
    return (
        <Typography
            sx={{
                fontSize: "12px",
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
                textAlign:"justify",
                opacity:props.opacity || "100%"

            }}>
            {props.text}
        </Typography>
    )
}


const CustomLabelLabelSmall = (props) => {
    return (
        <Typography
            sx={{
                fontSize: "12px",
                color: props.color || "#FFFFFF",
                fontFamily: 'SF UI Text Regular',
                opacity:props.opacity || "100%",
                width:props.isSingleLine && "calc(95%)",
                overflow:props.isSingleLine && "hidden",
                whiteSpace:props.isSingleLine && "nowrap",
                textOverflow: props.isSingleLine && "ellipsis"

            }}>
            {props.text}
        </Typography>
    )
}

const CustomLabelLabelLarge = (props) => {
    return (
        <Typography
            sx={{
                fontSize: "17px",
                color: props.color || "#FFFFFF",
                fontFamily: 'Poppins',
            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}

const CustomLabelLabelMedium = (props) => {
    return (
        <Typography
            display={props.inline}
            className={props.className}
            sx={{
                fontSize: {xs:"10px",sm:"10",md:"12px",lg:"16px"},
                color: props.color || "#FFFFFF",
                fontFamily: props.boldFont?'Poppins':"Poppins",
                opacity:props.opacity || "100%",
                textAlign:props.textAlign,
                width:props.isSingleLine && "90%",
                overflow:props.isSingleLine && "hidden",
                fontWeight:props.fontWeight,
                lineHeight:props.lineHeight || 1.1,
            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}


const CustomLabelLabelSmallHeader = (props) => {
    return (
        <Typography
            display={props.inline}
            sx={{
                fontSize: {md:"12px",xs:"9px",sm:"10px"},
                color: props.color || "#FFFFFF",
                fontFamily: props.fontNormal?"Poppins":'Poppins',
                opacity:props.opacity || "100%",
                width:props.isSingleLine && "calc(95%)",
                overflow:props.isSingleLine && "hidden",
                whiteSpace:props.isSingleLine && "nowrap",
                textOverflow: props.isSingleLine && "ellipsis",
                textAlign:props.textAlign

            }}>
            {props.text}
            {props.children}
        </Typography>
    )
}


const CustomLabelLabelSmallMedium = (props) => {
    return (
        <Typography
            sx={{
                fontSize: {xs:"10px",sm:"10",md:"12px",lg:"14px"},
                color: props.color || "#FFFFFF",
                fontFamily: props.boldFont?'Poppins':"Poppins",
                opacity:props.opacity || "100%",
                textAlign:props.textAlign,
                width:props.isSingleLine && "90%",
                overflow:props.isSingleLine && "hidden",
                fontWeight:props.fontWeight,
                lineHeight:props.lineHeight || 1.1,
            }}>
            {props.text}
        </Typography>
    )
}

export {
    CustomLabelHeader,CustomLabelLabelSmallMedium,CustomLabelHeaderLarge1,CustomLabelHeaderLargeNav,
    CustomLabelHeaderExtraLarge,CustomLabelHeaderSmall,CustomLabelLabelSmall,CustomLabelHeaderExtraLargeNav,
    CustomLabelLabelLarge,CustomLabelLabelMedium,CustomLabelHeaderLarge,CustomLabelLabelSmallHeader
}