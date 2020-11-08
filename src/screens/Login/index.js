import React, { useState, useEffect } from "react";

import "./style.css";
import {ROUTE_CONSTANTS} from "../../shared/constants";

const Login = ({history}) => {

    const [inputVal, setInputVal] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") || false
        if(isLoggedIn === "true") {
            history.push(ROUTE_CONSTANTS.DASHBOARD)
        }
    },[])

    const handleChange = (event) => {

        const { value, name } = event.target;
        setInputVal((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", true)
        localStorage.setItem("username", inputVal.username)
        history.push(ROUTE_CONSTANTS.DASHBOARD)
    }

    return (
      <div className="root">
        <div className="login-container">
        	<h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
           		type="text" 
           		required 
           		name="username"
              id="username"
           		onChange={handleChange}
           		value={inputVal.username}
           	/>
            <label htmlFor="password">Password</label>
            <input 
           		type="password" 
           		required 
           		id="password"
              name="password"
           		onChange={handleChange}
                value={inputVal.password}
           	/>
           <button type="submit" >Login</button>
          </form>
        </div>
      </div>
    );
}

export default Login;
