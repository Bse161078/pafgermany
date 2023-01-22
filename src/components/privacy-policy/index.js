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


const PrivacyPolicy = () => {
    return (
        <Grid container justifyContent={"center"} sx={{marginTop: {xs:"calc(50vh - 250px)",sm:"calc(50vh - 250px)",lg:"calc(50vh - 300px)"}}}>
            <Grid item xs={11} md={6} container sx={{marginTop: {xs:"5px",md:"20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} direction={"column"} alignItems={"flex-start"}>
                    <Grid item>
                        <CustomLabelHeaderLarge
                            text={"Data Protection"}
                            color={"red"} fontWeight={"bold"}/>
                    </Grid>



                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Declaration Introduction"}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"With the following data protection declaration, we would like to inform you about what types of your personal data (hereinafter also referred to as “data”) we process for which purposes and to what extent. The data protection declaration applies to all processing of personal data carried out by us, both as part of the provision of our services and in particular on our websites, in mobile applications and within external online presences, such as our social media profiles (hereinafter collectively referred to as “online offer”). The terms used are not gender specific. As of August 25, 2022\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}} justifyContent={"center"} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Table of Contents"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={"Introduction"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Responsible person"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Overview of processing"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Relevant legal bases"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Security measures"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Introduction"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Transmission of personal data"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Data processing in third countries"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Deletion of data"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Use of cookies"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Business services"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Payment"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Procedure Provision of the online offer and web hosting"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Registration, registration and user account"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Contact and inquiry"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Web analysis, monitoring and optimization"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Marketing"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Presence in social networks (Social Media)"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Plugins and embedded functions as well as content"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Changing and updating the data protection"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={"Rights of the persons concerned"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>

                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Responsible person"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"Babak Wethr Authorized"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"representatives:Frank Buddenhagen E-mail address: info@pafgermany.com Imprint: www.pafgermany.com/impressum\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>

                    </Grid>



                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Overview of the processing"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"The following Overview summarizes the types of data processed and the purposes of their processing and refers to the data subjects.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Types of Data Processed"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"Inventory Data."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Payment details."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Contact details."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"content data."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"contract data."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"usage data."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Meta/Communication Data."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Categories of Data Subjects"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"Inventory Data."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Interested persons."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Communication partner."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Business and contractual partners."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Pupils/ students/ participants."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Purposes of processing"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"Provision of contractual services and customer service."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Contact Requests and Communication."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Safety measures."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Range measurement."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Office and organizational procedures."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Management and response to inquiries."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Profiles with user-related information."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Provision of our online offer and user-friendliness."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Information technology infrastructure."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Relevant legal bases"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"Below you will find an overview of the legal bases of the GDPR, on the basis of which we process personal data. Please note that, in addition to the provisions of the GDPR, national data protection regulations may apply in your or our country of residence or domicile. If more specific legal bases are relevant in individual cases, we will inform you of them in the data protection declaration."}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid item container style={{marginTop:"40px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Consent (Art. 6 Para. 1 S. 1 lit. a) GDPR)-"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={"The person concerned has given their consent to the processing of their personal data for a specific purpose or several specific purposes."}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Contract and pre-contractual inquiries (Art. 6 Para. 1 S. 1 lit. b) GDPR)-"}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={"The processing is necessary for the fulfillment of a contract to which the data subject is party, or for the implementation of pre-contractual measures which are required at the request of the data subject take place."}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>

                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Legal obligation (Art. 6 Para. 1 S. 1 lit. c) GDPR)- "}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={"The processing is necessary to fulfill a legal obligation to which the person responsible is subject."}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>

                        <Grid item>
                            <CustomLabelLabelMedium
                                text={"Legitimate interests (Art. 6 Para. 1 S. 1 lit. f) GDPR)- "}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={"Processing is necessary to safeguard the legitimate interests of the person responsible or a third party, unless the interests or fundamental rights and freedoms of the data subject, which protect personal Data require prevail.\n" +
                                        "In addition to the data protection regulations of the General Data Protection Regulation, national data protection regulations apply in Germany. This includes in particular the law on the protection against misuse of personal data in data processing (Federal Data Protection Act – BDSG). In particular, the BDSG contains special regulations on the right to information, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes and transmission, as well as automated decision-making in individual cases, including profiling. Furthermore, it regulates data processing for the purposes of the employment relationship (§ 26 BDSG), in particular with regard to the establishment, implementation or termination of employment relationships and the consent of employees. Furthermore, state data protection laws of the individual federal states may apply.\n" +
                                        "\n"}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>


                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Security measures"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"We take appropriate technical and organizational measures in accordance with the legal requirements, taking into account the state of the art, the implementation costs and the type, scope, circumstances and purposes of the processing as well as the different probabilities of occurrence and the extent of the threat to the rights and freedoms of natural persons Measures to ensure a level of protection appropriate to the risk. The measures include, in particular, securing the confidentiality, integrity and availability of data by controlling physical and electronic access to the data as well as access, input, disclosure, securing availability and their separation. Furthermore, we have set up procedures that ensure the exercise of data subject rights, the deletion of data and reactions to data threats. Furthermore, we already take the protection of personal data into account during the development or selection of hardware, software and processes in accordance with the principle of data protection, through technology design and through data protection-friendly default settings. Shortening of the IP address: If IP addresses are processed by us or by the service providers and technologies used and the processing of a complete IP address is not necessary, the IP address will be shortened (also referred to as “IP masking”). The last two digits or the last part of the IP address after a point are removed or replaced by placeholders. The purpose of shortening the IP address is to prevent or make it much more difficult to identify a person based on their IP address. SSL encryption (https): In order to protect your data transmitted via our online offer, we use SSL encryption. You can recognize such encrypted connections by the prefix https:// in the address line of your browser.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Transmission of personal data"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"As part of our processing of personal data, it may happen that the data is transmitted to other bodies, companies, legally independent organizational units or persons or that it is disclosed to them. The recipients of this data can include, for example, service providers commissioned with IT tasks or providers of services and content that are integrated into a website. In such a case, we observe the legal requirements and, in particular, conclude appropriate contracts or agreements with the recipients of your data that serve to protect your data. Data transfers within the organization: We may transfer personal data to other entities within our organization or allow them access to this data. If this transfer takes place for administrative purposes, the transfer of the data is based on our legitimate entrepreneurial and business interests or takes place if it is necessary to fulfill our contractual obligations or if the consent of the person concerned or legal permission is available.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Data processing in third countries"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"If we process data in a third country (i.e. outside the European Union (EU), the European Economic Area (EEA)) or the processing within the scope of the use of third party services or the disclosure or transmission of data to other persons, bodies or companies, this is only done in accordance with the legal requirements. Subject to express consent or contractually or legally required transmission, we only process or have the data processed in third countries with a recognized level of data protection, contractual obligation through so-called standard protection clauses of the EU Commission, if there are certifications or binding internal data protection regulations (Art. 44 to 49 DSGVO, Information page of the EU Commission: Link).\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Use of cookies"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"Cookies are small text files or other memory notes that store information on end devices and read information from the end devices. For example, to save the login status in a user account, the content of a shopping cart in an e-shop, the content accessed or the functions used in an online offer. Cookies can also be used for various purposes, e.g. for purposes of functionality, security and comfort of online offers as well as the creation of analyzes of visitor flows.\n" +
                                "" +
                                "Notes on consent:We use cookies in accordance with legal regulations. Therefore, we obtain prior consent from users, except where not required by law. In particular, consent is not necessary if the storage and reading of the information, including cookies, is absolutely necessary in order to provide the users with a telemedia service (i.e. our online offer) that they have expressly requested. The revocable consent is clearly communicated to the users and contains the information on the respective cookie use.\n" +
                                "" +
                                "Notes on legal bases under data protection law:On which we process the personal data of users with the help of cookies depends on whether we ask users for their consent. If the users consent, the legal basis for the processing of your data is the declared consent. Otherwise, the data processed with the help of cookies will be processed on the basis of our legitimate interests (e.g. in the commercial operation of our online offer and improving its usability) or, if this is done in the context of fulfilling our contractual obligations, if the use of cookies is necessary to enable our to fulfill contractual obligations. We will explain the purposes for which we process cookies in the course of this data protection declaration or as part of our consent and processing processes.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>



                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Deletion of data"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={"The data processed by us will be deleted in accordance with the legal requirements as soon as your consent to processing is revoked or other permissions are no longer applicable (e.g. if the purpose of processing this data no longer applies or it is not required for the purpose). If the data is not deleted because it is required for other, legally permissible purposes, its processing will be limited to these purposes. This means that the data will be blocked and not processed for other purposes. This applies, for example, to data that must be stored for commercial or tax reasons or whose storage is necessary to assert, exercise or defend legal claims or to protect the rights of another natural or legal person. As part of our data protection information, we can provide users with further information on the deletion and storage of data that applies specifically to the respective processing.\n" +
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

export default PrivacyPolicy;