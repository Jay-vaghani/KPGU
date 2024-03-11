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

function KrishnaSchoolOfPharmacyAndResearch() {
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
      name: "Dr. Falgun A. Mehta",
      imgNo: "5909",
      designation: "Director || Professor",
      experience: 21,
      qualification: "M.Pharm || Ph.D",
      customLink: "",
    },
    {
      name: "Dr.Prachi Pandey",
      imgNo: "5987",
      designation: "HOD || PROFESSOR",
      experience: 18,
      qualification: "M.Pharm || PhD || PGD || MBA",
      customLink: "",
    },
    {
      name: "Dr. Mihir Y. Parmar",
      imgNo: "5882",
      designation: "Professor || HOD[Dept. of Pharmacology]",
      experience: 17,
      qualification: "M.Pharm || Ph.D",
      customLink: "",
    },
    {
      name: "Dr. Shaileshkumar K. Koradia",
      imgNo: "5900",
      designation: "Professor || HOD",
      experience: 16,
      qualification: "M.Pharm || Ph.D",
      customLink: "",
    },
    {
      name: "Dr. Upasana R. Yadav",
      imgNo: "5979",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.S || PhD || PGD",
      customLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707802369/KPGU/Faculty%20Images/KSP/5979.webp",
    },
    {
      name: "Mr. Taufik Mulla",
      imgNo: "5904",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Pharm [PhD Pursuing]",
      customLink: "",
    },
    {
      name: "Mr. Paul Rodriques ",
      imgNo: "5905",
      designation: "Assistant professor ",
      experience: 6,
      qualification: "M.Pharm",
      customLink: "",
    },
    {
      name: "Ms. Rupa Singh",
      imgNo: "6175",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.Pharm",
      customLink: "",
    },
    {
      name: "Ms.Ummehani Kallawala ",
      imgNo: "5885",
      designation: "Assistant Professor",
      experience: 1,
      qualification: "M.Pharm",
      customLink: "",
    },
    {
      name: "Mr. Zalak D. Dave",
      imgNo: "5908",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Pharm",
      customLink: "",
    },
    {
      name: "Ms. Ashwini Patel",
      imgNo: "5896",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Pharm",
      customLink: "",
    },
    {
      name: "Ms. Mariyambibi Mandarawala",
      imgNo: "5886",
      designation: "Assistant Professor",
      experience: 6,
      qualification: "M.Pharm ",
      customLink: "",
    },
    {
      name: "Ms. Sanjogata Soni",
      imgNo: "5883",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Pharm ",
      customLink: "",
    },
    {
      name: "Mr. Salaj Khare",
      imgNo: "5884",
      designation: "Assistant Professor",
      experience: 15,
      qualification: "M.Pharm",
      customLink: "",
    },
    {
      name: "Ms.Dhairyashri kher",
      imgNo: "5890",
      designation: "Assistant professor",
      experience: 1,
      qualification: "M.pharm",
      customLink: "",
    },
    {
      name: "Dr. Meghraj Suryawanshi",
      imgNo: "6347",
      designation: "Assistant professor",
      experience: 5,
      qualification: "M.Pharm || MBA || PDCR || Ph.D.",
      customLink: "",
    },
    {
      name: "Mr. Bhavin D. Pandya",
      imgNo: "5893",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "B.Pharm || M.Pharm",
      customLink: "",
    },
    {
      name: "Mr. Shreyash A. Diwakar",
      imgNo: "5891",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "B.Pharm || M.Pharm",
      customLink: "",
    },
    {
      name: "Ms.Priyanka Shah",
      imgNo: "0",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "B.Pharm || M.Pharm",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Mrs.Parul Vasava",
      imgNo: "0",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "Ph.D.|| M.Pharm || B.Pharm",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Mr. Kuldeep Vinchurkar",
      imgNo: "0",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "B.Pharm || M.Pharm",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Mr. Kaish Pathan",
      imgNo: "0",
      designation: "Assistant Professor",
      experience: 1,
      qualification: "B.Pharm || M.Pharm",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },


  ];

  const UG = [
    {
      title: "B. Pharm",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
  ];
  const PG = [
    {
      title: "M. Pharm in Pharmaceutics",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "2",
    },
    {
      title: "M. Pharm in Pharmacology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "2",
    },
    {
      title: "M. Pharm in Pharmaceutical Quality Assurance",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "2",
    },
    {
      title: "M. Pharm in Pharmaceutical Technology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
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
          p={"3%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
        >
          <SchoolWelcomeSection
            title={"Krishna School Of Pharmacy & Research [KSP]"}
          />
          <DirectorsMessage
            dirImg={
              "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709630941/KPGU/Faculty%20Images/KSP/dir-img.webp"
            }
            dirEmail={"dir.ksds@kpgu.ac.in"}
            dirName={"Dr. Falgun A. Mehta"}
            dirOf={"Krishna School Of Pharmacy & Research"}
            dirOfShort={"[KSP]"}
            dirMessage={[
              "The Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara’s constituent institute Krishna School Of Technology (KST) providing leadership in education and research with a specific focus on science and technology. The learning experiences at KST are rewarding, lasting, and fun. We are aware that only a supportive environment can foster creativity and propel individuals to greater heights of success in their endeavors. We have a dynamic environment that produces leading innovators, social scientists, professionals, business people, academicians, and thinkers of the future. The team must remain focused on attaining this goal despite short-term vicissitudes since the stakeholders’ emotional connection, shared faith, and trust are so strong.",
              "We firmly believe that the quality of research will determine how educational institutions will look in the future. For a campus to remain alive, alumni and industry connections must be encouraged and strengthened. With adequate options for academic, co-curricular, and extracurricular activities and a steadfast focus on fostering the individual, we encourage multidisciplinary orientation.",
              "I firmly believe that operating in silos will prevent an organization from succeeding. It is the culmination of the diligent efforts of each and every one of its members. We will be able to carve out a niche in pursuit of our vision and contribute to the development of the area and our motherland as visualized in National Education Policy 2020 with the help and commitment of qualified and experienced faculty members, supportive administration, and vibrant students, I am sure and confident.",
            ]}
          />
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="vision">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"3%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Vision</h2>
          <Quote
            quote={
              "To contribute in effective global health care by leadership in pharmacy education, advancing research and merging entrepreneurial spirit with compassion."
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
          p={"3%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Mission</h2>
          <Quote
            quote={
              "To prepare pharmacists with strong scientific foundation fused with critical thinking, problem solving capacity, leadership & entrepreneurship skills in community and the profession through global collaboration leading to enhancement of health and quality of life in the society."
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
          p={"3%"}
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
                  facultyName={"KSP"}
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

export default KrishnaSchoolOfPharmacyAndResearch;








