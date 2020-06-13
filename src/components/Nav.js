import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/header.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <img
          src="logo.png"
          className="img-fit-cover img-responsive"
          alt="yego logo"
        />
      </section>
      <section className="navbar-center">
        <NavLink path="/" icon="igloo" tooltipText="Home" />
        <NavLink path="/about" icon="user" tooltipText="About" />
        <NavLink path="/skills" icon="cogs" tooltipText="Skills" />
        <NavLink path="/projects" icon="eye" tooltipText="Projects" />
        <NavLink path="/contact" icon="envelope" tooltipText="Contact" />
      </section>
      <section className="navbar-section">
        <a href="#" className="btn btn-link">
          <i data-eva="linkedin-outline" />
        </a>
        <a href="#" className="btn btn-link">
          <i data-eva="github-outline" />
        </a>
      </section>
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
