import React from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { CgPokemon } from "react-icons/cg";

const Navbar = () => {
    return (
        <header className="nav">
            <NavLink to="/">
                <CgPokemon className="logo"/>
            </NavLink>
            <div className="navMenu">
                <NavLink to="/mypokemons">
                    My Pokémons
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar