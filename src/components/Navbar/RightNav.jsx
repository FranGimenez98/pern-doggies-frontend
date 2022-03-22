import React from "react";
import { UL, StyledLink } from "./StyledNavbar";

const RightNav = ({ open, setOpen }) => {
  return (
    <UL open={open}>
      <StyledLink to="/home" onClick={() => setOpen(!open)}>
        <li>Home</li>
      </StyledLink>
      <StyledLink to="/about" onClick={() => setOpen(!open)}>
        <li>About</li>
      </StyledLink>
      <li>Favs</li>
    </UL>
  );
};

export default RightNav;
