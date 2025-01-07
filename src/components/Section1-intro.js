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
                Hello, I'm Hannah
              </h2>
              <h2>
                This is my portfolio
              </h2>
            </header>
            <p>
             I hold a Professional Certificate in Full Stack Development from the MIT xPro program, where I mastered the 
             MERN stack and developed a passion for crafting visually engaging web applications. </p>
            <p>
             I earned a BA in Spanish Language and Literature from UConn, which sharpened my communication skills and expanded my global perspective.
             </p><p>
             With a diverse background in hospitality, real estate, and cybersecurity, I bring creativity, adaptability, and 
             problem-solving to every project I work on.</p>
            <p>
            Outside of work, I enjoy scuba diving and strategy board games, both of which offer a chance to think 
            critically and explore new challenges, whether it's underwater or on the game board. 
            </p><p>
              I’m excited to apply my skills in a new role where I can continue to grow professionally and contribute to my team’s success.
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
