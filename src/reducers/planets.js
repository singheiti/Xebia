import { combineReducers } from "redux";
import types from "../types";;

const fetchPlanetDetails = (state=false, action) => {
    switch(action.type) {
        case types.FETCH_PLANETS_DETAILS: 
            return true;
        case types.GET_PLANETS_DETAILS:
            return false;
        case types.ERROR_PLANETS_DETAILS:
            return false;
        default:
            return state;
    }
} 

const planets = (state=[], action) => {
    switch(action.type) {
        case types.FETCH_PLANETS_DETAILS: 
            return [];
        case types.GET_PLANETS_DETAILS:
            return action.payload.results;
        case types.ERROR_PLANETS_DETAILS:
            return [];
        default:
            return state;
    }
}

const totalPlanets = (state=0, action) => {
    switch(action.type) {
        case types.FETCH_PLANETS_DETAILS: 
            return 0;
        case types.GET_PLANETS_DETAILS:
            return action.payload.count;
        case types.ERROR_PLANETS_DETAILS:
            return 0;
        default:
            return state;
    }
}

const errorPlanets = (state="", action) => {
    switch(action.type) {
        case types.FETCH_PLANETS_DETAILS: 
            return "";
        case types.GET_PLANETS_DETAILS:
            return "";
        case types.ERROR_PLANETS_DETAILS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    fetchPlanetDetails,
    planets,
    totalPlanets,
    errorPlanets
})