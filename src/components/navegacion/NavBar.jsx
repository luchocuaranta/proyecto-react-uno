import React from "react";
import CartWidget from "../pages/CartWidget";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                <img src="./logo-negro.png" alt="logo" width='100rem'/>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">                 
                    <li className="nav-item">
                        <a className="nav-link" href="./ItemsListContainer">
                            Items
                        </a>
                    </li>
                </ul>
                {CartWidget}
                <div className="nav-item m-lg-auto">
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;