import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";

function ScopOfProgram() {

  const ScopList = [
    "Graduates will be successful in pursuing higher studies in pure and applied science.",
    "Graduates will pursue career paths in teaching at schools and at different type of institute for competitive exams.",
    "PG/Doctorate students can planning for research/teaching career at universities/colleges in different branches.",
    "A Bachelor’s degree in mathematics followed by Master’s degree is highly desirable for a career in research and Development (R&D) in various national level institutes funded by CSIR, DBT and ICMR, Government of India, New Delhi.",
    "After graduation, they can do their masters in Bioinformatics and Biostatics and work as a biological data analyst in Biotech/ Bio-parma research companies or consultancies.",
    "Students can opt for Biotechnology entrepreneurship and Start-Up for being self-reliant."
  ]

  return (
    <Box borderRadius={4} textAlign={"justify"}>
      <h2 className="fw-bold color-secondary fs-1 mb-3">
        Scop Of Program
      </h2>
      <h5 className="text-secondary mb-3">After doing B.Sc. (Biotechnology), student can prefer either further studies or take up various jobs. Students will be able to apply theoretical and practical knowledge in various competitive examinations like IIT-JAM, GATE, DBT- CET for higher studies. They can be an asset to a biopharmaceutical and other biotechnological industries in research and development activities as well as in quality control & quality assurance departments.    The course is also beneficial for students who wish to pursue multi and inter-disciplinary science careers in future.
      </h5>
      <h4 className="color-secondary mb-3 fw-semibold ">Some of the most relevant further education programs after B.Sc. (Biotechnology) includes</h4>

      {
        ScopList.map((scop, index) =>
          <Stack direction={"row"} mb={1} color={"secondary.main"} className="smooth-shadow-card mb-3 " p={1} borderRadius={2} key={index}>
            <Box >
              <KeyboardDoubleArrowRightRounded sx={{ fontSize: "25px" }} color="inherit" />
            </Box>
            <Box>
              <h5 className="mb-0">{scop}</h5>
            </Box>
          </Stack>
        )
      }

    </Box>
  );
}

export default ScopOfProgram;
