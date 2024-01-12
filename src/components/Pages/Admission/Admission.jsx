import React, { useEffect, useState } from "react";
import Banner from "../../Common/Banner";
import { Outlet, useLocation } from "react-router-dom";
function Admission() {
    const [banner, setBanner] = useState({});


    let location =
        useLocation().pathname.split("/")[
        useLocation().pathname.split("/").length - 1
        ];

    useEffect(() => {
        if (location === "admission-procedure") {
            setBanner({
                title: "Admission Procedure",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "doctoral-programmes") {
            setBanner({
                title: "Doctoral Programmes",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "education-loan") {
            setBanner({
                title: "Education Loan",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "examination-system") {
            setBanner({
                title: "Examination System",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "hostel-life") {
            setBanner({
                title: "Hostel Life",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "pg-programs") {
            setBanner({
                title: "Pg Programs",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "ug-programs") {
            setBanner({
                title: "Ug Programs",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "transportation") {
            setBanner({
                title: "Transportation",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "scholarships") {
            setBanner({
                title: "Scholarships",
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

export default Admission