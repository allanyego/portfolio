import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/header.scss";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";

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
      <Socials />
      <section
        className="humburger"
        style={{
          fontSize: "2em",
          paddingRight: ".5em",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <FontAwesomeIcon icon="bars" onClick={toggle} />
      </section>
      <NavbarLinks open={navOpen} />
    </header>
  );
};

function YLink({ path, icon, tooltipText }) {
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

function NavbarLinks({ open = false }) {
  return !open ? null : (
    <div className="navbar-links bg-gray">
      <YLink path="/home" icon="igloo" tooltipText="Home" />
      <YLink path="/about" icon="user" tooltipText="About" />
      <YLink path="/skills" icon="cogs" tooltipText="Skills" />
      <YLink path="/projects" icon="eye" tooltipText="Projects" />
      <YLink path="/contact" icon="envelope" tooltipText="Contact" />
    </div>
  );
}
