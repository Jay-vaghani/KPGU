import React, { useContext, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Stack, Typography, Button, Box, IconButton } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";

function Filter({ filterItems }) {
    const { maxWidth } = useContext(AppContext);

    const [showFilter, setSetShowFilter] = useState(false)

    return (
        <Box width={maxWidth} mx={"auto"} my={4}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                <Typography
                    variant="h2"
                    className="about-heading"
                    textTransform={"uppercase"}
                    letterSpacing={2}
                    fontWeight={600}
                >
                    Gallery
                </Typography>
                <Stack direction={"row"} spacing={1} display={{
                    xs: "none",
                    md: "flex"
                }}>
                    {filterItems.map((item, index) => {
                        return <Button variant="contained" key={index} size="small" disableElevation>{item}</Button>
                    })}
                </Stack>
                <Box display={{
                    xs: "block",
                    md: "none"
                }}>
                    <Button startIcon={<FilterAlt />} variant="contained" disableElevation size="small" onClick={() => setSetShowFilter(!showFilter)}>filter</Button>
                </Box>
            </Stack>
            <Box width={"100%"} sx={{overflowX: "auto"}} py={1}>
                <Stack direction={"row"} spacing={1} mt={1} className={`filter ${showFilter ? "active" : ""}`}>
                    {filterItems.map((item, index) => {
                        return <Button sx={{ lineHeight: 0 }} variant="contained" key={index} size="small" disableElevation>{item}</Button>
                    })}
                </Stack>
            </Box>
        </Box>
    );
}

export default Filter;

