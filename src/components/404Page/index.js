import Grid from "@mui/material/Grid/Grid";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../common/label";
import React from "react";
import Divider from "@mui/material/Divider/Divider";


const PageNotFound = () => {
    return (
        <Grid container alignItems={"center"} justifyContent={"center"} style={{height: "100vh"}} spacing={2}>
            <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                    <CustomLabelHeaderLarge
                        text={"404"}
                        color={"black"} fontWeight={"bold"}
                        opacity={1} lineHeight={1.7}/>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem style={{marginLeft:"10px"}}/>
                <Grid item style={{marginLeft:"10px"}}>
                    <CustomLabelLabelMedium
                        text={"Page not found"}
                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                        opacity={0.8} lineHeight={1.7}/>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default PageNotFound