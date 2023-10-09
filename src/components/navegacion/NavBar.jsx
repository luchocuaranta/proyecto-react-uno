import React from "react";
import CartWidget from "../pages/CartWidget";
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
                            <Link className="nav-link active" aria-current="page" to="/">Items</Link>
                        </li>              
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="category/remeras">Remeras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="category/buzos">Buzos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">
                                <CartWidget/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;


/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'>
                <img src="/logo-negro.png" alt="logo" width='100rem' />
            </Link>
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
                        <Link className="nav-link" to="/">
                            Items
                        </Link>
                    </li>
                    
                    <Link className="nav-item m-lg-auto">
                        <CartWidget />
                    </Link>
                </ul>
                

            </div>
        </nav> */