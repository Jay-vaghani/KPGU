import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { CheckCircleRounded } from "@mui/icons-material";
import Paragraph from "../../../Common/Paragraph";
import Quote from "../../../Common/Quote";

function VisionMission() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const Missions = [
    {
      des: "Globalization through creation, acquisition, preservation and exchange of knowledge.",
    },
    {
      des: "To provide collaborative environment for exchange of ideas, virtues & values. 10 To develop good human being possessing scientific temper, compassion, empathy, courage and creative imagination.",
    },
    {
      des: "To nurture innovative and socially cultured global citizen.",
    },
    {
      des: "To develop good human being possessing scientific temper, compassion, empathy, courage and creative imagination.",
    },
    {
      des: "To foster multifaceted excellence in education and research outreach.",
    },
  ];

  return (
    <>
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
            Establishment of Nine University Faculty, 13 Constituent
            Institutions and six Centres of excellence.
          </li>
          <li className="fs-5 mb-3 text-capital fw-semibold ">
            Making significant impact over a period of ten years in terms of
            increasing the Constituent Institutes by 57% Centres of Excellence
            by 64% Intake by 60% of which 20% shall be International Students;
            increasing Infrastructure by over 18 Lac Sq. Ft. UG programs by 78%
            and PG by 71% Research output by 78%.
          </li>
          <li className="fs-5 mb-3 text-capital fw-semibold ">
            Deliver the contemporary and internationalized higher education that
            is cured with Skill, Interdisciplinary, Industry driven, curriculum
            with Global appeal, Fostered with Innovative, Interdisciplinary &
            High Impact Collaborative Research, Social Inclusiveness with
            respect to National Development Goals through its skills driven,
            employability-oriented, highly qualified and experienced faculty &
            equally competent non-teaching staff.
          </li>
        </ol>
      </Box>
      <Grid
        container
        width={maxWidth}
        mx={"auto"}
        p={"3%"}
        className="smooth-shadow rounded-4"
        bgcolor={"#fff"}
      >
        <Grid
          item
          order={{
            xs: 1,
            md: 0,
          }}
          xs={12}
          md={6}
          bgcolor={"red"}
          color={"#000"}
          zIndex={99}
          overflow={"clip"}
          borderRadius={"0px 50px 0px 50px"}
        >
          <Box bgcolor={"primary.main"} p={"5%"} height={"100%"} display={"flex"} justifyContent={"center"} flexDirection={"column"} >
            <Typography
              variant="h2"
              className="journey-heading-2 text-white"
              fontWeight={500}
            >
              VISION
            </Typography>

            <Typography
              fontWeight={600}
              variant="body1"
              gutterBottom
              className="fs-5 text-white"
            >
              <Quote
                quote={
                  "The Drs. Kiran & Pallavi Patel Global University seeks to be an Organization of Universal Eminence Serving the Cause of Higher Education, Health Care and Service to the Mankind, Ever in Pursuit of Newer Horizons, ingrained with Spirit of Continual Progress of Stakeholders."
                }
                right={true}
                white={true}
              />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          order={{
            xs: 0,
            md: 1,
          }}
          xs={12}
          md={6}
          position={"relative"}
          zIndex={9}
          height={400}
          sx={{
            transform: {
              xs: "0%",
              md: "translateX(-9.5%)",
            },
            overflowX: {
              xs: "clip",
              md: "visible",
            },
          }}
        >
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703227665/KPGU/Banners/vision-banner.webp"
            alt="mission banner"
            width={"109.5%"}
            height={
              innerWidth < 1025
                ? innerWidth < 941
                  ? "123.5%"
                  : "117%"
                : "110.5%"
            }
            className="object-fit-cover"
          />
        </Grid>
        <Grid
          item
          order={{
            xs: 2,
            md: 2,
          }}
          xs={12}
          md={6}
          position={"relative"}
          zIndex={9}
        >
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703227665/KPGU/Banners/mission-banner.webp"
            alt="mission banner"
            className="object-fit-cover"
            style={{
              width: innerWidth < 901 ? "100%" : "109%",
              height: innerWidth < 901 ? "132%" : "108.5%",
              borderRadius: innerWidth < 901 ? "0" : "0 28% 0 0",
              transform: "translateY(-8%)",
            }}
          />
        </Grid>
        <Grid
          item
          order={{
            xs: 3,
            md: 3,
          }}
          xs={12}
          md={6}
          bgcolor={"secondary.main"}
          color={"#000"}
          borderRadius={"0px 50px 0px 50px"}
          zIndex={99}
        >
          <Box p={"7%"}>
            <Typography
              variant="h2"
              className="journey-heading-2 text-white"
              fontWeight={500}
              gutterBottom
            >
              MISSION
            </Typography>
            {Missions.map(({ des }, index) => (
              <Stack direction="row" alignItems={"start"} key={index}>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="fs-4 me-1 text-white"
                  fontWeight={600}
                >
                  {index + 1}.
                </Typography>
                <Typography
                  fontWeight={600}
                  variant="body1"
                  gutterBottom
                  className="fs-5 text-white"
                >
                  {des}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default VisionMission;
