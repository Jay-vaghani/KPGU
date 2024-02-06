import React, { useContext, useRef } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { AppContext } from '../../../../../contexts/AppContext';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import required modules
import { EffectFade, Pagination, Autoplay, } from 'swiper/modules';

import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';

function Facilities() {

    const { maxWidth } = useContext(AppContext);
    const swiperRef = useRef(null);

    const CustomButton = ({ onClick, side }) => {
        return (
            <Button variant="contained" color="secondary" onClick={onClick}>
                {side === "right" ? (
                    <ArrowForwardIosRounded />
                ) : (
                    <ArrowBackIosNewRounded />
                )}
            </Button>
        );
    };

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    };


    const FacilitiesArray = [
        {
            title: "Smart Classrooms",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Well Equipped departments and laboratories",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Cafeteria",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Library",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Auditorium",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Workshop",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Hostels",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Hostel Room",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Hostel Mess",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Stationary Stall",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Playground Facility",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Banking Facility",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Transport Facility",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
        {
            title: "Parking Facility",
            images: [
                "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?w=1380&t=st=1705550376~exp=1705550976~hmac=86043f3dc6070798599048979e3f0ccd892f0f2a6962906effc69e017e248114",
                "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=1380&t=st=1705550407~exp=1705551007~hmac=c4d98e87b0d42eddca400c9c13d89acb1e47eb80a166bd804b3da1b4ffe0e3f3",
                "https://img.freepik.com/free-photo/woman-standing-watching-students-working-tablets_259150-60238.jpg?w=1380&t=st=1705550516~exp=1705551116~hmac=f5f3a7a6f8b3f62adb7c3056a2386c29444e12c842043fa3ca1b1169c0993127",
            ],
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt provident dignissimos, odio blanditiis enim dolore consectetur quidem labore iure aspernatur earum nisi, aliquam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat atque pariatur porro nesciunt debitis."
        },
    ]

    return (
        <>
            <Box>
                <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={4} className="smooth-shadow" borderRadius={4}>
                    <h3 className='text-uppercase fw-bold color-secondary'>Infrastructure</h3>
                    <Typography variant='body1' fontSize={20} fontFamily={"Nunito Sans"} textAlign={"justify"} fontWeight={700}>
                        Krishna Edu campus, KPGU, Vadodara is a lush green land about 27 acres of serene countryside and away from city environment. The campus is cosmopolitan in character, truly global in outlook yet deeply rooted to traditions and values of Indian culture. The campus harbours Krishna School of Emerging Technology & Applied Research, Krishna School of Diploma Studies, Krishna School of Pharmacy & Research, Krishna School of Physiotherapy & Rehabilitation, Krishna School of Nursing, Krishna Ayurved Medical College, Krishna School of Science, Krishna School of Business Management, Krishna School of Commerce and Krishna School of Arts & Humanities.
                    </Typography>
                </Box>

                <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={4} className="smooth-shadow" borderRadius={4}>
                    <h3 className='text-uppercase fw-bold color-secondary mb-4'>Facilities</h3>
                    <Swiper
                        height={""}
                        spaceBetween={30}
                        effect={'fade'}
                        ref={swiperRef}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper smooth-shadow"
                        loop={true}
                    >
                        {
                            FacilitiesArray.map(({ des, images, title }, index) => (
                                <SwiperSlide key={index}  className='h-100'>
                                    <Grid container borderRadius={4} overflow={"hidden"} >
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Swiper
                                                    height={""}
                                                    spaceBetween={30}
                                                    effect={'fade'}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    autoplay={{
                                                        delay: 2000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    modules={[EffectFade, Pagination, Autoplay]}
                                                    className="mySwiper"
                                                    loop={true}
                                                    grabCursor
                                                >
                                                    {
                                                        images.map((img, index) =>
                                                        (
                                                            <SwiperSlide key={index}>
                                                                <img src={img} className='w-100 ' style={{cursor: "grab"}} alt="" />
                                                            </SwiperSlide>
                                                        ))
                                                    }


                                                </Swiper>

                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ boxShadow: "50px 50px 0px #000" }}>
                                            <Box p={2} >
                                                <h5 className='text-uppercase fw-bold color-secondary '>{title}</h5>
                                                <Typography variant='body1' fontSize={20} fontFamily={"Nunito Sans"} textAlign={{
                                                    xs: "start",
                                                    sm: "justify"
                                                }} fontWeight={700}>
                                                    {des}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    <Stack direction={"row"} spacing={1} mt={2}>
                        <CustomButton onClick={handlePrev} side="left" />
                        <CustomButton onClick={handleNext} side="right" />
                    </Stack>
                </Box>
                {/* {
                    FacilitiesArray.map(({ des, images, title }, index) => <FacilitiesSection des={des} images={images} title={title} key={index} />)
                } */}
            </Box>
        </>
    )
}

export default Facilities