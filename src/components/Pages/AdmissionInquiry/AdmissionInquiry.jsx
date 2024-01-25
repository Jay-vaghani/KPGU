import React, { useContext, useEffect, useState } from "react";
import {
    Autocomplete,
    Box,
    Button,
    Grid,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { AndhraPradesh, Assam, Gujarat, Bihar, Chhattisgarh, DadraAndNagarHaveliDamanDiu, Delhi, Goa, HimachalPradesh, JammuKashmir, Jharkhand, Karnataka, Kerala, Ladakh, Lakshadweep, MadhyaPradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Puducherry, Punjab, Rajasthan, Sikkim, TamilNadu, Telangana, Tripura, UttarPrades, Uttarakhand, WestBengal, AndamanNicobar, Haryana, ArunachalPradesh } from "./CityList";

import { After10th, AfterDiplomaEngineeringD2D, AfterGraduation, AfterItiC2D, AfterMasters, Arts12th, Commerce12th, Science12th } from "./CourseList";
import { AlternateEmail, EmailRounded, LocalPhoneRounded, WhatsApp } from "@mui/icons-material";


function AdmissionInquiry() {
    const { maxWidth, innerWidth } = useContext(AppContext);
    const [cityList, setCityList] = useState([])
    const [courseList, setCourseList] = useState([])

    const [state, setState] = useState("")
    const [coursesAfter, setCoursesAfter] = useState("")


    const year = new Date().getFullYear();

    const StudentCategory = ["OPEN", "SEBC", "SC/ST", "OTHER"];

    const CoursesAfter = [
        "After 10th",
        "After 12th [Science]",
        "After 12th [Commerce]",
        "After 12th [Arts]",
        "After Diploma Engineering. [D2D]",
        "After ITI [C2D]",
        "After Graduation",
        "After Masters"
    ];

    const State = [
        "Other",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Andaman And Nicobar",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Dadra and Nagar Haveli Daman & Diu",
        "Delhi",
        "Jammu & Kashmir",
        "Ladakh",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Lakshadweep",
        "Puducherry",
    ];


    useEffect(() => {

        if (state === "Andhra Pradesh") {
            setCityList([...AndhraPradesh])
        }
        if (state === "Arunachal Pradesh") {
            setCityList([...ArunachalPradesh])
        }
        if (state === "Assam") {
            setCityList([...Assam])
        }
        if (state === "Bihar") {
            setCityList([...Bihar])
        }
        if (state === "Chhattisgarh") {
            setCityList([...Chhattisgarh])
        }
        if (state === "Goa") {
            setCityList([...Goa])
        }
        if (state === "Gujarat") {
            setCityList([...Gujarat])
        }
        if (state === "Andaman And Nicobar") {
            setCityList([...AndamanNicobar])
        }
        if (state === "Haryana") {
            setCityList([...Haryana])
        }
        if (state === "Himachal Pradesh") {
            setCityList([...HimachalPradesh])
        }
        if (state === "Jharkhand") {
            setCityList([...Jharkhand])
        }
        if (state === "Karnataka") {
            setCityList([...Karnataka])
        }
        if (state === "Kerala") {
            setCityList([...Kerala])
        }
        if (state === "Madhya Pradesh") {
            setCityList([...MadhyaPradesh])
        }
        if (state === "Maharashtra") {
            setCityList([...Maharashtra])
        }
        if (state === "Manipur") {
            setCityList([...Manipur])
        }
        if (state === "Meghalaya") {
            setCityList([...Meghalaya])
        }
        if (state === "Mizoram") {
            setCityList([...Mizoram])
        }
        if (state === "Nagaland") {
            setCityList([...Nagaland])
        }
        if (state === "Odisha") {
            setCityList([...Odisha])
        }
        if (state === "Punjab") {
            setCityList([...Punjab])
        }
        if (state === "Rajasthan") {
            setCityList([...Rajasthan])
        }
        if (state === "Dadra and Nagar Haveli Daman & Diu") {
            setCityList([...DadraAndNagarHaveliDamanDiu])
        }
        if (state === "Delhi") {
            setCityList([...Delhi])
        }
        if (state === "Jammu & Kashmir") {
            setCityList([...JammuKashmir])
        }
        if (state === "Ladakh") {
            setCityList([...Ladakh])
        }
        if (state === "Sikkim") {
            setCityList([...Sikkim])
        }
        if (state === "Tamil Nadu") {
            setCityList([...TamilNadu])
        }
        if (state === "Telangana") {
            setCityList([...Telangana])
        }
        if (state === "Tripura") {
            setCityList([...Tripura])
        }
        if (state === "Uttarakhand") {
            setCityList([...Uttarakhand])
        }
        if (state === "Uttar Pradesh") {
            setCityList([...UttarPrades])
        }
        if (state === "West Bengal") {
            setCityList([...WestBengal])
        }
        if (state === "Lakshadweep") {
            setCityList([...Lakshadweep])
        }
        if (state === "Puducherry") {
            setCityList([...Puducherry])
        }




        if (coursesAfter === "After 10th") {
            console.log("ok");
            setCourseList([...After10th])
        }
        if (coursesAfter === "After 12th [Science]") {
            setCourseList([...Science12th])
        }
        if (coursesAfter === "After 12th [Commerce]") {
            setCourseList([...Commerce12th])
        }
        if (coursesAfter === "After 12th [Arts]") {
            setCourseList([...Arts12th])
        }
        if (coursesAfter === "After After Diploma Engineering. [D2D]") {
            setCourseList([...AfterDiplomaEngineeringD2D])
        }
        if (coursesAfter === "After After ITI [C2D]") {
            setCourseList([...AfterItiC2D])
        }
        if (coursesAfter === "After Graduation") {
            setCourseList([...AfterGraduation])
        }
        if (coursesAfter === "After Masters") {
            setCourseList([...AfterMasters])
        }
    }, [state, coursesAfter])





    return (
        <>
            <Box
                maxWidth={maxWidth}
                mx={"auto"}
                px={"3%"}
                py={"2%"}
                bgcolor={"#fff"}
                borderRadius={4}
                className="smooth-shadow"
                mt={4}
            >
                <h1 className="mb-0 fw-bold color-secondary">
                    ADMISSION INQUIRY FOR YEAR{" "}
                    <Typography
                        variant="caption"
                        fontSize={"inherit"}
                        fontWeight={"inherit"}
                    >
                        {year}-{year + 1}
                    </Typography>
                </h1>
            </Box>
            <Box
                maxWidth={maxWidth}
                mx={"auto"}
                borderRadius={4}
                mt={4}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                        <Box bgcolor={"#fff"} height={`${innerWidth < 600 ? "auto" : "100%"}`} p={"3%"} borderRadius={4} className="smooth-shadow">
                            <h2 className="fs-1 fw-semibold color-secondary p-2">For Any Query </h2>
                            <Grid container justifyContent={"space-around"} height={"100%"}>
                                <Grid item xs={12} sm={4} md={12}>
                                    <Stack direction={{
                                        xs: "column",
                                        md: "row"
                                    }}
                                        className="smooth-shadow-card"
                                        borderRadius={4}
                                    >
                                        <Box>
                                            <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1706176937/KPGU/Images/Icon-Images/whatsapp-app.svg" width={"150px"} alt="" />
                                        </Box>
                                        <Box p={2}>
                                            <h3 className="text-success fw-semibold">WhatsApp</h3>
                                            <Button variant="contained" color="success" startIcon={<WhatsApp />}>WhatsApp</Button>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={4} md={12}>
                                    <Stack direction={{
                                        xs: "column",
                                        md: "row"
                                    }}
                                        className="smooth-shadow-card"
                                        borderRadius={4}
                                    >
                                        <Box>
                                            <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1706176937/KPGU/Images/Icon-Images/phone.svg" width={"150px"} alt="" />
                                        </Box>
                                        <Box p={2}>
                                            <h3 className="text-primary fw-semibold">Phone</h3>
                                            <Button variant="contained" color="info" startIcon={<LocalPhoneRounded />}>Phone</Button>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={4} md={12}>
                                    <Stack direction={{
                                        xs: "column",
                                        md: "row"
                                    }}
                                        className="smooth-shadow-card"
                                        borderRadius={4}
                                    >
                                        <Box>
                                            <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1706176937/KPGU/Images/Icon-Images/gmail.svg" width={"150px"} alt="" />
                                        </Box>
                                        <Box p={2}>
                                            <h3 className="text-danger fw-semibold">Email</h3>
                                            <Button variant="contained" color="primary" startIcon={<EmailRounded />}>Email</Button>
                                        </Box>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Box p={"3%"} bgcolor={"#fff"} borderRadius={4} className="smooth-shadow">
                            <Grid container gap={2} >
                                <Grid item xs={12} >
                                    <Box>
                                        <TextField
                                            type="text"
                                            color="secondary"
                                            fullWidth
                                            label="Name"
                                            variant="filled"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <TextField
                                            type="email"
                                            color="secondary"
                                            fullWidth
                                            label="Email ID"
                                            variant="filled"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <TextField
                                            type="number"
                                            color="secondary"
                                            fullWidth
                                            label="Contact No"
                                            variant="filled"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <TextField
                                            color="secondary"
                                            fullWidth
                                            label="Student Category"
                                            select
                                            variant="filled"
                                            value={"OPEN"}
                                        >
                                            {StudentCategory.map((category, index) => (
                                                <MenuItem value={category} key={index}>
                                                    {category}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <Autocomplete
                                            fullWidth
                                            onSelect={(e) => setState(e.target.value)}
                                            options={State}
                                            autoComplete
                                            renderInput={(params) => <TextField {...params} variant="filled" color="secondary" label="Select State" />}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <Autocomplete
                                            fullWidth
                                            options={cityList}
                                            autoComplete
                                            disabled={state ? false : true}
                                            renderInput={(params) => <TextField {...params} variant="filled" color="secondary" label="Select City" />}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <Autocomplete
                                            fullWidth
                                            onSelect={(e) => setCoursesAfter(e.target.value)}
                                            options={CoursesAfter}
                                            autoComplete
                                            renderInput={(params) => <TextField {...params} variant="filled" color="secondary" label="Courses After" />}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <Autocomplete
                                            fullWidth
                                            options={courseList}
                                            autoComplete
                                            disabled={coursesAfter ? false : true}
                                            renderInput={(params) => <TextField {...params} variant="filled" color="secondary" label="Select Program" />}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <Autocomplete
                                            fullWidth
                                            options={courseList}
                                            autoComplete
                                            disabled={coursesAfter ? false : true}
                                            renderInput={(params) => <TextField {...params} variant="filled" color="secondary" label="Select Program" />}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}

export default AdmissionInquiry;


{/*  */ }

