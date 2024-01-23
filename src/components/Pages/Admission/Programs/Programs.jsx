import React, { useContext, useState } from "react";
import { Box, Button, Grid, Tab } from "@mui/material";
import { AppContext } from "../../../../contexts/AppContext";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Programs() {
    const { maxWidth, innerWidth } = useContext(AppContext);

    const [category, setCategory] = useState("diploma");

    const handleChange = (event, newValue) => {
        setCategory(newValue);
    };


    const UgPrograms = [
        {
            faculty: "FACULTY OF ENGINEERING & TECHNOLOGY",
            ugPrograms: [
                {
                    title: "B. Tech in Computer Science & Engineering"
                },
                {
                    title: "B. Tech in Information Technology"
                },
                {
                    title: "B. Tech in Mechanical Engineering"
                },
                {
                    title: "B. Tech in Electrical Engineering"
                },
                {
                    title: "B. Tech in Civil Engineering"
                },
                {
                    title: "B.Tech in Computer Engineering"
                },
                {
                    title: "B.Tech in Food Technology"
                },
            ]
        },
        {
            faculty: "FACULTY OF SCIENCE",
            ugPrograms: [
                {
                    title: "B.Sc [Honours] in Physics, Chemistry & Mathematics"
                },
                {
                    title: "B.Sc [Honours] in Chemistry, Biotechnology & Microbiology"
                },
            ]
        },
        {
            faculty: "FACULTY OF HUMANITIES & POLICY STUDIES",
            ugPrograms: [
                {
                    title: "B.A. [Honours]"
                },
            ]
        },
        {
            faculty: "FACULTY OF MEDICINE & HEALTHCARE",
            ugPrograms: [
                {
                    title: "B. Pharm"
                },
                {
                    title: "BAMS"
                },
                {
                    title: "B.Sc. (Nursing)"
                },
                {
                    title: "GNM"
                },
                {
                    title: "B.P.T"
                },
            ]
        }
    ]

    return (
        <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
            <h4 className="color-secondary mb-4 fw-bold">FIND YOUR PROGRAMMES</h4>
            <TabContext value={category}>
                <Grid container spacing={2} position={"relative"}>
                    <Grid item xs={12} lg={4}>
                        <Box
                            position={"sticky"}
                            top={0}
                            p={2}
                            bgcolor={"#fff"}
                            className={"smooth-shadow"}
                            borderRadius={4}
                        >
                            <TabList
                                onChange={handleChange}
                                indicatorColor="secondary"
                                aria-label="lab API tabs example"
                                textColor="secondary"
                                orientation={`${innerWidth < 1200 ? "horizontal" : "vertical"}`}
                                variant="scrollable"
                            >
                                <Tab
                                    className="align-items-start"
                                    label="diploma"
                                    value="diploma"
                                    sx={{ fontWeight: 600 }}
                                />
                                <Tab
                                    className="align-items-start"
                                    label="ug programs"
                                    value="ug programs"
                                    sx={{ fontWeight: 600 }}
                                />
                                <Tab
                                    className="align-items-start"
                                    label="pg programs"
                                    value="pg programs"
                                    sx={{ fontWeight: 600 }}
                                />
                                <Tab
                                    className="align-items-start"
                                    label="doctoral program"
                                    value="doctoral program"
                                    sx={{ fontWeight: 600 }}
                                />
                            </TabList>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Box
                            p={2}
                            bgcolor={"#fff"}
                            className={"smooth-shadow"}
                            borderRadius={4}
                        >
                            <TabPanel value="diploma">
                                <h4 className="color-secondary mb-4 fw-bold">FACULTY OF ENGINEERING & TECHNOLOGY</h4>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Box className="smooth-shadow-card" p={2} borderRadius={4}>
                                            <h5 className="color-secondary mb-2 fw-bold">Computer Science & Engineering</h5>
                                            <Button variant="contained" size="small" disableElevation className="fw-bold" color="secondary" >apply</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box className="smooth-shadow-card" p={2} borderRadius={4}>
                                            <h5 className="color-secondary mb-2 fw-bold">Information Technology</h5>
                                            <Button variant="contained" size="small" disableElevation className="fw-bold" color="secondary" >apply</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box className="smooth-shadow-card" p={2} borderRadius={4}>
                                            <h5 className="color-secondary mb-2 fw-bold">Mechanical Engineering</h5>
                                            <Button variant="contained" size="small" disableElevation className="fw-bold" color="secondary" >apply</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box className="smooth-shadow-card" p={2} borderRadius={4}>
                                            <h5 className="color-secondary mb-2 fw-bold">Electrical Engineering</h5>
                                            <Button variant="contained" size="small" disableElevation className="fw-bold" color="secondary" >apply</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box className="smooth-shadow-card" p={2} borderRadius={4}>
                                            <h5 className="color-secondary mb-2 fw-bold">Civil Engineering</h5>
                                            <Button variant="contained" size="small" disableElevation className="fw-bold" color="secondary" >apply</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box className="smooth-shadow-card" p={2} borderRadius={4}>
                                            <h5 className="color-secondary mb-2 fw-bold">Computer Engineering</h5>
                                            <Button variant="contained" size="small" disableElevation className="fw-bold" color="secondary" >apply</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box className="smooth-shadow-card" p={2} borderRadius={4}>
                                            <h5 className="color-secondary mb-2 fw-bold">Chemical Engineering</h5>
                                            <Button variant="contained" size="small" disableElevation className="fw-bold" color="secondary" >apply</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="ug programs">UG PROGRAMS</TabPanel>
                            <TabPanel value="pg programs">PG PROGRAMS</TabPanel>
                            <TabPanel value="doctoral program">DOCTORAL PROGRAM</TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </TabContext>
        </Box>
    );
}

export default Programs;


// {
//     faculty: "",
//     ugPrograms: [
//         {
//             title: ""
//         },
//     ]
// }