import React from "react";

import CurrentBalance from "../currentBalance/CurrentBalance";
import NavLinks from "../navLinks/NavLinks";

import "./NavBar.css";

const NavBar = ({ currentBalance }) => (
  <div className="navigation-wrapper">
    <CurrentBalance balance={currentBalance} />
    <NavLinks />
  </div>
);

export default NavBar;
