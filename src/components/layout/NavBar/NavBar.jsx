import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContactNavbar from "./ContactNavbar";
import MainNavBar from "./MainNavBar";

function NavBar() {
  const [innerWith, setInnerWith] = useState(window.innerWidth);

  window.onresize = () => {
    setInnerWith(window.innerWidth);
  };

  return (
    <>
      <ContactNavbar innerWith={innerWith} />
      <MainNavBar innerWith={innerWith} />
    </>
  );
}

export default NavBar;
