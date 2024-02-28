import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Button, Grid, Tab } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";
import { useNavigate } from "react-router-dom";

function KrishnaSchoolOfTechnology() {
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
      name: "COMPUTER ENGINEERING",
      link: "/academics/ksds/computer-science-and-engineering",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709115277/KPGU/icon/food-tec.svg",
      name: "food technology",
      link: "/academics/ksds/information-technology",
    },
   
  ];

  const Faculties = [
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 12,
      cv: "",
      qualification: "P.H.D",
    },
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 13,
      cv: "",
      qualification: "P.H.D",
    },
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 14,
      cv: "",
      qualification: "P.H.D",
    },
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 15,
      cv: "",
      qualification: "P.H.D",
    },
  ];

  const UG = [
    {
      title: "B.Tech in Computer Engineering",
      link: "",
      pageLink: "",
      fees: "95,000 / Year",
      duration: "4",
    },
    {
      title: "B.Tech in Food Technology",
      link: "",
      pageLink: "",
      fees: "95,000 / Year",
      duration: "4",
    },
  ];
  const PG = [
    {
      title: "M.Tech in Computer Science & Engineering",
      link: "",
      pageLink: "",
      fees: "90,000 / Year",
      duration: "2",
    },
    {
      title: "M.Tech in Computer Engineering",
      link: "",
      pageLink: "",
      fees: "90,000 / Year",
      duration: "2",
    },
    {
      title: "M.Tech in Electrical Engineering",
      link: "",
      pageLink: "",
      fees: "90,000 / Year",
      duration: "2",
    },
    {
      title: "M.Tech in Information Technology",
      link: "",
      pageLink: "",
      fees: "90,000 / Year",
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
            title={"Krishna School Of Diploma Studies [KSDS]"}
          />
          <DirectorsMessage
            dirImg={
              "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708500691/KPGU/Faculty%20Images/KSET/Director.webp"
            }
            dirEmail={"dir.ksds@kpgu.ac.in"}
            dirName={"Dr. Dattesh Y. Joshi"}
            dirOf={"Krishna School Of Diploma Studies"}
            dirOfShort={"[KSDS]"}
            dirMessage={["Welcome to the esteemed Krishna School of Diploma Studies (KSDS) at Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara. As the Director, I am honoured to lead our dedicated team in fostering academic excellence and innovation.", "Our holistic approach to learning imparts technical knowledge alongside critical thinking and problem-solving skills. Our experienced faculty ensures students are well-equipped for the dynamic engineering landscape.", "Through cutting-edge curricula, labs, and industry collaborations, we offer a transformative educational experience that prepares students for leadership roles.", "Committed to values of integrity and inclusivity, we provide a diverse and respectful environment. Our website showcases programs, faculty, research, and campus life.", "Whether you’re a student, parent, industry partner, or academician, we look forward to your engagement with us.", "Thank you for considering Krishna School of Diploma Studies (KSDS), Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara as your educational destination. Join us on a journey of knowledge and excellence."]}
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
              <Tab className="fw-bold" label="ug" value="1" />
              <Tab className="fw-bold" label="pg" value="2" />
            </TabList>
            <TabPanel value="1" sx={{ px: "0 !important" }}>
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
            <TabPanel value="2" sx={{ px: "0 !important" }}>
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

export default KrishnaSchoolOfTechnology;



