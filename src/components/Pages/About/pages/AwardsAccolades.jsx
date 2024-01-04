import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  CalendarMonthRounded,
  MilitaryTechRounded,
  WorkspacePremiumRounded,
} from "@mui/icons-material";

function AwardsAccolades() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const PresidentAwards = [
    {
      des: "“Corona Yodha 2020” by Collector and District Magistrate, Vadodara",
    },
    {
      des: "Education Leadership Award 2019” by Dewang Mehta National Education Awards",
    },
    {
      des: "Leadership In Higher Education Award 2018 organized by Higher Education Forum- Gujarat Chapter, Vadodara",
    },
    {
      des: "Samaj Ratna Award by Shree Dhandhuka Taluka Patel Pragati Mandal, Surat-2014",
    },
    {
      des: "True Impact Award 2016, by District CSR Cell, Federation of Gujarat Industries.",
    },
    {
      des: "Global Education Excellence Award – 2016, New Delhi.",
    },
    {
      des: "Campus Preparedness Award – 2015 by Higher Education Forum, Pune.",
    },
    {
      des: "Indira Gandhi Shiksha Shiromani Award – 2013, From IIEM New Delhi, For ‘Outstanding Achievements in the Field of Education’.",
    },
    {
      des: "Education Excellence Award – 2012, New Delhi for ‘Best Engineering College in Gujarat State’.",
    },
    {
      des: "Shiksha Bharti Award – 2010, New Delhi for ‘Challenges of Economic Growth and Social Development.",
    },
    {
      des: "Samaj Gaurav Award by Shree Sourashtra Leuva Patel Seva Samaj, Vadodara.",
    },
  ];

  const AwardsReceivedBySchools = [
    { des: "Most Innovative Private Engineering College in Gujarat" },
    {
      des: "National Education Excellence Award – 2014, New Delhi, For ‘Best Private Engineering College in Gujarat.",
    },
    {
      des: "National Education Excellence Award – 2014, New Delhi, For ‘Best Private Engineering College in Gujarat.",
    },
    {
      des: "Best Engineering College in Gujarat 2018, Best Engineering College in Gujarat 2018 For Industry Interface 2018, Best Engineering College in Gujarat for",
    },
    {
      des: "Placement 2018 by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi – 2018",
    },
    {
      des: "Best Pharmacy College in Gujarat 2018, Best Pharmacy College in Gujarat for Placement 2018  By Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi –2018",
    },
    {
      des: "Best Physiotherapy Institute in Gujarat for Industry Interface 2018 by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi – 2018",
    },
    {
      des: "Nine Awards and Certificates by Gujarat Technological University for outstanding contribution in Social Services -2017",
    },
    {
      des: "Ten Awards and Certificates out of 15 by Gujarat Technological University for outstanding contribution in Social Services -2015",
    },
  ];

  const AwardsReceivedByKrishnaSchoolForEmergingTechnologiesAndAppliedResearch =
    [
      {
        title: "Devang Mehta National Education Awards",
        des: "“EDUCATION LEADERSHIP AWARD 2019” Awarded to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2019-2020",
      },
      {
        title: "Centre of Education Growth and Research, New Delhi",
        des: "”Best Engineering College in Gujarat 2018″ conferred to Babaria Institute of Technology by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2018-2019",
      },
      {
        title: "Centre of Education Growth and Research, New Delhi",
        des: "“Best Engineering College in Gujarat for Placement 2018” conferred to Babaria Institute of Technology by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2018-2019",
      },
      {
        title: "Centre of Education Growth and Research, New Delhi",
        des: "“Best Engineering College in Gujarat 2018” for Industry Interface conferred to Babaria Institute of Technology by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2018-2019",
      },
      {
        title:
          "Higher Education Forum- Gujarat Chapter, in association with IQAC, M.S. University of Baroda",
        des: "“Leadership in Higher Education Award 2018” award to Founder President and Managing Trustee Shree Jagdishbhai D. Patel.",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2018-2019",
      },
      {
        title:
          "Higher Education Forum- Gujarat Chapter, in association with IQAC, M.S. University of Baroda",
        des: "“Leadership in Higher Education Award 2018” award to Founder President and Managing Trustee Shree Jagdishbhai D. Patel.",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2018-2019",
      },
      {
        title: "Computer Society of India",
        des: "” Distinguished Institution ” Awarded to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704354643/KPGU/Awards/2017/ComputerSocietyOfIndia-2017.webp",
        time: "2016-2017",
      },
      {
        title: "Indian Association for the Blind, Tamil Nadu",
        des: "“IAB Blind Empowerment Champions 2017 GOLD ZONE ” Conferred to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2016-2017",
      },
      {
        title: "Global Education Excellence Awards-2016, New Delhi",
        des: "“Most Innovative Private Engineering College in Gujarat”, conferred to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2015-2016",
      },
      {
        title:
          "National Gujarat Summit & Awards-2015 conducted by Department of MNRE and MSME Government of India, AICTE, AIU",
        des: "“Excellence in Education Award-2015” award to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2015-2016",
      },
      {
        title: "Shree Dhandhuka Taluka Patel Pragati Mandal, Surat",
        des: "“Samaj Ratna” conferred to Founder President and Managing Trustee Shree Jagdishbhai D. Patel.",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2014-2015",
      },
      {
        title: "Higher Education Forum, Pune",
        des: "“Campus Preparedness Award 2015” to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2014-2015",
      },
      {
        title: "“National Education Excellence Award-2014, Earth Research",
        des: "“Best Private Engineering College in Gujarat” conferred to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "IIEM New Delhi",
        des: "“Indira Gandhi Shiksha Shiromani Award-2013” for Outstanding Achievement in the field of Education to CMD, Shri Dhruv J Patel",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "Brands Academy",
        des: "Best Engineering College of Gujarat award to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2012-2013",
      },
      {
        title: "IIFS- India International Friendship Society",
        des: "“RASHTRIYA GAURAV AWARD – 2012” as YOUNG ENTERPRENEUR award to CMD, Shri Dhruv J Patel",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2012-2013",
      },
    ];

  const AwardsReceivedByKrishnaSchoolForEmergingTechnologiesAndAppliedResearchFromGujaratTechnologicalUniversity =
    [
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "Best NSS Unit 2015-16 Award to Babaria Institute of Technology",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "Best Program Officer (2015-16) Award and certificate of Appreciation presented to Dr. Keyur Patel by Vice Chancellor of GTU for outstanding contribution in social services program under NSS activities",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "Best student Volunteer (2016-17) Award and Certificate of Appreciation presented to Prinkit Patel by Vice Chancellor of GTU for outstanding contribution in social services program under NSS activities",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "Best student Volunteer (2015-16) Award and Certificate of Appreciation presented to Dhruv Patel by Vice Chancellor of GTU for outstanding contribution in social services program under NSS activities",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "GTU Innovation Council felicitates Babaria Institute of Technology for outstanding efforts in organizing successful Student Innovation & Project Exhibition in year 2017-18.",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "GTU Award for outstanding Blood Donor Organization 2012-13 (Highest Collection in Numbers)",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "GTU Award for outstanding Blood Donor Organization 2013-14 (Highest Collection in Numbers)",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "GTU Award for outstanding Blood Donor Organization 2013-14 (Highest Collection in Numbers)",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "GTU Award for “Effective Implementation of Thalassemia Awareness & Testing Program” 2012-13",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "GTU Award for outstanding Blood Donor Organization 2012-13 (Highest Collection by Percentage)",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "GTU Award for outstanding Blood Donor Organization 2013-14 (Highest Collection by Percentage)",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
      {
        title: "Gujarat Technological University, Ahmadabad",
        des: "Sport Award- Certificate of Appreciation to Tansha Anand for representing GTU in Table Tennis",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2013-2014",
      },
    ];

  const AwardsReceivedByKrishnaSchoolForPharmaceuticalSciencesAndResearch = [
    {
      title: "Centre of Education Growth and Research, New Delhi",
      des: "”Best Pharmacy College in Gujarat 2018″ conferred to Babaria Institute of Pharmacy by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
      time: "2018-2019",
    },
    {
      title: "Centre of Education Growth and Research, New Delhi",
      des: "Best Pharmacy College in Gujarat for Placement 2018 conferred on Babaria Institute of Pharmacy by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
      time: "2018-2019",
    },
    {
      title:
        "Association of Pharmacy Professionals, APP 5th Indo-Malaysian Conference",
      des: "“Appreciation Award” Conferred to CMD, Shri Dhruv J Patel",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
      time: "2018-2019",
    },
    {
      title: "District CSR Cell, Federation of Gujarat Industries and Cognito",
      des: "THE “TRUE IMPACT AWARD 2016” conferred to Babaria Institute of Pharmacy, Honouring Excellence in Social Responsibility",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
      time: "2015-2016",
    },
  ];

  const AwardsReceivedByKrishnaSchoolForPharmaceuticalSciencesAndResearchFromGujaratTechnologicalUniversity =
    [
      {
        title: "Guajarat Technological University, Ahmedabad",
        des: "	Best NSS Unit 2016-17 Award to Babaria Institute of Pharmacy",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Guajarat Technological University, Ahmedabad",
        des: "Best Program Officer (2015-16) Award and certificate of Appreciation presented to Mr. Ashish Soni by Vice Chancellor of GTU for outstanding contribution in social services program under NSS activities",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Guajarat Technological University, Ahmedabad",
        des: "Best student Volunteer (2015-16) Award and Certificate of Appreciation presented to Chandni Verma by Vice Chancellor of GTU for outstanding contribution in social services program under NSS activities",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
      {
        title: "Guajarat Technological University, Ahmedabad",
        des: "Best student Volunteer (2014-15) Award and Certificate of Appreciation presented to Sharvil Christian by Vice Chancellor of GTU for outstanding contribution in social services program under NSS activities",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        time: "2017-2018",
      },
    ];

  const AwardsReceivedByKrishnaSchoolForPhysiotherapyAndRehabilitation = [
    {
      title: "Centre of Education Growth and Research, New Delhi",
      des: "“Best Physiotherapy Institute in Gujarat 2018” conferred to BITS Institute of Physiotherapy by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
      time: "2018-2019",
    },
    {
      title: "Centre of Education Growth and Research, New Delhi",
      des: "““Best Physiotherapy Institute in Gujarat for Industry Interface 2018” conferred to Babaria Institute of Technology by Prof. Hari Haran, Advisor (Approval), AICTE, New Delhi",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
      time: "2018-2019",
    },
  ];

  const AwardsReceivedByKrishnaSchoolForPhysiotherapyAndRehabilitationFromGujaratUniversity =
    [
      {
        name: "Shruti Ajay Pandey",
        des: "First Rank in All Four years University Examination",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2018-2019",
      },
    ];

  const AwardsGivenByKrishnaSchoolForEmergingTechnologiesAndAppliedResearchToStudents =
    [
      {
        name: "Maharshi Vyas",
        des: "Highest Marks In Engineering Mechanics In All Branches",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2007-2008",
      },
      {
        name: "Thakur Aditya",
        des: "First Rank In University Examination",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2008-2009",
      },
      {
        name: "Nandish Joshi",
        des: "Highest Marks In Subject Machine Design",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: ["", "", "", "", ""],
        time: "2010-2011",
      },
      {
        name: "Shaishav Shah",
        des: "Topper In B.E. Electrical",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "",
      },
      {
        name: "Doshi Vatsal Dilip",
        des: "Highest Cumulative Performance Index (Cpi) In Bachelor of Engineering Computer Science & Engineering Up-to 6th Semester",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2011-2012",
      },
      {
        name: "Tushar Kakaiya",
        des: "Topper In Computer Science and Engineering",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2011-2012",
      },
      {
        name: "Doshi Vatsal Dilip",
        des: "Bachelor Of Engineering Course Toppe",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2012-2013",
      },
      {
        name: "Pathan Safiya Shahid Husain",
        des: "Computer Science And Engineering Branch Topper",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2013-2014",
      },
      {
        name: "Vekariya Dhavalkumar Jagdishbhai",
        des: "Computer Science And Engineering Branch Topper",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2013-2014",
      },
      {
        name: "Vekariya Dhavalkumar Jagdishbhai",
        des: "Highest Cumulative Grade Point Average In Civil Engineering, Bit",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2016-2017",
      },
      {
        name: "Patel Ketulkumar Rajubhai",
        des: "Topper In M.E. Advance Manufacturing System",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2017-2018",
      },
      {
        name: "Goti Ridham",
        des: "",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704263239/KPGU/Awards/gcrrh0zpvvjogktvhnfl.webp",
        medal: [""],
        time: "2017-2018",
      },
    ];

  // Custom Component

  const AwardsComponentList = ({ des }) => (
    <Stack direction={"row"} alignItems={"start"} spacing={1} mt={1.5}>
      <Typography color={"secondary"} variant="h4">
        <MilitaryTechRounded fontSize="inherit" className="mb-1" />
      </Typography>
      <Typography color={"secondary"} variant="h4" fontSize={"20px"}>
        {des}
      </Typography>
    </Stack>
  );

  const AwardsComponentCard = ({ title, time, img, des, index }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={2}
        overflow={"clip"}
        position={"relative"}
      >
        <Box>
          <img src={img} alt="award" className="img-fluid" />
        </Box>
        <Box p={2}>
          <Box>
            {/* <h1>{index}</h1> */}
            <h4 className="color-secondary fw-semibold mb-3">{title}</h4>
            <h6 className="fw-bold" style={{ color: "#474747f4" }}>
              {des}
            </h6>
          </Box>
          <br />
          <br />
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            startIcon={<CalendarMonthRounded />}
            sx={{ position: "absolute", bottom: 16 }}
          >
            {time}
          </Button>
        </Box>
      </Box>
    </Grid>
  );

  const StudentAwardsComponentCard = ({ name, time, img, des, medal, index }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={2}
        overflow={"clip"}
        position={"relative"}
      >
        <Box>
          <img src={img} alt="award" className="img-fluid" />
        </Box>
        <Box p={2}>
          <Box>
            {/* <h1>{index}</h1> */}
            <h4 className="color-secondary fw-semibold mb-3">{name}</h4>
            <h6 className="fw-bold" style={{ color: "#474747f4" }}>
              {des}
            </h6>
          </Box>
          <br />
          <br />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            position={"absolute"}
            alignItems={"center"}
            bottom={16}
            width={"95%"}
          >
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              startIcon={<CalendarMonthRounded />}
              size="small"
            >
              {time}
            </Button>
            <Stack direction={"row"} flexWrap={"wrap"}>
              {medal.map((e, i) => {
                console.log(i);
                return (
                  <IconButton size="small" key={i}>
                    <WorkspacePremiumRounded
                      color="warning"
                      sx={{ fontSize: "26px !important" }}
                    />
                  </IconButton>
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} borderRadius={4}>
      <h4 className=" fw-semibold color-secondary my-5">
        AWARDS AND ACHIEVEMENTS
      </h4>
      <Grid
        container
        overflow={"clip"}
        borderRadius={4}
        className={"smooth-shadow"}
        bgcolor={"#fff"}
      >
        <Grid item xs={12} md={4}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Jagdishbhai_D_Patel_2.webp"
            alt="Jagdishbhai D Patel"
            className={`w-100 ${innerWidth < 900 ? "" : "h-75"
              } object-fit-cover`}
          />
          <Box p={2} textAlign={"start"}>
            <h4 className="fw-semibold color-secondary">
              Our Founder & President
            </h4>
            <h3 className="fw-semibold">
              Shree Jagdishbhai D Patel has been conferred with
            </h3>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} pr={1} pt={1} pb={1.5}>
          <Box pl={1}>
            {PresidentAwards.map(({ des }, index) => (
              <AwardsComponentList des={des} key={index} index={index} />
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary my-4">
          Awards received by schools
        </h4>
        {AwardsReceivedBySchools.map(({ des }, index) => (
          <AwardsComponentList des={des} key={index} />
        ))}
      </Box>

      {/*  Awards received by Krishna School for Emerging Technologies & Applied Research From Gujarat Technological University  */}

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary mb-4">
          Awards received by Krishna School for Emerging Technologies & Applied
          Research From <br /> Gujarat Technological University, Ahmadabad
          <br /> [Earlier Known As Babaria Institute of Technology]
        </h4>
        <Grid container spacing={3}>
          {AwardsReceivedByKrishnaSchoolForEmergingTechnologiesAndAppliedResearchFromGujaratTechnologicalUniversity.map(
            ({ des, img, time, title }, index) => (
              <AwardsComponentCard
                des={des}
                img={img}
                time={time}
                title={title}
                key={index}
                index={index}
              />
            )
          )}
        </Grid>
      </Box>

      {/* Awards received by Krishna School for Emerging Technologies & Applied Research */}

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary mb-4">
          Awards received by Krishna School for Emerging Technologies & Applied
          Research <br /> [Earlier Known As Babaria Institute of Technology]
        </h4>
        <Grid container spacing={3}>
          {AwardsReceivedByKrishnaSchoolForEmergingTechnologiesAndAppliedResearch.map(
            ({ des, img, time, title }, index) => (
              <AwardsComponentCard
                des={des}
                img={img}
                time={time}
                title={title}
                key={index}
                index={index}
              />
            )
          )}
        </Grid>
      </Box>

      {/* Awards Given by Krishna School for Emerging Technologies & Applied Research To Students */}

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary mb-4">
          Awards Given by Krishna School for Emerging Technologies & Applied
          Research To Students <br /> [Earlier Known As Babaria Institute of
          Technology]
        </h4>
        <Grid container spacing={3}>
          {AwardsGivenByKrishnaSchoolForEmergingTechnologiesAndAppliedResearchToStudents.map(
            ({ des, img, time, name, medal }, index) => (
              <StudentAwardsComponentCard
                des={des}
                img={img}
                time={time}
                medal={medal}
                name={name}
                key={index}
                index={index}
              />
            )
          )}
        </Grid>
      </Box>

      {/* Awards received by Krishna School for Pharmaceutical Sciences & Research Research From Gujarat Technological University, Ahmadabad */}

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary mb-4">
          Awards received by Krishna School for Pharmaceutical Sciences &
          Research From <br />
          Gujarat Technological University, Ahmadabad <br /> [Earlier Known As
          Babaria Institute of Pharmacy]
        </h4>
        <Grid container spacing={3}>
          {AwardsReceivedByKrishnaSchoolForPharmaceuticalSciencesAndResearchFromGujaratTechnologicalUniversity.map(
            ({ des, img, time, title }, index) => (
              <AwardsComponentCard
                des={des}
                img={img}
                time={time}
                title={title}
                key={index}
                index={index}
              />
            )
          )}
        </Grid>
      </Box>

      {/* Awards received by Krishna School for Pharmaceutical Sciences & Research Research */}

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary mb-4">
          Awards received by Krishna School for Pharmaceutical Sciences &
          Research Research <br /> [Earlier Known As Babaria Institute of
          Pharmacy]
        </h4>
        <Grid container spacing={3}>
          {AwardsReceivedByKrishnaSchoolForPharmaceuticalSciencesAndResearch.map(
            ({ des, img, time, title }, index) => (
              <AwardsComponentCard
                des={des}
                img={img}
                time={time}
                title={title}
                key={index}
                index={index}
              />
            )
          )}
        </Grid>
      </Box>

      {/* Awards received by Krishna School for Physiotherapy & Rehabilitation */}

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary mb-4">
          Awards received by Krishna School for Physiotherapy & Rehabilitation
          <br /> [Earlier Known As BITS Institute of Physiotherapy]
        </h4>
        <Grid container spacing={3}>
          {AwardsReceivedByKrishnaSchoolForPhysiotherapyAndRehabilitation.map(
            ({ des, img, time, title }, index) => (
              <AwardsComponentCard
                des={des}
                img={img}
                time={time}
                title={title}
                key={index}
                index={index}
              />
            )
          )}
        </Grid>
      </Box>

      {/* Awards received by Krishna School for Physiotherapy & Rehabilitation From Gujarat University */}

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={4}
        className="smooth-shadow"
        mt={5}
      >
        <h4 className=" fw-semibold color-secondary mb-4">
          Awards received by Krishna School for Physiotherapy & Rehabilitation
          From <br />
          Gujarat University
          <br />
          [Earlier Known As BITS Institute of Physiotherapy]
        </h4>
        <Grid container spacing={3}>
          {AwardsReceivedByKrishnaSchoolForPhysiotherapyAndRehabilitationFromGujaratUniversity.map(
            ({ des, img, time, name, medal }, index) => (
              <StudentAwardsComponentCard
                des={des}
                img={img}
                time={time}
                medal={medal}
                name={name}
                key={index}
                index={index}
              />
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default AwardsAccolades;
