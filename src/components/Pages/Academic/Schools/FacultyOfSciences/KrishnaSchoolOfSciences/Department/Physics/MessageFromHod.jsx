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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709719212/KPGU/Faculty%20Images/KSS/hod-microbiology.webp"
        }
        hodEmail={"hod.cse.kset@kpgu.ac.in"}
        hodName={"Dr. Parul Shrivastava"}
        hodOf={" Microbiology"}
        hodOfShort={"[KSS]"}
        hodMessage={[
          "Hearty welcome from the Department of Microbiology, Krishna School of Science, DRS. Kiran & Pallavi Patel Global University, Vadodara. Our department was established in 2020 on the main campus. It was started to cater to the students coming from both rural & urban background and impart necessary skills required for the grooming various industries including pharmaceutical, food, healthcare and agriculture in this western part of the country, for creating self-entrepreneurs and also churn out academicians and researchers who can take up jobs in educational institutes and research laboratories.",
          "In today’s global scenario when the world is facing several daunting challenges, we require highly skilled professionals in the field of Microbiology to cater to the increasing demand in various sectors of both Industry and academia. The department houses various sophisticated equipment such as Laminar Air Flow, Light Microscopes, , Orbital Shaker Incubator, Bacteriological Incubator, UV cabinet, Colony counter, DNA electrophoresis unit, SDS-PAGE unit, Colony Counter, Antibiotic Zone Reader, Spectrophotometer, Colorimeter,  UV-Visible Spectrophotometer,  pH meter, Hot air Oven, Autoclave, Cooling Centrifuge and several types of equipment for characterization,  Refrigerator, Dry bath, Weighing balance, Magnetic stirrer, vortex, Gel electrophoresis apparatus etc. The department follows the UGC and state govt. norms in the admission process. I welcome the prospective students and researchers for a blissful learning experience and together we contribute to your successful journey."
        ]}
      />
     
    </>
  );
}

export default MessageFromHod;
