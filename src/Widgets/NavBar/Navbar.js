import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to="/"><img src="" alt="" className="navbar-brand" /></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    MUSIC
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    ARTIST
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    EVENTS
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/" className="dropdown-toggle nav-link" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false" >
                                    COMMERCIAL
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink to="/" className="dropdown-toggle nav-link" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false" >
                                    RADIO
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                    <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    GOLD
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    SHOP
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    BLOG
                                </NavLink>
                            </li>
                            <li className="nav-item">tiny logo</li>
                        </ul>
                    </div>
                    {/* Second nav bar */}
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        PLAYER
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        SIGN IN
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        SEARCH
                                    </NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div>music player widget goes here</div>
                    </nav>
                </div>
            </nav>


        </React.Fragment>
    );
};

export { Navbar };
