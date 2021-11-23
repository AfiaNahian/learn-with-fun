import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                    <div className="container-fluid p-5 me-5">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse p-3" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3">
                                    <NavLink className="text-white fw-bold me-4 navbar-brand" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="text-white fw-bold me-4 navbar-brand" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="text-white fw-bold me-4 navbar-brand" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="text-white fw-bold me-4 navbar-brand" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    );
};
export default Header;