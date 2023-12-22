import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

function Testimonials() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Grid
      container
      width={maxWidth}
      mx={"auto"}
      my={7}
      p={"3%"}
      className="smooth-shadow rounded-4"
    >
      {" "}
      Testimonials
    </Grid>
  );
}

export default Testimonials;
