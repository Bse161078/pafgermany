import logo from './logo.svg';
import './App.css';
import Navigation from "src/components/navigation";
import Home from "src/components/home";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import createTheme from "@mui/material/styles/createTheme";
import Nursing from "./components/nursing";
import ItSpecialist from "./components/it-specialist";
import Engineering from "./components/engineering";
import Physicians from "./components/physicians";
import Scientists from "./components/scientists";
import Recognition from "./components/recongnition";
import WhyRecognition from "./components/why-recongnition";
import AcademicRecognition from "./components/academic-recongnition";
import WorkContainer from "./components/common/work-container";
import WorkContract from "./components/work-contact";
import SalaryTax from "./components/salary-tax";
import LanguageLessons from "./components/language-lessons";
import IntegrationCourses from "./components/integration-courses";
import Economy from "./components/economy";
import Immigration from "./components/immigration";
import LivingExpenses from "./components/living-expenses";
import CostFees from "./components/cost-fees";
import PageNotFound from "./components/404Page";
import Login from "./components/login";
import Register from "./components/register";
import ContactUs from "./components/contact-us";
import Faq from "./components/faq";
import PrivacyPolicy from "./components/privacy-policy";
import CancellationPolicy from "./components/cancellation-policy";
import TermsCondition from "./components/terms-condition";
import RegisterStep1 from "./components/register/step1";
import RegisterStep2 from "./components/register/step2";
import RegisterStep3 from "./components/register/step3";
import Profile from "./components/dashboard/profile";
import Dashboard from "./components/dashboard";
import Translation from "./components/dashboard/translation";
import RecognitionDashboard from "./components/dashboard/recognition";
import ForgotPassword from "./components/forgot-password";
import ResetPassword from "./components/reset-password";
import {store} from "./store/store";
import {Provider} from "react-redux";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xlg: 1360,
        },
    },

});

function App() {


    return (
        <>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/forgot-password" element={<ForgotPassword/>}/>
                            <Route path="/reset-password" element={<ResetPassword/>}/>

                            <Route path="/register" element={<Register/>}>
                                <Route path="step1" element={<RegisterStep1/>}/>
                                <Route path="step2" element={<RegisterStep2/>}/>
                                <Route path="step3" element={<RegisterStep3/>}/>
                            </Route>

                            <Route path="/" element={<Navigation/>}>
                                <Route path="" element={<Home/>}/>
                                <Route path="nursing" element={<Nursing/>}/>
                                <Route path="it-specialist" element={<ItSpecialist/>}/>
                                <Route path="engineering" element={<Engineering/>}/>
                                <Route path="physicians" element={<Physicians/>}/>
                                <Route path="scientists" element={<Scientists/>}/>
                                <Route path="recognition" element={<Recognition/>}/>
                                <Route path="why-recognition" element={<WhyRecognition/>}/>
                                <Route path="academic-qualifications" element={<AcademicRecognition/>}/>
                                <Route path="work-contract" element={<WorkContract/>}/>
                                <Route path="salary-tax" element={<SalaryTax/>}/>
                                <Route path="learn-german" element={<LanguageLessons/>}/>
                                <Route path="integration-courses" element={<IntegrationCourses/>}/>
                                <Route path="economy" element={<Economy/>}/>
                                <Route path="immigration" element={<Immigration/>}/>
                                <Route path="living-expenses" element={<LivingExpenses/>}/>
                                <Route path="cost" element={<CostFees/>}/>
                                <Route path="contact-us" element={<ContactUs/>}/>
                                <Route path="faq" element={<Faq/>}/>
                                <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                                <Route path="cancellation-policy" element={<CancellationPolicy/>}/>
                                <Route path="terms-condition" element={<TermsCondition/>}/>

                                <Route path="dashboard" element={<Dashboard/>}>
                                    <Route path="profile" element={<Profile/>}/>
                                    <Route path="translate" element={<Translation/>}/>
                                    <Route path="recognition" element={<RecognitionDashboard/>}/>

                                </Route>

                            </Route>
                            <Route path="/*" element={<PageNotFound/>}/>
                        </Routes>
                    </Router>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
