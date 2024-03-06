import { Box } from "@mui/material";
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
          "Department of Chemistry at Krishna School of Science, Drs. Kiran & Pallavi Patel Global University (KPGU) offers B.Sc. programs in chemistry under Choice Based Credit System (CBCS). Department of Chemistry has state-of-the-art laboratory and classroom facilities, equipped with modern teaching and learning tools.",
          "Department of Chemistry has adequate and competent faculty members having diverse teaching and research experience with exposure from national and international institutes. The Department of Chemistry has collaborative MOU with various Academia and Industries for the training & Placement of students.",
          "Various industrial and institutional tours are also organized by the department to motivate the students. Students are also encouraged to do research by assigning them small projects for which they have to submit a report. The students of B.Sc. Chemistry are also encouraged to participate in various national and international workshops, seminars, conferences and training sessions.",
          "Department of Chemistry have initiated a step towards VAC in order to make students learn Universal Human Values that will help the students to become a loyal and responsible citizen towards the nation.",
          "Apart from academics, other curricular and co-curricular activities are also organized by the department to create social awareness among students. For this, a NCC, NSS, Social Drive, Plastic-free campus program, Blood donation camp, Picnic to historical places, Field visits etc., are also organized."
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
