import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import "./MainNavStyle.css";
import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DesktopNav = () => {
  const navigate = useNavigate();

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
      link: "academics/faculty-of-engineering-and-technology",
    },
    {
      title: "Faculty Of Medicine & Healthcare",
      link: "academics/faculty-of-medicine-and-healthcare",
    },
    {
      title: "Faculty Of Science",
      link: "academics/faculty-of-sciences",
    },
    {
      title: "Faculty Of Commerce & Management",
      link: "academics/faculty-of-commerce-and-management",
    },
    {
      title: "Faculty Of Humanities & Policy Studies",
      link: "academics/faculty-of-humanities-and-policy-studies",
    },
  ];

  const CampusMenuList = [
    {
      title: "Facilities",
      link: "campus/facilities",
    },
    // {
    //   title: "Campus Life",
    //   link: "campus/campus-life",
    // },
    {
      title: "Gallery",
      link: "campus/gallery",
    },
  ];

  const AdmissionMenuList = [
    {
      title: "PROGRAMS",
      link: "admission/programs",
    },
    {
      title: "SCHOLARSHIPS & FREE-SHIPS",
      link: "admission/scholarships",
    },
    {
      title: "ADMISSION PROCEDURE",
      link: "admission-inquiry",
    },
    {
      title: "EDUCATION LOAN",
      link: "admission/education-loan",
    },
    // {
    //   title: "INTERNATIONAL STUDENTS",
    //   link: "admission/international-students",
    // },
  ];

  const ResearchAndPublicationList = [

    {
      title: "RESEARCH & INNOVATION",
      link: "/research-publications/innovation-research",
    },
    {
      title: "PUBLICATIONS",
      link: "/research-publications/publications",
    },
    {
      title: "IPR",
      link: "/research-publications/ipr",
    },
    {
      title: "FDPS",
      link: "/research-publications/fdps",
    },
    {
      title: "KPGU JOURNAL",
      link: "/research-publications/kpgu-journals",
    },
  ];

  const CentersCellsList = [
    {
      title: "START-UPS Cell",
      link: "centers-cells/start-ups",
    },
    {
      title: "Grievance Redressal Committee",
      link: "centers-cells/grievance-redressal-committee",
    },
    {
      title: "Anti-Ragging cell",
      link: "centers-cells/anti-ragging",
    },
    {
      title: "Internal Complaint Committee",
      link: "centers-cells/internal-complaint-committee",
    },
    {
      title: "Equal Opportunity Cell",
      link: "centers-cells/equal-opportunity-cell",
    },
    {
      title: "Centers Of Excellence",
      link: "centers-cells/centers-of-excellence",
    }
  ];


  const IR_Training_Placement = [
    {
      title: "Page 1",
      link: "",
    },
    {
      title: "Page 2",
      link: "",
    },
    {
      title: "Page 3",
      link: "",
    },
    {
      title: "Page 4",
      link: "",
    },
    {
      title: "Page 5",
      link: "",
    },
    {
      title: "Page 6",
      link: "",
    }
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
    <NavigationMenu.Root className="NavigationMenuRoot">
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
        {/* ======================================== CENTERS & CELLS ======================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            CENTERS & CELLS
            <KeyboardArrowDownRounded className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              className="List one"
            >
              {CentersCellsList.map(({ link, title }, index) => (
                <MenuItem title={title} link={link} key={index} />
              ))}
            </Grid>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================== PLACEMENTS ======================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            IR-TRAINING & PLACEMENT
            <KeyboardArrowDownRounded className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Grid
              container
              justifyContent={"space-between"}
              spacing={2}
              className="List one"
            >
              {IR_Training_Placement.map(({ link, title }, index) => (
                <MenuItem title={title} link={link} key={index} />
              ))}
            </Grid>
          </NavigationMenu.Content>
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
