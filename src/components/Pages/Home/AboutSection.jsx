import React, { useContext } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const { maxWidth } = useContext(AppContext);

  const navigation = useNavigate();
  const faculty = [
    {
        name: "Mr. Pratikkumar Rameshbhai Patel",
        imgNo: "5995",
        designation: "Assistant Professor",
        experience: 14,
        qualification: "M.E[Thermal Engineering] || B.E[Mechanical Engineering]",
        customLink: "",
    },
    {
        name: "Mr. Ankur P. Patel",
        imgNo: "6002",
        designation: "Assistant Professor",
        experience: 12,
        qualification: "M.E[Machine Design] || B.E[Mechanical Engineering]",
        customLink: "",
    },
    {
        name: "Mr Mandar Sumant",
        imgNo: "5998",
        designation: "Assistant Professor",
        experience: 18,
        qualification:
            "PhD[Mechanical-Pursuing] || M.E[Advance Mfg Systems -Mechanical] || B.E[Mechanical]",
        customLink: "",
    },
    {
        name: "Mr Mehul A. Shah",
        imgNo: "6006",
        designation: "Assistant Professor",
        experience: 9,
        qualification:
            "PhD [Mechanical-Pursuing] || M.E[Thermal Engineering] || B.E[Mechanical Engineering]",
        customLink: "",
    },
    {
        name: "Mr. Nilesh A. Patel",
        imgNo: "5991",
        designation: "Assistant Professor",
        experience: 17,
        qualification:
            "M.E[Mechanical Engineering] || B.E[Production Engineering]",
        customLink: "",
    },
    {
        name: "Ms. Manisha Vasava",
        imgNo: "6063",
        designation: "Assistant Professor",
        experience: 16,
        qualification: "M.Tech || B.E in Computer Engineering",
        customLink: "",
    },
    {
        name: "Ms. Priyanka Patel",
        imgNo: "6065",
        designation: "Assistant Professor",
        experience: 5,
        qualification: "M.Tech || B.E in Computer Engineering",
        customLink: "",
    },
    {
        name: "Monali Parikh",
        imgNo: "6064",
        designation: "Assistant Professor",
        experience: 11,
        qualification: "M.Tech[CSE] || B.E[CE]",
        customLink: "",
    },
    {
        name: "Ms. Dhara Parikh",
        imgNo: "9870",
        designation: "Assistant Professor",
        experience: 2,
        qualification: "M.E[Cyber Security] || B.E[I.T]",
        customLink: "",
    },
    {
        name: "Vijay Bharat Desle",
        imgNo: "6015",
        designation: "Assistant Professor",
        experience: 10,
        qualification:
            "Ph.D[Pursuing] || M.Tech[Electrical Power Systems] || B.Tech[Electrical]",
        customLink: "",
    },
    {
        name: "Ketul Kachhia",
        imgNo: "6192",
        designation: "Assistant Professor",
        experience: 11,
        qualification:
            "PhD [Pursuing] || M.TECH[Power System] || MBA[MARKETING] || B.E[ELECTRICAL]",
        customLink: "",
    },
    {
        name: "Ms. Apoorva Shah ",
        imgNo: "6010",
        designation: "Assistant Professor",
        experience: 10,
        qualification: "Ph.D[Pursuing-CSE] || M.E[CSE] || B.E[CSE]",
        customLink: "",
    },
    {
        name: "Sonia Panesar",
        imgNo: "6044",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "Phd[Pursuing-CSE] || M.Tech[CE] || B.Tech[CSE]",
        customLink: "",
    },
    {
        name: "Dr. Shivam Upadhyay ",
        imgNo: "9867",
        designation: "Assistant Professor",
        experience: 10,
        qualification: "PhD[CSE] || M.tech[CSE] || B.E[IT]",
        customLink: "",
    },
    {
        name: "Mr. Tushar Desai",
        imgNo: "6038",
        designation: "Assistant Professor",
        experience: 10,
        qualification: "M.E[CSE] || B.E",
        customLink: "",
    },
    {
        name: "Ms. Ankita Kothari",
        imgNo: "6021",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "M.Tech[CSE] || B.E[CSE]",
        customLink: "",
    },
    {
        name: "Ms. Jalpa Bhatt",
        imgNo: "6049",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "M.E[CSE] || B.E[CE]",
        customLink: "",
    },
    {
        name: "Dr. Gopal Bhatt",
        imgNo: "6035",
        designation: "Assistant Professor",
        experience: 10,
        qualification: "PhD. [Applied Physics] || M.Sc[Physics] || B.Sc[Physics]",
        customLink: "",
    },
    {
        name: "Dr. Dharmendra V.Tawde",
        imgNo: "6045",
        designation: "Assistant Professor",
        experience: 12,
        qualification: "Ph.D[Physics]",
        customLink: "",
    },
    {
        name: "Ms. Jyoti Golakia",
        imgNo: "6023",
        designation: "Assistant Professor",
        experience: 4,
        qualification: "M.E[CE] || BE[CE]",
        customLink: "",
    },
    {
        name: "Ms. Rohini K. Patel",
        imgNo: "6020",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "M.E(IT) || B.E[IT]",
        customLink: "",
    },
    {
        name: "Ms. Safeya Dharmajwala ",
        imgNo: "6019",
        designation: "Assistant Professor",
        experience: 10,
        qualification: "M.E || B.E - COMPUTER ENGINEERING",
        customLink: "",
    },
    {
        name: "Ms. Rashmika Baria",
        imgNo: "6042",
        designation: "Assistant Professor",
        experience: 5,
        qualification: "M.E[CE] || B.E[CSE]",
        customLink: "",
    },
    {
        name: "Ms. Arohi Patel",
        imgNo: "9866",
        designation: "Assistant Professor",
        experience: 3,
        qualification: "M.E[CE] || BE[CE]",
        customLink: "",
    },
    {
        name: "Ms.Manisha Makwana",
        imgNo: "9865",
        designation: "Assistant Professor",
        experience: 3,
        qualification: "M.E || B.E - COMPUTER ENGINEERING",
        customLink: "",
    },
    {
        name: "Ms. Jariwala Krishna",
        imgNo: "8899",
        designation: "Assistant Professor",
        experience: 5,
        qualification: "M.Tech[CSE] || B.E[CSE]",
        customLink:
            "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707808598/KPGU/Faculty%20Images/KSET/8899.webp",
    },
    {
        name: "Ms. Bharati Salimath",
        imgNo: "8900",
        designation: "Assistant Professor",
        experience: 20,
        qualification: "M.Tech[CSE] || B.E[CSE]",
        customLink:
            "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707809046/KPGU/Faculty%20Images/KSET/8900.webp",
    },
    {
        name: "Henilkumar Suthar",
        imgNo: "8897",
        designation: "Assistant Professor",
        experience: 3,
        qualification: "PhD[Pursuing-IT] || M.Tech[IT] || B.E[IT]",
        customLink: "",
    },
    {
        name: "Ms. Harika Thokala",
        imgNo: "8901",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "M.Tech[CS] || B.Tech[CSE]",
        customLink: "",
    },
    {
        name: "Ms. Vruti Parikh",
        imgNo: "0881",
        designation: "Assistant Professor",
        experience: 7,
        qualification: "M.E || B.E - COMPUTER ENGINEERING",
        customLink: "",
    },
    {
        name: "Mr. Ankit N Patel",
        imgNo: "6110",
        designation: "Assistant Professor",
        experience: 13,
        qualification: "M.Tech[CPM] || B.E[Civil]",
        customLink: "",
    },
    {
        name: "Mithileshdatta Pandya",
        imgNo: "6052",
        designation: "Assistant Professor",
        experience: 11,
        qualification: "Ph.D[Pursuing-Civil] || M.E[CASAD] || B.E[Civil]",
        customLink: "",
    },
    {
        name: "Mr. Ravi S. Patel",
        imgNo: "6090",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "M.E in Civil Engineering",
        customLink: "",
    },
    {
        name: "Dr Malhari K Sirdeshpande",
        designation: "Principal || Professor",
        experience: 22,
        imgNo: "6168",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "Dr Pravin R Firke",
        designation: "Associate Professor || Reader",
        experience: 8,
        imgNo: "5930",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "Dr Vijitha Vijayan",
        designation: "Assistant Professor || Lecturer",
        experience: 3,
        imgNo: "5925",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "Dr Khusboo Kumari Gupta",
        designation: "Assistant Professor || Lecturer",
        experience: 2,
        imgNo: "5927",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "Dr Krishna Priya",
        designation: "Assistant Professor || Lecturer",
        experience: 1,
        imgNo: "5923",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "Dr Mularam Rakewal Suthar",
        designation: "Assistant Professor || Lecturer",
        experience: 1,
        imgNo: "5928",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR.PRAVIN N TAKLE",
        designation: "Associate Professor || Reader",
        experience: 3,
        imgNo: "5929",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR.NISHA VEGDA",
        designation: "Associate Professor || Reader",
        experience: 1,
        imgNo: "5913",
        qualification: "B.A || M.A || PhD",
        customLink: "",
    },
    {
        name: "DR. DAKSHA RATHOD",
        designation: "Associate Professor || Reader",
        experience: 8,
        imgNo: "5919",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR.JIGNESHAKUMARI T CHAREL",
        designation: "Associate Professor || Reader",
        experience: 3,
        imgNo: "6172",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR. AMAL ABDUL HAMEED",
        designation: "Associate Professor || Reader",
        experience: 6,
        imgNo: "5924",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR.MAYUR V BARVE",
        designation: "Professor",
        experience: 12,
        imgNo: "5931",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR.SYAMA MANIYANKUTTY",
        designation: "Associate Professor || Lecturer",
        experience: 3,
        imgNo: "5922",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR. JIGISHA PRAJAPATI",
        designation: "Associate Professor || Lecturer",
        experience: 1,
        imgNo: "5915",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR. HARDIK VARIYA",
        designation: "Associate Professor || Lecturer",
        experience: 6,
        imgNo: "5920",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "DR. TREDHA VYAS",
        designation: "Associate Professor || Lecturer",
        experience: 1,
        imgNo: "5921",
        qualification: "B.A.M.S || M.D || M.S",
        customLink: "",
    },
    {
        name: "Dr.RABIYA SHAIKH",
        designation: "Associate Professor || Lecturer",
        experience: 4,
        imgNo: "5918",
        qualification: "P.H.D",
        customLink: "",
    },
    {
        name: "Prof. Nimesh D. Chokshi",
        imgNo: "8777",
        designation: "Director || Professor",
        experience: 36,
        qualification: "M.Sc.[Nursing]",
        customLink: "",
    },
    {
        name: "Mrs.Priyanka Aritra Dey",
        imgNo: "5873",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "M.Sc.[Nursing]",
        customLink: "",
    },
    {
        name: "Mrs.Rojlin Tigga",
        imgNo: "5874",
        designation: "Assistant Professor",
        experience: 11,
        qualification: "M.Sc.[Nursing]",
        customLink: "",
    },
    {
        name: "Ms.Mitali Solanki ",
        imgNo: "5881",
        designation: "Assistant Professor",
        experience: 6,
        qualification: "M.Sc.[Nursing]",
        customLink: "",
    },
    {
        name: "Ms.Dharini Parmar",
        imgNo: "5879",
        designation: "Nursing Tutor",
        experience: 4,
        qualification: "M.Sc [Nursing]",
        customLink: "",
    },
    {
        name: "Ms.Krina Patel",
        imgNo: "6173",
        designation: "Nursing Tutor",
        experience: 2,
        qualification: "M.Sc [Nursing]",
        customLink: "",
    },
    {
        name: "Ms.Zinkal Patel",
        imgNo: "5875",
        designation: "Nursing Tutor",
        experience: 2,
        qualification: "M.Sc [Nursing]",
        customLink: "",
    },
    {
        name: "Ms.Sonal Christie",
        imgNo: "5876",
        designation: "Nursing Tutor",
        experience: 6,
        qualification: "P.B.B.Sc Nursing",
        customLink: "",
    },
    {
        name: "MS.Roshni Zariwala",
        imgNo: "5877",
        designation: "Nursing Tutor",
        experience: 3,
        qualification: "B.Sc [Nursing]",
        customLink: "",
    },
    {
        name: "Ms.Netal Vinodchnadra Rathava",
        imgNo: "6747",
        designation: "Nursing Tutor",
        experience: 2,
        qualification: "M.Sc [Nursing] ",
        customLink: "",
    },
    {
        name: "Iftekharahemed A. Kureshi",
        imgNo: "6748",
        designation: "Nursing Tutor",
        experience: 1,
        qualification: "PB.B.Sc Nursing ",
        customLink: "",
    },
    {
        name: "Ms.Jyotika Bhoi",
        imgNo: "6749",
        designation: "Nursing Tutor",
        experience: 5,
        qualification: "B.Sc [Nursing] ",
        customLink: "",
    },
    {
        name: "Mrs.Chintal Purohit",
        imgNo: "6174",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "M.Sc Nursing",
        customLink: "",
    },
    {
        name: "Dr. Falgun A. Mehta",
        imgNo: "5909",
        designation: "Director || Professor",
        experience: 21,
        qualification: "M.Pharm || Ph.D",
        customLink: "",
    },
    {
        name: "Dr.Prachi Pandey",
        imgNo: "5987",
        designation: "HOD || PROFESSOR",
        experience: 18,
        qualification: "M.Pharm || PhD || PGD || MBA",
        customLink: "",
    },
    {
        name: "Dr. Mihir Y. Parmar",
        imgNo: "5882",
        designation: "Professor || HOD[Dept. of Pharmacology]",
        experience: 17,
        qualification: "M.Pharm || Ph.D",
        customLink: "",
    },
    {
        name: "Dr. Shaileshkumar K. Koradia",
        imgNo: "5900",
        designation: "Professor || HOD",
        experience: 16,
        qualification: "M.Pharm || Ph.D",
        customLink: "",
    },
    {
        name: "Dr. Upasana R. Yadav",
        imgNo: "5979",
        designation: "Assistant Professor",
        experience: 3,
        qualification: "M.S || PhD || PGD",
        customLink:
            "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707802369/KPGU/Faculty%20Images/KSP/5979.webp",
    },
    {
        name: "Mr. Taufik Mulla",
        imgNo: "5904",
        designation: "Assistant Professor",
        experience: 11,
        qualification: "M.Pharm [PhD Pursuing]",
        customLink: "",
    },
    {
        name: "Mr. Paul Rodriques ",
        imgNo: "5905",
        designation: "Assistant professor ",
        experience: 6,
        qualification: "M.Pharm",
        customLink: "",
    },
    {
        name: "Ms. Rupa Singh",
        imgNo: "6175",
        designation: "Assistant Professor",
        experience: 3,
        qualification: "M.Pharm",
        customLink: "",
    },
    {
        name: "Ms.Ummehani Kallawala ",
        imgNo: "5885",
        designation: "Assistant Professor",
        experience: 1,
        qualification: "M.Pharm",
        customLink: "",
    },
    {
        name: "Mr. Zalak D. Dave",
        imgNo: "5908",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "M.Pharm",
        customLink: "",
    },
    {
        name: "Ms. Ashwini Patel",
        imgNo: "5896",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "M.Pharm",
        customLink: "",
    },
    {
        name: "Ms. Mariyambibi Mandarawala",
        imgNo: "5886",
        designation: "Assistant Professor",
        experience: 6,
        qualification: "M.Pharm ",
        customLink: "",
    },
    {
        name: "Ms. Sanjogata Soni",
        imgNo: "5883",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "M.Pharm ",
        customLink: "",
    },
    {
        name: "Mr. Salaj Khare",
        imgNo: "5884",
        designation: "Assistant Professor",
        experience: 15,
        qualification: "M.Pharm",
        customLink: "",
    },
    {
        name: "Ms.Dhairyashri kher",
        imgNo: "5890",
        designation: "Assistant professor",
        experience: 1,
        qualification: "M.pharm",
        customLink: "",
    },
    {
        name: "Dr. Meghraj Suryawanshi",
        imgNo: "6347",
        designation: "Assistant professor",
        experience: 5,
        qualification: "M.Pharm || MBA || PDCR || Ph.D.",
        customLink: "",
    },
    {
        name: "Mr. Bhavin D. Pandya",
        imgNo: "5893",
        designation: "Assistant Professor",
        experience: 3,
        qualification: "B.Pharm || M.Pharm",
        customLink: "",
    },
    {
        name: "Mr. Shreyash A. Diwakar",
        imgNo: "5891",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "B.Pharm || M.Pharm",
        customLink: "",
    },
    {
        name: "Dr. Paras Bhura",
        imgNo: "6096",
        designation: "Associate Professor || Director",
        experience: 11,
        qualification: "Ph.D || MPT",
        customLink: "",
    },
    {
        name: "Dr. Camy Bhura",
        imgNo: "5852",
        designation: "Associate Professor",
        experience: 11,
        qualification: "MPT || Ph.D",
        customLink: "",
    },
    {
        name: "Dr. Pragna Landge",
        imgNo: "5864",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "MPT || Ph.D ",
        customLink: "",
    },
    {
        name: "Dr. Amitkumar Singh",
        imgNo: "5856",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "MPT",
        customLink: "",
    },
    {
        name: "Dr. Priyanka Solanki",
        imgNo: "5865",
        designation: "Assistant Professor",
        experience: 6,
        qualification: "MPT || Ph.D ",
        customLink: "",
    },
    {
        name: "Dr. Aastha Bodade",
        imgNo: "5854",
        designation: "Assistant Professor",
        experience: 2,
        qualification: "MPT",
        customLink: "",
    },
    {
        name: "Dr. Fatema Daruwala",
        imgNo: "5859",
        designation: "Assistant Professor",
        experience: 2,
        qualification: "MPT",
        customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707806085/KPGU/Faculty%20Images/KSPR/5959.webp",
    },
    {
        name: "Dr. Ankita Shah",
        imgNo: "5861",
        designation: "Assistant Professor",
        experience: 8,
        qualification: "MPY\T",
        customLink: "",
    },
    {
        name: "Dr. Nikita Sonaiya",
        imgNo: "5850",
        designation: "Assistant Professor",
        experience: 1,
        qualification: "MPT",
        customLink: "",
    },
    {
        name: "Dr. Krupali Rajwadi ",
        imgNo: "5870",
        designation: "Assistant Professor",
        experience: 10,
        qualification: "MSW",
        customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707806591/KPGU/Faculty%20Images/KSPR/5870.webp",
    },
    {
        name: "Krishna Trivedi",
        imgNo: "9872",
        designation: "Assistant Professor",
        experience: 1,
        qualification: "M. Physiotherapy",
        customLink: "",
    },
    {
        name: "Harsha Ramrakhiyani",
        imgNo: "9873",
        designation: "Assistant Professor",
        experience: 6,
        qualification: "MPT",
        customLink: "",
    },
    {
        name: "Dr. Shreya Trivedi",
        imgNo: "9874",
        designation: "Assistant Professor",
        experience: 9,
        qualification: "MPT",
        customLink: "",
    },
    {
        name: "Dr. Kinjal S Patel",
        imgNo: "9875",
        designation: "Assistant Professor",
        experience: 2,
        qualification: "MPT || PHD Persuing",
        customLink: "",
    },
    {
        name: "Dr. Dharmesh Contractor",
        imgNo: "5849",
        designation: "Clinical Physiotherapist",
        experience: 16,
        qualification: "BPT",
        customLink: "",
    },
    {
        name: "Dr. Pooja Bhavsar",
        imgNo: "5863",
        designation: "Clinical Physiotherapist",
        experience: 2,
        qualification: "BPT",
        customLink: "",
    },
    {
        name: "Kamilmahdi Lafawala",
        imgNo: "0006",
        designation: "Clinical Physiotherapist",
        experience: 2,
        qualification: "BPT",
        customLink: "",
    },
    {
        name: "Dr. Rashmi Vyas",
        designation: "Director I/C",
        experience: 26,
        imgNo: "6113",
        qualification: "P.hd || M.B.A. || M.Phil || M.Com || B.Com",
        customLink: "",
    },
    {
        name: "Kushal Jayesh Sampat",
        designation: "Assistant Professor",
        experience: 9,
        imgNo: "6062",
        qualification: "C.S. || C.A.[Finalist]CMA || B.Com",
        customLink: "",
    },
    {
        name: "Prajapati Hemant Trilokiprasad",
        designation: "Assistant Professor",
        experience: 3,
        imgNo: "8397",
        qualification: "M.Com || B.Com || NET/GSET",
        customLink: "",
    },
    {
        name: "Nirmala Revatram Suthar",
        designation: "Assistant Professor",
        experience: 1,
        imgNo: "8396",
        qualification: "B.Com || M.Com  NET/GSET",
        customLink: "",
    },
    {
        name: "Dr. Pinakin Jaiswal",
        designation: "Assistant Professor || Director ",
        experience: 24,
        imgNo: "6114",
        qualification: "PhD || MBA || BE",
        customLink: "",
    },
    {
        name: "Dr.Deepa Bhindora ",
        designation: "Assistant Professor",
        experience: 15,
        imgNo: "6171",
        qualification: "PhD || M.Phil || MBA",
        customLink: "",
    },
    {
        name: "Ms.Priyanka Patel ",
        designation: "Assistant Professor",
        experience: 8,
        imgNo: "6117",
        qualification: "MBA",
        customLink: "",
    },
    {
        name: "Ms. Moksha Shah",
        designation: "Assistant Professor",
        experience: 1,
        imgNo: "6803",
        qualification: "MBA Marketing",
        customLink: "",
    },
    // {
    //   name: "Mr. Imtiyaz Bagban",
    //   imgNo: "5912",
    //   designation: "Assistant Professor",
    //   experience: 1,
    //   qualification: "M.Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Pooja Goswami",
    //   imgNo: "5898",
    //   designation: "Assistant Professor",
    //   experience: 8,
    //   qualification: "M. Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Ms. Bansari Patel",
    //   imgNo: "5888",
    //   designation: "Assistant Professor",
    //   experience: 2,
    //   qualification: "M.Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Esha Bhavin Shah",
    //   imgNo: "5889",
    //   designation: "Assistant Professor",
    //   experience: 10,
    //   : "M. Pharm",
    //   customLink: "",
    // },
    // {
    //   name: "Dr. Vandana B. Patel",
    //   imgNo: "5976",
    //   designation: "Professor",
    //   experience: 32,
    //   qualification: "M.Pharm || PhD || MBA",
    //   customLink: "",
    // },
    // {
    //   name: "Dr.Vishnu A Patel",
    //   imgNo: "5984",
    //   designation: "professor",
    //   experience: 38,
    //   qualification: "M.Pharm || Ph.D",
    //   customLink: "",
    // },
];

console.log(faculty);

  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      mt={7}
      p={"5%"}
      bgcolor={"#fff"}
      className="smooth-shadow"
      borderRadius={4}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          <h2 className="fs-1 text-uppercase fw-semibold mb-0 ">
            kpgu university
          </h2>
          <h3
            className="text-uppercase fw-semibold"
            style={{ fontFamily: "Nunito sans" }}
          >
            [Formerly known as BITS Edu Campus]
          </h3>
          <Typography
            variant="h5"
            mb={2}
            textAlign={{
              xs: "start",
              md: "justify",
            }}
          >
            Drs. Kiran and Pallavi Patel Global University (KPGU), Vadodara was
            established in 2021 and is approved by
            <Grid container spacing={1} mb={2} mt={1}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  UGC
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  AICTE
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  PCI
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  GSCPT
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  GNC
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  AYUSH
                </Button>
              </Grid>
            </Grid>
            We Have various undergraduate, postgraduate and diploma courses in
            the disciplines of Engineering & Technology, Management, Science,
            Pharmacy, Nursing, and Ayurvedic Medicine
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{
            xs: 1,
            md: 2,
          }}
        >
          <Box height={"100%"}>
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703843541/KPGU/campus/KPGU-Gate.webp"
              alt="Kpgu photo"
              className="w-100 h-100 object-fit-cover rounded-4 "
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;


