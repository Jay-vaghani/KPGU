import React from 'react'
import { Grid } from "@mui/material";
import ProgramCard from "../../../../../../Common/ProgramCard";

function KstPG() {
    const Programs = [
        {
            title: "M.Tech in Computer Science & Engineering",
            des: "Forge the future with Computer Science & Engineering program Dive into cutting-edge labs Here, you'll become not just an engineer, but a builder of tomorrow's world. Enroll and code your legacy.",
            link: "",
            pageLink: "",
        },
        {
            title: "M.Tech in Computer Engineering",
            des: "Forge the future with Computer Science & Engineering program Dive into cutting-edge labs Here, you'll become not just an engineer, but a builder of tomorrow's world. Enroll and code your legacy.",
            link: "",
            pageLink: "",
        },
        {
            title: "M.Tech in Electrical Engineering",
            des: "Forge the future with Computer Science & Engineering program Dive into cutting-edge labs Here, you'll become not just an engineer, but a builder of tomorrow's world. Enroll and code your legacy.",
            link: "",
            pageLink: "",
        },
        {
            title: "M.Tech in Information Technology",
            des: "Forge the future with Computer Science & Engineering program Dive into cutting-edge labs Here, you'll become not just an engineer, but a builder of tomorrow's world. Enroll and code your legacy.",
            link: "",
            pageLink: "",
        },
    ];

    return (
        <Grid container spacing={2}>
            {Programs.map(({ des, link, title, pageLink }, index) => (
                <ProgramCard des={des} link={link} title={title} pageLink={pageLink} key={index} />
            ))}
        </Grid>
    )
}

export default KstPG