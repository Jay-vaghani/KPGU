import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Button, Grid, Tab } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";
import { useNavigate } from "react-router-dom";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";

function KrishnaSchoolOfArtsAndHumanities() {
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



  const Faculties = [
    {
      name: "No Faculty Data",
      imgNo: "0",
      designation: "No data",
      experience: "No data",
      qualification: "No data",
      customLink: "",
    },
  ];

  const UG = [
    {
      title: "B.A. [Honours]",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
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
              label="vision"
              value="2"
              href="#vision"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="mission"
              value="3"
              href="#mission"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="Faculty"
              value="4"
              href="#faculty"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="Programs"
              value="5"
              href="#program"
            />

            <Tab
              className="align-items-start fw-bold text-start "
              label="Announcements"
              value="6"
              href="#announcements"
            />
          </TabList>
        </Box>
      </TabContext>

      <div style={{ padding: "80px 0 0 0" }} id="director-message">
        <Box
          maxWidth={maxWidth}
          mx={"auto"}
          p={"5%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
        >
          <SchoolWelcomeSection
            title={"Krishna School Of Arts And Humanities [KSAH]"}
          />
          <DirectorsMessage
            dirImg={
              "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
            }
            dirEmail={"directoremail@gmail.com"}
            dirName={"Dr. Falgun Mehta"}
            dirOf={"Krishna School Of Arts And Humanities"}
            dirOfShort={"[KSAH]"}
            dirMessage={[
              "Krishna School of Arts & Humanities (KSAH) believes Knowing Arts and Humanities are like knowing the past, the way it is today and knowing how the world would become in future. One can learn from the mistakes that had already been done in the past as well as the great things that had been accomplished. Arts and humanities help us to gain the ability to read reason and communicate, and this ability is the key to a successful career development. A liberal education, provided by Arts and Humanities, does not emphasize subject matter; instead it focuses on the ability to write, reason, read and work with numerical information.",
              "Krishna School of Arts & Humanities (KSAH) is a new expansion of Drs Kiran & Pallavi Global University, (KPGU). It is initiated from the academic year 2022. Krishna School of Arts and Humanities helps students to develop critical thinking, learn from others experience, understand how people from different culture lives and respect their own values. It broadens our perspective of life and society thus helps us to deal with everyday problem and bring us closer to one another. Arts and Humanities are essential to every one of us, the consequence of generation without Arts and Humanities means a generation without thoughts, experience and ability to deal with problem in life as well as dealing with people around us.",
            ]}
          />
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="vision">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"5%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Vision</h2>
          <Quote
            quote={
              "To educate Social Sciences' students to the highest level of academic achievement in chosen field of discipline, in thirst to pursue new horizons by expanding their potential, and prepare them to become ethically responsible, productive and compassionate member of the society."
            }
            right={true}
          />

        </Box>
      </div>
      <div style={{ padding: "80px 0 0 0" }} id="mission">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"5%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Mission</h2>
          <Quote
            quote={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quidem molestiae ea earum iste. Explicabo asperiores dignissimos veritatis quae inventore."
            }
            right={true}
          />
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="faculty">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"5%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <Box mb={4}>
            <h2 className="fw-bold color-secondary fs-1">Faculty Members</h2>
          </Box>
          <Grid container spacing={4}>
            {Faculties.map(
              (
                {
                  name,
                  designation,
                  experience,
                  qualification,
                  imgNo,
                  customLink,
                },
                index
              ) => (
                <FacultyStaff
                  name={name}
                  qualification={qualification}
                  designation={designation}
                  experience={experience}
                  key={index}
                  facultyName={"KSPR"}
                  imgNo={imgNo}
                  MainLink={
                    "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707807610/KPGU/Faculty%20Images/"
                  }
                  customLink={customLink}
                />
              )
            )}
          </Grid>
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="program">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"5%"}
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
          </TabContext>
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="announcements">
        <Box
          p={"5%"}
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

export default KrishnaSchoolOfArtsAndHumanities;






