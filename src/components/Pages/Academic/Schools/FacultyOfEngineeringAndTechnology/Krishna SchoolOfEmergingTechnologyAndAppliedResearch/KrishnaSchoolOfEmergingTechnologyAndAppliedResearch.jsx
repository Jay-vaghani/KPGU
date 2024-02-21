import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Grid, Stack, Tab, Typography } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";
import { useNavigate } from "react-router-dom";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";

function KrishnaSchoolOfEmergingTechnologyAndAppliedResearch() {
  const { maxWidth } = useContext(AppContext);
  const navigate = useNavigate();

  const DepartmentList = [
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/comuter-science.svg",
      name: "COMPUTER SCIENCE AND ENGINEERING",
      link: "/academics/computer-science-and-engineering",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/infromation-tech.svg",
      name: "information technology",
      link: "/academics/information-technology",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/electrical-engineering.svg",
      name: "electrical engineering",
      link: "/academics/electrical-engineering",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/mechanics.svg",
      name: "mechanical engineering",
      link: "/academics/mechanical-engineering",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708498523/KPGU/icon/civil.svg",
      name: "civil engineering",
      link: "/academics/civil-engineering",
    },
  ];



  const Faculties = [
    // ======================= CIVIL =======================

    {
      name: "Mr. Ankit N Patel",
      imgNo: "6110",
      designation: "Assistant Professor",
      experience: 13,
      qualification: "M.Tech[CPM] || B.E[Civil]",
      customLink: "",
    },
    {
      name: "Mithileshdatta Pandya",
      imgNo: "6052",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "Ph.D[Pursuing-Civil] || M.E[CASAD] || B.E[Civil]",
      customLink: "",
    },
    {
      name: "Mr. Ravi S. Patel",
      imgNo: "6090",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "M.E in Civil Engineering",
      customLink: "",
    },

    // ======================= EE =======================

    // {
    //   name: "Dr. Ravindrakumar Yadav",
    //   imgNo: "6188",
    //   designation: "Assistant Professor & Head",
    //   experience: 21,
    //   qualification: "Ph.D",
    //   customLink: "",
    // },
    {
      name: "Dr. Samir H PAtel",
      imgNo: "6013",
      designation: "Assistant Professor & Head",
      experience: 14,
      qualification: "Ph.D || M.E[Power System] || B.E[Electrical]",
      customLink: "",
    },
    {
      name: "Vijay Bharat Desle",
      imgNo: "6015",
      designation: "Assistant Professor",
      experience: 10,
      qualification:
        "Ph.D[Pursuing] || M.Tech[Electrical Power Systems] || B.Tech[Electrical]",
      customLink: "",
    },
    {
      name: "Ketul Kachhia",
      imgNo: "6192",
      designation: "Assistant Professor",
      experience: 11,
      qualification:
        "PhD [Pursuing] || M.TECH[Power System] || MBA[MARKETING] || B.E[ELECTRICAL]",
      customLink: "",
    },

    // ======================= IT =======================

    {
      name: "Dr. Nandini Chaudhari",
      imgNo: "6056",
      designation: "Professor || HOD-IT [KSET]",
      experience: 31,
      qualification: "Ph.D || M.E || C.S.E || B.E. Computers",
      customLink: "",
    },
    {
      name: "Monali Parikh",
      imgNo: "6064",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Tech[CSE] || B.E[CE]",
      customLink: "",
    },
    {
      name: "Priyanka M. Patel",
      imgNo: "6065",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.Tech || B.E in Computer Engineering",
      customLink: "",
    },
    {
      name: "Ms. Manisha Vasava",
      imgNo: "6063",
      designation: "Assistant Professor",
      experience: 16,
      qualification: "M.Tech || B.E in Computer Engineering",
      customLink: "",
    },

    // ======================= ME =======================

    {
      name: "Dr. Nirmal Kumar Kushwaha",
      imgNo: "5989",
      designation: "HOD || Assistant Professor",
      experience: 12,
      qualification:
        "PhD[Mechanical Engineering] || M.Tech[Mechanical Engineering] || B.Tech[Industrial and Production Engineering] || GATE-2010[Mechanical Engineering]",
      customLink: "",
    },
    {
      name: "Mr Mehul A. Shah",
      imgNo: "6006",
      designation: "Assistant Professor",
      experience: 9,
      qualification:
        "PhD [Mechanical-Pursuing] || M.E[Thermal Engineering] || B.E[Mechanical Engineering]",
      customLink: "",
    },
    {
      name: "Mr Mandar Sumant",
      imgNo: "5998",
      designation: "Assistant Professor",
      experience: 18,
      qualification:
        "PhD[Mechanical-Pursuing] || M.E[Advance Mfg Systems -Mechanical] || B.E[Mechanical]",
      customLink: "",
    },
    {
      name: "Mr. Ankur P. Patel",
      imgNo: "6002",
      designation: "Assistant Professor",
      experience: 12,
      qualification: "M.E[Machine Design] || B.E[Mechanical Engineering]",
      customLink: "",
    },
    {
      name: "Mr. Pratikkumar Rameshbhai Patel",
      imgNo: "5995",
      designation: "Assistant Professor",
      experience: 14,
      qualification: "M.E[Thermal Engineering] || B.E[Mechanical Engineering]",
      customLink: "",
    },
    {
      name: "Mr. Nilesh A. Patel",
      imgNo: "5991",
      designation: "Assistant Professor",
      experience: 17,
      qualification:
        "M.E[Mechanical Engineering] || B.E[Production Engineering]",
      customLink: "",
    },

    // ======================= ME =======================

    {
      name: "Dr. Nitesh Sureja",
      imgNo: "6057",
      designation: "Professor & Director",
      experience: 28,
      qualification: "PhD || BE || ME",
      customLink: "",
    },
    // {
    //   name: "Ms. Priyanka A Patel",
    //   imgNo: "6048",
    //   designation: "Assistant Professor",
    //   experience: 12,
    //   qualification: "M.Tech || B.E",
    //   customLink: "",
    // },
    {
      name: "Ms. Apoorva Shah ",
      imgNo: "6010",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "Ph.D[Pursuing-CSE] || M.E[CSE] || B.E[CSE]",
      customLink: "",
    },
    {
      name: "Sonia Panesar",
      imgNo: "6044",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "Phd[Pursuing-CSE] || M.Tech[CE] || B.Tech[CSE]",
      customLink: "",
    },
    // {
    //   name: "Ms. Priya Patel",
    //   imgNo: "6011",
    //   designation: "Assistant Professor",
    //   experience: 6,
    //   qualification: "PhD(Pursuing) || M.E || B.E",
    //   customLink: "",
    // },
    {
      name: "Ms.Rohini Patel",
      imgNo: "6020",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.E(IT) || B.E[IT]",
      customLink: "",
    },
    {
      name: "Ms. Ankita Kothari",
      imgNo: "6021",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Tech[CSE] || B.E[CSE]",
      customLink: "",
    },
    {
      name: "Mr. Tushar Desai",
      imgNo: "6038",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "M.E[CSE] || B.E",
      customLink: "",
    },
    {
      name: "Ms. Jalpa Bhatt",
      imgNo: "6049",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.E[CSE] || B.E[CE]",
      customLink: "",
    },
    {
      name: "Mr. Ramesh Patoliya ",
      imgNo: "6033",
      designation: "Assistant Professor",
      experience: 15,
      qualification:
        "Ph.D.(Persuing) || M.Sc[Mathematics] || M.Phil[Mathematics]",
      customLink: "",
    },
    {
      name: "Mr. Nirav Panchal",
      imgNo: "6032",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Sc in Applied Mathematics ",
      customLink: "",
    },
    {
      name: "Jyoti Golakia",
      imgNo: "6023",
      designation: "Assistant Professor",
      experience: 4,
      qualification: "M.E[CE] || BE[CE]",
      customLink: "",
    },
    {
      name: "Dr. Gopal Bhatt",
      imgNo: "6035",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "PhD. [Applied Physics] || M.Sc[Physics] || B.Sc[Physics]",
      customLink: "",
    },
    // {
    //   name: "MS. Mittal C. Joshi",
    //   imgNo: "6043",
    //   designation: "Assistant Professor",
    //   experience: 6,
    //   qualification: "M.E || B.E",
    //   customLink: "",
    // },
    {
      name: "Ms. Safeya Dharmajwala ",
      imgNo: "6019",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "M.E || B.E - COMPUTER ENGINEERING",
      customLink: "",
    },
    // {
    //   name: "Ms. Niyati Mevada",
    //   imgNo: "6040",
    //   designation: "Assistant Professor",
    //   experience: 7,
    //   qualification: "M.E || B.E || D.I.P",
    //   customLink: "",
    // },
    {
      name: "Ms. Rashmika Baria",
      imgNo: "6042",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.E[CE] || B.E[CSE]",
      customLink: "",
    },
    {
      name: "Ms. Khushbu Shah",
      imgNo: "6026",
      designation: "Assistant Professor",
      experience: 15,
      qualification: "M.Sc in Applied Mathematics ",
      customLink: "",
    },
    {
      name: "Ms. Bhumika Patel",
      imgNo: "6028",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Sc in Applied Mathematics",
      customLink: "",
    },
    {
      name: "Ms. Janki Gandhi",
      imgNo: "6030",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "M.Sc in Mathematics ",
      customLink: "",
    },
    // {
    //   name: "Mr .Yagneshbhai Alkeshkumar vyas",
    //   imgNo: "6041",
    //   designation: "Assistant Professor",
    //   experience: 9,
    //   qualification: "PhD(Pursuing) || M.Sc",
    //   customLink: "",
    // },
    {
      name: "Dr. Dharmendra V.Tawde",
      imgNo: "6045",
      designation: "Assistant Professor",
      experience: 12,
      qualification: "Ph.D[Physics]",
      customLink: "",
    },
    {
      name: "Dr. Disha Pandya",
      imgNo: "6029",
      designation: "Assistant Professor",
      experience: 17,
      qualification: "PhD in English",
      customLink: "",
    },
    // {
    //   name: "Dr. Hina D. Dobariya",
    //   imgNo: "6185",
    //   designation: "Assistant professor",
    //   experience: 10,
    //   qualification: "Ph.D || M.phil || M.A || B.A",
    //   customLink: "",
    // },
    {
      name: "Dr. Arti Kotak ",
      imgNo: "6061",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "TEFL/TESOL || PhD || MA || BA",
      customLink: "",
    },
    {
      name: "Arohi Patel",
      imgNo: "9866",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.E[CE] || BE[CE]",
      customLink: "",
    },
    // {
    //   name: "Priyanka Dubey",
    //   imgNo: "9868",
    //   designation: "Assistant Professor",
    //   experience: 1,
    //   qualification: "M Tech",
    //   customLink: "",
    // },
    {
      name: "Dr. Shivam Upadhyay ",
      imgNo: "9867",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "PhD[CSE] || M.tech[CSE] || B.E[IT]",
      customLink: "",
    },
    {
      name: "Dr. Rocky Upadhyay",
      imgNo: "9864",
      designation: "Head & Associate Professor",
      experience: 10,
      qualification: "PhD[Image Processing] || M.Tech[CSE] || BE[CE]",
      customLink: "",
    },
    {
      name: "Ms.Manisha Makwana",
      imgNo: "9865",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.E || B.E - COMPUTER ENGINEERING",
      customLink: "",
    },
    {
      name: "Henilkumar Suthar",
      imgNo: "8897",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "PhD[Pursuing-IT] || M.Tech[IT] || B.E[IT]",
      customLink: "",
    },
    {
      name: "Jariwala Krishna B.",
      imgNo: "8899",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.Tech[CSE] || B.E[CSE]",
      customLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707808598/KPGU/Faculty%20Images/KSET/8899.webp",
    },
    {
      name: "Bharati Salimath",
      imgNo: "8900",
      designation: "Assistant Professor",
      experience: 20,
      qualification: "M.Tech[CSE] || B.E[CSE]",
      customLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707809046/KPGU/Faculty%20Images/KSET/8900.webp",
    },
    {
      name: "Ms. Harika Thokala",
      imgNo: "8901",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Tech[CS] || B.Tech[CSE]",
      customLink: "",
    },
    {
      name: "Ms. Dhara Parikh",
      imgNo: "9870",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "M.E[Cyber Security] || B.E[I.T]",
      customLink: "",
    },
  ];

  const UG = [
    {
      title: "B. Tech in Computer Science & Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Information Technology",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Mechanical Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Electrical Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "B. Tech in Civil Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
  ];

  const PG = [
    {
      title: "M. Tech in Advance Manufacturing System ",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "M. Tech in Data Science",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
  ];

  const Diploma = [
    {
      title: "Computer Science & Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "Information Technology",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
  ];

  const PGManagement = [
    {
      title: "MBA",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime ratione eveniet ipsa, deleniti dicta fugit. Aspernatur quam eligendi vero.",
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

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <SchoolWelcomeSection
          title={
            "Krishna School Of Emerging Technology & Applied Research [KSET]"
          }
          des={
            "The Faculty of Engineering and Emerging Technology is in the forefront of higher technological education and basic & applied research. It has established itself as a premier center for research and industrial consultancy in the country. There are 6 academic departments equipped with 58 educational and research laboratories performing diverse functions learning in harmony. The presence of internationally recognized faculty backed by exemplary technical & supporting staff and an effective administration have all contributed to the achievements of alumni successfully established all over the world."
          }
        />
        <DirectorsMessage
          dirImg={
            "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708500691/KPGU/Faculty%20Images/KSET/Director.webp"
          }
          dirEmail={"directoremail@gmail.com"}
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

      
      
      <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={7}
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
      <Box
        mt={7}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={"3%"}
        maxWidth={maxWidth}
        mx={"auto"}
      >
        <TabContext value={value}>
          <TabList
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab className="fw-bold" label="deploma" value="1" />
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

      <Box
        p={"3%"}
        bgcolor={"#fff"}
        mt={7}
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
    </>
  );
}

export default KrishnaSchoolOfEmergingTechnologyAndAppliedResearch;
