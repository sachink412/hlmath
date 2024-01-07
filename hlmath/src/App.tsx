import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CalculusI from "./pages/CalculusI";
import CalculusII from "./pages/CalculusII";
import CalculusIII from "./pages/CalculusIII";
import LinearAlgebra from "./pages/LinearAlgebra";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    const height = document.querySelector(".navbar")?.clientHeight;
    setNavBarHeight(height || 0);
  }, []);

  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavigationBar />
        <div style={{ marginTop: navBarHeight + 20, flex: 1 }}>
          <Routes>
            <Route path="/calculus/i" element={<CalculusI />} />
            <Route path="/calculus/ii" element={<CalculusII />} />
            <Route path="/calculus/iii" element={<CalculusIII />} />
            <Route path="/linear-algebra" element={<LinearAlgebra />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
