import "./App.css";
import Navbar from "./components/Navbar.component";
import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Services } from "./Pages/services";
import { Project } from "./Pages/project";
import { About } from "./Pages/About";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  );
}

export default App;
