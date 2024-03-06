import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";

function ScopOfProgram() {

  const ScopList = [
    "After doing B.Sc. (Chemistry), one can prefer for either further studies or take up various jobs and also take up internships to prepare for industry level entries.",
    "In recent times, due to favorable governmental initiatives, opting for a start-up can be an excellent choice for graduates of B.Sc. (Chemistry) program.",
    "After successful completion of B.Sc. (Chemistry) program one can always opt for civil service and other government sector employment exams.",
    "Now a days there is a bright scope in the field of research and development so once students get completed with M.Sc. in any branch of Chemistry can opt for Ph.D. program under any branches of chemistry.",

  ]

  return (
    <Box borderRadius={4} >
      <h2 className="fw-bold color-secondary fs-1 mb-3">
        Scop Of Program
      </h2>
      <h5 className="color-secondary mb-3 fw-semibold ">
        After doing B.Sc. (Microbiology), one can prefer for either further studies or take up various jobs and also take up internships to prepare for industry level entries.
      </h5>
      <h5 className="color-secondary mb-3 fw-semibold ">
        In recent times, due to favorable governmental initiatives, opting for a start-up can be an excellent choice for graduates of B.Sc. (Microbiology) program.
      </h5>
      <h5 className="color-secondary mb-3 fw-semibold ">
        After successful completion of B.Sc. (Microbiology) program one can always opt for civil service and other government sector employment exams.
      </h5>
      <h5 className="color-secondary mb-3 fw-semibold ">
        Now a days there is a bright scope in the field of research and development so once students get completed with M.Sc. in Microbiology can either opt for Ph.D. program or research projects in India or abroad.
      </h5>

      <h4 className="color-secondary mb-3 fw-semibold ">Some of the most relevant further education programs after B.Sc. (Chemistry) includes</h4>

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
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Pharmaceutical Industry</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Environmental Agency</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Food Industry</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Beverage Industry</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Chemical Industry</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Agriculture Department</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Government and Private Hospital</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Laboratory</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Research Projects</Button>
      </Stack>

      <h4 className="text-uppercase color-secondary fw-bold mt-4">Certificate Course</h4>
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Clinical Labs</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Health Care Industry </Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Military Hospitals</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Forensic Labs</Button>
      </Stack>

      <h4 className="text-uppercase color-secondary fw-bold mt-4">Further Studies</h4>
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc.</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Ph.D.</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Research Assistant</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Research Scientist</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">MCA/MBA</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">B.Ed.</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Ed.</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">M.Sc. </Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">MLT</Button>
        <Button variant="text" className="fw-bold border-2 smooth-shadow-card" color="secondary">Competitive Exams-GATE/NET/GSET etc.</Button>
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






































