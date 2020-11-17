import React, { useState } from "react";
import Loader from "./Loader";

const Login = (props) => {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [isError, setIsError] = useState(false);
    const [isWrongCreds, setIsWrongCreds] = useState(false);

    const styles = {padding: "10px"};

    const userAuthentication = async() => {
        const response = await props.userAuthetication();
        if(response && response.success){
            var count = 0;
            var data = response.payload.results;
            data.some(value => {
                if(value.name === uname && value.birth_year === pass){
                    props.history.push("/landing");
                    count++;
                    return true;
                }
            })

            if(count === data.length) {
            setIsWrongCreds(true)
        }
        }
        else {
            setIsError(true);
        }
    }

    return (
        <div>
            {props.fetchLoginDetails ? <Loader /> : (
            isError ? <div>Error Occurred. Reload the page and log in again</div> : (<div>
            Username: <input type="text" required value={uname} style={styles} onChange={(e) => setUname(e.target.value)} />
            <br />
            <br />
            Password: <input type="password" required value={pass} style={styles} onChange={(e) => setPass(e.target.value)} />
            <br />
            <br />
            {isWrongCreds ? <div style={{color: "red"}}> Wrong username and/or password </div> : null}
            <button onClick={userAuthentication} style={styles}> SUBMIT </button>
            </div>))}
        </div>
    )
}

export default Login;