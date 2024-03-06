import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";

function ScopOfProgram() {

  const ScopList = [
    "After doing B.Sc. (Physics), one can prefer for either further studies or take up various jobs and also take up internships to prepare for Electronics & Material science industry level entries.",
    "In recent times, due to favorable governmental initiatives, opting for a start-up can be an excellent choice for graduates of B.Sc. (Physics) program.",
    "After successful completion of B.Sc. (Physics) program one can always opt for civil service and other government sector employment exams.",
    "Now a days there is a bright scope in the field of research and development so once students get completed with M.Sc. in any branch of Physics can opt for Ph.D. program under any branches of chemistry.",

  ]

  return (
    <Box borderRadius={4} >
      <h2 className="fw-bold color-secondary fs-1 mb-3">
        Scop Of Program
      </h2>

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

      <h4 className="color-secondary mb-3 mt-4 fw-semibold ">Some of the most relevant further education programs after B.Sc. (Chemistry) and various fields for job in industrial sector includes following</h4>


      <h4 className="text-uppercase color-secondary fw-bold mt-4">Jobs</h4>
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Assistant </Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Lab Assistant </Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Sales & Technician </Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">BARC</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">IPR</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">ISRO</Button>
      </Stack>

      <h4 className="text-uppercase color-secondary fw-bold mt-4">Certificate Course</h4>
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">X-ray technician and Medical Instrument technician course</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">PCB</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">designing Course</Button>
      </Stack>

      <h4 className="text-uppercase color-secondary fw-bold mt-4">Further Studies</h4>
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. Electronics.</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. Material Science.</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. Science</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. Space Physics</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. Nuclear</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. Plasma Physics.</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. Electronics</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">MCA </Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">MBA</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">B.Ed. </Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Ed.</Button>
      </Stack>


      <h4 className="text-uppercase color-secondary fw-bold mt-4">Opt. for Civil Services</h4>
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">UPSC</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">GPSC</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">ASI</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">PSI</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">SSC</Button>
      </Stack>



    </Box>
  );
}

export default ScopOfProgram;









































































