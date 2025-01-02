import React, { useEffect } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section1 from "./components/Section1-intro";
import Contact from "./components/Contact";
import Section2 from "./components/Section2-skills";
import Section3 from "./components/Section3-projects";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { useLocation } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main portfolio page */}
          <Route path="/" element={<Portfolio />} />
          
          {/* Project pages */}
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
        </Routes>
      </div>
    </Router>
  );
};

const Portfolio = () => {
  const { hash } = useLocation();  // Get the hash from the URL

  useEffect(() => {
    // scroll to the corresponding element
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
      }
    }
  }, [hash]);
  return (
    <div>
      <Header />
      <section id="intro" /> {/* helps identify the projects section so it scrolls smoothly after looking at a project page */}
      <Section1 />
      <section id ="skills" />
      <Section2 />
      <section id="projects" />
      <Section3 />
      <section id="contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;