import { combineReducers } from "redux";
import types from "../types";;

const fetchLoginDetails = (state=false, action) => {
    switch(action.type) {
        case types.FETCH_USER_AUTHENTICATION: 
            return true;
        case types.GET_USER_AUTHENTICATION:
            return false;
        case types.ERROR_USER_AUTHENTICATION:
            return false;
        default:
            return state;
    }
} 

const people = (state=[], action) => {
    switch(action.type) {
        case types.FETCH_USER_AUTHENTICATION: 
            return [];
        case types.GET_USER_AUTHENTICATION:
            return action.payload.results;
        case types.ERROR_USER_AUTHENTICATION:
            return [];
        default:
            return state;
    }
}

const totalPeople = (state=0, action) => {
    switch(action.type) {
        case types.FETCH_USER_AUTHENTICATION: 
            return 0;
        case types.GET_USER_AUTHENTICATION:
            return action.payload.count;
        case types.ERROR_USER_AUTHENTICATION:
            return 0;
        default:
            return state;
    }
}

const errorLogin = (state="", action) => {
    switch(action.type) {
        case types.FETCH_USER_AUTHENTICATION: 
            return "";
        case types.GET_USER_AUTHENTICATION:
            return "";
        case types.ERROR_USER_AUTHENTICATION:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    fetchLoginDetails,
    people,
    totalPeople,
    errorLogin
})