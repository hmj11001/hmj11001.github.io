import React, { useState } from "react";
import { Link } from "react-router-dom";
import Othello from "../assets/images/Othello.png";
import oldportfolio from "../assets/images/oldportfolio.png";
import moviehome from "../assets/images/moviehome.png";
import bloghomepage from "../assets/images/bloghomepage.png";
import "./Section3.module.css"; 
import "./ProjectCard.css"; // Add this line


const projects = [
  {
    img: Othello,
    title: "Othello Game",
    description:
      "A React-based Othello game that features turn-based gameplay, dynamic piece flipping, and an automated check for valid moves, ending the game when neither player can play.",
    link: "/project1",
  },
  {
    img: moviehome,
    title: "Movie Tracker",
    description:
      "This project is a movie tracking app where users can search for movies via an API, read the details, and add them to exclusive lists like 'Want to Watch', 'Liked', and 'Disliked' using Firebase to store the data.",
    link: "/project2",
  },
  {
    img: oldportfolio,
    title: "Portfolio Project",
    description:
      "My portfolio transformation from a simple, static HTML portfolio to a dynamic, React-powered showcase, rebuilt from an HTML5 template with added features and interactivity.",
    link: "/project3",
  },
  {
    img: bloghomepage,
    title: "Blog Site",
    description:
      "This simple blog built with Next.js focuses on showcasing basic concepts like static site generation and dynamic routing.",
    link: "/project4",
  },
];

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Function to go to the next set of 3 projects (cycling through the list)
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + itemsPerPage) % projects.length;  // Using modulo for cycling
      return nextIndex;
    });
  };

  // Function to go to the previous set of 3 projects (cycling backwards)
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexMod = (prevIndex - itemsPerPage + projects.length) % projects.length; // Modulo to wrap around
      return prevIndexMod;
    });
  };

  return (
    <section id="projects" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Recent Work</h2>
        </header>
        <h4>Discover the projects I've been building</h4>

        {/* Project Container for Carousel */}
        <div className="projects-container">
          {projects
            .slice(currentIndex, currentIndex + itemsPerPage)
            .concat(projects.slice(0, Math.max(0, currentIndex + itemsPerPage - projects.length))) // Handle wrapping
            .map((project, index) => (
              <div key={index} className="project-card">
                <span className="image fit">
                  <img src={project.img} alt={project.title} />
                </span>
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="more-button-container">
                  <Link to={project.link} className="button">
                    More
                  </Link>
                </div>
              </div>
            ))}
        </div>
          <br/>
        {/* Arrow Navigation */}
        <div className="carousel-container">
          <button className="carousel-arrow prev" onClick={goToPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-arrow next" onClick={goToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
