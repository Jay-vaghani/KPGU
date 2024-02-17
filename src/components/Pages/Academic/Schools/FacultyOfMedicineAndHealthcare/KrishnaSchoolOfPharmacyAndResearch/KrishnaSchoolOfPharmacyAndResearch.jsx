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

function KrishnaSchoolOfPharmacyAndResearch() {
  const { maxWidth } = useContext(AppContext);

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
    // {
    //   name: "Mr. Imtiyaz Bagban",
    //   imgNo: "5912",
    //   designation: "Assistant Professor",
    //   experience: 1,
    //   qualification: "M.Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Pooja Goswami",
    //   imgNo: "5898",
    //   designation: "Assistant Professor",
    //   experience: 8,
    //   qualification: "M. Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Bansari Patel",
    //   imgNo: "5888",
    //   designation: "Assistant Professor",
    //   experience: 2,
    //   qualification: "M.Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Mr. Bhavin D. Pandya",
    //   imgNo: "5893",
    //   designation: "Assistant Professor",
    //   experience: 3,
    //   qualification: "M.Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Esha Bhavin Shah",
    //   imgNo: "5889",
    //   designation: "Assistant Professor",
    //   experience: 10,
    //   qualification: "M. Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Shreyash Ashwinbhai Diwakar",
    //   imgNo: "5891",
    //   designation: "Assistant Professor",
    //   experience: 9,
    //   qualification: "M. Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Dr. Vandana B. Patel",
    //   imgNo: "5976",
    //   designation: "Professor",
    //   experience: 32,
    //   qualification: "M.Pharm || PhD || MBA",
    //   customLink: "",
    // },
    // {
    //   name: "Dr.Vishnu A Patel",
    //   imgNo: "5984",
    //   designation: "professor",
    //   experience: 38,
    //   qualification: "M.Pharm || Ph.D",
    //   customLink: "",
    // },
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
      duration: "4",
    },
    {
      title: "M. Pharm in Pharmacology",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "M. Pharm in Pharmaceutical Quality Assurance",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "M. Pharm in Pharmaceutical Technology",
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
        title={"Krishna School Of Pharmacy And Research [KSP]"}
        des={
          "The Faculty of Engineering and Emerging Technology is in the forefront of higher technological education and basic & applied research. It has established itself as a premier center for research and industrial consultancy in the country. There are 6 academic departments equipped with 58 educational and research laboratories performing diverse functions learning in harmony. The presence of internationally recognized faculty backed by exemplary technical & supporting staff and an effective administration have all contributed to the achievements of alumni successfully established all over the world."
        }
      />
      <DirectorsMessage
        dirImg={
          "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
        }
        dirEmail={"directoremail@gmail.com"}
        dirName={"Dr. Falgun Mehta"}
        dirOf={"Krishna School Of Pharmacy And Research"}
        dirOfShort={"[KSP]"}
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
                facultyName={"KSP"}
                imgNo={imgNo}
                MainLink={
                  "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707801651/KPGU/Faculty%20Images/"
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

export default KrishnaSchoolOfPharmacyAndResearch;
