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


const TermsCondition = () => {
    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={11} md={6} container sx={{marginTop: {xs: "5px", md: "20px"}}}
                  justifyContent={"space-between"}>
                <Grid item container xs={12} direction={"column"} alignItems={"flex-start"}>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"General Terms and Conditions with customer information"}
                                color={"red"} fontWeight={"normal"}/>
                        </Grid>

                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Status: August 25, 2022contents"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● Scope of the General Terms"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● General information on offers and orders Ordering"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● process and contract"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● text and contract"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● language Payment methods and terms of payment"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● Digital content"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● Production and processing according to customer specifications"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● Copyright and usage rights"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● withdrawal"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● Warranty and liability"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"● Dispute settlement and consumer dispute settlement"}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"1 Scope of application of the General Terms"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"For the business relationship between PAF Portal for foreign skilled workers GmbH, Langenhorner Chaussee 155, 22415 Hamburg (hereinafter referred to as “Seller”) and the purchaser of the products and services of the Seller (hereinafter referred to as “Products ” or “goods”), the following general terms and conditions apply exclusively (hereinafter referred to as “GTC”).\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Deviating conditions of the customer are not recognized, even if the seller renders his service without objection, unless the seller expressly agrees to the validity of the customer’s deviating conditions.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"“Consumer” within the meaning of these terms and conditions is any natural person who concludes a legal transaction for purposes that can be attributed neither to their commercial nor their self-employed professional activity.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"“Entrepreneur” within the meaning of the General Terms and Conditions is a natural or legal person or a partnership with legal capacity who, when concluding a legal transaction, acts in the exercise of their commercial or independent professional activity.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"2 General information on offers and orders"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Customers are responsible for ensuring that the information they provide is correct and that any changes are communicated to the seller if they are necessary for the fulfillment of the contract. In particular, customers must ensure that the e-mail addresses provided are correct and that any prevention of receipt for which customers are responsible is taken into account accordingly (e.g. by checking the spam folder of the e-mail software used).\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Customers are asked to carefully read and observe the information provided during the registration process and, if necessary, to use the existing support functions of their software and hardware (e.g. enlargement or read-aloud functions). Required information is marked by the seller as such for the customer to be appropriately recognizable (e.g. by optical highlighting and/or asterisks). Until the registration and order is sent, customers can change and view the service selection and their entries at any time and go back in the ordering process or cancel the ordering process altogether. To do this, customers can use the usual functions of their software and/or end device that are available to them (e.g. the forward and back buttons of the browser or keyboard, mouse and gesture functions on mobile devices). Furthermore, undesired entries can be corrected by canceling the ordering process.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The customer can select from the services of PAF GmbH in the customer area and purchase them individually by clicking on the “Order now” button.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"By clicking on the button that completes the registration, the customer submits a binding offer to the seller to purchase the selected service.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"3 Conclusion of contract"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The seller can accept the customer’s offer within the acceptance period. The acceptance period is five days. The acceptance period begins with the completion of the registration or order process by the customer (in the customer area) and ends with the end of your last day. The seller can accept the customer’s offer by explicitly accepting the contract, also by e-mail. The acceptance can also take place through the dispatch of the goods and their receipt by the customer within the acceptance period, as well as through a payment request addressed to the customer by the seller and at the latest through the completion of the payment transaction. In the case of several acceptance processes, the earliest acceptance time is decisive. If the seller does not accept the customer’s offer within the acceptance period, no contract is formed and the customer is no longer bound to his offer.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"4 Contract text and contract language"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The seller saves the contract text and makes it available to the customer in text form (e.g. by e-mail or printed with the delivery of the order). The customer can print out the text of the contract before submitting the order to the seller by using the print function of his browser or the save function for websites in the last step of the order.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"If customers have created a customer account, they can view the orders placed in their account area. The full text of the contract is not accessible in the account area.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The contract languages ​​are German and English, contracts can be concluded in these languages.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"5 Types of payment and terms"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"When using financial institutions and other payment service providers, the terms and conditions and data protection information of the payment service provider also apply with regard to payment. Customers are asked to observe these regulations and instructions as well as information during the payment process. This in particular because the provision of payment methods or the payment procedure can also depend on the agreements between the customer and financial institutions and payment service providers (e.g. agreed spending limits, location-restricted payment options, verification procedures, etc.).\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The customer ensures that he fulfills the conditions incumbent on him that are necessary for successful payment using the selected payment method. This includes in particular the sufficient coverage of bank and other payment accounts, registration, legitimation and authorization for payment services as well as the confirmation of transactions.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"If a payment is not made or reversed due to insufficient funds in the customer’s account, incorrect bank details or an unjustified objection by the customer, the customer shall bear the resulting fees, provided that he is responsible for the failed or reversed booking and in the event a SEPA transfer was informed about the transfer in good time (so-called “pre-notification”).\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Credit card payment – When placing the order, customers provide their credit card details. The customer’s credit card will be charged immediately after completing the order and after the customer has been authorized as the legitimate cardholder\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Google Pay – The use of Google Pay requires registration for this payment method. The payment transaction is carried out on the basis of the Google Pay conditions, which are also communicated to the customer as part of the ordering process. Further information: https://pay.google.com.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"paydirekt – The use of paydirekt requires an online banking account activated by paydirekt. The payment transaction is carried out on the basis of the paydirekt conditions, which are also communicated to the customer as part of the ordering process. Further information: https://www.paydirekt.de.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Apple Pay – The use of Apple Pay requires registration for this payment method. The payment transaction is carried out on the basis of the Apple Pay conditions, which are also communicated to the customer as part of the ordering process. More information and conditions: https://www.apple.com/de/apple-pay/.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"secupay – The payment is made via the payment service provider secupay AG, Goethestraße 6, 01896 Pulsnitz, Germany (hereinafter: “secupay”) using the type of secupay payment provided or selected by the customer. The terms of use of secupay apply, which can be found at https://secupay.com/de can be viewed and communicated to the customer as part of the payment process. The payment methods “secupay credit card”, “secupay purchase on account” or “secupay direct debit” require a successful check of the customer’s creditworthiness by secupay. The seller assigns the payment claim to secupay. A debt-discharging payment can only be made to secupay in accordance with secupay’s conditions.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Skrill – The use of Skrill requires registration for this payment method. The payment transaction is carried out on the basis of Skrill’s conditions, which are also communicated to the customer as part of the ordering process. More information and conditions: https://www.skrill.com/de.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"Stripe – Depending on the payment method selected, the use of Stripe may require registration for this payment method. The payment transaction is carried out on the basis of Stripe’s conditions, which are also communicated to the customer as part of the ordering process. More information and conditions: https://stripe.com/de.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"6 Digital content"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"When using financial institutions and other payment service providers, the terms and conditions and data protection information of the payment service provider also apply with regard to payment. Customers are asked to observe these regulations and instructions as well as information during the payment process. This in particular because the provision of payment methods or the payment procedure can also depend on the agreements between the customer and financial institutions and payment service providers (e.g. agreed spending limits, location-restricted payment options, verification procedures, etc.).\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The customer ensures that he fulfills the conditions incumbent on him that are necessary for successful payment using the selected payment method. This includes in particular the sufficient coverage of bank and other payment accounts, registration, legitimation and authorization for payment services as well as the confirmation of transactions.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"7 Production and processing according to the customer’s specifications"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"If the contractual agreement between the contracting parties includes that the seller produces or processes the service to be delivered according to the customer’s specifications, the customer is obliged to provide the seller with the information and materials required to provide the service as well as acts of cooperation (hereinafter collectively referred to as “Participation”).\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The customer will be informed about his required participation in the context of the product description or the ordering process.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"When fulfilling its obligations to cooperate, the customer must observe the agreed format, the agreed transmission path and other agreed technical specifications\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The customer undertakes only to provide such information and materials as well as to carry out cooperative actions, the contractual processing of which by the seller does not violate the applicable law or the property rights of third parties. In particular, the customer undertakes to ensure that he has the necessary rights of use and disposal for the processing by the seller. The seller is not obliged to check the legality of the processing of the customer’s participation.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The customer indemnifies the seller, his employees and representatives from liability and/or claims from authorities or third parties that arise in connection with the cooperation of the customer and for which the customer is responsible. The exemption also includes all necessary and reasonable legal defense costs. Furthermore, the customer supports the seller in this case in defending against the claims through reasonable and necessary cooperation and information.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The seller is entitled, on the basis of a proper assessment, to reject processing orders, even after the conclusion of the contract, in which the seller can assume a violation of the applicable legal situation, third-party rights or morality (this applies in particular to youth-endangering, discriminatory, offensive or anti-constitutional information and materials).\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"8 Copyright and rights of use"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The products sold by the seller are protected by intellectual property rights (in particular trademark and copyright law). The rights of use and exploitation lie with the seller or the respective rights holders. Customers undertake to recognize and observe these intellectual property rights.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The customer receives the simple rights to use the purchased products for contractual purposes. Otherwise, the use and exploitation of the products is not permitted. In particular, the seller’s copyrighted products may not be reproduced, distributed, made publicly available or made available to third parties in any other way on the internet or intranets. Public reproduction, duplication or other further publication are not part of this contract and are therefore prohibited. Copyright notices, trademarks and other legal notices may not be removed from the products, unless this is necessary for the contractual use of the products or is permitted by law.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"If the products are subject to a specific usage license, customers will be informed of the usage license. In this case, the provisions of the usage license apply before these GTC.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"If the seller makes an advance payment, the rights of use are only granted to the customer on a provisional basis and only become effective when the customer has paid the purchase price for the relevant products in full.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"9 Cancellation"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"policy The information on the right of cancellation for consumers results from the seller’s cancellation policy.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The right of withdrawal does not apply to consumers who have their place of residence, habitual residence or delivery address outside of a member state of the European Union (EU) or the European Economic Area (EEA) at the time the contract is concluded and delivery and do not belong to any of these member states.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"10 Warranty and liability"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The warranty (liability for defects) is determined by statutory provisions, subject to the following provisions.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The seller may limit the warranty in the case of customers who are consumers if the seller has specifically informed the customers and the limitation of the warranty is expressly and separately agreed and this agreement is made available to the customer on a durable medium .\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The seller is not responsible for the customer’s internet connection, the software and hardware used by the customer or any disruptions to the establishment or execution of the contract between the customer and the seller caused by them.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The seller is liable without limitation for damages if the cause of the damage is based on intent or gross negligence. Furthermore, the seller is liable for the slightly negligent breach of essential obligations, the breach of which jeopardizes the achievement of the purpose of the contract, for the breach of obligations whose fulfillment makes the proper execution of the contract possible in the first place and on the observance of which the customer regularly relies (cardinal obligations) or in case of agreed guarantee promises. In this case, however, the seller is only liable for the foreseeable, contract-typical and expected damage. The seller is not liable for the slightly negligent breach of obligations other than those mentioned above. The above limitations of liability do not apply in the event of injury to life, limb or health, for a defect after the assumption of a guarantee for the quality of the product and for fraudulently concealed defects. Liability under the Product Liability Act remains unaffected. Insofar as the seller’s liability is excluded or limited, this also applies to the personal liability of employees, representatives and vicarious agents. Otherwise, claims for damages by the customer are excluded. The above liability regulations also apply to claims for damages by the customer within the framework of the seller’s statutory warranty.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The limitations of warranty and liability obligations and shortening of the relevant periods do not apply to claims for damages and reimbursement of expenses by customers, goods that have been used for a building in accordance with their normal use and have caused its defectiveness, as well as for existing updating obligations in the case of contracts for digital products.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"11 Arbitration and consumer dispute resolution"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid container style={{marginLeft: "15px"}}>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"The European Commission provides a platform for online dispute resolution (OS), which you can find at https://ec.europa.eu/consumers/odr/ . Consumers have the opportunity to use this platform to settle their disputes.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                            <Grid item>
                                <CustomLabelLabelMedium
                                    text={"We are not willing and not obliged to participate in a dispute settlement procedure before a consumer arbitration board.\n" +
                                    ""}
                                    color={"black"} fontWeight={"normal"}
                                    opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>
        </Grid>
    )
}

export default TermsCondition;