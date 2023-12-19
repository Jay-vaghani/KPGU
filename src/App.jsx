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

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e31e24",
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
            <Route path="/about" element={<About />} />
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
        </Box>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
