import React, { useContext, useState } from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import { AppContext } from "../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";


function FacultyOfMedicineAndHealthcare() {
    const { maxWidth, innerWidth } = useContext(AppContext);

    const [value, setValue] = useState("KSP");
    const tabCss = {
        textTransform: "uppercase",
        fontWeight: 600,
        alignItems: "start",
        textAlign: "start",
        fontSize: "0.85rem"
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate()

    return (
        <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box
                        bgcolor={"#fff"}
                        p={2}
                        borderRadius={2}
                        className="smooth-shadow"
                    >
                        <h2 className="fw-bold text-center">
                            Faculty Of Medicine & Healthcare
                        </h2>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={3.3}>
                    <Box
                        bgcolor={"#fff"}
                        p={2}
                        borderRadius={2}
                        className="smooth-shadow"
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            orientation={`${innerWidth < 1200 ? "horizontal" : "vertical"}`}
                            variant={`${innerWidth < 1200
                                ? innerWidth < 1200
                                    ? "scrollable"
                                    : "fullWidth"
                                : "scrollable"
                                }`}
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab
                                label="Krishna School of Pharmacy & Research"
                                sx={tabCss}
                                onClick={() => navigate("krishna-school-of-pharmacy-and-research/ug")}
                                value={"KSP"}
                            />
                            <Tab
                                label="Krishna School of Physiotherapy & Rehabilitation"
                                value={"KSPR"}
                                sx={tabCss}
                            onClick={() => navigate("krishna-school-of-physiotherapy-and-rehabilitation/ug")}
                            />
                            <Tab
                                label="Krishna Ayurved Medical College"
                                sx={tabCss}
                                onClick={() => navigate("krishna-ayurved-medical-college/ug")}
                                value={"KAMC"}
                            />
                            <Tab
                                label="Krishna School of Nursing"
                                sx={tabCss}
                                onClick={() => navigate("krishna-school-of-nursing/ug")}
                                value={"KSN"}
                            />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={8.7}>
                    <Box
                        bgcolor={"#fff"}
                        minHeight={"100%"}
                        p={2}
                        borderRadius={2}
                        className="smooth-shadow"
                    >
                        <Outlet />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FacultyOfMedicineAndHealthcare