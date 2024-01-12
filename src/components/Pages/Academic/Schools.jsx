import React, { useEffect, useState } from "react";
import Banner from "../../Common/Banner";
import { Outlet, useLocation } from "react-router-dom";

function Schools() {
    const [banner, setBanner] = useState({});


    let location =
        useLocation().pathname.split("/")[
        useLocation().pathname.split("/").length - 1
        ];

    useEffect(() => {
        if (location === "faculty-of-engineering-and-technology") {
            setBanner({
                title: "Faculty Of Engineering And Technology",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "faculty-of-medicine-and-healthcare") {
            setBanner({
                title: "Faculty Of Medicine And Healthcare",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "faculty-of-commerce-and-management") {
            setBanner({
                title: "Faculty Of Commerce And Management",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "faculty-of-sciences") {
            setBanner({
                title: "Faculty Of Sciences",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "faculty-of-humanities-and-policy-studies") {
            setBanner({
                title: "Faculty Of Humanities And Policy Studies",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }




        if (location === "krishna-school-of-emerging-technology-and-applied-research") {
            setBanner({
                title: "Krishna School Of Emerging Technology And Applied Research",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-diploma-studies") {
            setBanner({
                title: "Krishna School Of Diploma Studies",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-technology") {
            setBanner({
                title: "Krishna School Of Technology",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-pharmacy-and-research") {
            setBanner({
                title: "Krishna School Of Pharmacy And Research",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-ayurved-medical-college") {
            setBanner({
                title: "Krishna Ayurved Medical College",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-nursing") {
            setBanner({
                title: "Krishna School Of Nursing",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-physiotherapy-and-rehabilitation") {
            setBanner({
                title: "Krishna School Of Physiotherapy And Rehabilitation",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-sciences") {
            setBanner({
                title: "Krishna School Of Science",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-arts-and-humanities") {
            setBanner({
                title: "Krishna School Of Arts And Humanities",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-commerce") {
            setBanner({
                title: "Krishna School Of Commerce",
                img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg",
            });
        }
        if (location === "krishna-school-of-business-management") {
            setBanner({
                title: "Krishna School Of Business Management",
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

export default Schools