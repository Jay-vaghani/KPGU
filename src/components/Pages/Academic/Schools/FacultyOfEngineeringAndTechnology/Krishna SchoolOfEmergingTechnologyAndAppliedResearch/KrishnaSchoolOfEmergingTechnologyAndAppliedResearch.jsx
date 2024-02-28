import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Button, Grid, Tab } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";
import { useNavigate } from "react-router-dom";

function KrishnaSchoolOfEmergingTechnologyAndAppliedResearch() {
  const { maxWidth, innerWidth } = useContext(AppContext);
  const navigate = useNavigate();

  const [programValue, programValueSetValue] = useState("1");

  const programHandleChange = (event, newValue) => {
    programValueSetValue(newValue);
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const DepartmentList = [
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/comuter-science.svg",
      name: "COMPUTER SCIENCE AND ENGINEERING",
      link: "/academics/kset/computer-science-and-engineering",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/infromation-tech.svg",
      name: "information technology",
      link: "/academics/kset/information-technology",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/electrical-engineering.svg",
      name: "electrical engineering",
      link: "/academics/kset/electrical-engineering",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/mechanics.svg",
      name: "mechanical engineering",
      link: "/academics/kset/mechanical-engineering",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/civil.svg",
      name: "civil engineering",
      link: "/academics/kset/civil-engineering",
    },
  ];

  const Faculties = [
    // ======================= CIVIL =======================
    // ======================= EE =======================
    // {
    //   name: "Dr. Ravindrakumar Yadav",
    //   imgNo: "6188",
    //   designation: "Assistant Professor & Head",
    //   experience: 21,
    //   qualification: "Ph.D",
    //   customLink: "",
    // },
    // ======================= IT =======================
    // ======================= ME =======================
    // {
    //   name: "Dr. Nirmal Kumar Kushwaha",
    //   imgNo: "5989",
    //   designation: "HOD || Assistant Professor",
    //   experience: 12,
    //   qualification:
    //     "PhD[Mechanical Engineering] || M.Tech[Mechanical Engineering] || B.Tech[Industrial and Production Engineering] || GATE-2010[Mechanical Engineering]",
    //   customLink: "",
    // },
    // ======================= ME =======================
    // {
    //   name: "Dr. Nitesh Sureja",
    //   imgNo: "6057",
    //   designation: "Professor & Director",
    //   experience: 28,
    //   qualification: "PhD || BE || ME",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Priyanka A Patel",
    //   imgNo: "6048",
    //   designation: "Assistant Professor",
    //   experience: 12,
    //   qualification: "M.Tech || B.E",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Priya Patel",
    //   imgNo: "6011",
    //   designation: "Assistant Professor",
    //   experience: 6,
    //   qualification: "PhD(Pursuing) || M.E || B.E",
    //   customLink: "",
    // },
    // {
    //   name: "Mr. Ramesh Patoliya ",
    //   imgNo: "6033",
    //   designation: "Assistant Professor",
    //   experience: 15,
    //   qualification:
    //     "Ph.D.(Persuing) || M.Sc[Mathematics] || M.Phil[Mathematics]",
    //   customLink: "",
    // },
    // {
    //   name: "Mr. Nirav Panchal",
    //   imgNo: "6032",
    //   designation: "Assistant Professor",
    //   experience: 11,
    //   qualification: "M.Sc in Applied Mathematics ",
    //   customLink: "",
    // },
    // {
    //   name: "MS. Mittal C. Joshi",
    //   imgNo: "6043",
    //   designation: "Assistant Professor",
    //   experience: 6,
    //   qualification: "M.E || B.E",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Niyati Mevada",
    //   imgNo: "6040",
    //   designation: "Assistant Professor",
    //   experience: 7,
    //   qualification: "M.E || B.E || D.I.P",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Khushbu Shah",
    //   imgNo: "6026",
    //   designation: "Assistant Professor",
    //   experience: 15,
    //   qualification: "M.Sc in Applied Mathematics ",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Bhumika Patel",
    //   imgNo: "6028",
    //   designation: "Assistant Professor",
    //   experience: 11,
    //   qualification: "M.Sc in Applied Mathematics",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Janki Gandhi",
    //   imgNo: "6030",
    //   designation: "Assistant Professor",
    //   experience: 2,
    //   qualification: "M.Sc in Mathematics ",
    //   customLink: "",
    // },
    // {
    //   name: "Mr .Yagneshbhai Alkeshkumar vyas",
    //   imgNo: "6041",
    //   designation: "Assistant Professor",
    //   experience: 9,
    //   qualification: "PhD(Pursuing) || M.Sc",
    //   customLink: "",
    // },
    // {
    //   name: "Dr. Disha Pandya",
    //   imgNo: "6029",
    //   designation: "Assistant Professor",
    //   experience: 17,
    //   qualification: "PhD in English",
    //   customLink: "",
    // },
    // {
    //   name: "Dr. Hina D. Dobariya",
    //   imgNo: "6185",
    //   designation: "Assistant professor",
    //   experience: 10,
    //   qualification: "Ph.D || M.phil || M.A || B.A",
    //   customLink: "",
    // },
    // {
    //   name: "Dr. Arti Kotak ",
    //   imgNo: "6061",
    //   designation: "Assistant Professor",
    //   experience: 11,
    //   qualification: "TEFL/TESOL || PhD || MA || BA",
    //   customLink: "",
    // },
    // {
    //   name: "Priyanka Dubey",
    //   imgNo: "9868",
    //   designation: "Assistant Professor",
    //   experience: 1,
    //   qualification: "M Tech",
    //   customLink: "",
    // },
  ];

  const UG = [
    {
      title: "B. Tech in Computer Science & Engineering",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Information Technology",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Mechanical Engineering",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Electrical Engineering",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Civil Engineering",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
  ];

  const PG = [
    {
      title: "M. Tech in Advance Manufacturing System ",
      link: "",
      pageLink: "",
      fees: "90,000 /Years",
      duration: "2",
    },
    {
      title: "M. Tech in Data Science",
      link: "",
      pageLink: "",
      fees: "90,000 /Years",
      duration: "2",
    },
  ];

  const Diploma = [
    {
      title: "Computer Science & Engineering",
      link: "",
      pageLink: "",
      fees: "49,000 / Year",
      duration: "3",
    },
    {
      title: "Information Technology",
      link: "",
      pageLink: "",
      fees: "49,000 / Year",
      duration: "3",
    },
  ];

  const PGManagement = [
    {
      title: "MBA",
      link: "",
      pageLink: "",
      fees: "65,000 / Year",
      duration: "2",
    },
  ];

  const Announcements = [
    {
      title: "Announcement 1",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat, dolores eaque molestiae consectetur error ! Nobis ducimus officiis eaque",
      date: "1-1-2024",
      img: "https://thumbs.dreamstime.com/z/corporate-announcement-poster-template-vector-flyer-business-conference-social-media-event-banner-134120981.jpg?w=992",
    },
    {
      title: "Announcement 2",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat, dolores eaque molestiae consectetur error ! Nobis ducimus officiis eaque",
      date: "1-1-2024",
      img: "https://thumbs.dreamstime.com/z/corporate-announcement-poster-template-vector-flyer-business-conference-social-media-event-banner-134120981.jpg?w=992",
    },
    {
      title: "Announcement 3",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat, dolores eaque molestiae consectetur error ! Nobis ducimus officiis eaque",
      date: "1-1-2024",
      img: "https://thumbs.dreamstime.com/z/corporate-announcement-poster-template-vector-flyer-business-conference-social-media-event-banner-134120981.jpg?w=992",
    },
  ];

  // ============== Components ==============

  const DepartmentListComponent = ({ name, img, link }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card department-card"
        p={2}
        borderRadius={4}
        onClick={() => navigate(link)}
      >
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} sm={12} md={3}>
            <img
              src={img}
              alt=""
              className="w-100 d-block mx-auto"
              style={{ maxWidth: "120px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            textTransform={"uppercase"}
            textAlign={{
              xs: "center",
              md: "start",
            }}
          >
            <h5 className="mb-0 fw-bold ">Department Of </h5>
            <h5>{name}</h5>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );

  return (
    <>
      <TabContext value={value}>
        <Box
          className="smooth-shadow"
          bgcolor={"#fff"}
          p={2}
          borderRadius={4}
          mt={7}
          position={"sticky"}
          top={0}
          maxWidth={maxWidth}
          mx={"auto"}
          zIndex={99999999}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation={`horizontal`}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
          >
            <Tab
              className="align-items-start fw-bold text-start "
              label="Message From Director"
              value="1"
              href="#director-message"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="Departments"
              value="2"
              href="#department"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="Programs"
              value="3"
              href="#program"
            />

            <Tab
              className="align-items-start fw-bold text-start "
              label="Announcements"
              value="4"
              href="#announcements"
            />
          </TabList>
        </Box>
      </TabContext>

      <div style={{ padding: "80px 0 0 0" }} id="director-message">
        <Box
          maxWidth={maxWidth}
          mx={"auto"}
          p={"3%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
        >
          <SchoolWelcomeSection
            title={
              "Krishna School Of Emerging Technology & Applied Research [KSET]"
            }
          />
          <DirectorsMessage
            dirImg={
              "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708500691/KPGU/Faculty%20Images/KSET/Director.webp"
            }
            dirEmail={"dir.kset@kpgu.ac.in"}
            dirName={"Dr. Nitesh Sureja"}
            dirOf={"Krishna School of Emerging Technology & Applied Research"}
            dirOfShort={"[KSET]"}
            dirMessage={[
              "The Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara’s constituent institute Krishna School of Emerging Technology & Applied Research (KSET), formerly known as, Babaria Institute of Technology was founded in the year 2004 with the goal of providing leadership in education and research with a specific focus on science and technology. The learning experiences at KSET are rewarding, lasting, and fun. We are aware that only a supportive environment can foster creativity and propel individuals to greater heights of success in their endeavors. We have a dynamic environment that produces leading innovators, social scientists, professionals, businesspeople, academicians, and thinkers of the future. The team must remain focused on attaining this goal despite short-term vicissitudes since the stakeholders’ emotional connection, shared faith, and trust are so strong.",
              "We firmly believe that the quality of research will determine how educational institutions will look in the future. For a campus to remain alive, alumni and industry connections must be encouraged and strengthened. With adequate options for academic, co-curricular, and extracurricular activities and a steadfast focus on fostering the individual, we encourage multidisciplinary orientation.",
              "I firmly believe that operating in silos will prevent an organization from succeeding. It is the culmination of the diligent efforts of each and every one of its members. We will be able to carve out a niche in pursuit of our vision and contribute to the development of the area and our motherland as visualized in National Education Policy 2020 with the help and commitment of qualified and experienced faculty members, supportive administration, and vibrant students, I am sure and confident.",
            ]}
          />
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="department">
        <Box
          maxWidth={maxWidth}
          mx={"auto"}
          p={"3%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
        >
          <h2 className="fw-bold color-secondary mb-4">Department</h2>
          <Grid container spacing={4}>
            {DepartmentList.map(({ img, name, link }, index) => (
              <DepartmentListComponent
                img={img}
                name={name}
                link={link}
                key={index}
              />
            ))}
          </Grid>
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="program">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"3%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <TabContext value={programValue}>
            <TabList
              textColor="secondary"
              indicatorColor="secondary"
              variant="scrollable"
              onChange={programHandleChange}
              aria-label="lab API tabs example"
            >
              <Tab className="fw-bold" label="diploma" value="1" />
              <Tab className="fw-bold" label="ug" value="2" />
              <Tab className="fw-bold" label="pg" value="3" />
              <Tab className="fw-bold" label="pg management" value="4" />
            </TabList>
            <TabPanel value="1" sx={{ px: "0 !important" }}>
              <Grid container spacing={2}>
                {Diploma.map(
                  ({ des, link, pageLink, title, duration, fees }, index) => (
                    <ProgramCard
                      des={des}
                      link={link}
                      pageLink={pageLink}
                      title={title}
                      key={index}
                      duration={duration}
                      fees={fees}
                    />
                  )
                )}
              </Grid>
            </TabPanel>
            <TabPanel value="2" sx={{ px: "0 !important" }}>
              <Grid container spacing={2}>
                {UG.map(
                  ({ des, link, pageLink, title, duration, fees }, index) => (
                    <ProgramCard
                      des={des}
                      link={link}
                      pageLink={pageLink}
                      title={title}
                      key={index}
                      duration={duration}
                      fees={fees}
                    />
                  )
                )}
              </Grid>
            </TabPanel>
            <TabPanel value="3" sx={{ px: "0 !important" }}>
              <Grid container spacing={2}>
                {PG.map(
                  ({ des, link, pageLink, title, duration, fees }, index) => (
                    <ProgramCard
                      des={des}
                      link={link}
                      pageLink={pageLink}
                      title={title}
                      key={index}
                      duration={duration}
                      fees={fees}
                    />
                  )
                )}
              </Grid>
            </TabPanel>
            <TabPanel value="4" sx={{ px: "0 !important" }}>
              <Grid container spacing={2}>
                {PGManagement.map(
                  ({ des, link, pageLink, title, duration, fees }, index) => (
                    <ProgramCard
                      des={des}
                      link={link}
                      pageLink={pageLink}
                      title={title}
                      key={index}
                      duration={duration}
                      fees={fees}
                    />
                  )
                )}
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="announcements">
        <Box
          p={"3%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Announcements</h2>
          <Grid container spacing={3} mt={1}>
            {Announcements.map(({ date, des, img, title }, index) => (
              <AnnouncementCard
                date={date}
                des={des}
                img={img}
                title={title}
                key={index}
              />
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default KrishnaSchoolOfEmergingTechnologyAndAppliedResearch;
