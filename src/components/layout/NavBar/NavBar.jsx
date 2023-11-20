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
      <Box display={innerWith < 1035 ? "none" : "block"}>
        <ContactNavbar />
      </Box>
      <MainNavBar />
    </>
  );
}

export default NavBar;
