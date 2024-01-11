import { lazy, Suspense } from "react";
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
import Hostels from "./components/Pages/Campus/pages/Infrastructure/hostels";
import Workshop from "./components/Pages/Campus/pages/Infrastructure/Workshop";
import Auditorium from "./components/Pages/Campus/pages/Infrastructure/Auditorium";
import Library from "./components/Pages/Campus/pages/Infrastructure/Library";
import Cafeteria from "./components/Pages/Campus/pages/Infrastructure/Cafeteria";
import MultimediaClassrooms from "./components/Pages/Campus/pages/Infrastructure/MultimediaClassrooms";
import SmartClassrooms from "./components/Pages/Campus/pages/Infrastructure/SmartClassrooms";
import Laboratories from "./components/Pages/Campus/pages/Infrastructure/Laboratories";
import FacultyOfEngineeringAndTechnology from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/FacultyOfEngineeringAndTechnology";
import KrishnaSchoolOfEmergingTechnologyAndAppliedResearch from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfEmergingTechnologyAndAppliedResearch/KrishnaSchoolOfEmergingTechnologyAndAppliedResearch";
import KrishnaSchoolOfDiplomaStudies from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfDiplomaStudies/KrishnaSchoolOfDiplomaStudies";
import KrishnaSchoolOfTechnology from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfTechnology/KrishnaSchoolOfTechnology";
import KsetDiploma from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfEmergingTechnologyAndAppliedResearch/Diploma/KsetDiploma";
import KsetUG from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfEmergingTechnologyAndAppliedResearch/UG/KsetUG";
import KsetPG from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfEmergingTechnologyAndAppliedResearch/PG/KsetPG";
import KsetPgManagement from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfEmergingTechnologyAndAppliedResearch/PgManagement/KsetPgManagement";
import KsdsDiploma from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfDiplomaStudies/Diploma/KsdsDiploma";
import KstUG from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfTechnology/UG/KstUG";
import KstPG from "./components/Pages/Academic/Faculties/FacultyOfEngineeringAndTechnology/KrishnaSchoolOfTechnology/PG/KstPG";
import FacultyOfMedicineAndHealthcare from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/FacultyOfMedicineAndHealthcare";
import KrishnaSchoolOfPharmacyAndResearch from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPharmacyAndResearch/KrishnaSchoolOfPharmacyAndResearch";
import KrishnaAyurvedMedicalCollege from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaAyurvedMedicalCollege/KrishnaAyurvedMedicalCollege";
import KrishnaSchoolOfNursing from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfNursing/KrishnaSchoolOfNursing";
import KrishnaSchoolOfPhysiotherapyAndRehabilitation from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPhysiotherapyAndRehabilitation/KrishnaSchoolOfPhysiotherapyAndRehabilitation";
import KspUG from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPharmacyAndResearch/UG/KspUG";
import KspPG from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPharmacyAndResearch/PG/KspPG";
import KsnUG from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfNursing/UG/KsnUG";
import KsprUG from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPhysiotherapyAndRehabilitation/UG/KsprUG";
import KsprPG from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaSchoolOfPhysiotherapyAndRehabilitation/PG/KsprPG";
import KamcUG from "./components/Pages/Academic/Faculties/FacultyOfMedicineAndHealthcare/KrishnaAyurvedMedicalCollege/UG/KamcUG";
import KrishnaSchoolOfSciences from "./components/Pages/Academic/Faculties/FacultyOfScience/KrishnaSchoolOfSciences/KrishnaSchoolOfSciences";
import KssUG from "./components/Pages/Academic/Faculties/FacultyOfScience/KrishnaSchoolOfSciences/UG/KssUG";
import FacultyOfScience from "./components/Pages/Academic/Faculties/FacultyOfScience/FacultyOfScience";
import FacultyOfHumanitiesAndPolicyStudies from "./components/Pages/Academic/Faculties/FacultyOfHumanitiesAndPolicyStudies/FacultyOfHumanitiesAndPolicyStudies";
import KrishnaSchoolOfArtsAndHumanities from "./components/Pages/Academic/Faculties/FacultyOfHumanitiesAndPolicyStudies/KrishnaSchoolOfArtsAndHumanities/KrishnaSchoolOfArtsAndHumanities";
import KsahUG from "./components/Pages/Academic/Faculties/FacultyOfHumanitiesAndPolicyStudies/KrishnaSchoolOfArtsAndHumanities/UG/KsahUG";
import FacultyOfCommerceAndManagement from "./components/Pages/Academic/Faculties/FacultyOfCommerceAndManagement/FacultyOfCommerceAndManagement";
import KrishnaSchoolOfCommerce from "./components/Pages/Academic/Faculties/FacultyOfCommerceAndManagement/KrishnaSchoolOfCommerce/KrishnaSchoolOfCommerce";
import KscUG from "./components/Pages/Academic/Faculties/FacultyOfCommerceAndManagement/KrishnaSchoolOfCommerce/UG/KscUG";
import KrishnaSchoolOfBusinessManagement from "./components/Pages/Academic/Faculties/FacultyOfCommerceAndManagement/KrishnaSchoolOfBusinessManagement/KrishnaSchoolOfBusinessManagement";
import KsbmUG from "./components/Pages/Academic/Faculties/FacultyOfCommerceAndManagement/KrishnaSchoolOfBusinessManagement/UG/KsbmUG";
import KsbmPG from "./components/Pages/Academic/Faculties/FacultyOfCommerceAndManagement/KrishnaSchoolOfBusinessManagement/PG/KsbmPG";

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
            <Route path="/academics">
              <Route path="faculty-of-engineering-and-technology" element={<FacultyOfEngineeringAndTechnology />}>
                <Route path="krishna-school-of-emerging-technology-and-applied-research" element={<KrishnaSchoolOfEmergingTechnologyAndAppliedResearch />}>
                  <Route path="diploma" element={<KsetDiploma />} />
                  <Route path="ug" element={<KsetUG />} />
                  <Route path="pg" element={<KsetPG />} />
                  <Route path="pg-management" element={<KsetPgManagement />} />
                </Route>
                <Route path="krishna-school-of-diploma-studies" element={<KrishnaSchoolOfDiplomaStudies />} >
                  <Route path="diploma" element={<KsdsDiploma />} />
                </Route>
                <Route path="krishna-school-of-technology" element={<KrishnaSchoolOfTechnology />} >
                  <Route path="ug" element={<KstUG />} />
                  <Route path="pg" element={<KstPG />} />
                </Route>
              </Route>
              <Route path="faculty-of-medicine-and-healthcare" element={<FacultyOfMedicineAndHealthcare />}>
                <Route path="krishna-school-of-pharmacy-and-research" element={<KrishnaSchoolOfPharmacyAndResearch />}>
                  <Route path="ug" element={<KspUG />} />
                  <Route path="pg" element={<KspPG />} />
                </Route>
                <Route path="krishna-ayurved-medical-college" element={<KrishnaAyurvedMedicalCollege />}>
                  <Route path="ug" element={<KamcUG />} />
                </Route>
                <Route path="krishna-school-of-nursing" element={<KrishnaSchoolOfNursing />}>
                  <Route path="ug" element={<KsnUG />} />
                </Route>
                <Route path="krishna-school-of-physiotherapy-and-rehabilitation" element={<KrishnaSchoolOfPhysiotherapyAndRehabilitation />}>
                  <Route path="ug" element={<KsprUG />} />
                  <Route path="pg" element={<KsprPG />} />
                </Route>
              </Route>
              <Route path="faculty-of-sciences" element={<FacultyOfScience />}>
                <Route path="krishna-school-of-sciences" element={<KrishnaSchoolOfSciences />}>
                  <Route path="ug" element={<KssUG />} />
                </Route>
              </Route>
              <Route path="faculty-of-humanities-and-policy-studies" element={<FacultyOfHumanitiesAndPolicyStudies />}>
                <Route path="krishna-school-of-arts-and-humanities" element={<KrishnaSchoolOfArtsAndHumanities />}>
                  <Route path="ug" element={<KsahUG />} />
                </Route>
              </Route>
              <Route path="faculty-of-commerce-and-management" element={<FacultyOfCommerceAndManagement />}>
                <Route path="krishna-school-of-commerce" element={<KrishnaSchoolOfCommerce />}>
                  <Route path="ug" element={<KscUG />} />
                </Route>
                <Route path="krishna-school-of-business-management" element={<KrishnaSchoolOfBusinessManagement />}>
                  <Route path="ug" element={<KsbmUG />} />
                  <Route path="pg" element={<KsbmPG />} />
                </Route>
              </Route>
            </Route>
          </Routes>
          {/* <Footer /> */}
        </Box>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
