
import axios from "axios";
import types from "./../types";

const url = "https://swapi.dev/api/"

const login = {
    userAuthetication : () => async dispatch => {
        try {
            dispatch({type: types.FETCH_USER_AUTHENTICATION})
            const response = await axios.get(url + "people/");
            if(response && response.data) {
                dispatch({type: types.GET_USER_AUTHENTICATION, payload: response.data})
                return {
                    success: true,
                    payload: response.data
                }
            }
            else {
                dispatch({type: types.ERROR_USER_AUTHENTICATION, payload: "Unable to load response"})
                return {
                    success: false,
                    error: "Unable to load response"
                }
            }
        } catch (error) {
            dispatch({type: types.ERROR_USER_AUTHENTICATION, payload: error.message})
            return {
                success: false,
                error: error.message
            }
        }
    },

    getAllPlanets : () => async dispatch => {
        try {
            dispatch({type: types.FETCH_PLANETS_DETAILS})
            const response = await axios.get(url + "planets/");
            if(response && response.data) {
                dispatch({type: types.GET_PLANETS_DETAILS, payload: response.data})
                return {
                    success: true
                }
            }
            else {
                dispatch({type: types.ERROR_PLANETS_DETAILS, payload: "Unable to load response"})
                return {
                    success: false,
                    error: "Unable to load response"
                }
            }
        } catch (error) {
            dispatch({type: types.ERROR_USER_AUTHENTICATION, payload: error.message})
            return {
                success: false,
                error: error.message
            }
        }
    }
}

export default login;