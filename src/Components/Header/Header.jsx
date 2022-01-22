import React from "react";
import {Link} from "react-router-dom";
import s from "./header.module.css";

function Header () {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <h1>
                    <Link to="/">Логотип</Link>
                </h1>
            </div>
            <div className={s.user}>
                <Link to="/auth">Войти</Link>
                <Link to="/register">Регистрация</Link>
            </div>
        </header>
    );
}

export default Header;