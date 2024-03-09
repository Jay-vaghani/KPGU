// ============== Custom Components Imports ==============

import HODMessage from "../../../../../../../Common/HODMessage";

function MessageFromHod() {
  return (
    <>
      <HODMessage
        hodImg={
          "https://banner2.cleanpng.com/20180315/bvw/kisspng-computer-icons-clip-art-man-icon-5aab18532f4b00.7479404715211623231937.jpg"
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
