import React, { useEffect, useState } from 'react'
import Banner from "../../Common/Banner"
import { Outlet, useLocation } from 'react-router-dom';

function Campus() {

  const [banner, setBanner] = useState({});

  let location =
    useLocation().pathname.split("/")[
    useLocation().pathname.split("/").length - 1
    ];

  useEffect(() => {
    if (location === "gallery") {
      setBanner({
        title: "CAMPUS GALLERY",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
    if (location === "infrastructure") {

      setBanner({
        title: "Infrastructure",
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
      });
    }
  }, [location]);

  return (
    <>
      <Banner banner={banner} />
      <Outlet />
    </>
  )
}

export default Campus