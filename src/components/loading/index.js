import React from 'react';
import { CgPokemon } from "react-icons/cg";
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <CgPokemon className="styledLoading"/>
        </div>
    );
};

export default Loading;
