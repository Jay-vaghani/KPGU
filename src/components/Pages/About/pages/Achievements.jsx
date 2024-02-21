import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Paragraph from "../../../Common/Paragraph";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import EduCard from "../../../Common/EduCard";

function Achievements() {
  const { maxWidth } = useContext(AppContext);

  const Institutions = [
    {
      title: "Krishna School Of Emerging Technology And Applied Research",
      link: "/academics/krishna-school-of-emerging-technology-and-applied-research",
    },
    {
      title: "Krishna School Of Physiotherapy And Rehabilitation",
      link: "/academics/krishna-school-of-physiotherapy-and-rehabilitation",
    },
    {
      title: "Krishna School Of Pharmacy And Research",
      link: "/academics/krishna-school-of-pharmacy-and-research",
    },
    {
      title:
        "Krishna Ayurved Medical College with attached Matrushri Davalba Ayurved Hospital",
      link: "/academics/krishna-ayurved-medical-college",
    },
    {
      title: "Krishna Nursing College",
      link: "/academics/krishna-school-of-nursing",
    },
    {
      title: "Krishna Science College",
      link: "/academics/krishna-school-of-sciences",
    },
  ];

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h4 className=" fw-semibold color-secondary">KPGU'S SPONSORING</h4>
      <h3 className="display-4 fw-semibold mb-4">SIGNIFICANT ACHIEVEMENTS</h3>
      <Paragraph
        content={[
          "The Krishna Edu Campus, established by Shree Krishna Educational and Charitable Trust (SKECT), today, stands testimony as the significant hub for educational excellence, consistently in pursuit of newer horizon. Since, its inception during the year 2004, the institutions run by it have been providing equitable professional education offering programs, the most sought-after by meritorious students in Engineering, Pharmacy, Nursing, Physiotherapy, Ayurveda and Pure Science, both at UG & PG level in an environment conducive for academic and professional growth. The significant milestones include",
        ]}
      />

      <ol>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Established Shree Krishna Educational & Charitable Trust in 2000
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Established Krishna Edu Campus built on a sprawling 26 Acres of green
          campus with landscapes,gardens & serene environs.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Provided institutions with 8.42 Lacs Sq.Mt. of the State-of-the-Art
          Infrastructure for Academic, and Research & Skills Building Functions.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Established following Six Professional Institutions.
        </li>
        <Grid container my={5} spacing={4}>
          {Institutions.map(({ des, img, title, link }, index) => (
            <EduCard name={title} des={des} img={img} key={index} link={link} />
          ))}
        </Grid>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          These six institutions have been offering 6 UG programs that include
          Bachelor of Engineering (6 branches), B Pharm, BPT, BAMS, BSc
          (Nursing), BSc (Pure Sciences) with over all intake of 1035 students
          and Offering 3 PG Programs that include Master of Engineering (2
          branches), M Pharm (4 branches) and MPT (3 branches) with overall
          intake of 135 students.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Highly committed, motivated, highly qualified, well-experienced,
          research driven, employability-oriented faculty and equally competent
          non-teaching staff nurtured.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Comprehensive Research Policy is implemented to motivate faculty and
          students to conduct quality & high impact research, that has led to
          conduct of 101 Research Projects with a total Funding of Rs 120 Lacs
          from AICTE, SSIP & SOIC & GUJCOST.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Total of 331 scientific papers published in reputed, highly acclaimed
          Journals with high impact factors.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Institute Innovation Cell (IIC) under MHRD, Biotechnology Incubator
          under Gujarat Biotechnology Policy and Entrepreneurship Development
          Cell in Collaboration with National Entrepreneurship Network
          established and Engineering & Pharmacy colleges recognised as Nodal
          Institute under Assistance to Start-Up/ Innovation.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Centre for Entrepreneurship, Technology Incubation & Business
          Acceleration (CETIBA)-District Training Centre by SPIPA.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Entered into MOU with 6 Industrial Associations, 44 Industries and 15
          students’ start-ups incubated.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Towards Collaborations, the institutions are encouraged to enter into
          active collaborations with Regional, National International
          organizations, Universities and Industries to facilitate Student and
          Staff Mobility, high Impact Collaborative Research, establish
          Collaborative Joint-Programs and to provide platform for knowledge
          sharing, thereby enriching skills, knowledge and attitudes of our
          stakeholders to face the ever-changing paradigms in the emerging
          educational field. Apart from number of regional & national
          collaborations, the institutes have fostered active collaboration with
          Carleton Global Academy-Carleton University, Canada, University of
          North Alabama (UNA), USA, Catholic University of Murcia (UCAM), Spain
          and North Southern Eastern University (NSU), Florida.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Made available, the Freeships & scholarships worth Rs 5 Crores for
          deserving, meritorious and economically weak students.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Library and Information Centre with the built-up area of 20000 Sq.
          Ft., accommodating 1000 students at a time consists of rich collection
          of Text books, Reference Books, e-Resources, national & international
          journals, periodicals and newspapers, rare books with total library
          resource holding of 59314 with cumulative expenditure to the tune of
          over Rupees Two Crores.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Library is made fully automated with Library Management System with
          RFID (Radio Frequency Identification System) Technology with SOUL2.0
          (Software made by INFLIBNET) Centre.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Computer centre is equipped with 52 Computers with dedicated leased
          Wi-Fi connection.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Campus has been provided with ICT enabled Smart Class rooms internet &
          campus wide Wi-Fi, Computer Laboratory, Gymnasium, Transport facility,
          Auditorium, Sports ground etc., Student Community Learning Club,
          Shopping Complex, Banks & ATM, Parking, Security posts, Student cell
          such as Anti-ragging Cell, Anti-Sexual harassment Cell,
          Anti-discrimination cell, Career and Placement Cell and Community
          Learning Club.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Our institutions have been producing good results and our students
          have consistently been getting academic Gold Medals from their
          respective universities. Our results range between 70% to 90% in UG
          programs and 90% to 100% in PG programs and our students have, till
          date received 18 Gold Medals.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Career Counseling and Placements cell is industry driven and our
          placement has been on an average 80% students who register for
          placement drives.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Awards; our institutions and student have been receiving recognition
          awards signifying their involvement and strength in those areas. So
          far 40 Recognition Awards haven received in recognition of leadership,
          distinguished services, outstanding achievements, NSS, blood donation,
          Thalassemia drive, best student award, sports award (University Blue)
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Hostels are available for both Boys (155 rooms) and Girls hostel (56
          rooms) with all modern amnesties including AC facilities. Hygienic,
          modern mess & Cafeteria cater to the varied taste of the student
          community. Also, Tea-post & Nescafe joints are available near sports
          and recreational zone.
        </li>
      </ol>
    </Box>
  );
}

export default Achievements;
