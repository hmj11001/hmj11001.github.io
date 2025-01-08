import React, { useState } from "react";
import { Link } from "react-router-dom";
import Othello from "../assets/images/Othello.png";
import oldportfolio from "../assets/images/oldportfolio.png";
import moviehome from "../assets/images/moviehome.png";
import bloghomepage from "../assets/images/bloghomepage.png"

// Add more project as needed

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

  const goToNext = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
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
          {projects.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
            <div key={index} className="project-card">
              <span className="image fit">
                <img src={project.img} alt={project.title} />
              </span>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <ul className="actions special">
                <li>
                  <Link to={project.link} className="button">More</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="carousel-arrows">
          <button className="prev" onClick={goToPrev}>←</button>
          <button className="next" onClick={goToNext}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
