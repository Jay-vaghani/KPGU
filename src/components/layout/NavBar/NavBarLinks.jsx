import React from "react";
import { Link } from "react-router-dom";

function NavBarLinks({ link, name }) {
  return (
    <Link to={link} className={"navLink"}>
      {name}
    </Link>
  );
}

export default NavBarLinks;
