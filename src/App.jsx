import { Box, createTheme } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "./components/Pages/index";
import { ThemeProvider } from "@emotion/react";
import { createContext } from "react";
import { AppProvider } from "./contexts/AppContext";
// ========================Mui Navbar========================
// import NavBar from "./components/layout/MuiNavBar/NavBar/NavBar";
import ContactNavbar from "./components/layout/ContactNavbar";
// ========================Bootstrap Navbar========================
import MainNavbar from "./components/layout/BootstrapNavbar/MainNavbar";

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
          </Routes>
        </Box>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
