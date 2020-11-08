import React, { useState, useEffect } from "react";

import "./style.css"
import Iframe from "../../components/Iframe";
import {ROUTE_CONSTANTS} from "../../shared/constants";

const Mainpage = ({history}) => {
    const [url1, setUrl1] = useState("")
    const [url2, setUrl2] = useState("")
    const username = localStorage.getItem("username")

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") || false
        if(isLoggedIn === "false") {
            history.push(ROUTE_CONSTANTS.LOGIN)
        }
    },[history])

    const handleChange = (event) => {

        const { value, name } = event.target;
        if(name === "url1") {
            return setUrl1(value)
        } 
        return setUrl2(value)    
    }

    const handleLogout = () => {
        localStorage.setItem("isLoggedIn", false)
        localStorage.setItem("username", "")
        history.push(ROUTE_CONSTANTS.LOGIN)
    }

    return (
        <div className="main-container">
            <header>
                <nav>
                    <p className="username">{username}</p>
                    <div className="input-container">
                        <input 
                            type="text"
                            name="url1"
                            value={url1}
                            className="url-input"
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name="url2"
                            value={url2}
                            className="url-input"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="logout-container">
                        <button onClick={handleLogout} className="logout">Logout</button>
                    </div>
                </nav>
            </header>
            <main>
                <Iframe url={url1} />
                <Iframe url={url2} />
            </main>
        </div>
    );
}

export default Mainpage;
