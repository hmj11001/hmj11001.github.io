import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import moviegif from "../assets/images/moviegif.gif";

const Project2 = () => {
  return (
    <div>
      <h1>Movie Tracker</h1>
      <p>This movie recommendation app allows users to search for movies using the OMDB API and view detailed information such as 
        the genre, plot, and poster. Once a movie is selected, users can add it to one of three customizable lists: "Want to Watch",
         "Liked", or "Disliked". To maintain organization, each movie can only be added to one list at a time, preventing 
         duplication across lists. 
         </p>
         <p>
         The app is integrated with Firebase to store and persist these movie lists, ensuring that data 
         is saved across sessions. This project demonstrates my skills in React, API integration, and Firebase, providing an 
         intuitive user interface for tracking movies.</p>
       <img src={moviegif} alt="Movie tracker demonstration" className="resized-gif"/>
      <p>
      <a href="https://github.com/hmj11001/movie-database-project" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <br />
      <Link to="/#projects">Back to Portfolio</Link>  {/* Back to the main portfolio page */}
      </p>
    </div>
  );
};

export default Project2;