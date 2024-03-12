import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Button, Grid, Stack, Tab } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";
import { useNavigate } from "react-router-dom";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";
import { CalendarMonth } from "@mui/icons-material";

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
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710242754/KPGU/Faculty%20Images/KSP/mhicnr16mrn6bb1jy36f.webp",
    },
    {
      name: "Mrs.Parul Vasava",
      imgNo: "0",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "Ph.D.|| M.Pharm || B.Pharm",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710242754/KPGU/Faculty%20Images/KSP/ewwjnwrukxfainqc0hce.webp",
    },
    {
      name: "Mr. Kuldeep Vinchurkar",
      imgNo: "0",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "B.Pharm || M.Pharm",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710242754/KPGU/Faculty%20Images/KSP/uryrxvylzsqhphdbutot.webp",
    },
    {
      name: "Mr. Kaish Pathan",
      imgNo: "0",
      designation: "Assistant Professor",
      experience: 1,
      qualification: "B.Pharm || M.Pharm",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710242754/KPGU/Faculty%20Images/KSP/rpopgion1kwn5mpvat80.webp",
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
            dirEmail={"dir.ksp@kpgu.ac.in"}
            dirName={"Dr. Falgun A. Mehta"}
            dirOf={"Krishna School Of Pharmacy & Research"}
            dirOfShort={"[KSP]"}
            dirMessage={[
              "The Pharmacist is a vital link in the entire healthcare chain. Pharmaceutical Science is a field of study and research which is very dynamic and leads to several avenues of work. The job and business opportunities for Pharma graduates are growing by leaps and bounds due to the remarkable growth and advancement in science and technology. COVID-19 has served to enforce the role of Pharma graduates and their research in management of this pandemic. Pharma graduates are in demand in India and in foreign countries.",
              "KSP embarked on its journey in the field of pharmacy education in 2005 as Babaria Institute of Pharmacy which was affiliated to Gujarat University and then to Gujarat Technological University. We are now a constituent school of Drs. Kiran & Pallavi Patel Global University, Vadodara under its Faculty of Medicine and Healthcare (FM&H). We are approved u/s 12 by the Pharmacy Council of India. KSP offers Bachelor of Pharmacy course that is re-accredited by National Board of Accreditation (NBA) June 2025. Additionally, KSP offers Masters in Pharmacy in Pharmaceutical Quality Assurance, Pharmaceutics, Pharmaceutical Technology and Pharmacology. A Doctor of Philosophy (Ph. D) program is also offered in Pharmaceutical Sciences by the university.",
              "The college has well-equipped laboratories and excellent infrastructure to assist  the students gain knowledge and learn the skills that would help them to face the global competition. Our classrooms are well equipped with Multimedia projector systems and a CPU with internet connectivity so that our faculty members can make use of the latest audio-visual mode of teaching. The modern state-of-art laboratories, instrumentation facilities, and central library facility in this organization are part of our school. Our medicinal garden has numerous genera of medicinal plants.",
              "In addition to academic activity, our school and university has a culture to celebrate the festivals of India with zeal and fervor. Guest lectures, seminars, refresher courses, FDP’s, industrial trips are all part of the routine semester working. The NSS cell of KSP, KPGU are dedicated to the service of the nation and conduct numerous events throughout the year. The school has an active SSIP cell and offers grant to students for research, ideation and up to patent application and start up stages.",
              "Faculty members of the School are all either Masters or PhD holders in their respective subjects. The staff members are dedicated to their duty as teachers and strive to ensure that they equip the students with the requisite knowledge, skill and inspiration so that the students excel in their jobs or businesses.",
              "This school has carved a reputation for itself by the co-ordinated efforts and commitment of the Management and the staff. The passed out students stand testimony to the quality of teaching and learning process of the school.   As a Director of the School I, along with my staff members, one and all to visit our campus and Krishna School of Pharmacy & Research (KSP) and experience the energy and vibrancy first hand."
            ]}
          />
          <Stack direction={"row"} className="smooth-shadow-card" borderRadius={3}>
            <Box width={"300px"}>
              <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1710239250/KPGU/Images/Institutions/KSP/nba.png" className="w-100" alt="" />
            </Box>
            <Box p={3.5} color={"info.main"}>
              <h3 className="fw-bold">NATIONAL BOARD OF ACCREDITATION</h3>
              <h5 className="mb-0 text-secondary ">B. Pharm. Program of KSP has been Re-accredited by National Board of Accreditations (NBA), </h5>
              <h5 className="mb-0 text-secondary ">New Delhi for next 3 years <Button color="secondary" size="large" className="fw-bold" startIcon={<CalendarMonth />} variant="text">30-06-2025</Button></h5>
            </Box>
          </Stack>
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








