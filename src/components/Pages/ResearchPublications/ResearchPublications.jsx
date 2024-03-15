import React, { useEffect, useState } from "react";
import Banner from "../../Common/Banner";
import { Outlet, useLocation } from "react-router-dom";

function ResearchPublications() {
  const [banner, setBanner] = useState({});

  let location =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 1
    ];

  useEffect(() => {
    if (location === "innovation-research") {
      setBanner({
        title: "Research & Innovation",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "fdps") {
      setBanner({
        title: "Fdps",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "kpgu-journals") {
      setBanner({
        title: "Kpgu Journals",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "publications") {
      setBanner({
        title: "Publications",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "ipr") {
      setBanner({
        title: "Ipr",
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

export default ResearchPublications;
