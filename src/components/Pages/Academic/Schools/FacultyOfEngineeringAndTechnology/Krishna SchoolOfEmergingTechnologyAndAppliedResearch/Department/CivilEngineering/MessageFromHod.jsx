// ============== Custom Components Imports ==============

import HODMessage from "../../../../../../../Common/HODMessage";

function MessageFromHod() {
  return (
    <>
      <HODMessage
        hodImg={
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710302766/KPGU/Faculty%20Images/KSET/hod-civil.webp"
        }
        hodEmail={"hod.me.kset@kpgu.ac.in"}
        hodName={"Dr. Khushbu Bhatt"}
        hodOf={"Civil Engineering"}
        hodOfShort={"[KSET]"}
        hodMessage={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta maxime nisi rerum aliquam inventore commodi minima temporibus quidem sequi a nam aspernatur itaque saepe magni placeat omnis, dolore aperiam!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta maxime nisi rerum aliquam inventore commodi minima temporibus quidem sequi a nam aspernatur itaque saepe magni placeat omnis, dolore aperiam!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta maxime nisi rerum aliquam inventore commodi minima temporibus quidem sequi a nam aspernatur itaque saepe magni placeat omnis, dolore aperiam!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta maxime nisi rerum aliquam inventore commodi minima temporibus quidem sequi a nam aspernatur itaque saepe magni placeat omnis, dolore aperiam!",
        ]}
      />
      
    </>
  );
}

export default MessageFromHod;
