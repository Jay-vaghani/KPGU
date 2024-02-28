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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708513775/KPGU/Faculty%20Images/KSET/hod-cse.webp"
        }
        hodEmail={"hod.it.ksds@kpgu.ac.in"}
        hodName={"Prof. Komal Kushwaha"}
        hodOf={"Information Technology"}
        hodOfShort={"[KSDS]"}
        hodMessage={[
          "I welcome all the students & their parents to the Department of Information Technology. Information Technology is an essence of today’s world. The Department seeks to combine excellence in education with service to the industry.",
          "Our vision is to be recognized as innovative and leading Information Technology Department. Our goal is to provide students with a balance of intellectual and practical experiences that enable them to serve a variety of societal needs. In our department students are nurtured to become best software professionals as Project Managers, System Analysts or Team leaders in Industry or become Entrepreneurs in their own innovative way.",
          "I am sure in times to come; many students from our department will make indelible mark nationally and internationally in the field of Information Technology and make us proud.",
        ]}
      />
      {/* <Quote
        quote={
          "With the idea that mentoring is a lifetime commitment, we motivate students to achieve academic excellence with valuable life lessons"
        }
      /> */}
    </>
  );
}

export default MessageFromHod;
