import { Box, Button, Grid, Tab, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import {
  DoneAllRounded,
  BalanceRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import Paragraph from "../../../Common/Paragraph";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";

function KpguVadodara() {
  const { maxWidth, innerWidth } = useContext(AppContext);
  const navigate = useNavigate();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ProgramsItems = [
    "Graduate Programs",
    "Undergraduate Programs",
    "Postgraduate Programs",
    "Doctoral Degrees",
    "Alumni & Giving",
  ];

  const Programs = ({ name }) => {
    return (
      <Grid item xs={12} lg={6}>
        <Box
          bgcolor={"secondary.main"}
          borderRadius={2}
          p={2}
          color={"#fff"}
          display={"flex"}
          alignItems={"center"}
        >
          <DoneAllRounded color={"inherit"} />{" "}
          <Typography variant="body1" pl={2} fontWeight={600}>
            {name}
          </Typography>
        </Box>
      </Grid>
    );
  };

  const UniversityFacultiesList = [
    {
      name: "Faculty of Engineering & Technology [FE&T]",
      link: "/academics/faculty-of-engineering-and-technology",
    },
    {
      name: "Faculty for Medicine & Healthcare [FM&H]",
      link: "/academics/faculty-of-medicine-and-healthcare",
    },
    {
      name: "Faculty of Commerce and Management [FC&M]",
      link: "/academics/faculty-of-commerce-and-management",
    },
    {
      name: "Faculty of Humanities & Policy Studies [FH&PS]",
      link: "/academics/faculty-of-humanities-and-policy-studies",
    },
    {
      name: "Faculty of Science [FOS]",
      link: "/academics/faculty-of-sciences",
    },
  ];

  const InstitutionsList = [
    {
      name: "Krishna School Of Emerging Technology And Applied Research",
      link: "/academics/krishna-school-of-emerging-technology-and-applied-research",
    },
    {
      name: "Krishna School Of Diploma Studies",
      link: "/academics/krishna-school-of-diploma-studies",
    },
    {
      name: "Krishna School Of Technology",
      link: "/academics/krishna-school-of-technology",
    },
    {
      name: "Krishna School Of Pharmacy And Research",
      link: "/academics/krishna-school-of-pharmacy-and-research",
    },
    {
      name: "Krishna Ayurved Medical College",
      link: "/academics/krishna-ayurved-medical-college",
    },
    {
      name: "Krishna School Of Nursing",
      link: "/academics/krishna-school-of-nursing",
    },
    {
      name: "Krishna School Of Physiotherapy And Rehabilitation",
      link: "/academics/krishna-school-of-physiotherapy-and-rehabilitation",
    },
    {
      name: "Krishna School Of Science",
      link: "/academics/krishna-school-of-sciences",
    },
    {
      name: "Krishna School Of Commerce",
      link: "/academics/krishna-school-of-commerce",
    },
    {
      name: "Krishna School Of Business Management",
      link: "/academics/krishna-school-of-business-management",
    },
    {
      name: "Krishna School Of Arts And Humanities",
      link: "/academics/krishna-school-of-arts-and-humanities",
    },
  ];

  const CenterOfExcellenceList = [
    {
      name: "Krishna Centre of Innovation & Research (KCIR)",
      link: "",
    },
    {
      name: "Krishna Center of Institutional Social Responsibility (KCISR)",
      link: "",
    },
    {
      name: "Krishna Centre of International Affairs (KCIA)",
      link: "",
    },
    {
      name: "Krishna Centre of Career Advancement & Corporate Training (KCCACT)",
      link: "",
    },
    {
      name: "Krishna Centre of Startups & Entrepreneurship (KCSE)",
      link: "",
    },
    {
      name: "Krishna Centre of Training in Disaster Management (KCTDM)",
      link: "",
    },
  ];

  const CommonComponent = ({ name, link }) => (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        className="smooth-shadow-card"
        height={"100%"}
        position={"relative"}
        p={2}
        borderRadius={4}
      >
        <h5 className="mb-3">{name}</h5>
        <br />
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => navigate(link)}
          sx={{ position: "absolute", bottom: 16 }}
          endIcon={<KeyboardDoubleArrowRightRounded />}
        >
          view more
        </Button>
      </Box>
    </Grid>
  );

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"5%"}>
      <Grid
        container
        width={maxWidth}
        mx={"auto"}
        mb={5}
        p={"5%"}
        py={5}
        className="smooth-shadow rounded-4"
        bgcolor={"#fff"}
      >
        <Grid item sm={12} md={5}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1702911780/KPGU/Banners/about-banner.jpg"
            alt="about us"
            width={"100%"}
            height={"100%"}
            className="object-fit-cover rounded-4"
          />
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          px={{
            xs: 0,
            md: 4,
          }}
          pb={3}
          mt={{
            xs: 3,
            md: 0,
          }}
        >
          <Typography variant="h3" fontWeight={600} className="about-heading">
            About
          </Typography>
          <Typography variant="h2" fontWeight={600} className="about-heading">
            KPGU University
          </Typography>
          <Typography variant="body1" className="about-text" mt={1}>
            Drs. Kiran & Pallavi Patel Global University, earlier known as
            Babaria Institute of Technology, was started in the year 2021,
            serves the objective of providing quality education in the field of
            Technology and serving the society. It has been able to attain
            enviable level of excellence in technical education.
          </Typography>
          <Grid container spacing={1} mt={2} justifyContent={"center"}>
            {ProgramsItems.map((item, index) => (
              <Programs name={item} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box
        width={maxWidth}
        mx={"auto"}
        mb={5}
        p={"5%"}
        className="smooth-shadow rounded-4"
        bgcolor={"#fff"}
      >
        <h3 className=" fw-semibold">
          DRS KIRAN & PALLAVI PATEL GLOBAL UNIVERSITY [KPGU], VADODARA
        </h3>

        <h3 className=" fw-semibold mt-4">
          A State Private University established under the provisions of
        </h3>
        <Typography
          variant="h6"
          fontWeight={600}
          color={"secondary"}
          display={"flex"}
        >
          <Box pr={1}>
            <BalanceRounded fontSize="large" color="inherit" />
          </Box>
          <Box>Gujarat Private Universities Act 2009,</Box>
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
          color={"secondary"}
          display={"flex"}
        >
          <Box pr={1}>
            <BalanceRounded fontSize="large" color="inherit" />
          </Box>
          <Box>
            Gujarat Private Universities (Amendment) Act 2021 (Act No. 15 of
            2021) & Govt. of Gujarat,
          </Box>
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
          color={"secondary"}
          display={"flex"}
        >
          <Box pr={1}>
            <BalanceRounded fontSize="large" color="inherit" />
          </Box>
          <Box>
            Education Department Notification No: GH/SH/14/EPU/2020/
            10012020/KH-1 dated 2nd June, 2021.
          </Box>
        </Typography>

        <Box
          my={5}
          p={3}
          borderRadius={3}
          bgcolor={"#fff"}
          className={"smooth-shadow-card"}
        >
          <h5 className="fw-semibold mb-3">
            Gujarat Private Universities (Amendment) Act 2021 (Act No. 15 of
            2021) & Govt. of Gujarat 22, 2021
          </h5>
          <Button
            variant="contained"
            className="fw-semibold"
            color="secondary"
            href="https://kpgu.ac.in/wp-content/uploads/2022/06/KPGU-GoG-Gazette-Act-15-2021-May-22-2021.pdf"
            target="_blank"
            endIcon={<KeyboardDoubleArrowRightRounded />}
          >
            Click to see
          </Button>
        </Box>
        <Box
          my={5}
          p={3}
          borderRadius={3}
          bgcolor={"#fff"}
          className={"smooth-shadow-card"}
        >
          <h5 className="fw-semibold mb-3">
            Education Department Notification No: GH/SH/14/EPU/2020/
            10012020/KH-1 dated 2nd June, 2021.
          </h5>
          <Button
            variant="contained"
            className="fw-semibold"
            color="secondary"
            href="https://kpgu.ac.in/wp-content/uploads/2022/06/KPGU-GoG-DoE-Notification-2nd-June-2021.pdf"
            target="_blank"
            endIcon={<KeyboardDoubleArrowRightRounded />}
          >
            Click to see
          </Button>
        </Box>

        <Box mt={5}>
          <Paragraph
            content={[
              "KPGU seeks to be an “University of Global Eminence. Towards this the university has adopted KPGU-Vision-2040 document. That great transition from affiliating Institutions to a University by itself would not have been possible without the contribution of each one of the members of the “Team Edu Campus” under the flagship of Shree Krishna Educational & Charitable Trust. With consistent performance and collective efforts several milestones have been achieved in the past as affiliating institutions. The Pursuit for Newer Horizons has led to the achievement of yet another path breaking milestone and the establishment of KPGU shall be marking the opening of the “Gateway to Global Excellence”. This transformation shall bring forth with it, the number of greater opportunities, that will lead the university to next level of performance and ensure that we progressively grow as envisaged in the KPGU-Vision-2040 document. To realize the bigger pursuit, to make it functionally effective, to gain regional, national and international recognition the organization is geared up for the greater commitment, collective performance, concerted efforts and be ever in consistent pursuit for Quality & Excellence, may it be in academics, research, collaborations, outreach activities, skill enforcement and employability drives that encompass",
            ]}
          />
        </Box>

        <ol>
          <li className="fs-5 mb-3 text-capital fw-bold ">
            Establishment of Nine University Faculty, 13 Constituent
            Institutions and six Centres of excellence.
          </li>
          <li className="fs-5 mb-3 text-capital fw-bold ">
            Making significant impact over a period of ten years in terms of
            increasing the Constituent Institutes by 57%; Centres of Excellence
            by 64%; Intake by 60% of which 20% shall be International Students;
            increasing Infrastructure by over 18 Lac Sq. Ft.; UG programs by 78%
            and PG by 71%; Research output by 78%.
          </li>
          <li className="fs-5 mb-3 text-capital fw-bold ">
            Deliver the contemporary and internationalized higher education that
            is cured with Skill, Interdisciplinary, Industry driven, curriculum
            with Global appeal, Fostered with Innovative, Interdisciplinary &
            High Impact Collaborative Research, Social Inclusiveness with
            respect to National Development Goals through its skills driven,
            employability-oriented, highly qualified and experienced faculty &
            equally competent non-teaching staff.
          </li>
        </ol>
      </Box>

      <TabContext value={value}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              bgcolor={"#fff"}
              p={2}
              borderRadius={4}
              className="smooth-shadow sticky-top "
            >
              <TabList
                onChange={handleChange}
                orientation={`${innerWidth < 900 ? "horizontal" : "vertical"}`}
                textColor="secondary"
                indicatorColor="secondary"
                variant="scrollable"
              >
                <Tab
                  className="fw-bold text-start align-items-start "
                  label="University Faculties"
                  value="1"
                />
                <Tab
                  className="fw-bold text-start align-items-start "
                  label="Constituent Institutions"
                  value="2"
                />
                <Tab
                  className="fw-bold text-start align-items-start "
                  label="Centers of Excellence"
                  value="3"
                />
              </TabList>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box bgcolor={"#fff"} borderRadius={4} className="smooth-shadow">
              <TabPanel value="1">
                <Grid container spacing={2}>
                  {UniversityFacultiesList.map(({ name, link }, index) => (
                    <CommonComponent key={index} link={link} name={name} />
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid container spacing={2}>
                  {InstitutionsList.map(({ name, link }, index) => (
                    <CommonComponent key={index} link={link} name={name} />
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <Grid container spacing={2}>
                  {CenterOfExcellenceList.map(({ name, link }, index) => (
                    <CommonComponent key={index} link={link} name={name} />
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </TabContext>
    </Box>
  );
}

export default KpguVadodara;
