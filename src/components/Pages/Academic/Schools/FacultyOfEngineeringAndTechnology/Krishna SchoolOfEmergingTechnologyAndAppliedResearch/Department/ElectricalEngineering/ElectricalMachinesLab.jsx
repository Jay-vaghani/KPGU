// ============== React Imports ==============

import React from "react";

// ============== MUI Imports ==============

import { Box, Grid } from "@mui/material";

function ElectricalMachinesLab() {
  const LabList = [
    {
      title: "POWER ELECTRONICS LAB",
      des: [
        "To enable students, understand the operation of semiconductor devices and power electronics converters, the laboratory is equipped with experimental set-ups where students are exposed to design-based experiments. The laboratory also enables students to carry out UG projects effectively.",
        "Thyristor converters, DC chopper modules, power devices such as Thyristors, Power MOSFETs, IGBTs of various voltage and current ratings, Opto-Isolators, Pulse transformers and other related commutating components are there in the laboratory.",
        "A Number of modules of AC-DC converters, voltage controllers – single phase as well as three phase, DC chopper units and inverters using Power MOSFETs and IGBTs, solid state soft start units for three phase induction motors have been built in the last five years as project works of UG students.",
      ],
      img: "",
    },
    {
      title: "ELECTRICAL MEASUREMENT AND INSTRUMENTATION LABORATORY",
      des: [
        "This is the lab which is very important for the basic knowledge about the various instruments with facilities for the group of 20 students to carry out experiments independently.",
        "The lab is equipped with latest technologies in electrical measurement and instrumentation such as Kelvin Bridges, Wheatstone’s bridges, energy meters, digital multi meters, etc. It ensures that the students become experts in practical knowledge related to electrical measurement process under the guidance of faculty members from the Department of Electrical Engineering. The lab is well equipped and enables students to understand the fundamentals of various measuring instruments.",
        "Major Equipment in Measurement and instrumentation Lab areLVDT(Linear Variable differential transformer), Thermocouple, pressure gauge, Resistance strain gauge etc.",
      ],
      img: "",
    },
    {
      title: "HIGH VOLTAGE ENGINEERING LABORATORY",
      des: [
        "A state-of-the-art laboratory is designed to provide platform for basic studies. It offers testing facilities for the power apparatus insulators. This laboratory helps students to understand the various aspects of insulation and phenomenon like lightning and surges in electrical power system.",
        "",
      ],
      img: "",
    },
    {
      title: "POWER SYSTEM PROTECTION LABORATORY",
      des: [
        "A protection laboratory equipped with number of relays including numerical relays for transformer, and motor protection has been developed. This laboratory is useful to the students of UG in getting up-to-date knowledge of the working of various types of relays by actual demonstration on in-house designed panels.",
      ],
      img: "",
    },
    {
      title: "ELECTRICAL WORKSHOP LAB",
      des: [
        "The workshop is used for course introduction to electrical engineering. Here the students are given hands on training in electrical wirings. They are given a basic idea about the operation and power consumption of certain electrical appliances such are mixtures, iron box, pumps, fan etc. Students are familiarized with supply arrangements and their limitations, knowledge of standard voltages and their tolerances, safety aspects of electrical systems and importance of protective measures in wiring systems, knowledge about the types of wires, cables and other accessories used in wiring. Students are able to wire simple lighting circuits for domestic buildings and distinguish between light and power circuits and to measure electrical circuit parameters and current, voltage and power in a circuit.",
      ],
      img: "",
    },
    {
      title: "MICROPROCESSOR LABORATORY",
      des: [
        "This laboratory will introduce students to get familiar with the architecture and basic operations of micro controller and microprocessor. It provides in-depth knowledge of Software and hardware experiments with a microprocessor and controller system. It also deals with assembly language programming, simple input/output interfacing, and interrupt processing in microprocessor and micro controller systems.",
      ],
      img: "",
    },
    {
      title: "Machines Lab",
      des: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, accusantium? Aliquid placeat, tempora atque ullam ex totam sit officia est illum molestias mollitia ratione a corporis alias blanditiis saepe et?",
      ],
      img: "",
    },

  ];

  const LabListComponent = ({ title, img, des }) => (
    <Grid item xs={12} sm={6} >
      
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        overflow={"hidden"}
      >
        <Box>
          <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp" className="w-100" alt="" />
        </Box>
        <Box p={2}>
          <h4 className="fw-bold color-secondary">{title}</h4>
          {des.map((para) => (
            <h6 className="fw-bold text-secondary mb-3">{para}</h6>
          ))}
        </Box>
      </Box>
    </Grid>
  );
  return (
    <>
      <Box borderRadius={4}>
        <h2 className="fw-bold color-secondary fs-1 mb-4">Electrical Machines  Labs</h2>
        <Grid container spacing={2}>
          {LabList.map(({ title, des, img }, index) => (
            <LabListComponent title={title} des={des} img={img} key={index} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ElectricalMachinesLab;
