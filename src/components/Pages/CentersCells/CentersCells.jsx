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
        if (location === "centers-of-excellence") {
            setBanner({
                title: "Centers Of Excellence",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }


        if (location === "krishna-center-of-institution-social-responsibility") {
            setBanner({
                title: "Krishna Center of Institutional Social Responsibility",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-centre-of-innovation-research") {
            setBanner({
                title: "Krishna Centre of Innovation Research",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-center-of-international-affairs") {
            setBanner({
                title: "Krishna Center of International Affairs",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-center-of-career-advancement-corporate") {
            setBanner({
                title: "Krishna Center of Career Advancement Corporate Training",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-center-of-startups-and-entrepreneurship") {
            setBanner({
                title: "Krishna Center of Startups and Entrepreneurship",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-center-of-training-in-disaster-management") {
            setBanner({
                title: "Krishna Center of Training in Disaster Management",
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
