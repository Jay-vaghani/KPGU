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

function KrishnaSchoolOfSciences() {
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
      name: "Dr. Rita Mahapatra",
      imgNo: "6220",
      designation: "Assistant Professor[Senior grade] || HOD[Biotechnology]",
      experience: 11,
      qualification: "Ph.D || MPT",
      customLink: "",
    },
    {
      name: "Dr. Asha Joshi",
      imgNo: "6099",
      designation: "Assistant Professor || HOD Chemistry",
      experience: 7,
      qualification: "Ph.D. Chemistry",
      customLink: "",
    },
    {
      name: "Dr. Parul Shrivastava",
      imgNo: "6102",
      designation: "Assistant Professor || HoD Microbiology",
      experience: 5,
      qualification: "Ph.D. Microbiology",
      customLink: "",
    },
    {
      name: "Dr. Poonam Mishra",
      imgNo: "6098",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "Ph.D Biotechnology",
      customLink: "",
    },

    {
      name: "Dr. Miral Vora",
      imgNo: "6101",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "Ph.D Chemistry",
      customLink: "",
    },
    {
      name: "Dr. Nikita Patel",
      imgNo: "6104",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "Ph.D. Chemistry",
      customLink: "",
    },

    {
      name: "Dr. Shilpi Thakur",
      imgNo: "6103",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "Ph.D Microbiology",
      customLink: "",
    },
    {
      name: "Dr. Margi Patel",
      imgNo: "6222",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "Ph.D Microbiology",
      customLink: "",
    },
    {
      name: "Dr. Swati Patel ",
      imgNo: "3413",
      designation: "Assistant Professor",
      experience: 1,
      qualification: "Ph.D Biotechnology",
      customLink: "",
    },
    {
      name: "Tejas Pandya",
      imgNo: "6108",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "M.Sc || M.Phil Physics || Ph.D[Pursuing]",
      customLink: "",
    },
    {
      name: "MS. Foram Shah",
      imgNo: "6100",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Sc || B.Ed ||  Mathematics",
      customLink: "",
    },
  ];


  const DepartmentList = [
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709706408/KPGU/icon/Biotechnology.svg",
      name: "Biotechnology",
      link: "/academics/kss/biotechnology",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709706408/KPGU/icon/Chemistry.svg",
      name: "Chemistry",
      link: "/academics/kss/chemistry",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709706408/KPGU/icon/Mathematics.svg",
      name: "Mathematics",
      link: "/academics/kss/mathematics",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709706408/KPGU/icon/Microbiology.svg",
      name: "Microbiology",
      link: "/academics/kss/microbiology",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709706408/KPGU/icon/Physics.svg",
      name: "Physics",
      link: "/academics/kss/physics",
    },
  ];


  const UG = [
    {
      title: "B.Sc [Honours]  in Physics, Chemistry & Mathematics",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
    {
      title: "B.Sc [Honours]  in Chemistry, Biotechnology & Microbiology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
  ];

  const PG = [
    {
      title: "Organic Chemistry",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
    {
      title: "Microbiology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
    {
      title: "Biotechnology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
  ];

  const PHD = [
    {
      title: "Mathematics",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
    {
      title: "Physics",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
    {
      title: "Chemistry",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
    {
      title: "Microbiology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
    },
    {
      title: "Biotechnology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "3",
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
              label="Faculty"
              value="4"
              href="#faculty"
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
              "Krishna School of Science [KSS]"
            }
          />
          <DirectorsMessage
            dirImg={
              "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703926605/KPGU/Images/a-b-Chaudhary.webp"
            }
            dirEmail={"dir.kss@kpgu.ac.in"}
            dirName={"Prof. A.B. Chaudhari"}
            dirOf={"Krishna School of Science"}
            dirOfShort={"[KSS]"}
            dirMessage={[
              "At Krishna School of Science (KSS), we pride ourselves on being a hub of excellence in scientific education and research. Our goal is to nurture young minds and empower them to become the scientists, innovators, and leaders of tomorrow. We believe in fostering a passion for discovery, critical thinking, and problem-solving skills that will prepare our students for successful careers in a rapidly evolving world.",
              "We create a stimulating learning environment where students can engage in cutting-edge experiments, explore new theories, and collaborate with fellow aspiring scientists. Our state-of-the-art laboratories and research facilities provide students with hands-on experience and the opportunity to work alongside distinguished faculty members who are experts in their respective fields. We at KSS aim to instil a love for science in our students by offering a comprehensive curriculum that encompasses a wide range of scientific disciplines, including Physics, Chemistry, Mathematics, Microbiology and Biotechnology.",
              " In addition to classroom instruction, we encourage students to participate in research projects and attend seminars and workshops conducted by renowned scientists and industry experts. At KSS, we believe in holistic development and the importance of extracurricular activities. We offer a variety of competitions and events that allow students to explore their interests, develop leadership skills, and build lasting friendships",
              " Whether it is through participating in science day celebration or conducting field trips, or industrial visits, our students have numerous opportunities to expand their horizons beyond the classroom. Furthermore, we prioritize the well-being and personal growth of our students. Our dedicated counselling team is always available to provide guidance and support, ensuring that our students have a nurturing and inclusive environment where they can thrive.",
              "I would like to extend my gratitude to our exceptional faculty members and non-teaching staff who are dedicated to providing quality education and instilling a passion for science in our students. Their commitment and expertise are the backbone of Krishna School of Science, and together, we strive to create a positive and inspiring atmosphere for all.",
              "Lastly, I want to express my gratitude to the parents and guardians who have entrusted us with the education and future of their children. We value the trust you have placed in us, and we are committed to ensuring that your child receives the best possible education and support.",
              "I look forward to an exciting and engaging academic year ahead, filled with scientific breakthroughs and the achievements of our exceptional students. Together, let us continue to push the boundaries of scientific knowledge and prepare the next generation of scientific leaders."
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
      <div style={{ padding: "80px 0 0 0" }} id="faculty">
        <Box
          maxWidth={maxWidth}
          mx={"auto"}
          p={"3%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
        >
          <h2 className="fw-bold color-secondary mb-4">Faculty</h2>

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
                  facultyName={"KSS"}
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
              <Tab className="fw-bold" label="phd" value="3" />
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
            <TabPanel value="3" sx={{ px: "0 !important" }}>
              <Grid container spacing={2}>
                {PHD.map(
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

export default KrishnaSchoolOfSciences;

const UG = [
  {
    title: "B.Sc [Honours]  in Physics, Chemistry & Mathematics",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
    link: "",
    pageLink: "",
    fees: "1,00,000",
    duration: "3",
  },
  {
    title: "B.Sc [Honours]  in Chemistry, Biotechnology & Microbiology",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
    link: "",
    pageLink: "",
    fees: "1,00,000",
    duration: "3",
  },
];
