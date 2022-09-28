import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";

import "./style.css"

const HomePage = () => {

    const {authenticated, logout} = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <div id="home">
                    <h1>Home Page</h1>
                <form className="form">
                    <div className="actions">
                        <button class="btn" onClick={handleLogout}>Logout</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default HomePage;