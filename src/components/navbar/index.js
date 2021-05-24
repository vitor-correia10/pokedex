import React from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { CgPokemon } from "react-icons/cg";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="nav">
            <NavLink to="/">
                <CgPokemon className="logo"/>
            </NavLink>
            <div className="navMenu">
                <NavLink to="/mypokemons">
                    My Pokémons
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar