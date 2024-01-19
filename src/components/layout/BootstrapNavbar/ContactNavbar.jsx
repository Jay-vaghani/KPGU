import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, IconButton, Stack, Typography, Modal, Alert } from '@mui/material';
import { AppContext } from '../../../contexts/AppContext';
import { CallRounded, CloseRounded, FacebookRounded, FeedRounded, Instagram, LinkedIn, MessageTwoTone, SchoolRounded, WorkRounded, YouTube } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { StudentIcon } from '../../../Utils/Icons/CustomIcon';
import { } from 'bootstrap';

function ContactNavbar() {
    const { maxWidth, innerWidth } = useContext(AppContext);
    const [callButton, setCallButton] = useState(false)

    const [open, setOpen] = useState(false);
    const handlePopOver = () => {
        setOpen(!open)
    };

    useEffect(() => {

        function getDayName(date = new Date(), locale = 'en-US') {
            return date.toLocaleDateString(locale, { weekday: 'long' });
        }

        console.log();

        const saturdayCheck = getDayName() === "Saturday"

        if (saturdayCheck) {
            const day = new Date().getDate()
            const weekOfTheMonth = Math.floor((day / 7) + 1)

            if (weekOfTheMonth === 1 || weekOfTheMonth === 3) {
                setCallButton(false)
            } else {
                setCallButton(true)
            }
        }
        else {
            setCallButton(true)
        }
    }, [])


    const navigate = useNavigate()

    return (
        <Box maxWidth={maxWidth} mx={"auto"} px={2} display={innerWidth < 1131 ? "none" : "block"}>
            <Grid container py={0.5} alignItems={"center"}>
                <Grid item xs={4}>
                    <Stack direction={"row"}>
                        <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1705647306/KPGU/logo.svg" alt="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")} className='w-100' />

                    </Stack>
                </Grid>
                <Grid item xs={8}>
                    <Stack direction={"row"} justifyContent={"end"} alignItems={""} spacing={1}>
                        <Stack justifyContent={"space-around"} py={0.5}>
                            <Button variant='contained' color='secondary' disableElevation className='fw-semibold justify-content-start' startIcon={<SchoolRounded />}>Student corner</Button>
                            <Button variant='contained' color='secondary' disableElevation className='fw-semibold justify-content-start' startIcon={<CallRounded />} onClick={handlePopOver}>Call</Button>
                        </Stack>
                        <Stack justifyContent={"space-around"} py={0.5}>
                            <Button variant='contained' color='secondary' disableElevation className='fw-semibold justify-content-start' startIcon={<FeedRounded />}>admission enquiry</Button>
                            <Button variant='contained' color='secondary' disableElevation className='fw-semibold justify-content-start' startIcon={<WorkRounded />}>Career</Button>
                        </Stack>
                        <Stack>
                            <Box>
                                <IconButton target='_blank' href='https://www.instagram.com/kpgu_official' sx={{ bgcolor: "#fff", color: "secondary.main", m: 0.5 }} >
                                    <Instagram color='inherit' sx={{ fontSize: "28px" }} />
                                </IconButton>
                                <IconButton target='_blank' href='https://www.facebook.com/KPGU.Vadodara' sx={{ bgcolor: "#fff", color: "secondary.main", m: 0.5 }} >
                                    <FacebookRounded color='inherit' sx={{ fontSize: "28px" }} />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton target='_blank' href='https://www.youtube.com/@kpguvadodara6247' sx={{ bgcolor: "#fff", color: "secondary.main", m: 0.5 }} >
                                    <YouTube color='inherit' sx={{ fontSize: "28px" }} />
                                </IconButton>
                                <IconButton target='_blank' href='https://www.linkedin.com/company/kpgu-vadodara' sx={{ bgcolor: "#fff", color: "secondary.main", m: 0.5 }} >
                                    <LinkedIn color='inherit' sx={{ fontSize: "28px" }} />
                                </IconButton>
                            </Box>
                        </Stack>

                    </Stack>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handlePopOver}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='d-flex justify-content-center align-items-center'
            >
                <Box bgcolor={"#fff"} p={2} sx={{ outline: 0 }} borderRadius={4} maxWidth={"400px"} width={"500px"}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <h4 className='fw-bold color-secondary mb-0'>Working Hours</h4>
                        <Box>
                            <IconButton sx={{ bgcolor: "#fff", color: "secondary.main", m: 0.5 }} onClick={handlePopOver}>
                                <CloseRounded color='inherit' sx={{ fontSize: "28px" }} />
                            </IconButton>
                        </Box>
                    </Stack>
                    <Box>

                        <Typography variant='h6' color={"secondary"} fontWeight={600}>Open: Monday-Saturday</Typography>
                        <Typography variant='h6' color={"secondary"} fontWeight={600}>Time: 8:00AM-5:00PM</Typography>

                        {
                            callButton ?
                                <Button variant='contained' color='secondary' startIcon={<CallRounded />} className='mt-2' href='tel:8238046519'>
                                    <Box display={{ xs: "none", sm: "block" }}><Typography variant='body1' letterSpacing={1} fontWeight={"600"}>8238046519</Typography></Box>
                                    <Box display={{ xs: "block", sm: "none" }}><Typography variant='body1' letterSpacing={1} fontWeight={"600"}>call</Typography></Box>
                                </Button> :
                                <Alert severity="warning" sx={{ fontWeight: 800, letterSpacing: 0.5 }} className='mt-3 text-capitalize'>The first and third Saturdays of the month are designated as off days
                                </Alert>
                        }


                        {/*  */}
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default ContactNavbar