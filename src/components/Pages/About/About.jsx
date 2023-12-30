import React, { useEffect, useState } from "react";
import Banner from "../../Common/Banner";
import { Outlet, useLocation } from "react-router-dom";

function About() {
  const [banner, setBanner] = useState({});

  let location =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 1
    ];

  useEffect(() => {
    if (location === "skect") {
      setBanner({
        title: "SPONSORING BODY-SKECT",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "our-leadership") {
      setBanner({
        title: "Our Leadership",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }

    if (location === "achievements") {
      setBanner({
        title: "SIGNIFICANT ACHIEVEMENTS​",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "kpgu-vadodara") {
      setBanner({
        title: "KPGU VADODARA",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "vision-mission") {
      setBanner({
        title: "VISION & MISSION",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "dr-kiran-c-patel-message") {
      setBanner({
        title: "MESSAGE FROM DR. KIRAN C. PATEL",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "message-from-the-presidents-desk") {
      setBanner({
        title: "MESSAGE FROM THE PRESIDENT’S DESK",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "message-from-the-provost") {
      setBanner({
        title: "MESSAGE FROM THE PROVOST",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
  }, [location]);

  return (
    <>
      <Banner banner={banner} />
      <Outlet />
    </>
  );
}

export default About;
