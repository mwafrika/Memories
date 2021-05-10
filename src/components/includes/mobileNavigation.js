import React, { useState } from "react";
import NavLinks from "./navLinks";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const closeIcon = (
    <CgCloseO
      className="hamburger"
      size="40px"
      color="white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );
  const OpenHumburger = (
    <CgMenuRound
      className="hamburger"
      size="40px"
      color="white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );
  const closeMenu = () => setOpen(false);
  console.log(open);
  return (
    <nav className="mobileNavigation">
      {open ? closeIcon : OpenHumburger}
      {open && <NavLinks isMobile={true} closeMenu={closeMenu} />}
    </nav>
  );
};

export default MobileNavigation;
