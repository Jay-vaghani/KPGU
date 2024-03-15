import React, { useEffect, useState } from "react";
import Banner from "../../Common/Banner";
import { Outlet, useLocation } from "react-router-dom";

function CentersCells() {
    const [banner, setBanner] = useState({});

    let location =
        useLocation().pathname.split("/")[
        useLocation().pathname.split("/").length - 1
        ];

    useEffect(() => {
        if (location === "start-ups") {
            setBanner({
                title: "Start Ups",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "anti-ragging") {
            setBanner({
                title: "Anti Ragging",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "equal-opportunity-cell") {
            setBanner({
                title: "Equal Opportunity Cell",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "internal-complaint-committee") {
            setBanner({
                title: "Internal Complaint Committee",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "grievance-redressal-committee") {
            setBanner({
                title: "Grievance Redressal Committee",
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

export default CentersCells;
