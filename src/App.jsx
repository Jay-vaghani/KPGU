import { lazy, Suspense, useEffect } from "react";
import { Box, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { About, Home } from "./components/Pages/index";
import { ThemeProvider } from "@emotion/react";
import { AppProvider } from "./contexts/AppContext";
import ContactNavbar from "./components/layout/ContactNavbar";
import "./App.css";

// ========================Mui Navbar========================
// import NavBar from "./components/layout/MuiNavBar/NavBar/NavBar";
// ========================Bootstrap Navbar========================
import MainNavbar from "./components/layout/BootstrapNavbar/MainNavbar";
import Footer from "./components/Common/Footer";
import SKECT from "./components/Pages/About/pages/SKECT";
import OurLeadership from "./components/Pages/About/pages/OurLeadership";
import Achievements from "./components/Pages/About/pages/Achievements";
import KpguVadodara from "./components/Pages/About/pages/KpguVadodara";
import VisionMission from "./components/Pages/About/pages/VisionMission";
import DrKiranCPatelMessage from "./components/Pages/About/pages/DrKiranCPatelMessage";
import MessageFromThePresidentsDesk from "./components/Pages/About/pages/MessageFromThePresidentsDesk";
import MessageFromTheProvost from "./components/Pages/About/pages/MessageFromTheProvost";
import AcademicCouncil from "./components/Pages/About/pages/Governance/AcademicCouncil";
import BoardOfManagement from "./components/Pages/About/pages/Governance/BoardOfManagement";
import BoardOfStudies from "./components/Pages/About/pages/Governance/BoardOfStudies";
import FinanceCommittee from "./components/Pages/About/pages/Governance/FinanceCommittee";
import GoverningBody from "./components/Pages/About/pages/Governance/GoverningBody";
import Governance from "./components/Pages/About/pages/Governance/Governance";
import StatutoryRecognition from "./components/Pages/About/pages/StatutoryRecognition";
import Approvals from "./components/Pages/About/pages/Approvals/Approvals";
import UgcApproval from "./components/Pages/About/pages/Approvals/UgcApproval";
import InstituteOfTechnology from "./components/Pages/About/pages/Approvals/InstituteOfPharmacy";
import InstituteOfPharmacy from "./components/Pages/About/pages/Approvals/InstituteOfTechnology";
import AwardsAccolades from "./components/Pages/About/pages/AwardsAccolades";
import UniversityOfficers from "./components/Pages/About/pages/UniversityOfficers";
import Campus from "./components/Pages/Campus/Campus";
import CampusGallery from "./components/Pages/Campus/pages/CampusGallery";
import Infrastructure from "./components/Pages/Campus/pages/Infrastructure/Infrastructure";
import Parking from "./components/Pages/Campus/pages/Infrastructure/Parking";
import BankAndAtm from "./components/Pages/Campus/pages/Infrastructure/BankAndAtm";
import Playground from "./components/Pages/Campus/pages/Infrastructure/Playground";
import RoPlant from "./components/Pages/Campus/pages/Infrastructure/RoPlant";
import StationaryStall from "./components/Pages/Campus/pages/Infrastructure/StationaryStall";
import HostelMess from "./components/Pages/Campus/pages/Infrastructure/HostelMess";
import HostelRoom from "./components/Pages/Campus/pages/Infrastructure/HostelRoom";
import Hostels from "./components/Pages/Campus/pages/Infrastructure/Hostels";
import Workshop from "./components/Pages/Campus/pages/Infrastructure/Workshop";
import Auditorium from "./components/Pages/Campus/pages/Infrastructure/Auditorium";
import Library from "./components/Pages/Campus/pages/Infrastructure/Library";
import Cafeteria from "./components/Pages/Campus/pages/Infrastructure/Cafeteria";
import MultimediaClassrooms from "./components/Pages/Campus/pages/Infrastructure/MultimediaClassrooms";
import SmartClassrooms from "./components/Pages/Campus/pages/Infrastructure/SmartClassrooms";
import Laboratories from "./components/Pages/Campus/pages/Infrastructure/Laboratories";


import Admission from "./components/Pages/Admission/Admission";
import AdmissionProcedure from "./components/Pages/Admission/AdmissionProcedure/AdmissionProcedure";
import DoctoralProgrammes from "./components/Pages/Admission/DoctoralProgrammes/DoctoralProgrammes";
import EducationLoan from "./components/Pages/Admission/EducationLoan/EducationLoan";
import ExaminationSystem from "./components/Pages/Admission/ExaminationSystem/ExaminationSystem";
import HostelLife from "./components/Pages/Admission/HostelLife/HostelLife";
import PgPrograms from "./components/Pages/Admission/PgPrograms/PgPrograms";
import UgPrograms from "./components/Pages/Admission/UgPrograms/UgPrograms";
import Scholarships from "./components/Pages/Admission/Scholarships/Scholarships";
import Transportation from "./components/Pages/Admission/Transportation/Transportation";


import Academic from "./components/Pages/Academic/Schools";
import FacultyOfCommerceAndManagement from "./components/Pages/Academic/FacultiesNew/FacultyOfCommerceAndManagement/FacultyOfCommerceAndManagement";
import FacultyOfEngineeringAndTechnology from "./components/Pages/Academic/FacultiesNew/FacultyOfEngineeringAndTechnology/FacultyOfEngineeringAndTechnology";
import FacultyOfHumanitiesAndPolicyStudies from "./components/Pages/Academic/FacultiesNew/FacultyOfHumanitiesAndPolicyStudies/FacultyOfHumanitiesAndPolicyStudies";
import FacultyOfMedicineAndHealthcare from "./components/Pages/Academic/FacultiesNew/FacultyOfMedicineAndHealthcare/FacultyOfMedicineAndHealthcare";
import FacultyOfSciences from "./components/Pages/Academic/FacultiesNew/FacultyOfSciences/FacultyOfSciences";

import KrishnaSchoolOfBusinessManagement from "./components/Pages/Academic/Schools/FacultyOfCommerceAndManagement/KrishnaSchoolOfBusinessManagement/KrishnaSchoolOfBusinessManagement";
import KrishnaSchoolOfCommerce from "./components/Pages/Academic/Schools/FacultyOfCommerceAndManagement/KrishnaSchoolOfCommerce/KrishnaSchoolOfCommerce";
import KrishnaSchoolOfArtsAndHumanities from "./components/Pages/Academic/Schools/FacultyOfHumanitiesAndPolicyStudies/KrishnaSchoolOfArtsAndHumanities/KrishnaSchoolOfArtsAndHumanities";
import KrishnaSchoolOfSciences from "./components/Pages/Academic/Schools/FacultyOfSciences/KrishnaSchoolOfSciences/KrishnaSchoolOfSciences";
import KrishnaSchoolOfPhysiotherapyAndRehabilitation from "./components/Pages/Academic/Schools/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPhysiotherapyAndRehabilitation/KrishnaSchoolOfPhysiotherapyAndRehabilitation";
import KrishnaSchoolOfNursing from "./components/Pages/Academic/Schools/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfNursing/KrishnaSchoolOfNursing";
import KrishnaAyurvedMedicalCollege from "./components/Pages/Academic/Schools/FacultyOfMedicineAndHealthcare/KrishnaAyurvedMedicalCollege/KrishnaAyurvedMedicalCollege";
import KrishnaSchoolOfPharmacyAndResearch from "./components/Pages/Academic/Schools/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPharmacyAndResearch/KrishnaSchoolOfPharmacyAndResearch";
import KrishnaSchoolOfTechnology from "./components/Pages/Academic/Schools/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfTechnology/KrishnaSchoolOfTechnology";
import KrishnaSchoolOfDiplomaStudies from "./components/Pages/Academic/Schools/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfDiplomaStudies/KrishnaSchoolOfDiplomaStudies";
import KrishnaSchoolOfEmergingTechnologyAndAppliedResearch from "./components/Pages/Academic/Schools/FacultyOfEngineeringAndTechnology/Krishna SchoolOfEmergingTechnologyAndAppliedResearch/KrishnaSchoolOfEmergingTechnologyAndAppliedResearch";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c31a1f",
      },
      secondary: {
        main: "#264796",
      },
      warning: {
        main: "#ffe003",
      },
      success: {
        main: "#25db0f",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Box>
          <ContactNavbar />
          <MainNavbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="skect" element={<SKECT />} />
              <Route path="our-leadership" element={<OurLeadership />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="kpgu-vadodara" element={<KpguVadodara />} />
              <Route path="vision-mission" element={<VisionMission />} />
              <Route path="dr-kiran-c-patel-message" element={<DrKiranCPatelMessage />} />
              <Route path="message-from-the-presidents-desk" element={<MessageFromThePresidentsDesk />} />
              <Route path="message-from-the-provost" element={<MessageFromTheProvost />} />
              <Route path="statutory-recognition" element={<StatutoryRecognition />} />
              <Route path="awards-accolades" element={<AwardsAccolades />} />
              <Route path="university-officers" element={<UniversityOfficers />} />
              <Route path="governance" element={<Governance />}>
                <Route path="governing-body" element={<GoverningBody />} />
                <Route path="board-of-management" element={<BoardOfManagement />} />
                <Route path="academic-council" element={<AcademicCouncil />} />
                <Route path="board-of-studies" element={<BoardOfStudies />} />
                <Route path="finance-committee" element={<FinanceCommittee />} />
              </Route>
              <Route path="approvals" element={<Approvals />}>
                <Route path="institute-of-technology" element={<InstituteOfTechnology />} />
                <Route path="institute-of-pharmacy" element={<InstituteOfPharmacy />} />
                <Route path="ugc-approval" element={<UgcApproval />} />
              </Route>

            </Route>
            <Route path="/campus" element={<Campus />}>
              <Route path="gallery" element={<CampusGallery />} />
              <Route path="infrastructure" element={<Infrastructure />}>
                <Route path="smart-classrooms" element={<SmartClassrooms />} />
                <Route path="multimedia-classrooms" element={<MultimediaClassrooms />} />
                <Route path="laboratories" element={<Laboratories />} />
                <Route path="cafeteria" element={<Cafeteria />} />
                <Route path="library" element={<Library />} />
                <Route path="auditorium" element={<Auditorium />} />
                <Route path="workshop" element={<Workshop />} />
                <Route path="hostels" element={<Hostels />} />
                <Route path="hostel-room" element={<HostelRoom />} />
                <Route path="hostel-mess" element={<HostelMess />} />
                <Route path="stationary-stall" element={<StationaryStall />} />
                <Route path="ro-plant" element={<RoPlant />} />
                <Route path="playground" element={<Playground />} />
                <Route path="bank-atm" element={<BankAndAtm />} />
                <Route path="parking" element={<Parking />} />
              </Route>
            </Route>

            <Route path="/academics" element={<Academic />}>
              {/* ======================== Faculty ======================== */}
              <Route path="faculty-of-engineering-and-technology" element={<FacultyOfEngineeringAndTechnology />} />
              <Route path="faculty-of-medicine-and-healthcare" element={<FacultyOfMedicineAndHealthcare />} />
              <Route path="faculty-of-commerce-and-management" element={<FacultyOfCommerceAndManagement />} />
              <Route path="faculty-of-sciences" element={<FacultyOfSciences />} />
              <Route path="faculty-of-humanities-and-policy-studies" element={<FacultyOfHumanitiesAndPolicyStudies />} />
              {/* ======================== Schools ======================== */}

              <Route path="krishna-school-of-business-management" element={<KrishnaSchoolOfBusinessManagement />} />
              <Route path="krishna-school-of-commerce" element={<KrishnaSchoolOfCommerce />} />
              <Route path="krishna-school-of-arts-and-humanities" element={<KrishnaSchoolOfArtsAndHumanities />} />
              <Route path="krishna-school-of-sciences" element={<KrishnaSchoolOfSciences />} />
              <Route path="krishna-school-of-physiotherapy-and-rehabilitation" element={<KrishnaSchoolOfPhysiotherapyAndRehabilitation />} />
              <Route path="krishna-school-of-nursing" element={<KrishnaSchoolOfNursing />} />
              <Route path="krishna-ayurved-medical-college" element={<KrishnaAyurvedMedicalCollege />} />
              <Route path="krishna-school-of-pharmacy-and-research" element={<KrishnaSchoolOfPharmacyAndResearch />} />
              <Route path="krishna-school-of-technology" element={<KrishnaSchoolOfTechnology />} />
              <Route path="krishna-school-of-diploma-studies" element={<KrishnaSchoolOfDiplomaStudies />} />
              <Route path="krishna-school-of-emerging-technology-and-applied-research" element={<KrishnaSchoolOfEmergingTechnologyAndAppliedResearch />} />


            </Route>

            <Route path="/admission" element={<Admission />}>
              <Route path="admission-procedure" element={< AdmissionProcedure />}></Route>
              <Route path="doctoral-programmes" element={<DoctoralProgrammes />}></Route>
              <Route path="education-loan" element={<EducationLoan />}></Route>
              <Route path="examination-system" element={<ExaminationSystem />}></Route>
              <Route path="hostel-life" element={<HostelLife />}></Route>
              <Route path="pg-programs" element={<PgPrograms />}></Route>
              <Route path="ug-programs" element={<UgPrograms />}></Route>
              <Route path="scholarships" element={<Scholarships />}></Route>
              <Route path="transportation" element={<Transportation />}></Route>
            </Route>

          </Routes>
          {/* <Footer /> */}
        </Box>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;








