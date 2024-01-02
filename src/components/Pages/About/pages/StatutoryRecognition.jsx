import { Box, Typography, Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { GavelRounded } from "@mui/icons-material";

function StatutoryRecognition() {
  const { maxWidth } = useContext(AppContext);

  return (
    <>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">
            Government of Gujarat
          </h3>
          <Box pl={2}>
            <h4>
              Drs. Kiran and Pallavi Patel Global University is established as
              Self-funded Private University under the provisions of
            </h4>
            <Typography
              variant="h6"
              fontWeight={600}
              color={"secondary"}
              display={"flex"}
            >
              <Box pr={2}>
                <GavelRounded color="inherit" />
              </Box>
              <Box>Gujarat Private University Act 2009</Box>
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
                amended Gujarat Private Universities (Amendment) Act, 2021
                (Gujarat Act 15 of 2021) dated 22nd May, 2021 and further
                declared so by the Department of Education
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
                Govt. of Gujarat vide its Notification No: GH /SH /14/ EPU/
                2020/10012020/KH_1 dated 2nd June, 2021.
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">UGC</h3>
          <Box pl={2}>
            <h4>
              Drs. Kiran & Pallavi Patel Global University (KPGU), Krishna Edu
              Campus, Vadodara-Mumbai NH#8, Varnama, Vadodara, Gujarat is
              established by the Gujarat State Act, the name of the University
              has been included in the list of Universities established as per
            </h4>
            <Typography
              variant="h6"
              fontWeight={600}
              color={"secondary"}
              display={"flex"}
            >
              <Box pr={2}>
                <GavelRounded color="inherit" />
              </Box>
              <Box>Section 2(f) of UGC Act, 1956.</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">AICTE</h3>
          <Box pl={2}>
            <h4>
              The four-year B. Tech and Two-year M. tech Program of Krishna
              School for Emerging Technologies & Applied Research of Drs. Kiran
              and Pallavi Patel Global University is recognized by AICTE
            </h4>
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
                Under F.No. Central/1-7007838636/2020/EOA dated 15-06-2020.
              </Box>
            </Typography>
          </Box>
          <Box pl={2} mt={4}>
            <h4>
              The four-year Bachelor of Pharmacy (B. Pharm) and two-year Master
              of Pharmacy (M. Pharm.) Program at Krishna School of
              Pharmaceutical sciences and research, Drs. Kiran and Pallavi Patel
              Global University, Varnama, Vadodara is recognized by AICTE,
            </h4>
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
                Under F. No. Central/1-7004003160/2020/EOA dated 30-04-2020.
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">PCI</h3>
          <Box pl={2}>
            <h4>
              The four-year Bachelor of Pharmacy (B. Pharm) and two-year Master
              of Pharmacy (M. Pharm.) Program at Krishna School of
              Pharmaceutical sciences and research, Drs. Kiran and Pallavi Patel
              Global University, Varnama, Vadodara is approved by Pharmacy
              Council of India (PCI)
            </h4>
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
                {" "}
                letter number 109 CC Item No. GJ-59/2020-2021 IR (March, 2020).
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">GSCPT</h3>
          <Box pl={2}>
            <h4>
              The four and half year Bachelor of Physiotherapy (BPT) and
              two-year Master of Physiotherapy (MPT) of Krishna School for
              Physiotherapy & Rehabilitation, Drs. Kiran and Pallavi Patel
              Global University, Varnama, Vadodara is approved by Gujarat State
              Council for Physiotherapy, Gujarat state
            </h4>
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
                Letter number – GPC-INST-SF/02 and GPC-INST-SF/MPT/77 (MPT)
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">GNC</h3>
          <Box pl={2}>
            <h4>
              The three-year Bachelor of Science (B. Sc) in nursing, at Krishna
              School of Nursing at Drs. Kiran and Pallavi Patel Global
              University, Varnama, Vadodara is recognized by The Gujarat Nursing
              Council (GNC)
            </h4>
            <Typography
              variant="h6"
              fontWeight={600}
              color={"secondary"}
              display={"flex"}
            >
              <Box pr={2}>
                <GavelRounded color="inherit" />
              </Box>
              <Box>Letter number Inst/10337-39 dated on 19/11/2020</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">AYUSH</h3>
          <Box pl={2}>
            <h4>
              The Bachelor of Ayurvedic Medicine and Surgery (BAMS) at Krishna
              Ayurved Medical School, Drs. Kiran and Pallavi Patel Global
              University, Varnama, Vadodara is recognized by AYUSH
            </h4>
            <Typography
              variant="h6"
              fontWeight={600}
              color={"secondary"}
              display={"flex"}
            >
              <Box pr={2}>
                <GavelRounded color="inherit" />
              </Box>
              <Box>Letter number L.14014/1/2020-EP (1)</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth={maxWidth}
        className={"smooth-shadow"}
        mx={"auto"}
        p={"3%"}
        bgcolor={"#fff"}
        mt={5}
        borderRadius={4}
      >
        <Box>
          <h3 className=" fw-semibold color-secondary mb-4">PhD programs</h3>
          <Box pl={2}>
            <h4>
              The programs at Krishna School for Emerging Technologies & Applied
              Research and Krishna School of Pharmaceutical Sciences and
              Research, the constituent schools of Drs Kiran & Pallavi Patel
              Global University are done under the provisions of UGC (Minimum
              Standards and Procedure for Award of M.PHIL./Ph D Degrees)
              Regulations, 2016 as amended from time to time.
            </h4>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default StatutoryRecognition;
