import React from "react";
import profilepic from '../assets/images/profilepic.jpg'; // Correct import
import '../App.css';

const Section1 = () => {
  return (
    <section id="intro" className="main style1">
      <div className="container">
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>
                Nice to meet you!
              </h2>
              <h2>
                Welcome to my portfolio
              </h2>
            </header>
            <p>
             I hold a Professional Certificate in Full Stack Development from the MIT xPro program, where I gained experience in the 
             MERN stack and developed a passion for crafting visually engaging web applications.
             My Bachelor’s degree in Spanish Language and Literature from UConn honed my communication skills and broadened my 
             cultural perspective, making it easy to connect with diverse teams and audiences.</p>
             <p>
             My career journey has taken me through hospitality, real estate, and cybersecurity, giving me a unique blend of 
             creativity, adaptability, and problem-solving that I bring to every project. Whether it's designing intuitive 
             interfaces or tackling complex challenges, I thrive on creating meaningful solutions.
             </p>
            <p>
            Outside of work, I enjoy scuba diving and strategy board games, both of which offer a chance to think 
            critically and explore new challenges, whether it's underwater or on the game board. 
            I’m looking forward to applying my skills in a new role where I can continue to grow professionally and contribute to my team’s success.
            </p>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <span className="image fit">
              <img src={profilepic} alt="Headshot of Hannah" className="image-small-height" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
