import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="hide-when-mobile">
        <h1> <Link to="/"> C4a.dev **</Link> </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>

            {/* <ul className="sub-ul">
              <li>
                <a href="hh">Full Course</a>
              </li>
              <li>
                <a href="gg">Crash Course</a>
              </li>
              <li>
                <a href="hh">learn in 1h</a>
              </li>
            </ul> */}

          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            
            {/* <ul className="sub-ul">
              <li>
                <a href="h">Full Course</a>
              </li>
              <li>
                <a href="h">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="h">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="h">project 1</a>
                  </li>
                  <li>
                    <a href="j">project 2</a>
                  </li>
                  <li>
                    <a href="j">project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}

          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>

            {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="h">coming soon🔥</a>
              </li>
            </ul> */}

          </li>
        </ul>
      </header>

      <header className="show-when-mobile">
        <h1> C4a.dev **</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
