import React, { useState } from "react";
import ContactNavbar from "../../ContactNavbar";
import MainNavBar from "./MainNavBar";

function NavBar() {
  const [innerWith, setInnerWith] = useState(window.innerWidth);

  window.onresize = () => {
    setInnerWith(window.innerWidth);
  };

  return (
    <>
      <MainNavBar innerWith={innerWith} />
    </>
  );
}

export default NavBar;
