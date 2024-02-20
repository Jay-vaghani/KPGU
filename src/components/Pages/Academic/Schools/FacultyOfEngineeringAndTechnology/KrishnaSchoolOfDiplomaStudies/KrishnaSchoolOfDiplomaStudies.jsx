import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Grid, Tab, Typography } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";

function KrishnaSchoolOfDiplomaStudies() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Dr. Dattesh Y. Joshi",
      imgNo: "6070",
      designation: "Associate Professor || Director-KSDS || HOD-Electrical",
      experience: 15,
      qualification: "Ph.D || M.Tech",
      customLink: "",
    },
    {
      name: "Patel Hardik Sumantrai",
      imgNo: "6072",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.E. [Automation & Control And Power System]",
      customLink: "",
    },
    {
      name: "Chirag R Shindhav",
      imgNo: "6073",
      designation: "Assistant Professor",
      experience: 13,
      qualification: "M.Tech [Structural  Engineering]",
      customLink: "",
    },
    {
      name: "Hiral U Purohit",
      imgNo: "6074",
      designation: "Assistant Professor",
      experience: 14,
      qualification: "M.E.[Environmental Engineering]",
      customLink: "",
    },
    {
      name: "Jaynika Vasava",
      imgNo: "6077",
      designation: "Lecturer",
      experience: 4,
      qualification: "B.E.Civil",
      customLink: "",
    },
    {
      name: "Vaibhaviben Harshadrai Pandya",
      imgNo: "6078",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E [COMPUTER SCIENCE & ENGINEERING]",
      customLink: "",
    },
    {
      name: "Helly Patel",
      imgNo: "6079",
      designation: "Lecturer",
      experience: 2,
      qualification: "M.Tech(CSE)[Pursuing]",
      customLink: "",
    },
    {
      name: "Komal Ketan Dave",
      imgNo: "6024",
      designation:
        "HOD-Civil Engineering Department [KSDS] || Assistant Professor",
      experience: 17,
      qualification: "M.E.[Geotechnical Engineering]",
      customLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707473959/KPGU/Faculty%20Images/KSET/6024.webp",
    },
    {
      name: "Komal Kushwaha",
      imgNo: "6080",
      designation: "HOD[KSDS-IT]",
      experience: 10,
      qualification: "M.Tech-CSE [Pursuing]",
      customLink: "",
    },
    {
      name: "Pritesh Ratilal Patel",
      imgNo: "5997",
      designation: "Assistant Professor || HOD-Mechanical",
      experience: 18,
      qualification: "PhD [Pursuing] || M.E-Advance Manufacturing Systems",
      customLink: "",
    },
    {
      name: "Sushant Prajapati",
      imgNo: "5993",
      designation: "Lecturer",
      experience: 8,
      qualification: "M.E[THERMAL ENGINEERING]",
      customLink: "",
    },
    {
      name: "Kailas Patel",
      imgNo: "6082",
      designation: "Lecturer",
      experience: 8,
      qualification: "M.A[English]",
      customLink: "",
    },
    {
      name: "Ruchi Bavda",
      imgNo: "6069",
      designation: "Lecturer ",
      experience: 6,
      qualification: "M.sc[mathematics] || B.ed",
      customLink: "",
    },
    {
      name: "Vatsh Sharma",
      imgNo: "7102",
      designation: "Lecturer ",
      experience: 1,
      qualification: "M.Tech(CSE)[Pursuing",
      customLink: "",
    },
    {
      name: "Digvijaysinh rathod",
      imgNo: "7104",
      designation: "Lecturer",
      experience: 1,
      qualification: "M.Tech(CSE)[Pursuing]",
      customLink: "",
    },
    {
      name: "Oza Vikram Ganpatlal",
      imgNo: "5994",
      designation: "Lecturer",
      experience: 20,
      qualification: "M.E [CAD || CAM]",
      customLink: "",
    },
    // {
    //   name: "Bhagyashree .A. Mudaliar",
    //   imgNo: "6083",
    //   designation: "Lecturer",
    //   experience: 1,
    //   qualification: "MSc",
    //   customLink: "",
    // },
    // {
    //   name: "Sona Bhattacharya",
    //   imgNo: "6186",
    //   designation: "Lecturer",
    //   experience: 21,
    //   qualification: "M.A",
    //   customLink: "",
    // },
    // {
    //   name: "Vibhuti R. Vashi",
    //   imgNo: "6086",
    //   designation: "Lecturer",
    //   experience: 4,
    //   qualification: "M.Phil",
    //   customLink: "",
    // },
  ];

  const Diploma = [
    {
      title: "Computer Science & Engineering",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "Information Technology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "Mechanical Engineering",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "Electrical Engineering",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "Civil Engineering",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "Computer Engineering",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "Chemical Engineering",
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
        title={"Krishna School Of Diploma Studies [KSDS]"}
        des={
          "The Faculty of Engineering and Emerging Technology is in the forefront of higher technological education and basic & applied research. It has established itself as a premier center for research and industrial consultancy in the country. There are 6 academic departments equipped with 58 educational and research laboratories performing diverse functions learning in harmony. The presence of internationally recognized faculty backed by exemplary technical & supporting staff and an effective administration have all contributed to the achievements of alumni successfully established all over the world."
        }
      />
      <DirectorsMessage
        dirImg={
          "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
        }
        dirEmail={"directoremail@gmail.com"}
        dirName={"Dr. Dattesh Joshi"}
        dirOf={"Krishna School Of Diploma Studies"}
        dirOfShort={"[KSDS]"}
        dirMessage={[
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quidem cumque officia repellat sed ratione itaque, libero suscipit perspiciatis natus distinctio aspernatur vero, tenetur ipsum culpa corporis? Temporibus quae quod et quas numquam voluptas debitis cum maiores voluptatem porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae libero veritatis aspernatur officiis repellat dicta illo dolorum consequuntur! Sapiente, modi.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quidem cumque officia repellat sed ratione itaque, libero suscipit perspiciatis natus distinctio aspernatur vero, tenetur ipsum culpa corporis? Temporibus quae quod et quas numquam voluptas debitis cum maiores voluptatem porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae libero veritatis aspernatur officiis repellat dicta illo dolorum consequuntur! Sapiente, modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas facere eligendi ex blanditiis impedit!",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quidem cumque officia repellat sed ratione itaque, libero suscipit perspiciatis natus distinctio aspernatur vero, tenetur ipsum culpa corporis? Temporibus quae quod et quas numquam voluptas debitis cum maiores voluptatem porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae libero veritatis aspernatur officiis repellat dicta illo dolorum consequuntur! Sapiente, modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas facere eligendi ex blanditiis impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum distinctio adipisci ab molestiae a magni tenetur aspernatur est totam! Quasi eveniet molestiae repudiandae a omnis est, quas iusto officiis.",
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
                facultyName={"KSDS"}
                imgNo={imgNo}
                MainLink={
                  "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707424419/KPGU/Faculty%20Images/"
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
        <TabContext value={value}>
          <TabList
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab className="fw-bold" label="deploma" value="1" />
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

export default KrishnaSchoolOfDiplomaStudies;
