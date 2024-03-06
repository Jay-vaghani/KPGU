import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";

function ScopOfProgram() {

  const ScopList = [
    "Graduates will be successful in pursuing higher studies in pure and applied science or Management.",
    "Graduates will pursue career paths in teaching at schools and at different type of institute for competitive exams.",
    "PG/Doctorate students can planning for research/teaching career at universities/colleges in different branches.",
    "A Bachelor’s degree in mathematics followed by an MBA is highly desirable for a career in investment banking.",
    "After graduation, they can do their masters in data science and work as a data analyst or machine learning engineer in tech/ market research companies or consultancies. In the field of insurance sector as an actuarial analyst."
  ]

  return (
    <Box borderRadius={4} textAlign={"justify"}>
      <h2 className="fw-bold color-secondary fs-1 mb-3">
        Scop Of Program
      </h2>
      <h5 className="text-secondary mb-3">
        After doing B.Sc. (Mathematics), one can prefer for either further studies or take up various jobs. Students are able to apply mathematical skills in various competitive examinations for employment and higher studies. They can analyze and interpret data. The course is also beneficial for students who wish to pursue multi and inter-disciplinary science careers in future.
      </h5>
      <h4 className="color-secondary mb-3 fw-semibold ">Some of the most relevant further education programs after B.Sc. (Mathematics) includes</h4>

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
