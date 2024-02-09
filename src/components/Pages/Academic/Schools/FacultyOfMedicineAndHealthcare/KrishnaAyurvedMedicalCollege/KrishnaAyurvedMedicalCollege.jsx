import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Grid, Tab } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";

function KrishnaAyurvedMedicalCollege() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Dr Malhari K Sirdeshpande",
      designation: "Principal || Professor",
      experience: 22,
      imgNo: "6168",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "Dr Pravin R Firke",
      designation: "Associate Professor || Reader",
      experience: 8,
      imgNo: "5930",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "Dr Vijitha Vijayan",
      designation: "Assistant Professor || Lecturer",
      experience: 3,
      imgNo: "5925",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "Dr Khusboo Kumari Gupta",
      designation: "Assistant Professor || Lecturer",
      experience: 2,
      imgNo: "5927",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "Dr Krishna Priya",
      designation: "Assistant Professor || Lecturer",
      experience: 1,
      imgNo: "5923",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "Dr Mularam Rakewal Suthar",
      designation: "Assistant Professor || Lecturer",
      experience: 1,
      imgNo: "5928",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR.PRAVIN N TAKLE",
      designation: "Associate Professor || Reader",
      experience: 3,
      imgNo: "5929",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR.NISHA VEGDA",
      designation: "Associate Professor || Reader",
      experience: 1,
      imgNo: "5913",
      qualification: "B.A || M.A || PhD",
      customLink: "",
    },
    {
      name: "DR. DAKSHA RATHOD",
      designation: "Associate Professor || Reader",
      experience: 8,
      imgNo: "5919",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR.JIGNESHAKUMARI T CHAREL",
      designation: "Associate Professor || Reader",
      experience: 3,
      imgNo: "6172",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR. AMAL ABDUL HAMEED",
      designation: "Associate Professor || Reader",
      experience: 6,
      imgNo: "5924",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR.MAYUR V BARVE",
      designation: "Professor",
      experience: 12,
      imgNo: "5931",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR.SYAMA MANIYANKUTTY",
      designation: "Associate Professor || Lecturer",
      experience: 3,
      imgNo: "5922",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR. JIGISHA PRAJAPATI",
      designation: "Associate Professor || Lecturer",
      experience: 1,
      imgNo: "5915",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR. HARDIK VARIYA",
      designation: "Associate Professor || Lecturer",
      experience: 6,
      imgNo: "5920",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "DR. TREDHA VYAS",
      designation: "Associate Professor || Lecturer",
      experience: 1,
      imgNo: "5921",
      qualification: "B.A.M.S || M.D || M.S",
      customLink: "",
    },
    {
      name: "Dr.RABIYA SHAIKH",
      designation: "Associate Professor || Lecturer",
      experience: 4,
      imgNo: "5918",
      qualification: "P.H.D",
      customLink: "",
    },
  ];

  const UG = [
    {
      title: "BAMS",
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = useState("1");

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <SchoolWelcomeSection
        title={"Krishna Ayurved Medical College [KAMC]"}
        des={
          "The Faculty of Engineering and Emerging Technology is in the forefront of higher technological education and basic & applied research. It has established itself as a premier center for research and industrial consultancy in the country. There are 6 academic departments equipped with 58 educational and research laboratories performing diverse functions learning in harmony. The presence of internationally recognized faculty backed by exemplary technical & supporting staff and an effective administration have all contributed to the achievements of alumni successfully established all over the world."
        }
      />
      <DirectorsMessage
        dirImg={
          "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
        }
        dirEmail={"directoremail@gmail.com"}
        dirName={"Vaidya Malhari Sirdeshpande"}
        dirOf={"Krishna Ayurved Medical College"}
        dirOfShort={"[KAMC]"}
        dirMessage={[
          "Krishna Ayurved Medical College established in the year of 2019, is a world class educational institute developed for top quality teaching and training in the field of Ayurved with the vision of the founder President Hon. Jagdishbhai Patel.",
          "This institute is one of the renouned colleges, managed by Shree Krishna educational and charitable trust, Vadodara.",
          "Krishna Ayurved Medical College & Davalba Ayurved Medical Hospital are well equipped with all teaching and training facilities for students. Academic excellence is our Moto and to achieve this, highly qualified teaching staff is working hard to carve out the future of the students.",
          "Apart from the academic activities, sports facilities, developed campus, world class infra structure in a nature friendly environment provide all opportunities of complete personality developments of students. Library having more than 8000 books, medicinal plant garden, Teaching Pharmacy, Teaching aids such as projectors, E- Library are some of the tools for high quality teaching and learning process.",
          "The clinical exposure is equally important for medical students. Davalba Ayurved Medical Hospital is an ideal example of social service with academic facility for students. We render completely free of cost treatment for patients helping particularly the less privileged section from rural area of Varnama and other villages in vicinity.  Students can easily get the practical clinical experiences from the well developed OPDS having up to 300 patients per day & 60 beded IPD of Matoshri  Davalba Ayurved Medical Hospital.  Full flagged Panchakarma unit, fully functional Operation Theater, Physiotherapy section, Advanced Pathology lab, X-ray unit and quality medicines make the hospital a unique Ayurved Treatment center with all modern facilities.",
          "We are well prepared to welcome our third academic batch in coming days. Over & above the norms of CCIM & Gujarat Ayurved University, the KAMC team is committed for shaping & polishing of our students nurturing them into the shining diamonds to offer the best medical services to the society, using the ancient treasure of Ayurved with modern scientific outlook.",
        ]}
      />

      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
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
                facultyName={"KAMC"}
                imgNo={imgNo}
                MainLink={
                  "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707393163/KPGU/Faculty%20Images/"
                }
                customLink={customLink}
              />
            )
          )}
        </Grid>
      </Box>
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quidem molestiae ea earum iste. Explicabo asperiores dignissimos veritatis quae inventore."
          }
          right={true}
        />
      </Box>
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <h2 className="fw-bold color-secondary fs-1">Mission</h2>
        <Quote
          quote={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quidem molestiae ea earum iste. Explicabo asperiores dignissimos veritatis quae inventore."
          }
          right={true}
        />
      </Box>
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <Box mb={4}>
          <h2 className="fw-bold color-secondary fs-1">Programs </h2>
        </Box>
        <TabContext value={value}>
          <TabList
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab className="fw-bold" label="ug" value="1" />
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
        </TabContext>
      </Box>
      <Box
        mt={4}
        bgcolor={"#fff"}
        borderRadius={4}
        className="smooth-shadow"
        p={2}
      >
        <Box mb={4}>
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
      </Box>
    </Box>
  );
}

export default KrishnaAyurvedMedicalCollege;
