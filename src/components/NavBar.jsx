import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/logo-negro.png" alt="logo" width='100rem' />
                </Link>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active menu" aria-current="page" to="/">Items</Link>
                        </li>              
                        <li className="nav-item">
                            <Link className="nav-link active menu" aria-current="page" to="category/remeras">Remeras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active menu" aria-current="page" to="category/buzos">Buzos</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <CartWidget/>   
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;


