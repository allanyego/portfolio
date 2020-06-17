import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/header.scss";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggle = () => setNavOpen(!navOpen);

  return (
    <header className="navbar bg-gray">
      <section>
        <img
          src="logo.png"
          className="img-fit-cover img-responsive"
          alt="yego logo"
        />
      </section>
      <section className="links hide-sm">
        <NavbarLinks open={true} />
      </section>
      <section className="social hide-sm">
          <a href="https://www.linkedin.com/in/yego-allan-8b00258b/" target="_blank" className="btn btn-link">
          <FontAwesomeIcon icon="linkedin" />
        </a>
        <a href="https://github.com/yegow" target="_blank" className="btn btn-link">
          <FontAwesomeIcon icon="github-square" />
        </a>
        <a href="https://www.hackerrank.com/devyego" target="_blank" className="btn btn-link">
          <FontAwesomeIcon icon="hackerrank" />
        </a>
      </section>
      <section className="humburger"
        style={{
        fontSize: "2em",
        paddingRight: ".5em",
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <FontAwesomeIcon icon="bars" onClick={toggle} />
      </section>
      <NavbarLinks open={navOpen} />
    </header>
  );
};

function _Link({ path, icon, tooltipText }) {
  return (
    <NavLink
      to={path}
      className="tooltip tooltip-right text-dark"
      data-tooltip={tooltipText}
      activeClassName="active"
    >
      <FontAwesomeIcon icon={icon} />
    </NavLink>
  );
}

function NavbarLinks({open=false}) {
    return !open ? null :
      <div className="navbar-links bg-gray">
        <_Link path="/home" icon="igloo" tooltipText="Home" />
        <_Link path="/about" icon="user" tooltipText="About" />
        <_Link path="/skills" icon="cogs" tooltipText="Skills" />
        <_Link path="/projects" icon="eye" tooltipText="Projects" />
        <_Link path="/contact" icon="envelope" tooltipText="Contact" />
      </div>
}
