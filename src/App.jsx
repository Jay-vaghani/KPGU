import { Box, createTheme } from "@mui/material";
import NavBar from "./components/layout/NavBar/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "./components/Pages/index";
import { ThemeProvider } from "@emotion/react";

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
      <Box>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
