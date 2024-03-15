import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AppContext } from "../../../../contexts/AppContext";

function Fdps() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      p={"3%"}
      bgcolor={"#fff"}
      mt={7}
      borderRadius={4}
      className="smooth-shadow"
    >
      Section
    </Box>
  );
}

export default Fdps;
