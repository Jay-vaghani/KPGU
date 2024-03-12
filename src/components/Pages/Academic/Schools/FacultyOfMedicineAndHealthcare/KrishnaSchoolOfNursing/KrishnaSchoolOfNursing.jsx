import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Button, Grid, Tab } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";
import { useNavigate } from "react-router-dom";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";

function KrishnaSchoolOfNursing() {
  const { maxWidth, innerWidth } = useContext(AppContext);
  const navigate = useNavigate();

  const [programValue, programValueSetValue] = useState("1");

  const programHandleChange = (event, newValue) => {
    programValueSetValue(newValue);
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const Faculties = [
    {
      name: "Prof. Nimesh D. Chokshi",
      imgNo: "8777",
      designation: "Director & Professor",
      experience: 36,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Mrs. Yaiphakonbi Contractor",
      imgNo: "0891",
      designation: "Associate Professor",
      experience: 13,
      qualification: "M.Sc.(Nursing)",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235056/KPGU/Faculty%20Images/KSN/0891.webp",
    },
    {
      name: "Mrs. Priyanka Aritra Dey",
      imgNo: "5873",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Mrs. Chintal Purohit",
      imgNo: "6174",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Mrs. Rojlin Tigga",
      imgNo: "5874",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Ms.Mitali Solanki",
      imgNo: "5881",
      designation: "Assistant Professor",
      experience: 6,
      qualification: "M.Sc (Nursing)",
      customLink: "",
    },
    {
      name: "Ms.Rehmat Dosani",
      imgNo: "1954",
      designation: "Assistant Professor",
      experience: 4,
      qualification: "M.Sc (Nursing)",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710236191/KPGU/Faculty%20Images/KSN/1954.webp",
    },
    {
      name: "Ms.Dharini Parmar",
      imgNo: "5879",
      designation: "Nursing Tutor",
      experience: 4,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Ms.Krina Patel",
      imgNo: "6173",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Ms.Zinkal Patel",
      imgNo: "5875",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Ms.Netal Vinodchnadra Rathava",
      imgNo: "6747",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc.(Nursing)",
      customLink: "",
    },
    {
      name: "Ms.Bhoomika DharmendraSinh Rathod",
      imgNo: "1953",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc.(Nursing)",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235055/KPGU/Faculty%20Images/KSN/1953.webp",
    },
    {
      name: "Ms.Nidhi Khade",
      imgNo: "0887",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc.(Nursing)",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235055/KPGU/Faculty%20Images/KSN/0887.webp",
    },
    {
      name: "Ms.Shilpa Rathwa",
      imgNo: "0892",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "M.Sc.(Nursing)",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235056/KPGU/Faculty%20Images/KSN/0892.webp",
    },
    {
      name: "Ms.Jyotika Bhoi",
      imgNo: "6749",
      designation: "Nursing Tutor",
      experience: 5,
      qualification: "B.Sc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Ruchi Pancholi prakashchandra",
      imgNo: "0885",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "B.Sc Nursing",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235055/KPGU/Faculty%20Images/KSN/0885.webp",
    },
    {
      name: "Ms.Roshni Zariwala",
      imgNo: "5877",
      designation: "Nursing Tutor",
      experience: 2,
      qualification: "B.Sc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Sonal Christie",
      imgNo: "5876",
      designation: "Nursing Tutor",
      experience: 6,
      qualification: "P.B.BSc Nursing",
      customLink: "",
    },
    {
      name: "Ms.Shrushti Chauhan",
      imgNo: "0886",
      designation: "Nursing Tutor",
      experience: 1,
      qualification: "B.Sc Nursing",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235055/KPGU/Faculty%20Images/KSN/0886.webp",
    },
    {
      name: "Ms.Ruchita Parmar",
      imgNo: "0888",
      designation: "Nursing Tutor",
      experience: 1,
      qualification: "B.Sc Nursing",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235055/KPGU/Faculty%20Images/KSN/0888.webp",
    },
    {
      name: "Mr.Stavan Parmar",
      imgNo: "1031",
      designation: "Nursing Tutor",
      experience: 1,
      qualification: "B.Sc Nursing",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235055/KPGU/Faculty%20Images/KSN/1031.webp",
    },
    {
      name: "Ms.Grishma Shah",
      imgNo: "0893",
      designation: "Nursing Tutor",
      experience: 1,
      qualification: "B.Sc Nursing",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710235056/KPGU/Faculty%20Images/KSN/0893.webp",
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
      duration: "3",
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

  // ============== Components ==============


  return (
    <>
      <TabContext value={value}>
        <Box
          className="smooth-shadow"
          bgcolor={"#fff"}
          p={2}
          borderRadius={4}
          mt={7}
          position={"sticky"}
          top={0}
          maxWidth={maxWidth}
          mx={"auto"}
          zIndex={99999999}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation={`horizontal`}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
          >
            <Tab
              className="align-items-start fw-bold text-start "
              label="Message From Director"
              value="1"
              href="#director-message"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="vision"
              value="2"
              href="#vision"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="mission"
              value="3"
              href="#mission"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="Faculty"
              value="4"
              href="#faculty"
            />
            <Tab
              className="align-items-start fw-bold text-start "
              label="Programs"
              value="5"
              href="#program"
            />

            <Tab
              className="align-items-start fw-bold text-start "
              label="Announcements"
              value="6"
              href="#announcements"
            />
          </TabList>
        </Box>
      </TabContext>

      <div style={{ padding: "80px 0 0 0" }} id="director-message">
        <Box
          maxWidth={maxWidth}
          mx={"auto"}
          p={"3%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
        >
          <SchoolWelcomeSection
            title={"Krishna School Of Nursing [KSN]"}

          />
          <DirectorsMessage
            dirImg={
              "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709632190/KPGU/Faculty%20Images/KSN/dir-img.webp"
            }
            dirEmail={"directoremail@gmail.com"}
            dirName={"Prof. Nimesh Chokshi"}
            dirOf={"Krishna School Of Nursing"}
            dirOfShort={"[KSN]"}
            dirMessage={[
              "Krishna School of Nursing, abbreviated as KSN is a part of KPGU university, providing education and training to become a fully qualified nurse. KPGU University, Vadodara is an autonomous degree-awarding body responsible for the standard of the awards and qualifications granted in its name; and the quality of the courses that lead to those awards and qualifications. To meet the standard of university, KSN strictly follows the rule of Indian Nursing Council, which is a national statutory body with powers to regulate and maintain uniform standards of nursing education all over the nation.",
              "Presently KSN runs B.Sc. Nursing and GNM Nursing program, which prepares a student to become a registered nurse qualified to practice in a variety of settings in either public/ government or private healthcare settings. ",
              "In KSN, Students are provided with opportunities to learn a whole range of nursing skills in addition to acquiring knowledge related to nursing practice. This is achieved through learning in skill lab/simulated labs and clinical environment. Simulation is integrated throughout the curriculum wherever feasible to enable them to develop competencies before entry into the real field of nursing practice.",
              "The curriculum embraces competency-based approach throughout the program integrating mastery learning and self-directed learning. Through the educational process the students assimilate and synthesize knowledge, cultivate critical thinking skills and develop care strategies. Competencies that reflect practice standards of Indian Nursing Council (INC) address the areas of cultural diversity, communication technology, teamwork and collaboration, safety, quality, therapeutic interventions and evidence- based practice. They are prepared to provide safe and competent care to patients across life span and influence patient outcomes.",
              "KSN prepares nurses for generalist nursing practice. and assures knowledge acquisition related to wellness, health promotion, illness, disease management and care of the dying is core to nursing practice. Mastery of competencies is the main focus."

            ]}
          />
          <Quote quote={"Nursing is the art and science of caring, healing, treating, curing and educating patients of all ages in diverse health care environments"} />
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="vision">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"3%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Vision</h2>
          <Quote
            quote={
              "To contribute in effective global health care by leadership in pharmacy education, advancing research and merging entrepreneurial spirit with compassion."
            }
            right={true}
          />
        </Box>
      </div>
      <div style={{ padding: "80px 0 0 0" }} id="mission">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"3%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Mission</h2>
          <Quote
            quote={
              "To prepare pharmacists with strong scientific foundation fused with critical thinking, problem solving capacity, leadership & entrepreneurship skills in community and the profession through global collaboration leading to enhancement of health and quality of life in the society."
            }
            right={true}
          />
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="faculty">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"3%"}
          maxWidth={maxWidth}
          mx={"auto"}
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
                  facultyName={"KSN"}
                  imgNo={imgNo}
                  MainLink={
                    "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707807610/KPGU/Faculty%20Images/"
                  }
                  customLink={customLink}
                />
              )
            )}
          </Grid>
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="program">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"3%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <TabContext value={programValue}>
            <TabList
              textColor="secondary"
              indicatorColor="secondary"
              variant="scrollable"
              onChange={programHandleChange}
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
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="announcements">
        <Box
          p={"3%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          maxWidth={maxWidth}
          mx={"auto"}
        >
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
      </div>
    </>
  );
}

export default KrishnaSchoolOfNursing;
















