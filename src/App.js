import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CardsContainer from "./Components/Cards/CardsContainer";
import Auth from "./Components/User/Auth";
import Register from "./Components/User/Register";
import UsersContainer from "./Components/Users/UsersContainer";
import NotFound from "./Components/NotFound/404";

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route
                    path="/" element={ <CardsContainer /> }
                />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
