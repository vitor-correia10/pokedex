import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import './FourOhFour.css';

const FourOhFour = () => {
    return (
        <>
            <div className="pageContainer">
                <h1 className="errorTitle">
                    <BiError /> Sorry, page not found <BiError />
                </h1>
                <h3 className="errorSubtitle">
                    Click <Link className="styledLink" to="/">here</Link> to return home.
                </h3>
            </div>
        </>
    );
};

export default FourOhFour;