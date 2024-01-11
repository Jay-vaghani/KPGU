import React, { useContext, useState } from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import { AppContext } from "../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";

function FacultyOfScience() {
    const { maxWidth, innerWidth } = useContext(AppContext);

    const [value, setValue] = useState("KSET");
    const tabCss = {
        textTransform: "uppercase",
        fontWeight: 600,
        alignItems: "start",
        textAlign: "start",
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
                            Faculty of Science
                        </h2>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={3}>
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
                                ? innerWidth < 1000
                                    ? "scrollable"
                                    : "fullWidth"
                                : "scrollable"
                                }`}
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab
                                label="Krishna School of Sciences"
                                value={"KSET"}
                                sx={tabCss}
                                onClick={() => navigate("krishna-school-of-sciences/ug")}
                            />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={9}>
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

export default FacultyOfScience