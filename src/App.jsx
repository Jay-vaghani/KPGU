import { lazy, Suspense, useEffect } from "react";
import { Box, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { About, Home } from "./components/Pages/index";
import { ThemeProvider } from "@emotion/react";
import { AppProvider } from "./contexts/AppContext";
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



import Admission from "./components/Pages/Admission/Admission";
import AdmissionProcedure from "./components/Pages/Admission/AdmissionProcedure/AdmissionProcedure";



// ========================================== ACADEMIES ==========================================


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
import Campus from "./components/Pages/Campus/Campus";
import CampusLife from "./components/Pages/Campus/pages/CampusLife/CampusLife";
import Facilities from "./components/Pages/Campus/pages/Facilities/Facilities";
import Gallery from "./components/Pages/Campus/pages/Gallery/Gallery";
import ContactNavbar from "./components/layout/BootstrapNavbar/ContactNavbar";
import Programs from "./components/Pages/Admission/Programs/Programs";
import EducationLoan from "./components/Pages/Admission/EducationLoan/EducationLoan";
import Scholarships from "./components/Pages/Admission/Scholarships/Scholarships";
import InternationalStudents from "./components/Pages/Admission/InternationalStudents/InternationalStudents";
import AdmissionInquiry from "./components/Pages/AdmissionInquiry/AdmissionInquiry";


// ========================================== CAMPUS ==========================================


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

            <Route path="/campus" element={<Campus />}>
              <Route path="campus-life" element={<CampusLife />}></Route>
              <Route path="facilities" element={<Facilities />}></Route>
              <Route path="gallery" element={<Gallery />}></Route>
            </Route>

            <Route path="/admission" element={<Admission />}>
              <Route path="programs" element={<Programs />}></Route>
              <Route path="admission-procedure" element={<AdmissionProcedure />}></Route>
              <Route path="education-loan" element={<EducationLoan />}></Route>
              <Route path="international-students" element={<InternationalStudents />}></Route>
              <Route path="scholarships" element={<Scholarships />}></Route>
            </Route>
            <Route path="/admission-inquiry" element={<AdmissionInquiry />}></Route>
          </Routes>
          {/* <Footer /> */}
        </Box>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;








