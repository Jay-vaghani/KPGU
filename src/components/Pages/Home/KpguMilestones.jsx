import { Box, Grid, Typography } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Add, AddRounded } from "@mui/icons-material";
import { Institutes, Achievements, AvailablePrograms, GraduatedStudents } from "../../../Utils/Icons/CustomIcon"

function KpguMilestones() {
  const { maxWidth } = useContext(AppContext);

  const KpguMilestonesStats = [
    {
      name: "educational institutes ",
      number: 10,
      icon: <Institutes />,
    },
    {
      name: "PROGRAMS AVAILABLE ",
      number: 50,
      icon: <AvailablePrograms />,
    },
    {
      name: "YEARS OF GLORIOUS HISTORY",
      number: new Date().getFullYear() - 2004,
      icon: <Achievements />,
    },

    {
      name: "Total Students Graduated",
      number: "16000",
      icon: <GraduatedStudents />,
    },
  ];

  console.log();

  const KpguMilestonesComponents = ({ name, number, icon }) => (
    <Grid item xs={12} sm={6} md={4} lg={3} textTransform={"uppercase"}>
      <Box className=" h-100" borderRadius={4} p={1}>
        <Box
          className=" d-flex align-items-center "
          pb={1}
          borderRadius={4}
          overflow={"hidden"}
        >
          <Box mr={"10px"}>
            {icon}
          </Box>
          <Box className="d-flex align-items-center ">
            <h1 className="mb-0 fs-1 fw-bolder">
              {number}<Add sx={{ ml: 0, fontSize: "35px", fontWeight: 900, mb: "7px" }} />
            </h1>
          </Box>
        </Box>
        <h6 className="fw-bold px-2" style={{ letterSpacing: "1px", color: "#525271", wordSpacing: "2px" }}>{name}</h6>
      </Box>
    </Grid>
  );

  const navigation = useNavigate();
  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      p={"5%"}
      bgcolor={"#fff"}
      mt={7}
      borderRadius={4}
      className="smooth-shadow"
    >
      <h2 className="fs-1 text-uppercase fw-semibold mb-4 text-uppercase">
        University achievements and milestones
      </h2>
      <Grid container spacing={4}>
        {KpguMilestonesStats.map(({ name, number, icon }, index) => (
          <KpguMilestonesComponents
            name={name}
            number={number}
            key={index}
            icon={icon}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default KpguMilestones;
