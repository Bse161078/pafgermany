import Grid from "@mui/material/Grid/Grid";
import {CustomLabelHeaderExtraLargeNav, CustomLabelHeaderLargeNav} from "../common/label";
import Divider from "@mui/material/Divider/Divider";
import React, {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const initSubMenu={workInGermany:false,liveInGermany:false}
const NavBarDetail=(props)=>{
    const {closeMenu,onClick}=props
    const [showSubMenu, setShowSubMenu] = useState(initSubMenu);

    const handleSubMenu=(type,value)=>{
        setShowSubMenu({...initSubMenu,[type]:value})
    }

    return(
        <Grid container justifyContent={"center"} style={{
            position: "fixed",
            top: 0,
            zIndex: 100,
            background: "white",
            width: "99vw",
            height: "100vh",
            overflow:"auto"
        }}>
            <Grid container item xs={11}>
                <Grid container direction={"column"}>
                    <Grid item container style={{marginTop: "10px"}} alignItems={"center"}>
                        <Grid item style={{cursor:"pointer"}} onClick={(e)=>onClick('/')}>
                            <CustomLabelHeaderExtraLargeNav
                                text={"Home"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item xs container justifyContent={"flex-end"}>
                            <Grid item style={{cursor:"pointer"}} onClick={(e)=>closeMenu()}>
                                <CloseIcon/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{
                        width: "100%",
                        marginTop: "10px",
                    }}/>
                    <Grid item container style={{marginTop: "10px"}} alignItems={"center"}>
                        <Grid item>
                            <CustomLabelHeaderExtraLargeNav
                                text={"Working in germany"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item xs container justifyContent={"flex-end"}>
                            <Grid item style={{cursor:"pointer"}}
                                  onClick={(e)=>handleSubMenu("workInGermany",!showSubMenu.workInGermany)}>
                                {!showSubMenu.workInGermany && <AddIcon/>}
                                {showSubMenu.workInGermany && <RemoveIcon/>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{
                        width: "100%",
                        marginTop: "10px",
                    }}/>
                    {showSubMenu.workInGermany &&
                    <Grid container style={{marginTop: "15px", marginLeft: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLargeNav
                                text={"Professionals"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>

                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item >
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/nursing')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Nursing"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>

                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/it-specialist')}>
                                <CustomLabelHeaderLargeNav
                                    text={"IT Specialist"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>

                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/engineering')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Engineering"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>

                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/physicians')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Physicians"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>


                        <Grid item style={{marginTop:"15px"}}>
                            <CustomLabelHeaderLargeNav
                                text={"Recognition"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/recognition')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Whats is recognition?"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/why-recognition')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Why you need recognition?"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/academic-qualifications')}>
                                <CustomLabelHeaderLargeNav

                                    text={"Academic qualifications"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>


                        <Grid item style={{marginTop:"15px"}}>
                            <CustomLabelHeaderLargeNav
                                text={"Working Environment"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/work-contract')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Work contract"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/salary-tax')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Salary, tax & social charges"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    }
                    <Grid item container style={{marginTop: "10px"}} alignItems={"center"}>
                        <Grid item >
                            <CustomLabelHeaderExtraLargeNav
                                text={"Living in germany"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item xs container justifyContent={"flex-end"} >
                            <Grid item style={{cursor:"pointer"}}
                                  onClick={(e)=>handleSubMenu("liveInGermany",!showSubMenu.liveInGermany)}>
                                {!showSubMenu.liveInGermany && <AddIcon/>}
                                {showSubMenu.liveInGermany && <RemoveIcon/>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{
                        width: "100%",
                        marginTop: "10px",
                    }}/>
                    {showSubMenu.liveInGermany &&
                    <Grid container style={{marginTop: "15px", marginLeft: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLargeNav
                                text={"Learn German"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/learn-german')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Language Lessons"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/integration-courses')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Integration Courses"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>



                        <Grid item style={{marginTop:"15px"}}>
                            <CustomLabelHeaderLargeNav
                                text={"Discover Germany"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/economy')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Economy"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/immigration')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Immigration"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/living-expenses')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Living Expenses & Salary"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}} container>
                            <Grid item>
                                <CustomLabelHeaderLargeNav
                                    text={"○"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                            <Grid item xs style={{marginLeft: "10px",cursor:"pointer"}}
                                  onClick={(e)=>onClick('/education')}>
                                <CustomLabelHeaderLargeNav
                                    text={"Education"}
                                    color={"black"} fontWeight={"normal"}/>
                            </Grid>
                        </Grid>

                    </Grid>
                    }

                    <Grid item container style={{marginTop: "10px"}} alignItems={"center"}>
                        <Grid item style={{cursor:"pointer"}} onClick={(e)=>onClick('/cost')}>
                            <CustomLabelHeaderExtraLargeNav
                                text={"Cost & Fees"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                    </Grid>
                    <Divider style={{
                        width: "100%",
                        marginTop: "10px",
                    }}/>

                    <Grid item container style={{marginTop: "10px"}} alignItems={"center"}>
                        <Grid item style={{cursor:"pointer"}} onClick={(e)=>onClick('/contact-us')}>
                            <CustomLabelHeaderExtraLargeNav
                                text={"Contact Us"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                    </Grid>
                    <Divider style={{
                        width: "100%",
                        marginTop: "10px",
                    }}/>

                    <Grid item container style={{marginTop: "10px"}} alignItems={"center"}>
                        <Grid item style={{cursor:"pointer"}} onClick={(e)=>onClick('/faq')}>
                            <CustomLabelHeaderExtraLargeNav
                                text={"FAQ"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                    </Grid>
                    <Divider style={{
                        width: "100%",
                        marginTop: "10px",
                    }}/>


                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavBarDetail;