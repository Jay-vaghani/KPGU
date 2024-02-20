import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Grid, Tab } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";

function KrishnaSchoolOfArtsAndHumanities() {
  const { maxWidth } = useContext(AppContext);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = useState("1");

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
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

      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <Box mb={4}>
          <h2 className="fw-bold color-secondary fs-1">Faculty Members</h2>
        </Box>
        <Grid container spacing={2}>
          {Faculties.map(
            ({ name, cv, designation, experience, qualification }, index) => (
              <FacultyStaff
                name={name}
                cv={cv}
                qualification={qualification}
                designation={designation}
                experience={experience}
                key={index}
              />
            )
          )}
        </Grid>
      </Box>
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "To educate Social Sciences' students to the highest level of academic achievement in chosen field of discipline, in thirst to pursue new horizons by expanding their potential, and prepare them to become ethically responsible, productive and compassionate member of the society."
          }
          right={true}
        />
      </Box>
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <h2 className="fw-bold color-secondary fs-1">Mission</h2>
        <Quote
          quote={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quidem molestiae ea earum iste. Explicabo asperiores dignissimos veritatis quae inventore."
          }
          right={true}
        />
      </Box>
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <Box mb={4}>
          <h2 className="fw-bold color-secondary fs-1">Programs </h2>
        </Box>
        <TabContext value={value}>
          <TabList
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            onChange={handleChange}
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
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <Box mb={4}>
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
      </Box>
    </Box>
  );
}

export default KrishnaSchoolOfArtsAndHumanities;
