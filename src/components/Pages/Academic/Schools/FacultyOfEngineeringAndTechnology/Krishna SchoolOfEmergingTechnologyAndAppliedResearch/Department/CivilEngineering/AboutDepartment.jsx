import { Box, Grid } from "@mui/material";
import React from "react";
import Paragraph from "../../../../../../../Common/Paragraph";

function AboutDepartment() {
  return (
    <Box borderRadius={4}>
      <h2 className="text-uppercase fw-bold color-secondary mb-4">
        About Department
      </h2>
      <Paragraph
        content={[
          "The department of civil engineering at KPGU is well established with high quality laboratories with a rich blend of traditional and modern equipment. Our well qualified faculty members from various specialized fields of civil engineering are dedicated to performing their duties and cultivating strong links with the industry, academic institutions, research institutions and consulting firms. It has been crafted to serve as a hub where all the stakeholders can collaborate in optimizing teaching-learning processes which ensures tailor made programmes, effective teaching learning processes, creation of enabling habitat, pro-active participation of industry, embedding of stakeholders at every step of the value chain and others.",
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
