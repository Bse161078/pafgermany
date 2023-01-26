import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {baseUl, gisUrl} from "../utils/Constants/service";
import {convertToFormCodes} from "../utils";

const validateUserApi = createAsyncThunk("validateUserApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}login`, {data});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


const registerUserApi = createAsyncThunk("registerUserApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}signup`, {data});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


const sendVerificationCodeApi = createAsyncThunk(
    "sendVerificationCodeApi",
    async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}2fa`, data, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


const saveFormApi = createAsyncThunk("saveFormApi", async (data, {rejectWithValue}) => {
    const household=data.data.household;
    const personInfo=data.data.person_info;
    const filteredHousehold=convertToFormCodes([household],"inc");
    const filteredPersonInfo=convertToFormCodes(personInfo,"inc");
    try {
            const response = await axios.post(`${baseUl}submitForm`, {data:{household:filteredHousehold[0],person_info:filteredPersonInfo,respondent:data.data.respondent}}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


const submitFormApi = createAsyncThunk("submitFormApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}saveForm`, data,
                {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


const fetchFormApi = createAsyncThunk("fetchFormApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseUl}fetchForm`,
                {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


const getUserApi = createAsyncThunk("getUserApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseUl}getUser`,
                {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


const saveHouseholdMemberApi = createAsyncThunk("saveHouseholdMemberApi", async (data, {rejectWithValue}) => {
        const filteredData=convertToFormCodes([data.data],"inc");
        try {

                const response = await axios.post(`${baseUl}saveHouseholdMember`, {data:filteredData[0]}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
                return response.data;
            } catch (e) {
                const errorResponse = e.response ? e.response : null;
                return rejectWithValue(errorResponse.status);
            }
    }
)


const getHouseholdMembersApi = createAsyncThunk("getHouseholdMembersApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseUl}fetchHouseholdMemebers`,
                {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            const filteredData=convertToFormCodes(response.data.data.person_info,"des");
            response.data.data.person_info=filteredData;
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)

const saveHousingApi = createAsyncThunk("saveHousingApi", async (data, {rejectWithValue}) => {
        try {
            const filteredData=convertToFormCodes([data.data],"inc");
            const response = await axios.post(`${baseUl}saveHousing`, {data:filteredData[0]}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const getHousingApi = createAsyncThunk("getHousingApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseUl}fetchHousing`,
                {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            const filteredData=convertToFormCodes([response.data.data.household],"des");
            response.data.data.household=filteredData[0];

            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)

const deleteHouseholdMemberApi = createAsyncThunk("deleteHouseholdMemberApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}deleteHouseholdMember`, data, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const forgetPasswordApi = createAsyncThunk("forgetPasswordApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}forgetpassword`, data, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue( errorResponse.status);
        }
    }
)

const resetPasswordApi = createAsyncThunk("resetPasswordApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}resetpassword`, data, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)

const smsCodeApi = createAsyncThunk("smsCodeApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseUl}smscode`,
                {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const getProvincesDistrictsApi = createAsyncThunk("getProvincesDistricts", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${gisUrl}filters`)
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const updateUserApi = createAsyncThunk("updateUserApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}updateUser`, {data}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            response.data.status = 200;
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const updateHouseholdType = createAsyncThunk("updateHouseTypeApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}updateHouseType`, {data}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const updateHouseholdMembersApi = createAsyncThunk("updateHouseholdMembers", async (data, {rejectWithValue}) => {
        try {
            const filteredData=convertToFormCodes(data.members,"inc");

            const response = await axios.post(`${baseUl}updateHouseholdMembers`, {data:{members:filteredData}}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const getStatsApi = createAsyncThunk("selfEnumStatsApi", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${baseUl}selfEnumStats`);
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse && errorResponse.data && errorResponse.data.message ? errorResponse.data.message : "something went wrong please try again later!");
        }
    }
)


const verifyPhoneNumberApi = createAsyncThunk("verifyPhone", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}verifyPhone`, {data}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)

const postMetaStatsApi = createAsyncThunk("postMetaStats", async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${baseUl}meta-stats`, {data}, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
            return response.data;
        } catch (e) {
            const errorResponse = e.response ? e.response : null;
            return rejectWithValue(errorResponse.status);
        }
    }
)


export {
    validateUserApi, registerUserApi, sendVerificationCodeApi, saveFormApi, submitFormApi, fetchFormApi, getUserApi
    , saveHouseholdMemberApi, getHouseholdMembersApi, saveHousingApi, getHousingApi, deleteHouseholdMemberApi,
    forgetPasswordApi, resetPasswordApi, smsCodeApi, getProvincesDistrictsApi, updateUserApi, updateHouseholdType,
    updateHouseholdMembersApi, getStatsApi, verifyPhoneNumberApi,postMetaStatsApi
}