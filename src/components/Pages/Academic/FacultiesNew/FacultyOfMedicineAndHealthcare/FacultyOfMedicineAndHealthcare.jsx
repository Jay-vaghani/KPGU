import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import EduCard from '../../../../Common/EduCard';

function FacultyOfMedicineAndHealthcare() {
  const { maxWidth } = useContext(AppContext);

  const Schools = [
    {
      name: "Krishna School Of Pharmacy And Research",
      des: "Krishna School of Pharmacy & Research (KSP), part of Drs. Kiran & Pallavi Patel Global University, is approved by Pharmacy Council of India and AICTE. It offers Bachelor and Master of Pharmacy, and PhD programs in four disciplines. Our B. Pharm. Program is NBA re-accredited till 30.06.2025. KSP emphasizes strong foundations, research, and industry connections.",
      link: "/academics/krishna-school-of-pharmacy-and-research",
      img: ""
    },
    {
      name: "Krishna Ayurved Medical College",
      des: "Krishna Ayurved Medical College (KAMC) in Vadodara, affiliated with Drs. Kiran and Pallavi Global University, offers B.A.M.S. degree with comprehensive Ayurvedic education and practical training at Matrushri Davalba Ayurved Hospital. Approved by NCISM & Department of AYUSH, it fosters high standards in teaching, research, patient care, and rural health awareness.",
      link: "/academics/krishna-ayurved-medical-college",
      img: ""
    },
    {
      name: "Krishna School Of Nursing",
      des: "Krishna School of Nursing, dedicated to nursing education excellence, fosters a professional ethos rooted in ethics and societal responsibility. Situated in Vadodara, Gujarat, our self-contained campus offers a serene environment for learning. Recognized by the Indian Nursing Council and Gujarat Nursing Council, we offer a 4-year B.Sc. Nursing Degree program.",
      link: "/academics/krishna-school-of-nursing",
      img: ""
    },
    {
      name: "Krishna School Of Physiotherapy And Rehabilitation",
      des: "Krishna School of Physiotherapy & Rehabilitation prioritizes enhancing students' clinical reasoning, innovation, and dedication to health. With excellent facilities and enthusiastic faculty, we provide an ideal environment for skill development. Recognizing the evolving healthcare landscape, we emphasize the importance of continuous career advancement and innovation among healthcare professionals.",
      link: "/academics/krishna-school-of-physiotherapy-and-rehabilitation",
      img: ""
    },
  ]


  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <Grid container spacing={3}>
        {Schools.map(({ des, img, link, name }, index) => <EduCard des={des} img={img} link={link} name={name} key={index} />)}

      </Grid>
    </Box>
  )
}

export default FacultyOfMedicineAndHealthcare