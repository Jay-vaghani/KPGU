import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

function Career() {
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
      <Grid xs={1} md={6}>
        <Typography variant="h2" className="journey-heading-2" gutterBottom>
          VISION & MISSION
        </Typography>
        <Typography variant="body1" className="journey-text">
          KPGU Aspires to be globally acclaimed a value-driven University,
          recognized for excellence in teaching, research and outreach;
          promoting access and inclusion; collaborative and innovative culture;
          and prepare socially responsible global citizens.
        </Typography>
      </Grid>
      <Grid xs={1} md={6}></Grid>
    </Grid>
  );
}

export default Career;
