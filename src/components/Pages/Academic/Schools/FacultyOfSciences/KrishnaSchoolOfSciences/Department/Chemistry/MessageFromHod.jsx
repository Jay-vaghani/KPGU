import { Box } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import Quote from "../../../../../../../Common/Quote";
import HODMessage from "../../../../../../../Common/HODMessage";

function MessageFromHod() {
  const { maxWidth } = useContext(AppContext);
  return (
    <>
      <HODMessage
        hodImg={
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709713665/KPGU/Faculty%20Images/KSS/hod-chemistry.webp"
        }
        hodEmail={"hod.cse.kset@kpgu.ac.in"}
        hodName={"Dr. Asha Joshi"}
        hodOf={" Chemistry"}
        hodOfShort={"[KSS]"}
        hodMessage={[
          "You are invited to join the vibrant computer science community and become the future’s innovators and change agents by enrolling in the Department of Computer Science and Engineering. The Department of CSE was established in 2004. Our esteemed faculties guarantee a wide range of diverse learning experiences, including Core Courses, Programming and, Emerging Technologies",
          "Our department of computer science and engineering (CSE) is committed to giving its students excellent jobs. Our teachers and students are always pushing the boundaries of what is possible in computer science and engineering. We do not try to turn our students into walking manuals for any particular language or software. They are instead given a solid foundation in computer science and problem-solving methods, and they are made adaptable to changes with a strong emphasis on context and project-based learning through mini-projects, industry visits, guest lectures, student activities & leadership events, professional societies like Computer Society of India, and an incubation center.",
          "The Department is proud of its robust network of alumni, many of whom hold important positions in academics and business related to information technology on both a national and international scale. We welcome talented students, researchers, academics, and workers to join us and contribute to the campus’s vibrant and competitive learning environment. Additionally, the CSE department has MoUs with some of the finest organizations and works to further strengthen them.",
          "The placement record of qualified students over the past several years has been excellent, and they are now employed by reputable firms. In order to explore and invent new methods and find sustainable solutions, students and teachers are constantly working on exciting and fascinating problems or projects that are published in numerous national and foreign journals.",
        ]}
      />

    </>
  );
}

export default MessageFromHod;
