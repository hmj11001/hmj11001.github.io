import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation


const Project3 = () => {
  return (
    <div>
      <h1>Creating a Portfolio</h1>
    <p>
    My first portfolio was a basic static site built with plain HTML, showcasing minimal functionality and design. The portfolio was never finished in its entirety, due to lack of practice and completed projects.
    </p>
    <p>Visit my first portfolio <a href="https://hmj11001.github.io/hmj11001-original/" target="_blank" rel="noreferrer">here</a>
    </p>
    <p>
    In contrast, my new portfolio demonstrates significant growth in my development skills. 
    Starting with an HTML5 design template, I converted the entire project into a modular React application, integrating features like reusable components, dynamic 
    routing, and enhanced interactivity. This project not only highlights my technical skills but also demonstrates how I’ve 
    evolved as a developer, turning a static site into a polished, engaging web experience.

    </p>
      <a href="https://github.com/hmj11001/hmj11001.github.io" target="_blank" rel="noreferrer">
        Old Version on GitHub
      </a>
      <br />
      <a href="https://github.com/hmj11001/hmj11001.github.io" target="_blank" rel="noreferrer">
        New Version on GitHub {/*must add project to github and update link*/}
      </a>
      <br />
      <Link to="/#projects">Back to Portfolio</Link>  {/* Back to the main portfolio page */}
    </div>
  );
};

export default Project3;