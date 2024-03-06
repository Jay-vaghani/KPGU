import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { ExpandLessRounded } from "@mui/icons-material";

function Facilities() {


  const FacilitiesList = [
    "UV-Visible Spectrophotometer",
    "Laminar Air flow chamber",
    "Cooling Centrifuge",
    "Autoclave",
    "Light microscope",
    "Water Bath",
    "Orbital Shaker Incubator",
    "Bacteriological Incubator",
    "UV-Trans illuminator",
    "Hot Air Oven",
    "Refrigerator",
    "pH meter",
    "Dry Bath",
    "Weighing balance",
    "Magnetic stirrer",
    "Vortex and Gel electrophoresis apparatus",
  ]

  const FacilitiesComponents = ({ name }) => (
    <Grid item xs={12} sm={4}>
      <Box
        className="smooth-shadow-card h-100 d-flex align-items-center "
        borderRadius={2}
        overflow={"hidden"}
      >
        <Box p={2} textAlign={"start"}>
          <h6 className="fw-bold color-secondary mb-0 ">{name}</h6>
        </Box>
      </Box>
    </Grid>
  );

  return (
    <>
      <Stack borderRadius={4} spacing={3}>
        {/* =============================== ELEMENTS OF CIVIL ENGINEERING =============================== */}

        <h2 className="text-uppercase fw-bold color-secondary mb-4">
          Facilities
        </h2>
        <Grid container spacing={2}>
          {
            FacilitiesList.map((name, index) => <FacilitiesComponents name={name} key={index} />)
          }
        </Grid>
      </Stack>
    </>
  );
}

export default Facilities;
