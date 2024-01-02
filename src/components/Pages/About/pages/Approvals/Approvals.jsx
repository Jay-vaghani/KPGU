import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, Tab, Tabs } from "@mui/material";

function Approvals() {
    const { maxWidth } = useContext(AppContext);

    const [value, setValue] = useState(0);
    const tabCss = {
        textTransform: "uppercase",
        fontWeight: 600,
        alignItems: "start",
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    return (
        <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
            <Grid container spacing={2} position={"relative"}>
                <Grid item xs={12} md={4}>
                    <Box
                        position={"sticky"}
                        top={0}
                        p={2}
                        bgcolor={"#fff"}
                        className={"smooth-shadow"}
                        borderRadius={1}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            orientation={`${innerWidth < 900 ? "horizontal" : "vertical"}`}
                            variant="scrollable"
                            textColor="secondary"
                            indicatorColor="secondary"
                        >
                            <Tab
                                label={"INSTITUTE OF TECHNOLOGY"}
                                sx={tabCss}
                                onClick={() => navigate("institute-of-technology")}
                            />
                            <Tab
                                label={"INSTITUTE OF PHARMACY"}
                                sx={tabCss}
                                onClick={() => navigate("institute-of-pharmacy")}
                            />
                            <Tab
                                label={"UGC APPROVAL"}
                                sx={tabCss}
                                onClick={() => navigate("ugc-approval")}
                            />

                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box
                        p={2}
                        bgcolor={"#fff"}
                        className={"smooth-shadow"}
                        borderRadius={1}
                    >
                        <Outlet />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Approvals;
