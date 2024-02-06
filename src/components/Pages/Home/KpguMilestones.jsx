import { Box, Grid, Typography } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Add, AddRounded } from "@mui/icons-material";

function KpguMilestones() {
  const { maxWidth } = useContext(AppContext);

  const KpguMilestonesStats = [
    {
      name: "Institutes",
      number: 10,
      image:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707213435/KPGU/icon/faculty.svg",
    },
    {
      name: "Acres Green Campus",
      number: 25,
      image:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707213435/KPGU/icon/Map.svg",
    },
    {
      name: "Faculty Staff",
      number: 300,
      image:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707213435/KPGU/icon/staff.svg",
    },
    {
      name: "Company Associate",
      number: 750,
      image:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707213435/KPGU/icon/company.svg",
    },
  ];

  const KpguMilestonesComponents = ({ name, number, image }) => (
    <Grid item xs={12} sm={6} md={4} lg={3} textTransform={"uppercase"}>
      <Box className="smooth-shadow-card" pb={3} pt={1.5} borderRadius={4}>
        <Box px={"15%"} pt={3} pb={2}>
          <img src={image} alt="" className="w-100" />
        </Box>
        <Box>
          <Typography
            variant="h3"
            fontSize={"45px"}
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
            className="fw-medium "
          >
            {number}
            <Add sx={{ ml: -0.5, fontSize: 40 }} />
          </Typography>
          <h4 className="text-center fs-4 fw-bold ">{name}</h4>
        </Box>
      </Box>
    </Grid>
  );

  const navigation = useNavigate();
  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      p={"3%"}
      bgcolor={"#fff"}
      mt={7}
      borderRadius={4}
      className="smooth-shadow"
    >
      <h2 className="fs-1 text-uppercase fw-semibold mb-4 text-uppercase">
        University achievements and milestones
      </h2>
      <Grid container spacing={3}>
        {KpguMilestonesStats.map(({ name, number, image }, index) => (
          <KpguMilestonesComponents name={name} number={number} key={index} image={image}/>
        ))}
      </Grid>
    </Box>
  );
}

export default KpguMilestones;
