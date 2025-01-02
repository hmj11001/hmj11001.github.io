import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import gameplay from "../assets/images/gameplay.gif";
import "../App.css";
import "../assets/css/main.css";

const Project1 = () => {
  return (
    <div>
      <h1>Othello Game</h1>
      <p>This Othello game, recreates the classic strategy board game with interactive and dynamic gameplay. 
        < br />
        The game demonstrates advanced coding techniques through features like dynamic state management using React hooks and 
        custom algorithms for validating moves, flipping pieces, and updating game states. 
        <br/>
        The game dynamically handles situations where players cannot make valid moves, switching 
        turns appropriately or ending the game when neither player can proceed. 
        </p>
      <img src={gameplay} alt="Othello Game Play" className="resized-gif"/>
      <p>
      <a href="https://github.com/hmj11001/Othello-Project" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <br />
      <Link to="/#projects">Back to Portfolio</Link>  {/* Back to the main portfolio page */}
      </p>
    </div>
  );
};

export default Project1;
