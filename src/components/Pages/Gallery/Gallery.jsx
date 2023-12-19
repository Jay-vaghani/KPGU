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
        img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
        title: "Bed",
    },
    {
        img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
        title: "Books",
    },
    {
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        title: "Sink",
    },
    {
        img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        title: "Kitchen",
    },
    {
        img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
        title: "Blinds",
    },
    {
        img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
        title: "Chairs",
    },
    {
        img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
        title: "Laptop",
    },
    {
        img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
        title: "Doors",
    },
    {
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
        title: "Storage",
    },
    {
        img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
        title: "Candle",
    },
    {
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
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
            setCols(4);
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
