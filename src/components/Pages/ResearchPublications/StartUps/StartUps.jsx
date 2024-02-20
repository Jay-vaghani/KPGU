import React, { useContext } from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import { AppContext } from "../../../../contexts/AppContext";
import {
  CalendarMonthRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";

function StartUps() {
  const { maxWidth } = useContext(AppContext);

  // Lists

  const MissionList = [
    "To ignite ingenuity, creativity and innovation in the hearts of our researchers to explore their inner soul and make their dreams a reality.",
    "To become the hub for innovative ideas and their implementation.",
    "To provide a launching pad for the brilliant students, faculty and professionals to market their research; where every passing day promises a better tomorrow",
    "To be a hi-tech incubation centre for assisting innovators and students with entrepreneurial mindset of their ideas and promoting innovative solutions to real life problems.",
    "To cultivate fear free, open, collaborative culture of Innovation within University Ecosystem.",
    "To encourage risk taking and equity partnerships with incubatees to create mutual win -win situations.",
    "To collaborate with world class technical and commercialization experts and bring them on platform through, awareness, trainings, coaching and mentoring programs.",
    "Forging strong active partnerships with local industry partners.",
    "To provide best in class Infrastructure, mentorship, angel investment and venture capitalist based financial support.",
  ];

  const AccomplishmentsList = [
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708409455/KPGU/Startups/Industries-Commissionerate-Government-of-Gujarat.svg",
      title: "Industries Commissionerate Government of Gujarat",
      des: "Krishna School of Emerging Technologies & Applied Researchreceived approval as NODAL INSTITUTE Under Scheme forAssistance to Startups/Innovation 2020.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708412026/KPGU/Startups/gsbtm_transcription_brighter_bio_future.svg",
      title: "Gsbtm Transcription Brighter Bio Future",
      des: "Krishna School of Pharmaceutical Science & Research received approval as NODAL INSTITUTE Under Scheme forAssistance for BT Industry under the Gujarat Biotechnology Policy 2016-21.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708413867/KPGU/Startups/Center-entrepreneurship-development.svg",
      title: "Center Entrepreneurship Development Government Of Gujarat",
      des: "Krishna School of Emerging Technologies Applied Research Established Entrepreneurship Development Cell In Collaboration.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708418898/KPGU/Startups/Wadhawani-Foundation-National-Entrepreneurship-Network.svg",
      title: "Wadhawani Foundation National Entrepreneurship Network",
      des: "Krishna School of Emerging Technologies & Applied Research has Signed MOU with Wadhawani Foundation National Entrepreneurship Network, to accelerate entrepreneurship, innovation & skills development among students.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708418638/KPGU/Startups/cetiba.svg",
      title:
        "Centre for Entrepreneurship Technology Incubation and Business Acceleration",
      des: "Krishna School of Emerging Technologies & Applied Research has established Centre for Entrepreneurship,Technology Incubation and Business Acceleration (CETIBA), an incubation centre to enable start-ups with an efficientmentoring program, relevant training and a convenient co-working hub. The centre is approved by Ministry of Micro,Small & Medium Enterprise, Government of India",
    },
  ];

  const EntrepreneurshipEventsList = [
    {
      title:
        "Workshop on 3D - Printing: Print Your Imagination, by Mr. Ronak Sinh Parmar, CEO Devine Labs, Ahmedabad",
      date: "1-5-2020",
      points: false,
    },

    {
      title: "Idea Validation by Mr. Haituk Shah",
      date: "4-8-2018",
      points: false,
    },
    {
      title: "Patel, Kiran Mr. by Design Product",
      date: "9-8-2018",
      points: false,
    },
    {
      title: "Barai, Dipen Mr. by Development Product",
      date: "10-8-2018",
      points: false,
    },
    {
      title: "Innovation and IPR by Mr. Kirti Patel",
      date: "14-8-2018",
      points: false,
    },
    {
      title: "Product Validation by Mr. Rohit Dave",
      date: "16-8-2018",
      points: false,
    },
    {
      title: "Market Analysis & Strategies by Mr. Harsh Shah",
      date: "29-8-2018",
      points: false,
    },
    {
      title: `"Vibrant Gujarat Start-up Summit 2018" Road Show`,
      date: "31-8-2018",
      points: false,
    },
    {
      title: `Workshop on IPR by MyCrave Consultancy services`,
      date: "12-12-2018",
      points: false,
    },
    {
      title: `Innovative IDP UDP project exhibition: ExhiBITS`,
      date: "2018",
      points: false,
    },
    {
      title: `Aahvan GTU Student's Annual Tech-Fest`,
      date: "2019",
      points: ["Tech-Pitch", "IDP Expo", "Patent Clinic"],
    },
    {
      title: `Workshop on Patent filing & its Application by GTU Innovation Council`,
      date: "9-4-2019",
      points: false,
    },
    {
      title: `Innovative IDP UDP project exhibition: ExhiBITS`,
      date: "2019",
      points: false,
    },
    {
      title: `BITS Hackathon`,
      date: "17-8-2019",
      points: false,
    },
    {
      title: `GTU Start-up Demo`,
      date: "25-6-2019",
      points: false,
    },
    {
      title: `GTU Start-up Demo`,
      date: "14-9-2019",
      points: false,
    },
    {
      title: `Smart Gujarat for New India Hackathon`,
      date: "24-2-2020",
      points: false,
    },
    {
      title: `Start-up Talks on Augmented Reality (AR) & Virtual Reality (VR) by Sanket Kale`,
      date: "2020",
      points: false,
    },
    {
      title: `Start-up Talks on e-bicycles : By Mr Vivek Page`,
      date: "2020",
      points: false,
    },
    {
      title: `Webinar on "3D Printing: Entrepreneurship`,
      date: "1-5-2020",
      points: false,
    },
    {
      title: `Webinar on: "How to Initiate a Startup & Develop necessary skills for better employment" by Mr. Rohit Swarup`,
      date: "2021",
      points: false,
    },
    {
      title: `One Week Online Capacity Building Program on "Idea to Enterprise"`,
      date: "31-3-2021",
      points: false,
    },
    {
      title: `3 Days Entrepreneurship Awareness Camp Sponsored by EDII and NSTEDB, DST.`,
      date: "2-6-2021",
      points: false,
    },
  ];

  const StudentStartUps = [
    {
      company: "Berry Nature Care Private Limited",
      logo: "",
      founder: "Tagore Berry",
      des: "Stained teeth have become an epidemic and a socialembarrassment. Product lead to white stain freeteeth at home without visiting a Dentist or usingharsh chemicals or expensive procedures",
      websiteLink: "https://berrynaturecare.com",
    },
    {
      company: "Cubesat Aerospace LLP",
      logo: "",
      founder: "Ms. Bansi Attara",
      des: "Our CubeSats are made to be affordable,customizable, and portable so that they are availableto a wider range of consumers. They are ideal for avariety of uses, including scientific research, earthobservation, remote sensing, and more.",
      websiteLink: "https://cubesataero.com",
    },
    {
      company: "Microbeam Laser System",
      logo: "",
      founder: "Jatinkumar Manharlal Panchal",
      des: "Microbeam laser systems designs and manufacturesnanosecond solid-state laser systems for ultra-hardmaterials such as PCD, CVD, Natural Diamond, andSemiconductor material, among others. MICROBEAMLASER SYSTEM is the industry leader in theproduction of laser systems for a variety ofindustries.",
      websiteLink: "http://microbeamlasersystem.com",
    },
    {
      company: "Sankul Capital Services Private Limited",
      logo: "",
      founder: "Prashant Kumar",
      des: "SankulCapital builds a foundation for financialindependence. It is implementing a proven modelwith the support of largest not for profitMicrofinance institutes",
      websiteLink: "https://sankulcapitalservices.co.in",
    },
    {
      company: "Groskill Learning Private Limited",
      logo: "",
      founder: "Mugdha Galundia",
      des: "Hunar attempts to provide a platform to help thelearner choose their profession as well as developbetter job and life-skills which will lead to theirpersonal and professional growth",
      websiteLink: "https://www.groskill.com",
    },
    {
      company: "Cosmo Kundli Private Limited",
      logo: "",
      founder: "Maulik Bhatt",
      des: "In order to create the precise exercise of theastrology we are under process of making a softwarewhich will have the technology advancement of AL.This software will be able to predict future for theprecise prediction for the better planning assuggested in vedas.",
      websiteLink: "https://cosmokundli.com",
    },
    {
      company: "Ravens Defence System Private Limited",
      logo: "",
      founder: "Sameer Ravindra Kulkarni",
      des: "The Ravens Defense System company's first productis IS&WS. It has a multifunctional, easy HumanMachine Interface (HMI) embedded system thatoutperforms the global market with innovativedesign.",
      websiteLink: "https://www.ravendefense.com",
    },
    {
      company: "Tatved Herbal",
      logo: "",
      founder: "Samiksha Dixit",
      des: "Providing safe skin care and hair care formulationswhich are result oriented and value added.Affordable range of the products.",
      websiteLink: "https://tatvedherbal.com",
    },
    {
      company: "Truewholesale LLP",
      logo: "",
      founder: "Madhup Bansal",
      des: "The Ravens Defense System company's first productis IS&WS. It has a multifunctional, easy HumanMachine Interface (HMI) embedded system thatoutperforms the global market with innovativedesign.",
      websiteLink: "https://truewholesale.in",
    },
    {
      company: "Excelsus Global Private Limited",
      logo: "",
      founder: "Chintan Chaudhary",
      des: "Acquires left over wheat stubble waste form thefarmers & turn them into useful products such asEco-friendly 'drinking straws' & 'stirrers'. With thisinitiative we are not only preventing the air pollutionbut are also promoting the reduction in the use ofplastics.",
      websiteLink: "https://www.excelsus-global.com",
    },
    {
      company: "Gyanme EduTech Pvt Ltd",
      logo: "",
      founder: "Mr. Raghvendra Singh Chauhan",
      des: "GyanMe is an EdTech setup that offers students infact entire educational community, real-time doubtsolving, and practical learning by means of the virtualplatform.",
      websiteLink: "https://gyanme.in",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
    {
      company: "",
      logo: "",
      founder: "",
      des: "",
      websiteLink: "",
    },
  ];

  // Components

  const MissionListComponent = ({ des }) => (
    <h5 className="fw-bold mb-3">
      <Stack
        pl={"2%"}
        direction={"row"}
        alignItems={"start"}
        color={"secondary.main"}
      >
        <KeyboardDoubleArrowRightRounded sx={{ fontSize: "27px" }} />
        {des}
      </Stack>
    </h5>
  );

  const AccomplishmentsListComponent = ({ img, title, des }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        position={"relative"}
        borderRadius={4}
      >
        <Box>
          <img
            src={img}
            alt="Industries Commissionerate Government of Gujarat"
            className="w-100"
          />
        </Box>
        <Box p={2}>
          <h5 className="fw-bold color-secondary">{title}</h5>
          <p className="text-gray fw-bold">{des}</p>
        </Box>
      </Box>
    </Grid>
  );

  const EntrepreneurshipEventsListComponent = ({ title, date, points }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        position={"relative"}
        borderRadius={4}
      >
        <Box p={2}>
          <h5 className={`fw-bold color-secondary ${points ? "" : "mb-5"}`}>
            {title}
          </h5>
          <Box mb={6}>
            {points
              ? points.map((des) => (
                  <p
                    className="text-gray fw-bold mb-2 fw-bolder  text-uppercase  ps-2 d-flex align-items-center color-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    <KeyboardDoubleArrowRightRounded
                      sx={{ fontSize: "20px" }}
                    />{" "}
                    {des}
                  </p>
                ))
              : ""}
          </Box>
        </Box>
        <Stack position={"absolute"} bottom={16} left={16}>
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            startIcon={<CalendarMonthRounded />}
          >
            {date}
          </Button>
        </Stack>
      </Box>
    </Grid>
  );

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
        <h4 className="fw-semibold color-secondary">
          Krishna Centre of Startup & Entrepreneurship has been established to
          nurture and support innovative ideas from Students and to convert them
          into successful Start-ups and develop entrepreneurship skills.{" "}
        </h4>
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
        <h2 className="fw-semibold color-secondary mb-4">MISSION</h2>
        {MissionList.map((des, index) => (
          <MissionListComponent des={des} key={index} />
        ))}
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
        <h2 className="fw-semibold color-secondary mb-4">
          Krishna Centre of Start Ups & Entrepreneurship has successfully
          completed following accomplishments
        </h2>
        <Grid container spacing={4}>
          {AccomplishmentsList.map(({ img, title, des }, index) => (
            <AccomplishmentsListComponent
              img={img}
              des={des}
              title={title}
              key={index}
            />
          ))}
        </Grid>
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
        <h2 className="fw-semibold color-secondary mb-4">
          Events Related to Start-ups and Entrepreneurship
        </h2>
        <Grid container spacing={4}>
          {EntrepreneurshipEventsList.map(({ title, date, points }, index) => (
            <EntrepreneurshipEventsListComponent
              title={title}
              date={date}
              key={index}
              points={points}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default StartUps;
