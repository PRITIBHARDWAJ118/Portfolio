import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Skills from "./pages/Skills.jsx";
import Hobbies from "./pages/Hobbies.jsx";
import Resume from "./pages/Resume.jsx";
import Activities from "./pages/Activities.jsx";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";

function App() {
  const [isIntroVisible, setIsIntroVisible] = useState(
    () => window.location.pathname === "/",
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
      {isIntroVisible && <LoadingScreen onComplete={() => setIsIntroVisible(false)} />}
    </BrowserRouter>
  );
}

export default App;
