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
// import Hostels from "./components/Pages/Campus/pages/Infrastructure/Hostels";
import Workshop from "./components/Pages/Campus/pages/Infrastructure/Workshop";
import Auditorium from "./components/Pages/Campus/pages/Infrastructure/Auditorium";
import Library from "./components/Pages/Campus/pages/Infrastructure/Library";
import Cafeteria from "./components/Pages/Campus/pages/Infrastructure/Cafeteria";
import MultimediaClassrooms from "./components/Pages/Campus/pages/Infrastructure/MultimediaClassrooms";
import SmartClassrooms from "./components/Pages/Campus/pages/Infrastructure/SmartClassrooms";
import Laboratories from "./components/Pages/Campus/pages/Infrastructure/Laboratories";

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
                {/* <Route path="hostels" element={<Hostels />} /> */}
                <Route path="hostel-room" element={<HostelRoom />} />
                <Route path="hostel-mess" element={<HostelMess />} />
                <Route path="stationary-stall" element={<StationaryStall />} />
                <Route path="ro-plant" element={<RoPlant />} />
                <Route path="playground" element={<Playground />} />
                <Route path="bank-atm" element={<BankAndAtm />} />
                <Route path="parking" element={<Parking />} />
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
