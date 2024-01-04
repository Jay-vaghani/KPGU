import {
    Box,
    IconButton,
    ImageList,
    ImageListItem,
    Modal,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import Filter from "./Filter";
import { CloseRounded } from "@mui/icons-material";

const itemData = [
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-1",
        title: "Bed",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-2",
        title: "Books",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-3",
        title: "Sink",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-4",
        title: "Kitchen",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-5",
        title: "Blinds",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-6",
        title: "Chairs",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-7",
        title: "Laptop",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-8",
        title: "Doors",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-9",
        title: "Coffee",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-10",
        title: "Storage",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-11",
        title: "Candle",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-12",
        title: "Coffee table",
    },    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-13",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-14",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-15",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-16",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-17",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-18",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-19",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-20",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-21",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-22",
        title: "Coffee table",
    },
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-23",
        title: "Coffee table",
    },
    
    {
        img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-25",
        title: "Coffee table",
    },
];

function Gallery() {
    const { maxWidth, innerWith } = useContext(AppContext);
    const [cols, setCols] = useState();
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);

    const handleClose = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (innerWidth < 400) {
            setCols(1);
        }
        if (innerWidth >= 400 && innerWidth < 750) {
            setCols(2);
        }
        if (innerWidth >= 751 && innerWidth < 1200) {
            setCols(3);
        }
        if (innerWidth >= 1200) {
            setCols(3);
        }
    }, [cols]);

    console.log(cols);
    return (
        <Box px={"3%"} overflow={"hidden"}>
            <Filter
                filterItems={[
                    "All",
                    "Curriculum",
                    "Co-Curriculum",
                    "International Affairs",
                ]}
            />
            <Box width={maxWidth} mx={"auto"}>
                <ImageList variant="masonry" cols={cols} gap={15}>
                    {itemData.map((item) => (
                        <ImageListItem
                            key={item.img}
                            sx={{ overflow: "hidden" }}
                            className="rounded-2"
                        >
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                className=" gallery-image"
                                onClick={() => {
                                    handleClose();
                                    setImage(item.img);
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        width: "90%",
                        mx: "auto",
                        minHeight: "100vh",
                        p: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <>
                        <Box
                            maxWidth={"650px"}
                            width={"100%"}
                            height={"90vh"}
                            sx={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            mx={"auto"}
                            border={0}
                        ></Box>
                        <IconButton
                            sx={{ position: "fixed", right: 0, top: 0 }}
                            onClick={() => handleClose()}
                        >
                            <CloseRounded sx={{ color: "#fff" }} fontSize="large" />
                        </IconButton>
                    </>
                </Modal>
            </Box>
        </Box>
    );
}

export default Gallery;
