import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import {makeStyles} from "@mui/styles";
import TextField from "@mui/material/TextField/TextField";
import React from "react";
import Box from "@mui/material/Box/Box";


const useStyles = makeStyles(() => ({

    root: {
        "& .MuiLinearProgress-colorPrimary": {
            backgroundColor: "#E5E5E5",
        },
        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#FF0000",
            height:"8px",
        },"& .MuiLinearProgress-root": {
            height:"8px",
            borderRadius:"5px"
        }
    }
}));


const ProgressBar = (props) => {
    const classes = useStyles();
    const {progress}=props;

    return (
        <Box sx={{width: '100%'}} className={classes.root}>
            <LinearProgress value={progress} variant="determinate"
            />
        </Box>
    )
}

export default ProgressBar;