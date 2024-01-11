import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import "./MainNavStyle.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DesktopNav = () => {
  const navigate = useNavigate();

  const width = {
    xs: "120px",
    sm: "170px",
    lg: "200px",
  };

  const AboutMenuList = [
    {
      title: "Sponsoring Body-SKECT",
      link: "about/skect",
    },
    {
      title: "MESSAGE FROM THE PRESIDENT'S DESK",
      link: "about/message-from-the-presidents-desk",
    },
    {
      title: "KPGU Vadodara",
      link: "about/kpgu-vadodara",
    },
    {
      title: "MESSAGE FROM DR. KIRAN C. PATEL",
      link: "about/dr-kiran-c-patel-message",
    },
    {
      title: "Vision & Mission",
      link: "about/vision-mission",
    },
    {
      title: "MESSAGE FROM THE PROVOST",
      link: "about/message-from-the-provost",
    },
    {
      title: "OUR LEADERSHIP",
      link: "about/our-leadership",
    },
    {
      title: "UNIVERSITY OFFICERS",
      link: "about/university-officers",
    },
    {
      title: "Governance",
      link: "about/governance/governing-body",
    },
    {
      title: "SIGNIFICANT ACHIEVEMENTS",
      link: "about/achievements",
    },
    {
      title: "STATUTORY RECOGNITION",
      link: "about/statutory-recognition",
    },
    {
      title: "AWARDS & ACCOLADES",
      link: "about/awards-accolades",
    },
    {
      title: "Approvals",
      link: "about/approvals/institute-of-technology",
    },
  ];

  const AcademicMenuList = [
    {
      title: "Faculty of Engineering & Technology",
      link: "academics/faculty-of-engineering-and-technology/krishna-school-of-emerging-technology-and-applied-research/diploma",
    },
    {
      title: "Faculty Of Medicine & Healthcare",
      link: "academics/faculty-of-medicine-and-healthcare/krishna-school-of-pharmacy-and-research/ug",
    },
    {
      title: "Faculty Of Science",
      link: "academics/faculty-of-sciences/krishna-school-of-sciences/ug",
    },
    {
      title: "Faculty Of Commerce & Management",
      link: "academics/faculty-of-commerce-and-management/krishna-school-of-business-management/ug",
    },
    {
      title: "Faculty Of Humanities & Policy Studies",
      link: "academics/faculty-of-humanities-and-policy-studies/krishna-school-of-arts-and-humanities/ug",
    },
  ];

  const CampusMenuList = [
    {
      title: "Infrastructure",
      link: "campus/infrastructure/smart-classrooms",
    },
    {
      title: "Gallery",
      link: "campus/gallery",
    },
    {
      title: "ATM & Bank Facilities",
      link: "/",
    },
    {
      title: "Dining & Cafeteria",
      link: "/",
    },
    {
      title: "Health Facilities",
      link: "/",
    },
    {
      title: "Library & Information System",
      link: "/",
    },
    {
      title: "Safety & Security",
      link: "/",
    },
    {
      title: "Environment",
      link: "/",
    },
    {
      title: "Arts & Cultural Programs",
      link: "/",
    },
    {
      title: "Sports & Recreation",
      link: "/",
    },
  ];

  const AdmissionMenuList = [
    {
      title: "UG PROGRAMMES",
      link: "/",
    },
    {
      title: "PG PROGRAMMES",
      link: "/",
    },
    {
      title: "DOCTORAL PROGRAMMES",
      link: "/",
    },
    {
      title: "ADMISSION PROCEDURE",
      link: "/",
    },
    {
      title: "Hostel Life",
      link: "/",
    },
    {
      title: "SCHOLARSHIPS & FREE-SHIPS",
      link: "/",
    },
    {
      title: "EDUCATION LOAN",
      link: "/",
    },
    {
      title: "TRANSPORTATION",
      link: "/",
    },
    {
      title: "EXAMINATION SYSTEM",
      link: "/",
    },
  ];

  const ResearchAndPublicationList = [
    {
      title: "RESEARCH & INNOVATION",
      link: "/",
    },
    {
      title: "START-UPS",
      link: "/",
    },
    {
      title: "PUBLICATIONS",
      link: "/",
    },
    {
      title: "IPR",
      link: "/",
    },
    {
      title: "FDPS",
      link: "/",
    },
    {
      title: "KPGU JOURNAL",
      link: "/",
    },
  ];

  const MenuItem = ({ title, link }) => (
    <Grid item xs={5} display={"flex"} justifyContent={"start"}>
      <Box
        display={"flex"}
        justifyContent={"start"}
        borderLeft={2}
        borderColor={"secondary.main"}
        pl={1.2}
      >
        <Button
          onClick={() => navigate(link)}
          color="secondary"
          variant="text"
          disableElevation
          sx={{ fontWeight: 600, fontSize: "0.9", justifyContent: "start" }}
        >
          {title}
        </Button>
      </Box>
    </Grid>
  );

  return (
    <NavigationMenu.Root className="NavigationMenuRoot my-2">
          
      <Box width={width} px={innerWidth < 450 ? 1 : 2}>
        <img
          src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703583684/KPGU/logo.svg"
          alt="logo"
        />
      </Box>
      <NavigationMenu.List className="NavigationMenuList">
        {/* ======================================== HOME ======================================== */}
        <NavigationMenu.Item onClick={() => navigate("/")}>
          <NavigationMenu.Link className="NavigationMenuLink">
            HOME
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        {/* ======================================== ABOUT US ======================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            ABOUT US
            <KeyboardArrowDownRounded className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              className="List one"
            >
              {AboutMenuList.map(({ link, title }, index) => (
                <MenuItem title={title} link={link} key={index} />
              ))}
            </Grid>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================== ACADEMIC ======================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            ACADEMIC
            <KeyboardArrowDownRounded className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              className="List one"
            >
              {AcademicMenuList.map(({ link, title }, index) => (
                <MenuItem title={title} link={link} key={index} />
              ))}
            </Grid>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================== CAMPUS ======================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            CAMPUS
            <KeyboardArrowDownRounded className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              className="List one"
            >
              {CampusMenuList.map(({ link, title }, index) => (
                <MenuItem title={title} link={link} key={index} />
              ))}
            </Grid>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================== ADMISSIONS ======================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            ADMISSIONS
            <KeyboardArrowDownRounded className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              className="List one"
            >
              {AdmissionMenuList.map(({ link, title }, index) => (
                <MenuItem title={title} link={link} key={index} />
              ))}
            </Grid>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================== RESEARCH & PUBLICATIONSv ======================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            RESEARCH & PUBLICATIONS
            <KeyboardArrowDownRounded className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              className="List one"
            >
              {ResearchAndPublicationList.map(({ link, title }, index) => (
                <MenuItem title={title} link={link} key={index} />
              ))}
            </Grid>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================== PLACEMENTS ======================================== */}
        <NavigationMenu.Item onClick={() => navigate("/")}>
          <NavigationMenu.Link className="NavigationMenuLink">
            PLACEMENTS
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        {/* ======================================== Navigation Indicator ======================================== */}
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      {/* ======================================== Navigation Box Position======================================== */}
      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default DesktopNav;
