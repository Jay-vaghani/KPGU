import React, { useContext } from "react";
import { Box, Grid, Stack, Tab } from "@mui/material";
import { AppContext } from "../../../../../../../contexts/AppContext";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import MessageFromHod from "./ComputerEngineering/MessageFromHod";
import AboutDepartment from "./ComputerEngineering/AboutDepartment";
import ComputerLab from "./ComputerEngineering/ComputerLab";
import ResearchAreas from "./ComputerEngineering/ResearchAreas";
import FacultyStaffSection from "./ComputerEngineering/FacultyStaffSection";
import VisionAndMission from "./ComputerEngineering/VisionAndMission";

function MechanicalEngineering() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <HODMessage
          hodImg={
            "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708513775/KPGU/Faculty%20Images/KSET/hod-cse.webp"
          }
          hodEmail={"directoremail@gmail.com"}
          hodName={"Dr. Rocky Upadhyay"}
          hodOf={"Computer Science And Engineering"}
          hodOfShort={"[KSET]"}
          hodMessage={[
            "You are invited to join the vibrant computer science community and become the future’s innovators and change agents by enrolling in the Department of Computer Science and Engineering. The Department of CSE was established in 2004. Our esteemed faculties guarantee a wide range of diverse learning experiences, including Core Courses, Programming and, Emerging Technologies",
            "Our department of computer science and engineering (CSE) is committed to giving its students excellent jobs. Our teachers and students are always pushing the boundaries of what is possible in computer science and engineering. We do not try to turn our students into walking manuals for any particular language or software. They are instead given a solid foundation in computer science and problem-solving methods, and they are made adaptable to changes with a strong emphasis on context and project-based learning through mini-projects, industry visits, guest lectures, student activities & leadership events, professional societies like Computer Society of India, and an incubation center.",
            "The Department is proud of its robust network of alumni, many of whom hold important positions in academics and business related to information technology on both a national and international scale. We welcome talented students, researchers, academics, and workers to join us and contribute to the campus’s vibrant and competitive learning environment. Additionally, the CSE department has MoUs with some of the finest organizations and works to further strengthen them.",
            "The placement record of qualified students over the past several years has been excellent, and they are now employed by reputable firms. In order to explore and invent new methods and find sustainable solutions, students and teachers are constantly working on exciting and fascinating problems or projects that are published in numerous national and foreign journals.",
          ]}
        />
        <Quote
          quote={
            "With the idea that mentoring is a lifetime commitment, we motivate students to achieve academic excellence with valuable life lessons"
          }
        />
      </Box> */}
      {/* <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <h2 className="text-uppercase fw-bold color-secondary mb-4">
          About Department
        </h2>
        <Paragraph
          content={[
            "In the Institute, the Department of Computer Science & Engineering was established in 2004.The department aims wants to offer top-notch computer science education. The controlling centre of computing for the full institute is operated by the Department of Computer Science & Engineering.",
            "Our knowledgeable faculty exposes aspiring computer engineers to a demanding and thorough industry-focused curriculum created to bring out the best in them and keep them up to date with the most cutting-edge technology. Our curriculum progressively improves students’ technical and soft skills. Along with teaching theory, a lot of emphasis is placed on projects, industrial training, and certification.",
            "Our department’s area of emphasis is on institute-industry interface programmes that let students engage with businesses constantly. Equal weight is given to classroom instruction, which is intended to provide theoretical or conceptual knowledge inputs on a range of projects.",
            "The B.Tech Computer Science & Engineering program places a strong focus on the theoretical and practical aspects of Computer Programming, Database Management System, Advance Software Design and Development, System Programming, Internet of Things & Hardware, Wireless & Mobile Computing, Computer Graphics, Web Programming and Development, Operating Systems, AI & ML, Big Data Analytics, and Cyber Security.",
            "The program offers a variety of employment opportunities on both the domestic and international markets. The department has been set up where innovative activities are planned and carried out, and is equipped with the most recent PCs, software, and hands-on expertise for providing high-quality education.",
            "It continues to be the top option among all applicants for admittance to KSET. The young talent that aspires to study, teach, or create in the field of computer science is warmly welcomed by our team. So join us by coming.",
          ]}
        />
      </Box> */}

      {/* <Box
        mt={7}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow-card"
        maxWidth={maxWidth}
        mx={"auto"}
        p={"3%"}
      >
        <h2 className="fw-bold color-secondary fs-1 mb-4">
          Honors - Minors Offered Broadly
        </h2>
        <Grid container spacing={4}>
          {HonorsMinorsList.map(({ title, img }, index) => (
            <HonorsMinorsListComponent img={img} title={title} key={index} />
          ))}
        </Grid>
      </Box> */}
      <TabContext value={value}>
        <Grid container maxWidth={maxWidth} mx={"auto"} mt={7}>
          <Grid item xs={12} md={3} pb={4}>
            <Box
              className="smooth-shadow"
              bgcolor={"#fff"}
              p={2}
              borderRadius={4}
              position={"sticky"}
              top={0}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                orientation={`${innerWidth < 900 ? "horizontal" : "vertical"}`}
                textColor="secondary"
                indicatorColor="secondary"
                variant="scrollable"
              >
                <Tab
                  className="align-items-start fw-bold text-start "
                  label="Message From HOD"
                  value="1"
                />
                <Tab
                  className="align-items-start fw-bold text-start "
                  label="About Department"
                  value="2"
                />
                <Tab
                  className="align-items-start fw-bold text-start "
                  label="Vision And Mission"
                  value="3"
                />
                <Tab
                  className="align-items-start fw-bold text-start "
                  label="ComputerLab"
                  value="5"
                />

                <Tab
                  className="align-items-start fw-bold text-start "
                  label="Faculty"
                  value="7"
                />
              </TabList>
            </Box>
          </Grid>
          <Grid item xs={12} md={9} pl={innerWidth < 900 ? "0" : 4}>
            <Box className="smooth-shadow" bgcolor={"#fff"} borderRadius={4}>
              <TabPanel value="1">
                <MessageFromHod />
              </TabPanel>
              <TabPanel value="2">
                <AboutDepartment />
              </TabPanel>
              <TabPanel value="3">
                <VisionAndMission />
              </TabPanel>
              <TabPanel value="5">
                <ComputerLab />
              </TabPanel>
              <TabPanel value="6">
                <ResearchAreas />
              </TabPanel>
              <TabPanel value="7">
                <FacultyStaffSection />
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </TabContext>
    </>
  );
}

export default MechanicalEngineering;
