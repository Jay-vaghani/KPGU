import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { Box } from "@mui/material";
import Paragraph from "../../../Common/Paragraph";
import Quote from "../../../Common/Quote";

function VisionMission() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h4 className="fw-semibold color-secondary">VISION & MISSION OF</h4>
      <h3 className="display-4 fw-semibold mb-4">
        Drs. Kiran & Pallavi Patel Global University
      </h3>

      <img
        src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703843541/KPGU/campus/KPGU-Gate.webp"
        alt="KPGU"
        className="img-fluid rounded-3"
      />
      <h4 className="fw-semibold color-secondary mt-4">
        Set to be Ever in Pursuit of Excellence...
      </h4>
      <Box my={5}>
        <Paragraph
          content={
            "KPGU seeks to be an “University of Global Eminence. Towards this the university has adopted KPGU-Vision-2040 document. That great transition from affiliating Institutions to a University by itself would not have been possible without the contribution of each one of the members of the “Team Edu Campus” under the flagship of Shree Krishna Educational & Charitable Trust. With consistent performance and collective efforts several milestones have been achieved in the past as affiliating institutions. The Pursuit for Newer Horizons has led to the achievement of yet another path breaking milestone and the establishment of KPGU shall be marking the opening of the “Gateway to Global Excellence”. This transformation shall bring forth with it, the number of greater opportunities, that will lead the university to next level of performance and ensure that we progressively grow as envisaged in the KPGU-Vision-2040 document. To realize the bigger pursuit, to make it functionally effective, to gain regional, national and international recognition the organization is geared up for the greater commitment, collective performance, concerted efforts and be ever in consistent pursuit for Quality & Excellence, may it be in academics, research, collaborations, outreach activities, skill enforcement and employability drives; that encompass;"
          }
        />
      </Box>
      <ol>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Establishment of Nine University Faculty, 13 Constituent Institutions
          and six Centres of excellence.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Making significant impact over a period of ten years in terms of
          increasing the Constituent Institutes by 57% Centres of Excellence by
          64% Intake by 60% of which 20% shall be International Students;
          increasing Infrastructure by over 18 Lac Sq. Ft. UG programs by 78%
          and PG by 71% Research output by 78%.
        </li>
        <li className="fs-5 mb-3 text-capital fw-semibold ">
          Deliver the contemporary and internationalized higher education that
          is cured with Skill, Interdisciplinary, Industry driven, curriculum
          with Global appeal, Fostered with Innovative, Interdisciplinary & High
          Impact Collaborative Research, Social Inclusiveness with respect to
          National Development Goals through its skills driven,
          employability-oriented, highly qualified and experienced faculty &
          equally competent non-teaching staff.
        </li>
      </ol>

      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={3}
        className="smooth-shadow"
        my={4}
      >
        <h2 className="text-center fw-semibold pt-2">VISION</h2>
        <Quote
          quote={
            "The Drs. Kiran & Pallavi Patel Global University seeks to be an Organization of Universal Eminence Serving the Cause of Higher Education, Health Care and Service to the Mankind, Ever in Pursuit of Newer Horizons, ingrained with Spirit of Continual Progress of Stakeholders."
          }
        />
      </Box>
    </Box>
  );
}

export default VisionMission;
