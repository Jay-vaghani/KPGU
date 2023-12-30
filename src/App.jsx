import { lazy, Suspense } from "react";
import { Box, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "./components/Pages/index";
import { ThemeProvider } from "@emotion/react";
import { AppProvider } from "./contexts/AppContext";
import ContactNavbar from "./components/layout/ContactNavbar";
import "./App.css";

// ========================Mui Navbar========================
// import NavBar from "./components/layout/MuiNavBar/NavBar/NavBar";
// ========================Bootstrap Navbar========================
import MainNavbar from "./components/layout/BootstrapNavbar/MainNavbar";
import Gallery from "./components/Pages/Gallery/Gallery";
import Loading from "./Utils/Loading";
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
              <Route path="message-from-the-presidents-desk" element={<MessageFromThePresidentsDesk/>} />
              <Route path="message-from-the-provost" element={<MessageFromTheProvost/>} />
              <Route path="governance/academic-council" element={<AcademicCouncil />} />
              <Route path="governance/finance-committee" element={<FinanceCommittee />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/gallery"
              element={
                <Suspense fallback={<Loading />}>
                  <Gallery />
                </Suspense>
              }
            />
          </Routes>
          {/* <Footer /> */}
        </Box>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
