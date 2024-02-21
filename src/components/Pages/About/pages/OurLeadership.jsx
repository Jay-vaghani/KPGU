import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { FormatQuoteRounded, RequestQuote } from "@mui/icons-material";
import {
  LeftQuoteIcon,
  RightQuoteIcon,
} from "../../../../Utils/Icons/CustomIcon";
import Paragraph from "../../../Common/Paragraph";
import Quote from "../../../Common/Quote";

function OurLeadership() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const paragraphs1 = [
    {
      des: "A self-motivated, Visionary, a dynamic grass root leader, a thinker, a philosopher, a philanthropist and a great human being, who was driven by National Aspirations with Global Outlook and an ardent hard worker, the Founder President and the Managing Trustee of Shree Krishna Educational & Charitable Trust, Shri Jagdishbhai D Patel has been an embodiment of Devotion, Commitment, Passion for the Purpose, pursuit for Excellence and relentless actions. Over the decades, he has developed himself into pro-active administrator and mastered the great sense of development of infrastructure and execution of mega-projects associated with educational, healthcare and social sector through his unique model consisting of Conception, Collaboration, Strategic Execution, completion of the projects & make them self-sustained, progressive institutions in tune with the advances of the world.",
    },
    {
      des: "The missed opportunity, during his younger days, lead him to an altruistic introspection into professional education and he realized that, it was time to work for an equitable technical education. It’s here that, the mission of developing a Holistic Campus to provide quality professional education was conceived and the BITS Edu Campus’ was established in 2003. Till date, the campus hosted the most sought after Six Affiliating Institutions offering programs in Engineering, Pharmacy, Nursing, Physiotherapy, Ayurveda and Pure Science programs, both at UG & PG level. Right from the inception the number of Freeships and Scholarships have been instituted and amount of Rs. 6.5 Crores has been spent in last five years.",
    },
    {
      des: "He has been actively contributing for the cause of Service to the Mankind in several organizations. He is the Founder and Promoter of Dr. Kiran C. Patel Medical College & Research Institute, Bharuch. He has been the Vice-President of Shri Sourashtra Leuva Patel Seva Samaj, Vadodara, Trustee on RMS Hospital, Dhandhuka, Kelavani Dham, Sardar Dham, Ahmedabad, Shree Siddhivinayak Temple, to name a few.",
    },
    {
      des: "He is the recipient of number of Awards. Some of the significant one includes, Education Leadership Award, Global Education Excellence Award, Samaj Ratna Award, Indira Gandhi Shiksha Shiromani Award, Shiksha Bharti Award and Samaj Gaurav Award. He is also appointed as a member of Fee Regulatory Committee (Technical) by Government of Gujarat for the period of 2020-to-2023.",
    },
    {
      des: "His dynamism is driven by his Pursuit for Newer Horizons. Having imbibed Deep Rooted Values, Robust Systems for Functioning, Thrust for Quality & Excellence & having attained several milestones in 16 years of its existence, the SKECT dedicates Drs Kiran & Pallavi Patel Global University to the Nation for the greater cause of higher professional education.",
    },
  ];

  const paragraphs2 = [
    {
      des: "Being an Indian-American, coming from Gujarat, having studied in University of London, having had medical training at Medical College in Gujarat, having had advanced medical education in America, having been in practice of Cardiology for over four decades in US and having travelled across the globe, Dr Kiran C Patel, has witnessed the changing paradigms of higher education & healthcare fostered with the ethos of Service to the Humankind and has been keenly observing its impact world over, especially in the context of his motherland, India. In recognition of his efforts in Indianization of Global Ethos, the Govt. of India has facilitated him with Pravasi Bharatiya Samman.",
    },
    {
      des: "He has been making earnest endeavors to enhance the standards of higher education with high quality, career driven, globalized pedagogy in the centers of excellence. Towards this end, he has established number of centers of importance worldwide to name few of the significant one are, Nova Southeastern University, University of South Florida, Centre for Global Solutions at US, Centre for Sustainable Development at IIT Gandhinagar. He has been instrumental in establishing Dr Kiran Patel Medical College & Research Center, Bharuch, Gujarat. He has contributed over $ 800 million in charity for the said cause. India has been at the centre of active collaboration in all these centers.",
    },
    {
      des: "To further his aspirations for the people of India and Gujarat more objectively, he ideated the establishment of Drs Kiran & Pallavi Patel Global University at Vernama, Vadodara under the sponsorship of Shree Krishna Education & Charitable Trust, that has envisaged to transform the higher education that stands transposed at the 21st Century, facing challenges posed by advances in science and technology and dynamics of societal change. He asserts that, this university shall be the Gateway to Global Excellence in its true sense.",
    },
  ];

  const paragraphs3 = [
    {
      des: "An Youthful and visionary leader, an educationist with remarkable zeal and intense commitment for quality and excellence, the Chairman of the BITS Edu Campus, Shri Dhruvkumar J Patel, has been providing Second-in-Command Leadership under the flagship.",
    },
    {
      des: "He has been fostering institutionalization of national aspirations in consonance with international expectations in curricula, pedagogy, faculty empowerment and collaborative initiatives to meet and exceed the expectations of the stakeholders. ",
    },
    {
      des: "He has been nurturing innovations, funded research, startups and has been instrumental in International Collaborations. He asserts that the facets of education, governance & functioning so accomplished over the years, shall pave the way in realization of KPGU Vision 2040 that has been envisaged by Drs Kiran & Pallavi Patel Global University indira gandhi",
    },
  ];

  const paragraphs4 = [
    {
      des: "A computer engineer by profession, a vibrant youth leader with empathy & humility, a dynamic Secretary of Shree Krishna Educational & Charitable Trust, Vadodara, a member of the Governing Body, Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara & Promoter of Dr Kiran C Patel Medical College & Research Institute, Bharuch, Gujarat & an enthusiastic entrepreneur and promoter of number of Business and Organizational entities including start ups, Shri Krishna J Patel believes that the centers of higher education need to nurture the 21st Century Skills among the students and facilitate globalization of their careers.",
    },
    {
      des: "He is sensitive to cultural diversity and encourages outreach programs that enhance greater inter action between communities and students. He has been furthering & enriching Institutional Social Responsibility (ISR) activities in all the organizations he has been associated with.",
    },
    {
      des: "He endorses the fact that, the KPGU, Vadodara will not leave any stone unturned to make it an University of Global Eminence to the advantage of students.",
    },
  ];

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h4 className=" fw-semibold color-secondary mb-4">KPGU'S LEADERSHIP</h4>
      <Grid
        container
        className="smooth-shadow"
        borderRadius={3}
        overflow={"clip"}
      >
        <Grid item bgcolor={"#fff"} xs={12} md={4}>
          <Box className="w-100 h-100 ">
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Jagdishbhai_D_Patel.webp"
              className="w-100 h-100 object-fit-cover"
              alt="photo"
            />
          </Box>
        </Grid>
        <Grid item bgcolor={"#fff"} xs={12} md={8} p={2}>
          <h3 className="display-5 fw-semibold">Shree Jagdishbhai D Patel</h3>
          <p className={`fs-4 mb-2`}>
            <b> Hon’ble President</b>,<br />
            Drs. Kiran & Pallavi Patel Global University [KPGU, Vadodara]
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Founder President & Managing Trustee</b> <br />
            Shree Krishna Educational & Charitable Trust, Vadodara
          </p>
          <Quote
            quote={
              "Education” is not meant merely to earn a degree; rather it’s an earnest pursuit of nurturing Academic, Co-Academic, Careerist & Global Citizenry Traits that foster attainment of Life Goals"
            }
          />
        </Grid>
      </Grid>
      <Box mt={5}>
        {paragraphs1.map(({ des }, index) => (
          <Paragraph content={[des]} key={index} />
        ))}
      </Box>
      {/* ============================================================================================================ */}
      <Grid
        container
        className="smooth-shadow"
        borderRadius={3}
        overflow={"clip"}
        mt={8}
      >
        <Grid item bgcolor={"#fff"} xs={12} md={4}>
          <Box className="w-100 h-100 ">
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Dr_Kiran_C_Patel.webp"
              className="w-100 h-100 object-fit-cover"
              alt="photo"
            />
          </Box>
        </Grid>
        <Grid item bgcolor={"#fff"} xs={12} md={8} p={2}>
          <h3 className="display-5 fw-semibold">Dr. Kiran C. Patel</h3>
          <p className={`fs-4 mb-2`}>
            <b>Patron</b>,<br />
            Drs. Kiran & Pallavi Patel Global University [ KPGU, Vadodara]
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Chairman</b>,<br />
            Dr Kiran C Patel Medical College & Research Institute [KMCRI]
            Bharuch
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Indian-American Philanthropist & Cardiologist</b> <br />
            Tampa, Florida, USA
          </p>
        </Grid>
      </Grid>
      <Box mt={5}>
        {paragraphs2.map(({ des }, index) => (
          <Paragraph content={[des]} key={index} />
        ))}
      </Box>
      {/* ============================================================================================================ */}
      <Grid
        container
        className="smooth-shadow"
        borderRadius={3}
        overflow={"clip"}
        mt={8}
      >
        <Grid item bgcolor={"#fff"} xs={12} md={4}>
          <Box className="w-100 h-100 ">
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Kamal_J_Patel.webp"
              className="w-100 h-100 object-fit-cover"
              alt="photo"
            />
          </Box>
        </Grid>
        <Grid item bgcolor={"#fff"} xs={12} md={8} p={2}>
          <h3 className="display-5 fw-semibold">Shrimati Kamalben J Patel</h3>
          <p className={`fs-4 mb-2`}>
            <b>Chairman & Vice Managing Trustee</b>,<br />
            Shree Krishna Educational & Charitable Trust
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Vice President & Governing Body</b> <br />
            Drs Kiran & Pallavi Patel Global University KPGU, Vadodara
          </p>
          <Quote
            quote={
              "Every woman is strong, an embodiment of strength & sacrifice Empower her with equity she shall nurture the humankind"
            }
          />
        </Grid>
      </Grid>
      <Box mt={5}>
        {paragraphs2.map(({ des }, index) => (
          <Paragraph content={[des]} key={index} />
        ))}
      </Box>
      {/* ============================================================================================================ */}
      <Grid
        container
        className="smooth-shadow"
        borderRadius={3}
        overflow={"clip"}
        mt={8}
      >
        <Grid item bgcolor={"#fff"} xs={12} md={4}>
          <Box className="w-100 h-100 ">
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Dhruvkumar_J_Patel.webp"
              className="w-100 h-100 object-fit-cover"
              alt="photo"
            />
          </Box>
        </Grid>
        <Grid item bgcolor={"#fff"} xs={12} md={8} p={2}>
          <h3 className="display-5 fw-semibold">Shree Dhruvkumar J Patel</h3>
          <p className={`fs-4 mb-2`}>
            <b>Member of the Board of Management</b>,<br />
            Drs. Kiran & Pallavi Patel Global University [KPGU, Vadodara]
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Managing Director</b> <br />
            Dr. Kiran C. Patel Medical College & Research Institute, Bharuch
          </p>
          <Quote
            quote={
              "One, who is willing to accept, adapt & ensure behavioral modifications in concurrence with the changing dynamics of the globalized world, can alone succeed & progress"
            }
          />
        </Grid>
      </Grid>
      <Box mt={5}>
        {paragraphs3.map(({ des }, index) => (
          <Paragraph content={[des]} key={index} />
        ))}
      </Box>
      {/* ============================================================================================================ */}
      <Grid
        container
        className="smooth-shadow"
        borderRadius={3}
        overflow={"clip"}
        mt={8}
      >
        <Grid item bgcolor={"#fff"} xs={12} md={4}>
          <Box className="w-100 h-100 ">
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Krishna_J_Patel.webp"
              className="w-100 h-100 object-fit-cover"
              alt="photo"
            />
          </Box>
        </Grid>
        <Grid item bgcolor={"#fff"} xs={12} md={8} p={2}>
          <h3 className="display-5 fw-semibold">Shree Krishna J Patel</h3>
          <p className={`fs-4 mb-2`}>
            <b>The Secretary</b>,<br />
            Krishna Educational & Charitable Trust
          </p>
          <p className={`fs-4 mb-2`}>
            <b>Governing Body</b> <br />
            Drs. Kiran & Pallavi Patel Global University [KPGU, Vadodara]
          </p>
        </Grid>
      </Grid>
      <Box mt={5}>
        {paragraphs4.map(({ des }, index) => (
          <Paragraph content={[des]} key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default OurLeadership;
