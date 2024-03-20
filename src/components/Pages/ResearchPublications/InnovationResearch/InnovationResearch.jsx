import React, { useContext } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { AppContext } from "../../../../contexts/AppContext";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";

function InnovationResearch() {
  const { maxWidth } = useContext(AppContext);

  const TeamList = [
    {
      img: "",
      name: "",
      designation: "",
      school: "",
    },
    {
      img: "",
      name: "",
      designation: "",
      school: "",
    },
    {
      img: "",
      name: "",
      designation: "",
      school: "",
    },
  ]

  const MissionList = [
    "To support, lead, integrate, and deliver strong infrastructure for multidisciplinary research.",
    "To Promote shared responsibility, the ethical conduct of research, and compliance.",
    "To Enhances researchers' abilities to obtain and manage grants.",
    "To create integrated services, transparent research administration, infrastructure, and streamlined processes.",
    "To enhance the ability to perform research in a global community.",
    "To partner with the research community to create a culture of high achievement.",
    "To strategically invest in promising research and researchers.",
    "To provide training opportunities to the University’s uniquely diverse student body under the mentorship of the Center’s internationally recognized engineers and scientists.",
  ];

  const MissionListComponent = ({ des }) => (
    <h5 className="fw-bold mb-3">
      <Stack
        pl={"2%"}
        direction={"row"}
        alignItems={"start"}
        color={"secondary.main"}
      >
        <KeyboardDoubleArrowRightRounded sx={{ fontSize: "27px" }} />
        {des}
      </Stack>
    </h5>
  );

  const TeamListComponent = ({ img, name, designation, school }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box className="smooth-shadow-card" borderRadius={4}>
        <Box>
          <img src={img} alt="" />
        </Box>
        <Box p={2}>
          <h3 className="color-secondary fw-bold mb-1">{name}</h3>
          <h5 className="fw-bold mb-3">{designation}</h5>
          <h6 className="fw-bolder color-secondary">{school}</h6>
        </Box>
      </Box>
    </Grid>
  )

  return (
    <>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Krishna Centre of Innovation & Research</h3>
        <h5 className='fw-semibold mb-3 '>Krishna Centre of Innovation & Research has been established to encourage the students and faculty members to undertake quality research work to address societal, state, national and global challenges thereby increase the production of traditional research outputs (as defined by research articles, books, book chapters, and conference proceedings).  The Centre encourages faculty members to participate in research, publish their work and participate in national and international conferences to present the research data and generate new concepts in the emerging areas, if required by collaborating with other national and foreign universities.</h5>
      </Box>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Mission</h3>
        {MissionList.map((des, index) => (
          <MissionListComponent des={des} key={index} />
        ))}
      </Box>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Team</h3>
        <Grid container spacing={4}>
          {
            TeamList.map(({ designation, img, name, school }, index) => <TeamListComponent designation={designation} img={img} name={name} school={school} key={index} />)
          }
        </Grid>
      </Box>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Krishna Centre Of Innovation Research Accomplishments</h3>
       
      </Box>
    </>
  );
}

export default InnovationResearch;
