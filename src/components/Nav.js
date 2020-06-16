import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/header.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggle = () => setNavOpen(!navOpen);

  return (
    <header className="navbar">
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
        <a href="#" className="btn btn-link">
          <i data-eva="linkedin-outline" />
        </a>
        <a href="#" className="btn btn-link">
          <i data-eva="github-outline" />
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
      <NavbarLinks open={navOpen} className="hide-md" />
    </header>
  );
};

function NavLink({ path, icon, tooltipText }) {
  return (
    <Link
      to={path}
      className="tooltip tooltip-right"
      data-tooltip={tooltipText}
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}

function NavbarLinks({open=false}) {
    return !open ? null :
      <div className="navbar-links">
        <NavLink path="/" icon="igloo" tooltipText="Home" />
        <NavLink path="/about" icon="user" tooltipText="About" />
        <NavLink path="/skills" icon="cogs" tooltipText="Skills" />
        <NavLink path="/projects" icon="eye" tooltipText="Projects" />
        <NavLink path="/contact" icon="envelope" tooltipText="Contact" />
      </div>
}
