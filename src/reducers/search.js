import { combineReducers } from "redux"

const planets = () => {
    return ([{
        "name": "Alderaan",
        "population": "2000000000",
        "url": "http://swapi.dev/api/planets/2/"
    },
    {
        "name": "Neon",
        "population": "5000000000",
        "url": "http://swapi.dev/api/planets/2/"
    },
    {
        "name": "Aldo",
        "population": "9000000000",
        "url": "http://swapi.dev/api/planets/2/"
    },
    {
        "name": "Yellow",
        "population": "6000000000",
        "url": "http://swapi.dev/api/planets/2/"
    }])
}

export default combineReducers({
    planets
})