import React from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";

const MainNavigation = (props) => {
    return(
        <MainHeader>
            <h1 className="main-navigation__title">
                <Link to="/"> Laboratorio 2 </Link>
            </h1>

            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
    );
}

export default MainNavigation;