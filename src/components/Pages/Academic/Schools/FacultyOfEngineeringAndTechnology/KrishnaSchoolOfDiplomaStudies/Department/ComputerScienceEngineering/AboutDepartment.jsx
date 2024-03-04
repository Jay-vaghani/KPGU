import { Box } from "@mui/material";
import React from "react";
import Paragraph from "../../../../../../../Common/Paragraph";

function AboutDepartment() {
  return (
    <Box borderRadius={4}>
      <h2 className="text-uppercase fw-bold color-secondary mb-4">
        About Department
      </h2>
      <Paragraph
        content={[
          "The Department of Computer Science and Engineering is the oldest and fastest growing department since 2004. In the global market, India’s Software Engineers have created remarkable marks in Software industries and gained super trust and revenue for the nation. The Department of Computer Science and Engineering has been the most lucrative and competitive course to study from the beginning because of this global demand.",
          "It is really an excellent field to have opportunities both in software companies and higher studies. As computing is extensively applied to almost every walk of life, it has created massive well paid jobs for Computer Science & Engineering students. At the same time more demand and application kept its research funding alive, many students attracted to opt for higher studies. Department of Computer Science & Engineering comprises centrally air-conditioned laboratories equipped with high configuration computers and servers backed by licensed software, high speed internet connectivity through fiber optics on leased line and Wi-Fi",
          "Excellent academic record with Gold Medals and University Ranks consistently secured every year by students under the guidance of well qualified, competent and devoted faculty members. Strong collaboration with industries and MOU signed with many leading industries. Heavy emphasis is given on skill development of students and faculty members by inviting industry experts to deliver expert talks, by organizing competitions and workshops. The Department has three major walkthroughs: to create knowledge, to propagate knowledge and to offer service to society",
        ]}
      />

      <h2 className="text-uppercase fw-bold color-secondary mb-4">
        UNIQUE FEATURES
      </h2>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">One of the oldest and fastest growing department since 2004</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Biggest pillar of the Department is highly qualified, experienced and devoted faculties having expertise in AI and Machine Learning, Internet of Things, Computer Vision, Computer Networks, Cyber Security, Data Analytics, Cloud Computing etc.</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Outstanding track record of academic accomplishments in the form of Gold Medalist and Toppers from University.</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">More than Rs. 4,50,000+ Innovative Projects Winning Grants has been received under the Student Start-up & Innovation Policy (SSIP)/ Student Open Innovation Challenge (SOIC) of the Government of Gujarat.</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Winners of Dewang Mehta Topper’s Award</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Fostering Creativity , Innovation, Research and Start-ups</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Strong collaboration with leading Industries and MOUs</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Emphasis on skill development · Guidance from Corporate Experts</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Industrial Exposure through Industry Institute Interaction, Industrial Internship and Industrial Visits</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Exceptional Track Record of placements in reputed companies like TCS, PMC, Cognizant, L&T InfoTech, Infostretch, Thomson Reuters etc.</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Library facilities with more than 10,000 online and offline books, CDs, magazines
      </h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Opportunity for Global Exposure with International Collaborations with Carleton University- Canada, UCAM- Spain, UNA- US, NSU-Florida</h5>
    </Box>
  );
}

export default AboutDepartment;
