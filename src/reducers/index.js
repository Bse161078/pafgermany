import {createSlice} from "@reduxjs/toolkit";
import {getSelectedLanguage} from "../utils";

const initialState = {
    data: {},
    loading: false,
    error: ''
}


const initialStateSelectedLanguage = {
    selectedLanguage:getSelectedLanguage(),
    engList:[],
    urduList:[],
}





export const languageSlice = createSlice({
    name: 'language',
    initialState:initialStateSelectedLanguage,
    reducers: {
        updateSelectedLanguage: (state,{payload}) => {
            state.selectedLanguage = payload.selectedLanguage;
            localStorage.setItem("language",payload.selectedLanguage);

        }
    }
});



export const {updateSelectedLanguage} = languageSlice.actions;



export const languageReducer = languageSlice.reducer;
