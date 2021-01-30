import React from "react";

import CurrentBalance from "../currentBalance/CurrentBalance";
import NavLinks from "../navLinks/NavLinks";

import "./NavBar.css";

const NavBar = ({ currentBalance }) => (
  <div className="navigate-wrapper">
    <NavLinks />
    <div className="balance-wrapper">
      <CurrentBalance balance={currentBalance} />
    </div>
  </div>
);

export default NavBar;
