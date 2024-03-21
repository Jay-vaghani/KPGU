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

function KrishnaSchoolOfPhysiotherapyAndRehabilitation() {
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
      name: "Dr. Paras Bhura",
      imgNo: "6096",
      designation: "Associate Professor || Director",
      experience: 11,
      qualification: "Ph.D || MPT",
      customLink: "",
    },
    {
      name: "Dr. Camy Bhura",
      imgNo: "5852",
      designation: "Associate Professor",
      experience: 11,
      qualification: "MPT || Ph.D",
      customLink: "",
    },
    {
      name: "Dr. Pragna Landge",
      imgNo: "5864",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "MPT || Ph.D ",
      customLink: "",
    },
    {
      name: "Dr. Amit kumar Singh",
      imgNo: "5856",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Aastha Bodade",
      imgNo: "5854",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Fatema Daruwala",
      imgNo: "5859",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "MPT",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707806085/KPGU/Faculty%20Images/KSPR/5959.webp",
    },
    {
      name: "Dr. Ankita Shah",
      imgNo: "5861",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "MPY\T",
      customLink: "",
    },
    {
      name: "Dr. Nikita Sonaiya",
      imgNo: "5850",
      designation: "Assistant Professor",
      experience: 1,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Harsha Ramrakhiyani",
      imgNo: "9873",
      designation: "Assistant Professor",
      experience: 6,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Shreya Trivedi",
      imgNo: "9874",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Kinjal Patel, PT",
      imgNo: "9875",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "MPT || PHD Persuing",
      customLink: "",
    },
    {
      name: "Dr. Dharmesh Contractor",
      imgNo: "5849",
      designation: "Clinical Physiotherapist",
      experience: 16,
      qualification: "BPT",
      customLink: "",
    },
    {
      name: "Dr. Pooja Bhavsar",
      imgNo: "5863",
      designation: "Clinical Physiotherapist",
      experience: 2,
      qualification: "BPT",
      customLink: "",
    },
    {
      name: "Dr. Kamilmehdi Lafawala, PT",
      imgNo: "0006",
      designation: "Clinical Physiotherapist",
      experience: 2,
      qualification: "BPT",
      customLink: "",
    },
  ];

  const UG = [
    {
      title: "B.P.T",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
  ];
  const PG = [
    {
      title: "M.P.T in Musculoskeletal & Sports",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "2",
    },
    {
      title: "M.P.T in Neurological & Psychosomatic disorders ",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "2",
    },
    {
      title: "M.P.T in Cardio - Respiratory & Intensive Care  ",
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
          bgcolor={"rgba(256, 256, 256, 0.9)"}
          sx={{ backdropFilter: "blur(15px)" }}
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
            title={"Krishna School Of Pharmacy And Research [KSPR]"}
          />
          <DirectorsMessage
            dirImg={
              "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709632447/KPGU/Faculty%20Images/KSPR/dir-img.jpg"
            }
            dirEmail={"directoremail@gmail.com"}
            dirName={"Dr. Paras Bhura"}
            dirOf={"Krishna School Of Pharmacy And Research"}
            dirOfShort={"[KSPR]"}
            dirMessage={[
              "Greetings and best wishes to every one of you. I extend a very warm welcome to all the students hoping to enroll in our esteemed University for their graduate and postgraduate courses. The institute promotes professional excellence in the fields of physiotherapy and rehabilitation sciences through the use of the three pillars of hands-on skills, evidence-based practice, and clinical reasoning.",
              "In my opinion, a quality education in and of itself can help a person advance their career and have a prosperous future. Over the past few years, the institute has expanded not only in terms of its activities, programs, and student body but also by making a name for itself in the physiotherapy educational sector.",
              "To prepare students for further study or employment in their field of interest as well as the challenging world, we strive to offer them robust, recent, and updated knowledge regarding their topic. On behalf of the management, I reassure the parents and children that we carry out our vision and goal without succumbing to any organizational flaws, and that we do honor our efforts.",

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
              "Krishna School of Physiotherapy & Rehabilitation is driven to provide excellent leadership qualities in academic and clinical practice, and thus empower them to meet and exceed challenges as effective participation in shaping the future leaders of rapidly advancing world."
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
              "The mission of the college is to provide transformative learning experiences through the development of critical thinking, effective communication, and excellence in health care by prepare young brains for imbibing Knowledge, Skills and Sensitivity."
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

export default KrishnaSchoolOfPhysiotherapyAndRehabilitation;















