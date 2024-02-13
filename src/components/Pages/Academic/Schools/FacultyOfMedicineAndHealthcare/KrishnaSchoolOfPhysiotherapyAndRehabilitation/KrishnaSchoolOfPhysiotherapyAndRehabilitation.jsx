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

function KrishnaSchoolOfPhysiotherapyAndRehabilitation() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Dr. Paras Bhura",
      imgNo: "6096",
      designation: "Associate Professor || Director",
      experience: 11,
      qualification: "Ph.D || MPT",
      customLink: "",
    },
    {
      name: "Dr. Camy Bhura,PT",
      imgNo: "5852",
      designation: "Associate Professor",
      experience: 11,
      qualification: "MPT || Ph.D",
      customLink: "",
    },
    {
      name: "Dr. Pragna Landge, PT",
      imgNo: "5864",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "MPT || Ph.D ",
      customLink: "",
    },
    {
      name: "Dr. Amitkumar Singh, PT",
      imgNo: "5856",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Priyanka Solanki, PT",
      imgNo: "5865",
      designation: "Assistant Professor",
      experience: 6,
      qualification: "MPT || Ph.D ",
      customLink: "",
    },
    {
      name: "Dr. Aastha Bodade, PT",
      imgNo: "5854",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Fatema Daruwala, PT",
      imgNo: "5859",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "MPT",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707806085/KPGU/Faculty%20Images/KSPR/5959.webp",
    },
    {
      name: "Dr. Ankita Shah, PT",
      imgNo: "5861",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "MPY\T",
      customLink: "",
    },
    {
      name: "Dr. Nikita Sonaiya, PT",
      imgNo: "5850",
      designation: "Assistant Professor",
      experience: 1,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Krupali Rajwadi, PT ",
      imgNo: "5870",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "MSW",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707806591/KPGU/Faculty%20Images/KSPR/5870.webp",
    },
    {
      name: "Krishna Trivedi",
      imgNo: "9872",
      designation: "Assistant Professor",
      experience: 1,
      qualification: "M. Physiotherapy",
      customLink: "",
    },
    {
      name: "Harsha Ramrakhiyani",
      imgNo: "9873",
      designation: "Assistant Professor",
      experience: 6,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Shreya Trivedi",
      imgNo: "9874",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "MPT",
      customLink: "",
    },
    {
      name: "Dr. Kinjal S Patel",
      imgNo: "9875",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "MPT || PHD Persuing",
      customLink: "",
    },
    {
      name: "Dr. Dharmesh Contractor, PT",
      imgNo: "5849",
      designation: "Clinical Physiotherapist",
      experience: 16,
      qualification: "BPT",
      customLink: "",
    },
    {
      name: "Dr. Pooja Bhavsar, PT",
      imgNo: "5863",
      designation: "Clinical Physiotherapist",
      experience: 2,
      qualification: "BPT",
      customLink: "",
    },
    {
      name: "Kamilmahdi Lafawala",
      imgNo: "0006",
      designation: "Clinical Physiotherapist",
      experience: 2,
      qualification: "BPT",
      customLink: "",
    },
  ];

  const UG = [
    {
      title: "B.P.T",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
  ];
  const PG = [
    {
      title: "M.P.T in Musculoskeletal & Sports",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "M.P.T in Neurological & Psychosomatic disorders ",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: "1,00,000",
      duration: "4",
    },
    {
      title: "M.P.T in Cardio - Respiratory & Intensive Care  ",
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
        title={"Krishna School Of Pharmacy And Research [KSPR]"}
        des={
          "The Faculty of Engineering and Emerging Technology is in the forefront of higher technological education and basic & applied research. It has established itself as a premier center for research and industrial consultancy in the country. There are 6 academic departments equipped with 58 educational and research laboratories performing diverse functions learning in harmony. The presence of internationally recognized faculty backed by exemplary technical & supporting staff and an effective administration have all contributed to the achievements of alumni successfully established all over the world."
        }
      />
      <DirectorsMessage
        dirImg={
          "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
        }
        dirEmail={"directoremail@gmail.com"}
        dirName={"Dr. Paras Bhura"}
        dirOf={"Krishna School Of Pharmacy And Research"}
        dirOfShort={"[KSPR]"}
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
                facultyName={"KSPR"}
                imgNo={imgNo}
                MainLink={
                  "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707806084/KPGU/Faculty%20Images/"
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
            {Announcements.map(
              ({ date, des, img, title, duration, fees }, index) => (
                <AnnouncementCard
                  date={date}
                  des={des}
                  img={img}
                  title={title}
                  key={index}
                />
              )
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default KrishnaSchoolOfPhysiotherapyAndRehabilitation;
