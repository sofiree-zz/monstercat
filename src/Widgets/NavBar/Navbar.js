import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                MUSIC
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                ARTIST
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                EVENTS
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                COMMERCIAL
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                RADIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                GOLD
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                BLOG
              </NavLink>
            </li>
            <li>tiny logo</li>
          </ul>
        </div>
      </nav>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                PLAYER
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                SIGN IN
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                SEARCH
              </NavLink>
            </li>
          </ul>
        </div>
        <div>music player widget goes here</div>
      </nav>
    </React.Fragment>
  );
};

export { Navbar };
