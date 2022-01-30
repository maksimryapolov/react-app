import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Auth from "./Components/User/Auth";
import Register from "./Components/User/Register";

function App(props) {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Cards
                            state={props.state.mainPage}
                            dispatch={props.dispatch}
                        />
                    }
                />
                <Route path="/auth" element={<Auth />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
