import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Services } from "./Pages/services";
import { Project } from "./Pages/project";
import { About } from "./Pages/About";
import {Navbar} from "./components/Navbar.component"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
