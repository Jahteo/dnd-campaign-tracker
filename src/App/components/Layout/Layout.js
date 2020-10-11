import PropTypes from "prop-types";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sass/main.scss";

function Layout({ children }) {
  const sidebar = true;
  return (
    <div>
      {
        sidebar
          ? (
          // {/* <!-- Sidebar --> */}
            <section id="sidebar">
              <div className="inner">
                <nav>
                  <ul>
                    <li><NavLink exact to="/">Welcome</NavLink></li>
                    <li><NavLink to="/one">Who we are</NavLink></li>
                    <li><NavLink to="/two">What we do</NavLink></li>
                    <li><NavLink to="/three">Get in touch</NavLink></li>
                  </ul>
                </nav>
              </div>
            </section>
          )
          : (
          // {/* <!-- Header --> */}
            <header id="header">
              <Link to="/" className="title">Hyperspace</Link>
              <nav>
                <ul>
                  <li><NavLink to="/one">Who we are</NavLink></li>
                  <li><NavLink to="/two">What we do</NavLink></li>
                  <li><NavLink to="/three">Get in touch</NavLink></li>
                </ul>
              </nav>
            </header>
          )
      }

      {/* // <!-- Wrapper --> */}
      <div id="wrapper">
        {children}
      </div>

      {/* // <!-- Footer --> */}
      {/* <footer id="footer" className="wrapper alt">
        <div className="inner">
          <ul className="menu">
            <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
