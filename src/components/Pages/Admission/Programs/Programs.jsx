import React, { useContext, useState } from "react";
import { Box, Button, Grid, Tab } from "@mui/material";
import { AppContext } from "../../../../contexts/AppContext";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProgramCard from "../../../Common/ProgramCard";

function Programs() {
    const { maxWidth, innerWidth } = useContext(AppContext);

    const [category, setCategory] = useState("diploma");

    const handleChange = (event, newValue) => {
        setCategory(newValue);
    };

    const DiplomaPrograms = [
        {
            faculty: "FACULTY OF ENGINEERING & TECHNOLOGY",
            programs: [
                {
                    title: "Computer Science & Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "Mechanical Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "Civil Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "Chemical Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "Information Technology",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "Electrical Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "Computer Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ],
        },
    ];

    const UgPrograms = [
        {
            faculty: "FACULTY OF ENGINEERING & TECHNOLOGY",
            programs: [
                {
                    title: "B. Tech in Computer Science & Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B. Tech in Information Technology",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B. Tech in Mechanical Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B. Tech in Electrical Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B. Tech in Civil Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.Tech in Computer Engineering",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.Tech in Food Technology",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ],
        },
        {
            faculty: "FACULTY OF SCIENCE",
            programs: [
                {
                    title: "B.Sc [Honours] in Physics, Chemistry & Mathematics",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.Sc [Honours] in Chemistry, Biotechnology & Microbiology",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ],
        },
        {
            faculty: "FACULTY OF HUMANITIES & POLICY STUDIES",
            programs: [
                {
                    title: "B.A. [Honours]",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ],
        },
        {
            faculty: "FACULTY OF MEDICINE & HEALTHCARE",
            programs: [
                {
                    title: "B. Pharm",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "BAMS",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.Sc. (Nursing)",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "GNM",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.P.T",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ],
        },
        {
            faculty: "Faculty Of Commerce & Management",
            programs: [
                {
                    title: "B. Com (Honours) in Wealth Management & Computerized GST",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.B.A [Honours]",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ]
        }
    ];

    const PgPrograms = [
        {
            faculty: "Faculty Of Engineering & Technology",
            programs: [
                {
                    title: "M. Tech in Advance Manufacturing System",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Tech in Data Science",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Tech in Computer Science & Engineering",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Tech in Computer Engineering",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Tech in Electrical Engineering",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Tech in Information Technology",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ],
        },
        {
            faculty: "Faculty Of Medicine & Healthcare",
            programs: [
                {
                    title: "M. Pharm in Pharmaceutics",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Pharm in Pharmacology",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Pharm in Pharmaceutical Quality Assurance",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Pharm in Pharmaceutical Technology",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M.P.T in Musculoskeletal & Sports",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M.P.T in Neurological & Psychosomatic disorders",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M.P.T in Cardio - Respiratory & Intensive Care",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ]
        },
        {
            faculty: "Faculty Of Commerce & Management",
            programs: [
                {
                    title: "Master of Business Administration [M.B.A]",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ]
        }
    ];

    const DoctoralProgram = [
        {
            faculty: "Under Graduate",
            programs: [
                {
                    title: "B. Pharm",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "BAMS",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.Sc. (Nursing)",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "GNM",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "B.P.T",
                    link: "",
                    duration: "4",
                    eligibility:
                        "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ],
        },
        {
            faculty: "Post Graduate",
            programs: [
                {
                    title: "M. Pharm in Pharmaceutics",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Pharm in Pharmacology",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Pharm in Pharmaceutical Quality Assurance",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M. Pharm in Pharmaceutical Technology",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M.P.T in Musculoskeletal & Sports",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M.P.T in Neurological & Psychosomatic disorders",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
                {
                    title: "M.P.T in Cardio - Respiratory & Intensive Care",
                    link: "",
                    duration: "4",
                    eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
                    fees: "1,00,000",
                },
            ]
        }
    ]

    const ProgramComponents = ({ faculty, programs }) => (
        <>
            <h3 className="color-secondary my-5 fw-bold text-uppercase">{faculty}</h3>
            <Grid container spacing={2}>
                {programs.map(({ title, link, duration, eligibility, fees }, index) => (
                    <ProgramCard
                        title={title}
                        link={link}
                        duration={duration}
                        eligibility={eligibility}
                        fees={fees}
                        key={index}
                    />
                ))}

            </Grid>
        </>
    );

    return (
        <Box maxWidth={maxWidth} mx={"auto"} p={"5%"}>
            <h4 className="color-secondary mb-4 fw-bold">FIND YOUR PROGRAMMES</h4>
            <TabContext value={category}>
                <Grid container spacing={2} position={"relative"}>
                    <Grid item xs={12} lg={12}>
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
                                variant={`${innerWidth < 890 ? "scrollable" : "fullWidth"}`}
                            >
                                <Tab label="diploma" value="diploma" sx={{ fontWeight: 600 }} />
                                <Tab
                                    label="ug programs"
                                    value="ug programs"
                                    sx={{ fontWeight: 600 }}
                                />
                                <Tab
                                    label="pg programs"
                                    value="pg programs"
                                    sx={{ fontWeight: 600 }}
                                />
                                <Tab
                                    label="doctoral program"
                                    value="doctoral program"
                                    sx={{ fontWeight: 600 }}
                                />
                            </TabList>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Box
                            p={2}
                            bgcolor={"#fff"}
                            className={"smooth-shadow"}
                            borderRadius={4}
                        >
                            <TabPanel sx={{ p: 0 }} value="diploma">
                                {DiplomaPrograms.map(({ faculty, programs }, index) => (
                                    <ProgramComponents
                                        faculty={faculty}
                                        programs={programs}
                                        key={index}
                                    />
                                ))}
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="ug programs">
                                {UgPrograms.map(({ faculty, programs }, index) => (
                                    <ProgramComponents
                                        faculty={faculty}
                                        programs={programs}
                                        key={index}
                                    />
                                ))}
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="pg programs">
                                {PgPrograms.map(({ faculty, programs }, index) => (
                                    <ProgramComponents
                                        faculty={faculty}
                                        programs={programs}
                                        key={index}
                                    />
                                ))}
                            </TabPanel>
                            <TabPanel value="doctoral program">
                                {DoctoralProgram.map(({ faculty, programs }, index) => (
                                    <ProgramComponents
                                        faculty={faculty}
                                        programs={programs}
                                        key={index}
                                    />
                                ))}
                            </TabPanel>
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
//     programs: [
//         {
//             title: "",
//             link: "",
//             duration: "4",
//             eligibility: "Minimum Aggregate 45% in Physics, Chemistry & Mathematics, Theory exam in H.S.C. of any boards.",
//             fees: "1,00,000",
//         },
//     ]
// }
