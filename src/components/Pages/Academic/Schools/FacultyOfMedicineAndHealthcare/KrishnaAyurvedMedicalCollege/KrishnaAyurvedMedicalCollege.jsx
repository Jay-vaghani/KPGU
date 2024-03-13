import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Box, Button, Grid, Tab, Stack } from "@mui/material";
import SchoolWelcomeSection from "../../../../../Common/SchoolWelcomeSection";
import DirectorsMessage from "../../../../../Common/DirectorsMessage";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../../../Common/ProgramCard";
import AnnouncementCard from "../../../../../Common/AnnouncementCard";
import { useNavigate } from "react-router-dom";
import FacultyStaff from "../../../../../Common/FacultyStaff";
import Quote from "../../../../../Common/Quote";
import { DescriptionRounded, KeyboardDoubleArrowRightRounded } from "@mui/icons-material";

function KrishnaAyurvedMedicalCollege() {
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
      name: "Dr. Malhari Kamlakar Sirdeshpande",
      designation: "Director/Principal & Professor in Dravyaguna",
      experience: 23,
      imgNo: "6168",
      qualification: "BAMS || MD",
      customLink: "",
    },
    {
      name: "Dr. Syama Maniyankutty",
      designation: "Assistant Professor",
      experience: 3,
      imgNo: "5922",
      qualification: "BAMS || MD",
      customLink: "",
    },
    {
      name: "Dr. Jignesha charel",
      designation: "Assistant Professor",
      experience: 4,
      imgNo: "6172",
      qualification: "BAMS || MD [Ph.D Scholar] ",
      customLink: "",
    },
    {
      name: "Dr. Vijitha Vijayan",
      designation: "Assistant Professor",
      experience: 3,
      imgNo: "5925",
      qualification: "BAMS || MD",
      customLink: "",
    },
    {
      name: "Dr. Pravin Ramdas Firke",
      designation: "Associate Professor ",
      experience: 9,
      imgNo: "5930",
      qualification: "BAMS || MD",
      customLink: "",
    },
    {
      name: "Dr.Pravin Nivertti Takle",
      designation: "Assistant Professor",
      experience: 3,
      imgNo: "5929",
      qualification: "BAMS || MD [Ayurved Samhita & Siddhanta] ",
      customLink: "",
    },
    {
      name: "Dr. Daksha Kanaksinh Rathod",
      designation: "Associate Professor ",
      experience: 8,
      imgNo: "5919",
      qualification: "BAMS || MD[Panchakarma]",
      customLink: "",
    },
    {
      name: "Dr. Tredha Hitesh Vyas",
      designation: "Assistant Professor ",
      experience: 3,
      imgNo: "5921",
      qualification: "BAMS || MD",
      customLink: "",
    },
    {
      name: "Dr. Rabiya Shaikh",
      designation: "Assistant Professor ",
      experience: 5,
      imgNo: "5918",
      qualification: "BAMS || MS",
      customLink: "",
    },
    {
      name: "Dr. Khusboo Kumari Gupta",
      designation: "Assistant Professor ",
      experience: 3,
      imgNo: "5927",
      qualification: "BAMS || MD[Dravyaguna]",
      customLink: "",
    },
    {
      name: "Dr.Krishna Priya G",
      designation: "Assistant Professor",
      experience: 1,
      imgNo: "5923",
      qualification: "BAMS || MD[KAYACHIKITSA]",
      customLink: "",
    },
    {
      name: "Dr. Hardik Variya",
      designation: "Associate Professor",
      experience: "1",
      imgNo: "5920",
      qualification: "BAMS || M.S",
      customLink: "",
    },
    {
      name: "Dr. Jigisha Prajapati",
      designation: "Assistant Professor",
      experience: 3,
      imgNo: "5915",
      qualification: "BAMS || M.S",
      customLink: "",
    },
    {
      name: "Dr. Geethu Arumughan ",
      designation: "Assistant professor ",
      experience: 3,
      imgNo: "",
      qualification: "BAMS MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Hitesh Miyani ",
      designation: "Assistant professor ",
      experience: 5,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Rupali R. Bawa",
      designation: "Professor ",
      experience: 13,
      imgNo: "",
      qualification: "BAMS || MD || [Ph.D Scholar]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Nibin Sajan",
      designation: "Assistant professor ",
      experience: 3,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Anagha Narayanan",
      designation: "Assistant Professor",
      experience: 2,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Pawan Morya",
      designation: "Assistant professor in Kayachikitsa",
      experience: 2,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Pooja Ambarishbhai Jani",
      designation: "Assistant Professor",
      experience: 10,
      imgNo: "",
      qualification: "M.A || M.Phil || Ph.D || [Sanskrit] || GSET",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Ashwini Kumar Patil",
      designation: "Associate Professor ",
      experience: 10,
      imgNo: "",
      qualification: "BAMS || M.D || [Ayurved Samhita]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Samhita Jigeeshu Thaker",
      designation: "Associate Professor ",
      experience: 7,
      imgNo: "",
      qualification: "BAMS || M.S",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Jivan Prabhakar Hanwate ",
      designation: "Assistant Professor ",
      experience: 1,
      imgNo: "",
      qualification: "BAMS || MD || [Swasthavritta]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Mithun C K ",
      designation: "Associate professor ",
      experience: 6,
      imgNo: "",
      qualification: "BAMS || MD[KAYACHIKITSA]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Jivesh Kumar Mehta",
      designation: "Assistant professor",
      experience: 3,
      imgNo: "",
      qualification: "BAMS || MD[KAYACHIKITSA]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Shaheen Faruk Pinjari",
      designation: "Assistant professor",
      experience: 3,
      imgNo: "",
      qualification: "BAMS || MD[KAUMARBHRITYA]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Trupti Madhavrao Awagan",
      designation: "Assistant Professor ",
      experience: 3,
      imgNo: "",
      qualification: "BAMS || MS[PRASUTITANTRA STREEROG]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Mahesh Jadhavbhai Patel",
      designation: "Assistant professor ",
      experience: 5,
      imgNo: "",
      qualification: "BAMS || MD[KAUMARBHRITYA]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Shruti R. Joshi (Pathak)",
      designation: "Associate Professor",
      experience: 9,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Vinod Dhavale",
      designation: "Assistant Professor",
      experience: 2,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Darshan Suryawanshi",
      designation: "Assistant Professor",
      experience: 3,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Mahesh Pawar",
      designation: "Assistant Professor",
      experience: 1,
      imgNo: "",
      qualification: "BAMS || M.S",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Nitesh Shukla",
      designation: "Associate Professor",
      experience: 10,
      imgNo: "",
      qualification: "BAMS || MD",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Anurag Kshirsagar",
      designation: "Associate Professor",
      experience: 8,
      imgNo: "",
      qualification: "BAMS || M.S",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Dr. Kuldip Pawar",
      designation: "Assistant Professor",
      experience: 3,
      imgNo: "",
      qualification: "BAMS || M.S",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },


  ];


  const UG = [
    {
      title: "BAMS",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus quo nostrum eaque facilis. Nostrum enim neque sint quibusdam beatae.",
      link: "",
      pageLink: "",
      fees: [
        {
          quota: "Government Quota ",
          fees: "2,25000",
        },
        {
          quota: "Management Quota ",
          fees: "3,40,000",
        },
      ],
      duration: [
        {
          name: "Academic",
          time: "4 Years 6 Months ",
        },
        {
          name: "Internship",
          time: "1 Years",
        },
      ],
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
  const CustomComponent = ({ title, link, duration, eligibility, fees }) => (
    <Grid item xs={12} md={6}>
      <Box
        className="smooth-shadow-card h-100"
        p={2}
        borderRadius={4}
        position={"relative"}
      >
        <h4 className="fw-semibold">{title}</h4>

        <h5 className="color-secondary mb-0 fw-bold">Duration</h5>
        {duration.map(({ name, time }) => (
          <h6 className="fw-bold mb-0">
            <span className="color-secondary">{name}</span>:{" "}
            <span className="text-secondary fs-6">{time}</span>
          </h6>
        ))}

        <h5 className="color-secondary mb-0 fw-bold mt-2 ">Fees As Per (FRC)</h5>
        {fees.map(({ quota, fees }) => (
          <h6 className="fw-bold mb-0">
            <span className="color-secondary">{quota}</span>:{" "}
            <span className="text-secondary fs-6">{fees}</span>
          </h6>
        ))}

        <br />
        <br />
        <Stack
          direction={"row"}
          sx={{ position: "absolute", bottom: 16 }}
          spacing={1}
        >
          <Button
            href={link}
            variant="contained"
            color="secondary"
            // disableElevation
            endIcon={<DescriptionRounded />}
            sx={{ px: "12px" }}
          >
            download
          </Button>
          <Button
            href={link}
            variant="contained"
            color="secondary"
            // disableElevation
            endIcon={<KeyboardDoubleArrowRightRounded />}
            sx={{ px: "12px" }}
            onClick={() => navigate("/admission-inquiry")}
          >
            Apply
          </Button>
        </Stack>
      </Box>
    </Grid>
  );


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
          p={"5%"}
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
        >
          <SchoolWelcomeSection
            title={"Krishna Ayurved Medical College [KAMC]"}
          />
          <DirectorsMessage
            dirImg={
              "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709631583/KPGU/Faculty%20Images/KAMC/dir-img.webp"
            }
            dirEmail={"directoremail@gmail.com"}
            dirName={"Dr. Malhari K. Sirdeshpande"}
            dirOf={"Krishna Ayurved Medical College"}
            dirOfShort={"[KAMC]"}
            dirMessage={[
              "Krishna Ayurved Medical College established in the year of 2019, is a world class educational institute developed for top quality teaching and training in the field of Ayurved with the vision of the founder President Hon. Jagdishbhai Patel.",
              "This institute is one of the renouned colleges, managed by Shree Krishna educational and charitable trust, Vadodara.Krishna Ayurved Medical College & Davalba Ayurved Medical Hospital are well equipped with all teaching and training facilities for students. Academic excellence is our Moto and to achieve this, highly qualified teaching staff is working hard to carve out the future of the students.",
              "Apart from the academic activities, sports facilities, developed campus, world class infra structure in a nature friendly environment provide all opportunities of complete personality developments of students. Library having more than 8000 books, medicinal plant garden, Teaching Pharmacy, Teaching aids such as projectors, E- Library are some of the tools for high quality teaching and learning process.",
              "The clinical exposure is equally important for medical students. Davalba Ayurved Medical Hospital is an ideal example of social service with academic facility for students. We render completely free of cost treatment for patients helping particularly the less privileged section from rural area of Varnama and other villages in vicinity.  Students can easily get the practical clinical experiences from the well developed OPDS having up to 300 patients per day & 60 beded IPD of Matoshri  Davalba Ayurved Medical Hospital.  Full flagged Panchakarma unit, fully functional Operation Theater, Physiotherapy section, Advanced Pathology lab, X-ray unit and quality medicines make the hospital a unique Ayurved Treatment center with all modern facilities.",
              "We are well prepared to welcome our third academic batch in coming days. Over & above the norms of CCIM & Gujarat Ayurved University, the KAMC team is committed for shaping & polishing of our students nurturing them into the shining diamonds to offer the best medical services to the society, using the ancient treasure of Ayurved with modern scientific outlook."
            ]}
          />
          <Box p={1} className="smooth-shadow-card" width={"max-content"} borderRadius={2}>
            <h4>FOR MORE INFORMETION CLICK HERE</h4>
            <Button variant="contained" color="secondary" href="https://krishnaayurvedic.org/" >More info</Button>
          </Box>
        </Box>
      </div>

      <div style={{ padding: "80px 0 0 0" }} id="vision">
        <Box
          bgcolor={"#fff"}
          borderRadius={4}
          className="smooth-shadow"
          p={"5%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Vision</h2>
          <Quote
            quote={
              "To be a Globallyrecognized Centre forexcellence in Ayurvedandto statuette competent& efficient physicianin the society and excelin theHealthcare sector."
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
          p={"5%"}
          maxWidth={maxWidth}
          mx={"auto"}
        >
          <h2 className="fw-bold color-secondary fs-1">Mission</h2>
          <Quote
            quote={
              "To make a commitment to encouraging efficiency and high professional standards in teaching, healthcare, and research development, while also extending quality healthcare to nearby and needy society areas to achieve complete holistic development."
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
          p={"5%"}
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
                  facultyName={"KAMC"}
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
          p={"5%"}
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
                    <CustomComponent
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
          p={"5%"}
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

export default KrishnaAyurvedMedicalCollege;




















