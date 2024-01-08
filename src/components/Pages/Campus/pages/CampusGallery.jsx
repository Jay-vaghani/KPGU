import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { Box, ImageList, Tab, Tabs } from "@mui/material";

function CampusGallery() {
  const { maxWidth } = useContext(AppContext);

  const [category, setCategory] = useState("ALL");
  const [colCount, setColCount] = useState();

  useEffect(() => {

    if (window.innerWidth < 460) {
      setColCount(1);
    }
    if (window.innerWidth < 960 && window.innerWidth > 460) {
      setColCount(2);
    }

    if (window.innerWidth < 1200 && window.innerWidth > 960) {
      console.log(window.innerWidth);

      setColCount(3);
    } if (window.innerWidth > 1200) {
      setColCount(3);
    }

  }, []);


  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };


  const ImageData = [
    {
      year: "2023",
      images: [
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-1",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-2",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-3",
          category: "INTERNATIONAL AFFAIRS",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-4",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-5",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-6",
          category: "INTERNATIONAL AFFAIRS",
        },

      ]
    },
    {
      year: "2022",
      images: [
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-7",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-8",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-9",
          category: "INTERNATIONAL AFFAIRS",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-10",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-11",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-12",
          category: "INTERNATIONAL AFFAIRS",
        },
      ]
    },
    {
      year: "2021",
      images: [
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-13",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-14",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-15",
          category: "INTERNATIONAL AFFAIRS",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-16",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-17",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-18",
          category: "INTERNATIONAL AFFAIRS",
        },
      ]
    },
    {
      year: "2020",
      images: [
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-19",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-20",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-21",
          category: "INTERNATIONAL AFFAIRS",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-22",
          category: "CO-CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-23",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-4",
          category: "INTERNATIONAL AFFAIRS",
        },
      ]
    },
    {
      year: "2019",
      images: [
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-23",
          category: "CURRICULUM",
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Images/Gallery/gallery-25",
          category: "CO-CURRICULUM",
        },
      ]
    },

  ]



  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <Box bgcolor={"#fff"} p={2} borderRadius={4}>
        <Tabs
          value={category}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant={`scrollable`}
        >
          <Tab value={"ALL"} label="All" title="All" />
          <Tab value={"CURRICULUM"} label="Curriculum " title="Curriculum" />
          <Tab
            value={"CO-CURRICULUM"}
            label="Co-Curriculum "
            title="Co-Curriculum"
          />
          <Tab
            value={"INTERNATIONAL AFFAIRS"}
            label="International Affairs "
            title="International Affairs"
          />
        </Tabs>
      </Box>
      <Box mt={5}>
        {ImageData.map((imageData, index) => {


          return (
            <Box key={index}>
              <Box borderBottom={3} px={2} borderColor={"primary.main"} position={"relative"}>
                <h2>{imageData.year}</h2>
                <Box p={1} bgcolor={"#fff"} position={"absolute"} right={0} bottom={"-13px"} borderRadius={"50%"} border={4.5} borderColor={"primary.main"}></Box>
                <Box p={0.7} bgcolor={"primary.main"} position={"absolute"} right={"6.8px"} bottom={-7} borderRadius={"50%"}></Box>
              </Box>
              <Box mt={4}>
                <ImageList variant="masonry" cols={colCount} gap={15}>
                  {
                    imageData.images.filter((img) => {
                      if (category === "ALL") {
                        return img
                      }
                      else {
                        return img.category === category
                      }
                    }).map((img) => {
                      return (

                        <Box overflow={"hidden"} mt={"15px"}>
                          <img src={img.img} className="w-100 gallery-image rounded-4" />
                        </Box>
                      )
                    }
                    )
                  }
                </ImageList>
              </Box>
            </Box>
          )

        })}
      </Box>
    </Box>
  );
}

export default CampusGallery;
