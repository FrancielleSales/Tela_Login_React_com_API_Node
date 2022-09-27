import React, {useContext} from "react";

import LoginPage from "./pages/loginPage/index";
import HomePage from "./pages/homePage/index";
import{AuthProvider, AuthContext} from "./contexts/auth";

import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

const AppRoutes = () => {
    const Private = ({children}) => {
        const{authenticated, loading} = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Carregando...</div> 
        }

        if(!authenticated) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element= {
                        <LoginPage />
                    } />

                    <Route exact path="/" element= {
                        <Private>
                            <HomePage />
                        </Private>
                    } />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;