import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Paragraph from "../../../Common/Paragraph";

function SKECT() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      para: "What started as a cherished aspiration of a layman coming from a rural, agricultural background during the year 2000, the BITS Edu Campus, today, stands testimony to significant and the most sought-after hub for educational excellence, consistently in pursuit of newer horizon.",
    },
    {
      para: "Driven by National aspirations with global outlook, the Sponsoring Body, Shree Krishna Educational and Charitable Trust (SKECT), was started by a dynamic grass root leader, a thinker, a philosopher, a philanthropist and a great human being at heart, who has been practicing higher virtues of inclusive governance by empowering, motivating every individual to share the responsibility to achieve excellence, the Founder President and the Managing Trustee Shree Jagdishbhai D Patel.",
    },
    {
      para: "Personally, the Founder and Managing Trustee had faced many difficulties with respect to access to technical education due to paucity of Institutions. When he did not get admission to Engineering course in spite of being worthy of becoming an engineering, his father was disheartened. He had told his father not to worry and instantly had conveyed to him that he himself will establish an engineering college of repute to provide technical and other professional education to students like him. He has been ardent Devotee of Lord Ganesha and that his on-the-spot affirmation to his father seemed to be God’s blissful wish that he becomes the crusader of True Education and BITS Edu Campus and his other educational accomplishments stand testimony to realization of God’s wish. That missed opportunity, lead him to an altruistic introspection into professional education and he realized that, it was time to work for an equitable technical education. It’s here that, the mission of developing a Holistic Campus to provide quality professional education in Engineering and other Professional streams had begun and the BITS Edu Campus’ was established in 2003, under Shree Krishna Educational and Charitable Trust, Vadodara.",
    },
    {
      para: "With the great support of his family and the team “BITS Edu Campus”, the institutions are being run successfully since 2004 at Vernama, Vadodara, offering programs that, are the most sought-after by meritorious students in Engineering, Pharmacy, Nursing, Physiotherapy, Ayurveda and Pure Science programs, both at UG & PG level, with the vision to create an environment conducive for academic and professional excellence by providing the state-of-the-art infrastructure, academic, research and career development facilities including duly qualified, experienced, research driven and employability oriented faculty.",
    },
    {
      para: "The Government of Gujarat and Govt. of India have been supporting institutions with SSIP- Student Start-up & Innovation Policy, BITS Innovation Centre, Centre for Entrepreneurship, TechnologyIncubation & Business Acceleration (CETIBA)-District Training Centre by SPIPA. The intuitions have entered into active collaborations with number of National and International organizations and Industries to converge ethos of Global Education. As on date the institutions are in collaboration with Carleton Global Academy in Carleton University Campus, Canada, University of North Alabama (UNA) and USA Partnership, Catholic University of Murcia (UCAM), Spain and North Southern Eastern University (NSU), Florida.",
    },
    {
      para: "The BITS Edu Campus believes that “Education” doesn’t mean mere learning & having a degree to get the jobs, rather it encompasses a harmonious blend of Academia, Extra-Academia, Research & Innovation, Situation management, Compassion & Global citizenry traits. Amidst globalized world, one who adapts, accepts & ensure behavioural modifications in concurrence with the change, can alone succeed. The entire Academic and Administrative governance and functioning are built around this ethos. All the Constituent Institutions have been consistently striving to be Centres of Global Acclaim and have implemented intense academic functions built around creativity & research to nurture excellence by providing an environment centred on knowledge and innovation.",
    },
    {
      para: "As Founder and Promoter of Rudraksh Academy Pvt. Ltd., he has been instrumental in establishment of Dr. Kiran C. Patel Medical College & Research Institute, Bharuch as the self-financed (Brownfield) Medical College at District General Hospital Campus, Bharuch under Gujarat Health Policy, 2016 as a Public Private Partnership (PPP model) medical college during the Academic Year 2020-21. He has been conferred with number of Awards in recognition of his yeoman services and some of the noteworthy are Shishkya Bharti Award in 2010, Samaj Ratna Award in 2013 and Jewel of Baroda in 2014. His has been actively involved in the Governmental Initiatives to tackle COVID-19 and in recognition of his contribution; he has been conferred with “Corona Yodha 2020” by Collector and District Magistrate, Vadodara. He is also appointed as a member of Fee Regulatory Committee (Technical) by Government of Gujarat for the period of 2020-to-2023.",
    },
    {
      para: "He is also occupied with his active association with number of social organizations and Trusts. He is the Founder Trustee of Sardardham and Kelvanidham, Ahmadabad, the Vice- President of Shri Sourashtra Leuva Patel Samaj, Vadodara and the Trustee of RMS Hospital Dhandhuka, Ahmedabad, Gujarat.",
    },
    {
      para: "It is due to the exceptional commitment and inspiring ethos of Founder President that, the BITS Edu Campus, today, stand attested as an Educational Hub having a rich and vibrant Academic, Co- Academic, Extra-Academic, Research and Skills Building ambience in pursuit of National aspiration with Global outlook",
    },
    {
      para: "The accomplishments stand testament to the fact that; it is due to maturity of strong academic and administrative governance built into the matrix of each functional unit. Establishing a Private State University is a noble cause, yet complex to achieve it, but, with robust systems of management built around the fabric of high quality, as its strength and financial viability, the SKECT has built, over a period of last 16 years, the ability to establish and run the unaided, non- affiliating Private State University and transform it too into an Institution of Eminence.",
    },
    {
      para: "The SKECT in continuation of its Pursuit for Newer Horizon, the SKECT dedicates a Global University to the Nation with a commitment to meet and exceed stakeholder expectations.",
    },
  ];

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h4 className=" fw-semibold color-secondary">KPGU'S SPONSORING</h4>
      <h3 className="display-5 fw-semibold mb-4">
        Sponsoring Body: Shree Krishna Educational & Charitable Trust [SKECT]
      </h3>
      {paragraphs.map(({ para }, index) => (
        <Paragraph content={para} key={index} />
      ))}
      <Grid container mt={10} spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            className="smooth-shadow-card h-100"
            borderRadius={4}
            overflow={"hidden"}
          >
            <Box>
              <img
                src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703584293/KPGU/Images/Jagdishbhai-D-Patel.webp"
                alt="photo"
                className="img-fluid"
              />
            </Box>
            <Box p={2}>
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  Shree Jagdish Bhai D. Patel
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  Hon’ble Founder President & Managing Trustee
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            className="smooth-shadow-card h-100"
            borderRadius={4}
            overflow={"hidden"}
          >
            <Box>
              <img
                src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703584293/KPGU/Images/kamal-j-patel.webp"
                alt="photo"
                className="img-fluid"
              />
            </Box>
            <Box p={2}>
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  Shrimati Kamal Ben J. Patel
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  Hon’ble Chairperson & Vice-managing Trustee
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            className="smooth-shadow-card h-100"
            borderRadius={4}
            overflow={"hidden"}
          >
            <Box>
              <img
                src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703584293/KPGU/Images/Dhruvkumar-J-Patel.webp"
                alt="photo"
                className="img-fluid"
              />
            </Box>
            <Box p={2}>
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  Shri Dhruv Kumar J. Patel
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  Hon’ble Chairperson & Vice-managing Trustee
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            className="smooth-shadow-card h-100"
            borderRadius={4}
            overflow={"hidden"}
          >
            <Box>
              <img
                src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703653957/KPGU/Images/Krishna-J-Patel.webp"
                alt="photo"
                className="img-fluid"
              />
            </Box>
            <Box p={2}>
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  Shree Krishna J. Patel
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  Hon’ble Chairperson & Vice-managing Trustee
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SKECT;
