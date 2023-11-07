import { Box } from "@mui/material";
import NavBar from "./components/layout/NavBar/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "./components/Pages/index";

function App() {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
