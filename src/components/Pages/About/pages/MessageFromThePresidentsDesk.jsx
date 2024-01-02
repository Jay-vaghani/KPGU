import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { Box, Grid, Typography } from "@mui/material";
import Paragraph from "../../../Common/Paragraph";

function MessageFromThePresidentsDesk() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      des: "It gives me immense happiness to be writing this note for all those who are aspiring to step in to the most vibrant & most sought-after education hub, the Krishna Edu Campus, that hosted six institutes under the different affiliating universities & that stands today, making transition to a universityby itself, as Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara. Our earnest desire for Newer Horizons has led to the achievement of path breaking milestone & the establishment of KPGU, Vadodara shall be marking the opening of the “Gateway to Global Excellence”. To realize the long-drawn aspirations, the University has adopted “KPGU Vision-2040” document that shall drive our strategic plans & guide student centric performance.",
    },
    {
      des: "I am happy to state here that KPGU, Vadodara has received the Patronage of Dr Kiran C Patel, an Indian-American Philanthropist & Cardiologist and a proponent of Indo-American initiatives from Tampa, Florida, USA. He has been striving to enhance the standards of higher education and Healthcare. Towards this, he has established number of centres of importance worldwide. The significant one are, Nova Southeastern University, University of South Florida, Centre for Global Solutions at US, Patel School, Pallavi Patel Medical College, USA & Centre for Sustainable Development at IIT Gandhinagar. He has contributed over $ 800 million in charity for the said cause. India has been at the centre of active collaboration in all these centres. He has been instrumental in establishing Dr Kiran Patel Medical College & Research Center (KMCRI), Bharuch, Gujarat.",
    },
    {
      des: "At KPGU, Vadodara, “Education” doesn’t mean, mere learning & having a degree to get the jobs, rather it encompasses Holistic Growth with Global citizenry traits. In present times, one who adapts & seeks excellence can alone succeed. In its pursuit for national & international eminence, the KPGU, Vadodara is geared up for greater commitment for Quality & Excellence in academics, skill development, research, collaborations & employability drives.",
    },
    {
      des: "As the head of the University, I assure everyone that each constituent school will provide modern infrastructure, duly qualified, experienced, research oriented, student centric faculty, rich academic ambience, skills nurturing to build self-reliant, internationally competent professionals.",
    },
    {
      des: "I appeal to all the prospective students to take a step, visit our campus, know about us, explore prospects for a great fulfilling career & make a right choice at the right time.",
    },

    {
      des: `With my best wishes`,
    },
  ];

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <Grid
        container
        className="smooth-shadow"
        borderRadius={3}
        overflow={"clip"}
        my={5}
        bgcolor={"#fff"}
      >
        <Grid item xs={12} md={4}>
          <Box className="w-100 h-100 ">
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703666253/KPGU/Images/Jagdishbhai-D-Patel.webp"
              className="w-100 h-100 object-fit-cover"
              alt="photo"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8} p={2}>
          <h3 className="display-5 fw-semibold">Shree Jagdishbhai D. Patel</h3>
          <p className={`fs-4 mb-2`}>
            <b>Hon’ble President</b>,<br />
            Drs. Kiran & Pallavi Patel Global University [KPGU, Vadodara]
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Founder President and Managing Trustee</b>,<br />
            Shree Krishna Educational & Charitable Trust, Vadodara
          </p>
        </Grid>
      </Grid>

      <Typography variant="h6" fontWeight={"600"}>
        My Dear Students, <br />
        Greetings from the Krishna Edu Family.
      </Typography>
      <Box mt={4}>
        {paragraphs.map(({ des }, index) => (
          <Paragraph content={des} key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default MessageFromThePresidentsDesk;
