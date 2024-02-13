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

function KrishnaSchoolOfNursing() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Nimesh Chokshi ",
      imgNo: "8777",
      designation: "Professor || Director ",
      experience: 37,
      qualification: "Msc. Nursing ",
      customLink: "",
    },
    {
      name: "Mrs.Priyanka Aritra Dey",
      imgNo: "5873",
      designation: "I/C Director || Assistant Professor",
      experience: 8,
      qualification: "Ph.D Pursuing || M.Sc Nursing",
      customLink: "",
    },
    {
      name: "Mrs. Chintal M Sukla",
      imgNo: "6174",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "Ph.D Pursuing || M.Sc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Rojlin Tigga",
      imgNo: "5874",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Sc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Mitali Solanki ",
      imgNo: "5881",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.Sc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Dharini Parmar",
      imgNo: "5879",
      designation: "Nursing Tutor",
      experience: 3,
      qualification: "M.Sc Nursing",
      customLink: "",
    },
    {
      name: "Mrs.Krina Ravi Patel",
      imgNo: "6173",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Zinkal Patel",
      imgNo: "5875",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Sonal Christie",
      imgNo: "5876",
      designation: "Nursing Tutor",
      experience: 7,
      qualification: "P.B.B.Sc Nursing",
      customLink: "",
    },
    {
      name: "MS.Roshni Zariwala",
      imgNo: "5877",
      designation: "Nursing Tutor",
      experience: 3,
      qualification: "B.Sc Nursing",
      customLink: "",
    },
    {
      name: "Rathva Netal Vinodchandra",
      imgNo: "6747",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc Nursing ",
      customLink: "",
    },
    {
      name: "Iftekharahemed A. Kureshi",
      imgNo: "6748",
      designation: "Nursing Tutor",
      experience: 1,
      qualification: "PB.B.Sc Nursing ",
      customLink: "",
    },
    {
      name: "Jyotikaben Rameshbhai Bhoi",
      imgNo: "6749",
      designation: "Nursing Tutor",
      experience: 5,
      qualification: "B.Sc Nursing ",
      customLink: "",
    },
  ];

  const UG = [
    {
      title: "B.Sc. (Nursing)",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      duration: "4",
      fees: "1,00,000",
    },
    {
      title: "GNM",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      duration: "4",
      fees: "1,00,000",
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
        title={"Krishna School Of Nursing [KSN]"}
        des={
          "The Faculty of Engineering and Emerging Technology is in the forefront of higher technological education and basic & applied research. It has established itself as a premier center for research and industrial consultancy in the country. There are 6 academic departments equipped with 58 educational and research laboratories performing diverse functions learning in harmony. The presence of internationally recognized faculty backed by exemplary technical & supporting staff and an effective administration have all contributed to the achievements of alumni successfully established all over the world."
        }
      />
      <DirectorsMessage
        dirImg={
          "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
        }
        dirEmail={"directoremail@gmail.com"}
        dirName={""}
        dirOf={"Krishna School Of Nursing"}
        dirOfShort={"[KSN]"}
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
        <Grid container spacing={2}>
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
                facultyName={"KSN"}
                imgNo={imgNo}
                MainLink={
                  "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707798911/KPGU/Faculty%20Images/"
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

export default KrishnaSchoolOfNursing;
