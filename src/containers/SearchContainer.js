import { connect } from "react-redux";
import Search from "../Components/Search";
import login from "../Actions/login";

export default connect(state => ({
    fetchPlanetDetails: state.planets.fetchPlanetDetails,
    planets: state.planets.planets,
    totalPlanets: state.planets.totalPlanets,
    errorPlanets: state.planets.errorPlanets
}),{
    getAllPlanets: login.getAllPlanets
})(Search);