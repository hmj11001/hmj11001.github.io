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
              I’m a front-end developer with a Professional Certificate in Full Stack Development from the MIT xPro program, 
              where I honed my skills in the MERN stack and discovered a passion for crafting intuitive, visually engaging user 
              interfaces using modern web technologies. </p>
            <p>
              I earned a BA in Spanish Language and Literature from UConn, which 
              sharpened my communication skills and broadened my global perspective. My professional journey spans hospitality, 
              the travel industry, real estate, and cybersecurity, shaping me into an adaptable problem-solver with a creative 
              edge. </p>
            <p>
            In my free time, I enjoy scuba diving and strategy board games—both offer a chance to think 
            critically and explore new challenges, whether it's underwater or on the game board. I’m excited to apply my skills 
            in a new role where I can continue growing as a developer and contribute to my team’s success.
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