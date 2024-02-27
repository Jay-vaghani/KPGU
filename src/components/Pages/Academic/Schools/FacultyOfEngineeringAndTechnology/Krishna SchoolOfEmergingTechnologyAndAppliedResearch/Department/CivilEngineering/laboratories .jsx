import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { ExpandLessRounded } from "@mui/icons-material";

function ComputerLab() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ElementsOfCivilEngineeringPointsList = [
    "Various types of Measuring chains and tapes",
    "Line ranger and cross staff",
    "Compass",
    "Dumpy Level",
    "Theodolite",
    "Amsler polar Planimeter",
    "Models of Building, Society layout, dams, canals, Highway cross section, Bricks, foundations etc.",
  ];

  const BuildingConstructionLab = [
    "Models of ledged and braced doors, half paneled and half glazed doors, flush door",
    "Models of different types of roofs,",
    "Models of different type of floorings,",
    "Models of different types of scaffolding",
    "Models of different types of staircases",
    "Models of road culvert with single arch and box types, railway culvert, cloverleaf junction, cross section of national highway, subsurface drainage, foundation, pneumatic caisson etc.",
  ];
  const MaterialTestingLab = [
    "Universal force table",
    "Various lifting machines",
    "Jib crane",
    "Roof truss",
    "Screw jack",
    "Friction slide apparatus.",
    "Compression Testing Machine",
    "Hardness Testing Machine",
    "Pendulum (Izod)Testing Machine,",
    "Universal Testing Machine",
    "Fatigue Testing Machine",
    "Torsion Testing Machine",
    "Mechanical Extensometer with Dial Gauge.",
  ];

  const HydrologyAndIrrigationEngineeringLab = [
    "Canal Regulator (Models)",
    "Canal Drop",
    "Saddle syphon spillway",
    "Aqueduct",
    "Syphon Aqueduct",
    "Level crossing",
    "Supper passage",
    "Supressed weir",
    "Fish ladder",
    "Canal Intake",
    "Hydraulic jump",
    "Spilway gate",
    "Tank weir",
    "Tank sluice with lower head",
    "Different types of dams",
    "Sluice gate",
    "Gibbs model",
    "Slit ejector",
    "River head works",
  ];

  const EnvironmentalEngineeringLab = [
    "Turbidity Meter",
    "UV-Vis spectrophotometer",
    "COD Digester",
    "Water bath",
    "High speed mixer",
    "pH meter",
    "Electronic Autoclave",
    "Jar test apparatus",
    "Digital muffle furnace",
    "Hot air oven",
    "BOD incubator",
    "Electronic weighing balance (0.01 mg accuracy)",
    "High Volume Sampler",
    "Multi Parameter Meter for pH",
    "Conductivity and DO",
  ];

  const HighwayEngineeringLab = [
    "Thickness gauge",
    "Length gauge",
    "Ductility test apparatus",
    "Crushing value apparatus",
    "Sieve Sets",
    "Standard tar viscometer",
    "Oven",
    "Ring and ball apparatus",
    "Pycnometer",
    "Los Angeles Abrasion testing machine",
    "Aggregate impact test apparatus",
    "Modified Marshall apparatus",
    "Bitumen flash and fire point test apparatus and Asphalt mixer.",
  ];

  const HydraulicsLaboratory = [
    "Open Channel Flow Setup",
    "Tilting Flume, Supersonic Wind Tunnel",
    "Pelton Wheel Test Rig",
    "Combine Rig for Free Forced Vortex",
    "Orifice Mouthpiece",
    "Reynold’s Apparatus",
    "Combine Rig for Pipe Friction",
    "Fitting",
    "Venturimeter",
    "Orificemeter",
    "Rotameter Apparatus",
    "Pressure Measurement Devices",
    "Combine Rig for Bernoulli’s Theorem",
    "Metacentric Height Apparatus",
    "Notch Apparatus & Pitot Static Tube Apparatus",
    "Electrical Analogy Setup",
  ];

  const ConcreteTechnology = [
    "Aggregate Crushing Value Apparatus",
    "Compaction Factor Apparatus",
    "Density Baskets Vee-Bee Consistometer",
    "High Pressure Autoclave for Soundness test",
    "Cast Iron Moulds for Cube",
    "Cylindrical and beam molding",
    "Vibrating Machine and Vibrating table",
    "Concrete Mixer",
    "U–Box, L–Box and V–Box Apparatus",
    "Flow Table for SCC.",
    "Electronic balances (capacity 10 kg and 100 kg)",
    "Motorized Sieve Shaker",
    "Heat of Hydration",
    "Flexure Testing Machine",
    "Compression testing Machine",
  ];

  const SoilMechanicsLab = [
    "Laboratory CBR apparatus",
    "Unconfined compressive strength apparatus",
    "Consolidation apparatus (3 Gang)",
    "Universal Triaxial test set up with Electronic Measuring Outfit",
    "Standard penetration test set",
    "Sand density cone, Relative Density Apparatus",
    "Hydraulic and Manual Sample extruder",
    "Constant temperature bath",
    "Motorized Sieve shaker",
    "Direct Shear apparatus motorized",
  ];

  const StructuralEngineeringLab = [
    "Simple pendulum",
    "Compound pendulum",
    "Biflair&Triflair suspension,",
    "Single rotor transitional vibrations,",
    "Two rotor transitional vibrations,",
    "Damped torsional vibrations,",
    "Natural vibration spring mass system",
    "Forced damped vibrations",
  ];

  const SurveyingEngineeringLab = [
    "Electronic Digital Planimeter",
    "Transit Vernier Theodolite 20″ accuracy with stand",
    "Leveling staffs and Ranging rods",
    "Fiberglass tape",
    "Theodolite with compensator and stand",
    "Electronic distance measurement device",
    "Total Station (Ele.) Pentax – 874922",
    "Plane Table With all Accessories.",
  ];

  const PointsComponents = ({ name, col }) => (
    <Grid item xs={12} sm={col ? 6 : ""}>
      <Box
        className="smooth-shadow-card h-100 d-flex align-items-center "
        borderRadius={2}
        overflow={"hidden"}
      >
        <Box p={2} textAlign={"start"}>
          <h6 className="fw-bold color-secondary mb-0 ">{name}</h6>
        </Box>
      </Box>
    </Grid>
  );

  return (
    <>
      <Stack borderRadius={4} spacing={3}>
        {/* =============================== ELEMENTS OF CIVIL ENGINEERING =============================== */}

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              ELEMENTS OF CIVIL ENGINEERING
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              The laboratory is designed to give exposure in practical works
              carried out in five different areas of civil engineering viz.
              Surveying and Leveling, Building Materials and Construction,
              Building Planning & Design, Transportation Engineering and Water
              Resources Engineering. Students are given a field practice to
              execute various survey work for primary residential buildings etc.
              The laboratory is equipped with the following major equipment.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={5}>
                <Grid container spacing={2}>
                  {ElementsOfCivilEngineeringPointsList.map((name, index) => (
                    <PointsComponents name={name} key={index} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={7}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* ===============================  BUILDING CONSTRUCTION LAB =============================== */}

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              BUILDING CONSTRUCTION LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              Models of building components and typical civil engineering
              structures are available in this laboratory for thorough
              understanding of the subject. More than 35 wooden and steel models
              and charts are obtained for the laboratory. some of them are
              listed below.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={5}>
                <Grid container spacing={2}>
                  {BuildingConstructionLab.map((name, index) => (
                    <PointsComponents name={name} key={index} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={7}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== CADD LAB =============================== */}
        {/* <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">CADD LAB</h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              The lab is equipped with 20 computers connected in Lane with
              internet connections. Student version of AutoCAD as well as some
              free civil engineering softwares available through open source.
            </h6>
          </AccordionDetails>
        </Accordion> */}

        {/* =============================== MATERIAL TESTING LAB =============================== */}

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              MATERIAL TESTING LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              The laboratory is equipped to perform experiments for various
              types of forces and force systems, verifying fundamental laws of
              Mechanics and testing of engineering materials e.g. mild steel,
              cast iron, brass, timber etc . The laboratory is equipped with the
              following major equipment.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {MaterialTestingLab.map((name, index) => (
                    <PointsComponents name={name} key={index} col={6} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== TRANSPORTATION ENGINEERING LAB =============================== */}

        {/* <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              TRANSPORTATION ENGINEERING LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              The lab consists of various models of road cross sections and
              types of crossing commonly found along with some actual cross
              sections of roads.
            </h6>
          </AccordionDetails>
        </Accordion> */}

        {/* =============================== HYDROLOGY AND IRRIGATION ENGINEERING LAB =============================== */}

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              HYDROLOGY AND IRRIGATION ENGINEERING LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              Engineering models of different typical hydraulic structures are
              provided in this laboratory for thorough understanding of the
              subject. More than 25 wooden models are displayed in this
              laboratory.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {HydrologyAndIrrigationEngineeringLab.map((name, index) => (
                    <PointsComponents name={name} key={index} col={6} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== PROJECT AND DE LAB =============================== */}

        {/* <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              PROJECT AND DE LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              The lab consists of working and non working prepared by final year
              projects as well as models prepared by students during various
              technical activities in the campus. The lab consists of various
              small instruments which are not available in the regular civil
              labs. These can be used by students for their projects.
            </h6>
          </AccordionDetails>
        </Accordion> */}

        {/* =============================== ENVIRONMENTAL ENGINEERING LAB =============================== */}
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              ENVIRONMENTAL ENGINEERING LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              Environmental engineering laboratory is equipped with all the
              latest instruments of reputed brands to perform various
              experiments and tests on water, wastewater and air samples. The
              laboratory is ready to accept consultancy assignments and
              environmental audit challenges. Major instruments existing in the
              laboratory are as follows.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {EnvironmentalEngineeringLab.map((name, index) => (
                    <PointsComponents name={name} key={index} col={6} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== HIGHWAY ENGINEERING LAB =============================== */}

        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              HIGHWAY ENGINEERING LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              Highway Engineering laboratory is designed to carry out
              qualitative and quantitative tests for raw materials like
              Aggregate, Sand, Bitumen etc. The laboratory is designed with a
              vision of testing requirements of industry and different research
              areas of highway engineering. Major instruments existing in the
              laboratory are as under.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {HighwayEngineeringLab.map((name, index) => (
                    <PointsComponents name={name} key={index} col={6} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== HYDRAULICS LABORATORY =============================== */}

        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              HYDRAULICS LABORATORY
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              Hydraulics laboratory is well established to perform laboratory
              experiments of basic and advanced fluid mechanics. Set ups for
              following experiments are available in the laboratory.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {HydraulicsLaboratory.map((name, index) => (
                    <PointsComponents name={name} key={index} col={6} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== CONCRETE TECHNOLOGY =============================== */}

        <Accordion
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              CONCRETE TECHNOLOGY
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              Concrete technology laboratory is designed to carry out
              qualitative and quantitative tests for raw materials, fresh and
              hardened concrete. The laboratory is designed with a vision of
              testing requirements of industry and different research areas of
              concrete design. Major instruments existing in the laboratory are
              as follows.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {ConcreteTechnology.map((name, index) => (
                    <PointsComponents name={name} key={index} col={6} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== SOIL MECHANICS LAB =============================== */}

        <Accordion
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              SOIL MECHANICS LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              The laboratory is equipped to perform experiments as well as to
              carry our field testing works in the field of Geotechnical
              Engineering. The key instruments available with the laboratory are
              Swell Pressure test apparatus.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {SoilMechanicsLab.map((name, index) => (
                    <PointsComponents name={name} key={index} col={6} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== STRUCTURAL ENGINEERING LAB =============================== */}

        <Accordion
          expanded={expanded === "panel13"}
          onChange={handleChange("panel13")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              STRUCTURAL ENGINEERING LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              Structural Engineering laboratory is equipped with a universal
              test frame which is having experiments set up for the following
              equipment.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {StructuralEngineeringLab.map((name, index) => (
                    <PointsComponents name={name} key={index} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* =============================== SURVEYING ENGINEERING LAB =============================== */}

        <Accordion
          expanded={expanded === "panel14"}
          onChange={handleChange("panel14")}
          elevation={0}
          className="smooth-shadow-card rounded-2 py-2"
          sx={{ position: "static" }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessRounded />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6 className="fw-bold color-secondary mb-0 ">
              SURVEYING ENGINEERING LAB
            </h6>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <h6 className="text-secondary">
              The surveying laboratory is planned as a part of the fundamental
              survey laboratory to carry out survey projects and also to take up
              the field survey consultancy works. It is equipped with the
              following latest equipment.
            </h6>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={2}>
                  {SurveyingEngineeringLab.map((name, index) => (
                    <PointsComponents name={name} key={index} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box height={"100%"}>
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp"
                    className="w-100 h-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </>
  );
}

export default ComputerLab;
