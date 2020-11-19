// const { connect } = require("react-redux");
import { connect } from "react-redux";
import login from "../Actions/login";
import Login from "../Components/Login";

export default connect(state => ({
    fetchLoginDetails: state.login.fetchLoginDetails,
    people: state.login.people,
    totalPeople: state.login.totalPeople,
    errorLogin: state.login.errorLogin
}), {
    userAuthetication: login.userAuthetication,
    getAllPlanets: login.getAllPlanets
})(Login)