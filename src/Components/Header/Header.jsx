import React from "react";
import {NavLink} from "react-router-dom";
import s from "./header.module.css";

function Header () {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <h1>
                    <NavLink to="/">Логотип</NavLink>
                </h1>
            </div>
            <div className={s.user}>
                <NavLink className={({ isActive }) => isActive ? s.linkActive : ""} to="/auth">Войти</NavLink>
                <NavLink className={({ isActive }) => isActive ? s.linkActive : ""} to="/register">Регистрация</NavLink>
            </div>
        </header>
    );
}


export default Header;