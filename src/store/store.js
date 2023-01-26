import {configureStore} from '@reduxjs/toolkit'

import {
    validateUserReducer,
    registerUserReducer,
    sendVerificationCodeReducer,
    saveFromReducer,
    submitFormReducer,
    fetchFormReducer,
    getUserReducer,
    saveHouseholdMemberReducer,
    getHouseholdMembersReducer,
    saveHousingReducer,
    getHousingReducer,
    deleteHouseholdMemberReducer,
    forgetPasswordReducer,
    resetPasswordReducer,
    smsCodeReducer,
    getProvincesDistrictsReducer,
    languageReducer,
    updateUserReducer,
    userReducer,
    updateHouseholdTypeReducer,
    updateHouseholdMembersReducer,
    getStatsReducer,
    verifyPhoneNumberReducer,
    postMetaStatsSlice
} from '../reducers';
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        languageReducer
    },
});
setupListeners(store.dispatch)

