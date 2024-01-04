import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { Box, Tab, Tabs } from "@mui/material";
import Layout from "react-masonry-list";

function CampusGallery() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const [category, setCategory] = useState("All");
  const [colCount, setColCount] = useState();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setCategory(newValue);
  };

  const ImageData = [
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-1",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-2",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-3",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-4",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-5",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-6",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-7",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-8",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-9",
      category: "CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-10",
      category: "CO-CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-11",
      category: "CO-CURRICULUM"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-12",
      category: "CO-CURRICULUM",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-13",
      category: "CO-CURRICULUM",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-14",
      category: "CO-CURRICULUM",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-15",
      category: "CO-CURRICULUM",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-16",
      category: "CO-CURRICULUM",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-17",
      category: "CO-CURRICULUM",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-18",
      category: "CO-CURRICULUM",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-19",
      category: "INTERNATIONAL AFFAIRS",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-20",
      category: "INTERNATIONAL AFFAIRS",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-21",
      category: "INTERNATIONAL AFFAIRS",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-22",
      category: "INTERNATIONAL AFFAIRS",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-23",
      category: "INTERNATIONAL AFFAIRS",
    },

    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-25",
      category: "INTERNATIONAL AFFAIRS",
    },
  ];

  const filterImage = ImageData.filter((img) => { return "Affairs" })

  useEffect(() => {
    if (window.innerWidth < 460) {
      setColCount(1);
    }
    if (window.innerWidth < 960 && window.innerWidth > 460) {
      console.log("ok");
      setColCount(2);
    }

    if (window.innerWidth < 1200 && window.innerWidth > 960) {
      console.log("ok");
      setColCount(3);
    }

    const fetchImages = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setImages(res);
    };

    fetchImages();
  }, [colCount]);



  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <Box bgcolor={"#fff"} p={2} borderRadius={4}>
        <Tabs
          value={category}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant={`scrollable`}
        >
          <Tab value={"All"} label="All" title="All" />
          <Tab value={"Curriculum"} label="Curriculum " title="Curriculum" />
          <Tab value={"Co-Curriculum"} label="Co-Curriculum " title="Co-Curriculum" />
          <Tab value={"International Affairs"} label="International Affairs " title="International Affairs" />
        </Tabs>
      </Box>
      <Box mt={5}>
        {/* <Layout
          className="justify-content-start"
          minWidth={100}
          items={ImageData.map((item) => {
            return <Box overflow={"hidden"}><img src={item.img} className="w-100 rounded-3 gallery-image" /></Box>;
          })}
          colCount={colCount}
        ></Layout> */}

        <Layout
          className="justify-content-start"
          minWidth={100}
          items={filterImage.map((item) => {
            return <Box overflow={"hidden"}><img src={item.img} className="w-100 rounded-3 gallery-image" /></Box>;
          })}
          colCount={colCount}
        ></Layout>
      </Box>
    </Box>
  );
}

export default CampusGallery;
