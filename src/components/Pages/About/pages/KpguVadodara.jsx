import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { GavelRounded } from "@mui/icons-material";
import Paragraph from "../../../Common/Paragraph";
import Quote from "../../../Common/Quote";
import EduCard from "../../../Common/EduCard";

function KpguVadodara() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h3 className=" fw-semibold mb-4">
        DRS KIRAN & PALLAVI PATEL GLOBAL UNIVERSITY [KPGU], VADODARA
      </h3>
      <h3 className=" fw-semibold mb-4">
        A State Private University established under the provisions of
      </h3>
      <Typography
        variant="h6"
        fontWeight={600}
        color={"secondary"}
        display={"flex"}
      >
        <Box pr={2}>
          <GavelRounded color="inherit" />
        </Box>
        <Box>Gujarat Private Universities Act 2009,</Box>
      </Typography>
      <Typography
        variant="h6"
        fontWeight={600}
        color={"secondary"}
        display={"flex"}
      >
        <Box pr={2}>
          <GavelRounded color="inherit" />
        </Box>
        <Box>
          Gujarat Private Universities (Amendment) Act 2009 (Act No. 15 of 2021)
          & Govt. of Gujarat,
        </Box>
      </Typography>
      <Typography
        variant="h6"
        fontWeight={600}
        color={"secondary"}
        display={"flex"}
      >
        <Box pr={2}>
          <GavelRounded color="inherit" />
        </Box>
        <Box>
          Education Department Notification No: GH/SH/14/EPU/2020/ 10012020/KH-1
          dated 2nd June, 2021.
        </Box>
      </Typography>

      <Box mt={5}>
        <Paragraph
          content={
            "KPGU seeks to be an “University of Global Eminence. Towards this the university has adopted KPGU-Vision-2040 document. That great transition from affiliating Institutions to a University by itself would not have been possible without the contribution of each one of the members of the “Team Edu Campus” under the flagship of Shree Krishna Educational & Charitable Trust. With consistent performance and collective efforts several milestones have been achieved in the past as affiliating institutions. The Pursuit for Newer Horizons has led to the achievement of yet another path breaking milestone and the establishment of KPGU shall be marking the opening of the “Gateway to Global Excellence”. This transformation shall bring forth with it, the number of greater opportunities, that will lead the university to next level of performance and ensure that we progressively grow as envisaged in the KPGU-Vision-2040 document. To realize the bigger pursuit, to make it functionally effective, to gain regional, national and international recognition the organization is geared up for the greater commitment, collective performance, concerted efforts and be ever in consistent pursuit for Quality & Excellence, may it be in academics, research, collaborations, outreach activities, skill enforcement and employability drives that encompass"
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
          increasing the Constituent Institutes by 57%; Centres of Excellence by
          64%; Intake by 60% of which 20% shall be International Students;
          increasing Infrastructure by over 18 Lac Sq. Ft.; UG programs by 78%
          and PG by 71%; Research output by 78%.
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
        <h2 className="text-center fw-semibold">VISION</h2>
        <Quote
          quote={
            "The Drs. Kiran & Pallavi Patel Global University seeks to be an Organization of Universal Eminence Serving the Cause of Higher Education, Health Care and Service to the Mankind, Ever in Pursuit of Newer Horizons, ingrained with Spirit of Continual Progress of Stakeholders."
          }
        />
      </Box>

      {/* ======================================== University Faculties ======================================== */}

      <Box mt={5}>
        <h2 className="fw-semibold mb-4">University Faculties</h2>
        <Grid container spacing={3}>
          <EduCard
            name={"Faculty of Engineering & Technology [FE&T]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Faculty for Medicine & Healthcare [FM&H]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Faculty of Science [FOS]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Faculty of Commerce and Management [FC&M]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Faculty of Humanities & Policy Studies [FH&PS]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
        </Grid>
      </Box>

      {/* ======================================== Constituent Institutions ======================================== */}

      <Box mt={5}>
        <h2 className="fw-semibold mb-4">Constituent Institutions</h2>
        <Grid container spacing={3}>
          <EduCard
            name={
              "Krishna School of Emerging Technology & Applied Research [KSET]"
            }
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Diploma Studies [KSDS]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Pharmacy & Research [KSP]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Physiotherapy & Rehabilitation [KSPR]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Nursing [KSN]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna Ayurved Medical College [KAMC]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Science [KSS]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Business Management [KSBM]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Commerce [KSC]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna School of Arts & Humanities [KSAH]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
        </Grid>
      </Box>

      {/* ======================================== Centers of Excellence ======================================== */}

      <Box mt={5}>
        <h2 className="fw-semibold mb-4">University Faculties</h2>
        <Grid container spacing={3}>
          <EduCard
            name={"Krishna Centre of Innovation & Research [KCIR]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={
              "Krishna Center of Institutional Social Responsibility [KCISR]"
            }
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna Centre of International Affairs [KCIA]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna Centre of Career Advancement & Corporate Training [KCCACT]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna Centre of Startups & Entrepreneurship [KCSE]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
          <EduCard
            name={"Krishna Centre of Training in Disaster Management [KCTDM]"}
            img={
              "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"
            }
            des={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel expedita reprehenderit, quaerat dolorem ea omnis rem excepturi nam provident, voluptatibus quos, beatae animi nostrum"
            }
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default KpguVadodara;
