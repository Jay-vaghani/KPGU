import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Paragraph from "../../../Common/Paragraph";

function DrKiranCPatelMessage() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      des: "It gives me great happiness to note that Krishna Edu Campus that, over 16 Years of Existence as an affiliating campus now stands converted into Drs Kiran & Pallavi Patel Global University (KPGU), Vadodara with the capabilities to deliver contemporary higher education built on skill cured, interdisciplinary, industry driven, employability-oriented globalised curriculum and innovation fostered, interdisciplinary & high impact collaborative research.",
    },
    {
      des: "Being a an Indian-American, having studied MBBS in Gujarat, having had an advanced medical education in America and having travelled across the globe, I have witnessed the changing paradigms of higher education and its impact world over, especially in the context of my motherland, India. Having established number of centres of importance in US and India, where intercountry association is at the centre of activity, I had envisaged a University that can truly deliver 21st Century Skills Driven Global Education.",
    },
    {
      des: "By sharing my ideas with the Founder President & Managing Trustee, Shree Jagdishbhai D Patel, of Shree Krishna Educational & Charitable Trust (SKECT), the constituent institutes of which have achieved national acclaim in higher professional education, I decided to get associated and extend all the support, especially so in terms of the collaborations with US universities.",
    },
    {
      des: "Drs Kiran & Pallavi Patel Global University (KPGU), Vadodara is committed to transform students into globally competent professionals, who can address the challenges of this century. I am sure that the KPGU, Vadodara will make every effort to provide a great academic and campus ambience through its world class infrastructure, fully equipped departments with hi-tech gadgets, fully fledged workforce and stakeholder centric, high-quality systems of academics, research and inclusive governance. I am certain that this University will reach greater heights and etch its name prominently on global map in the time to come. I am sure you will have great learning experience to reach that coveted goal of your life, where you intensely seek to be.",
    },

    {
      des: `Best Wishes`,
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
      >
        <Grid item xs={12} md={4}>
          <Box className="w-100 h-100 ">
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703666253/KPGU/Images/Dr-Kiran-C-Patel.webp"
              className="w-100 h-100 object-fit-cover"
              alt="photo"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8} p={2}>
          <h3 className="display-5 fw-semibold">Dr. Kiran C. Patel</h3>
          <p className={`fs-4 mb-2`}>
            <b>Patron</b>,<br />
            Drs. Kiran & Pallavi Patel Global University [KPGU, Vadodara]
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Chairman</b>,<br />
            Dr Kiran C Patel Medical College & Research Institute [KMCRI]
            BHARUCH
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Indian-American Philanthropist & Cardiologist</b> <br />
            Tampa, Florida, USA
          </p>
        </Grid>
      </Grid>

      <Typography variant="h6" fontWeight={"600"}>
        Dear Students to-be, <br />
        Greetings from Tampa, Florida, US.
      </Typography>
      <Box mt={4}>
        {paragraphs.map(({ des }, index) => (
          <Paragraph content={des} key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default DrKiranCPatelMessage;
