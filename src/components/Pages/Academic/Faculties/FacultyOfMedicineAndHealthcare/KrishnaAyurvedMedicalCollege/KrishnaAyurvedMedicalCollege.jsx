import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";

function KrishnaAyurvedMedicalCollege() {
    const { maxWidth, innerWidth } = useContext(AppContext);

    const navigate = useNavigate();

    const [value, setValue] = useState("UG");
    const tabCss = {
        textTransform: "uppercase",
        fontWeight: 600,
        textAlign: "start",
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <h3 className="fw-bold">
                Krishna Ayurved Medical College [K.A.M.C]
            </h3>

            <Box my={4}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant={"scrollable"}
                    indicatorColor="secondary"
                    textColor="secondary"
                >
                    <Tab
                        label="UG"
                        sx={tabCss}
                        value={"UG"}
                        onClick={() => navigate("ug")}
                    />

                </Tabs>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </Box>
    );
}

export default KrishnaAyurvedMedicalCollege