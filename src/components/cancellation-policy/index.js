import Grid from "@mui/material/Grid/Grid";
import React from "react";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../common/label";
import NursingDetail from "src/assets/images/nursing-detail.webp";
import NursingDetail1Image1 from "src/assets/images/nursing-des-img1.svg";
import NursingDetail1Image2 from "src/assets/images/nursing-des1-img2.svg";
import NursingDetail1Image3 from "src/assets/images/nursing-des1-img3.svg";
import NursingDetail2Image1 from "src/assets/images/nursing-des2-img.svg";
import NursingDetail2Image2 from "src/assets/images/nursing-des2-img2.svg";
import NursingTick from "src/assets/images/nursing-tick.webp";
import NursingImage3 from "src/assets/images/nursing-img3.webp";
import Paper from "@mui/material/Paper/Paper";
import NursingDetail4Image1 from "src/assets/images/nursing-des4-img1.svg";
import NursingDetail4Image2 from "src/assets/images/nursing-des4-img2.svg";
import NursingDetail4Image3 from "src/assets/images/nursing-des4-img3.svg";
import NursingDetail4Image4 from "src/assets/images/nursing-des4-img4.svg";
import NursingDetail4Image5 from "src/assets/images/nursing-des4-img5.svg";
import {CustomButtonLarge} from "../common/button";
import {CustomTextField} from "../common/text";


const CancellationPolicy = () => {
    return (
        <Grid container justifyContent={"center"} sx={{marginTop: {xs:"calc(50vh - 250px)",sm:"calc(50vh - 250px)",lg:"calc(50vh - 300px)"}}}>
            <Grid item xs={11} md={6} container sx={{marginTop: {xs:"5px",md:"20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} direction={"column"} alignItems={"flex-start"}>
                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Cancellation policy and cancellation form for consumers"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"“Consumer” within the meaning of this cancellation policy is any natural person who concludes a legal transaction for purposes that can be attributed predominantly neither to their commercial nor their self-employed professional activity.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>



                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Withdrawal"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"You have the right to withdraw from this contract within 14 days without giving a reason.\n" +
                                "The cancellation period is 14 days from the day on which you or a third party named by you who is not the carrier took possession of the last goods.\n" +
                                "In order to exercise your right of withdrawal, you must send us (PAF Portal für Auslande skilled workers GmbH, e-mail address: info@pafgermany.com, telephone number: +49 40 47 10 33-60) a clear statement (e.g. a letter sent by post letter or email) about your decision to withdraw from this contract. You can use the attached sample revocation form for this, but this is not mandatory.\n" +
                                "To meet the cancellation deadline, it is sufficient for you to send the communication regarding your exercise of the right of cancellation before the cancellation period has expired.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}} justifyContent={"center"} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Consequences of the revocation"}
                                color={"black"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"If you revoke this contract, we have all payments that we have received from you, including the delivery costs (with the exception of the additional costs resulting from the fact that you use a different type of delivery than the one offered by us, have chosen the cheapest standard delivery) immediately and at the latest within fourteen days from the day on which we received the notification of your cancellation of this contract. For this repayment, we use the same means of payment that you used in the original transaction, unless something else was expressly agreed with you; under no circumstances will you be charged fees for this repayment.\n"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"We may refuse repayment until we have received the goods back or until you have provided proof that you have returned the goods, whichever is earlier.\n"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"You must return or hand over the goods to us immediately and in any case no later than fourteen days from the day on which you inform us of the cancellation of this contract. The deadline is met if you send back the goods before the period of fourteen days has expired."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"You bear the direct costs of returning the goods.\n" +
                                "You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>

                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Exclusion or premature expiry of the right of cancellation\n"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"The right of cancellation does not apply to contracts for the delivery of goods that are not prefabricated and for the production of which an individual selection or determination by the consumer is decisive or which are clearly tailored to the personal needs of the consumer.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Sample Revocation"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"form (If you want to revoke the contract, please fill out this form and send it back.) To PAF Portal for foreign skilled workers GmbH, e-mail address: info@pafgermany.com I hereby revoke /we (*) the contract concluded by me/us (*) for the purchase of the following goods (*)/the provision of the following service (*) ______________________________________________________ ______________________________________________________ Ordered on (*) ____________ / received on (*) _________________ ________________________________________________________ Name of consumer(s) _______________________________________________________ Address of consumer(s) _______________________________________________________ Signature of consumer(s) (only if notification is on paper) _________________________ Date (*) Strike\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>





                </Grid>

            </Grid>
        </Grid>
    )
}

export default CancellationPolicy;