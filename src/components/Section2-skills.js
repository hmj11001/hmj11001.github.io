import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Section2 = () => {
  return (
    <section id="skills" className="main style2">
      <div className="container">
        <div className="row gtr-150">
          {/* Icons Column, add icons for frameworks i used, add hover feature so you can see each one when you hover*/}
          <div className="col-6 col-12-medium">
            <ul className="major-icons">
              <li>
                <span className="icon solid style1 major fa-code"></span>
              </li>
              <li>
                <span className="icon solid style2 major fa-bolt"></span>
              </li>
              <li>
                <span className="icon solid style3 major fa-camera-retro"></span>
              </li>
              <li>
                <span className="icon solid style4 major fa-cog"></span>
              </li>
              <li>
                <span className="icon solid style5 major fa-desktop"></span>
              </li>
              <li>
                <span className="icon solid style6 major fa-calendar"></span>
              </li>
            </ul>
          </div>

          {/* Text Content Column */}
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>
                These are the skills i acquired
              </h2>
            </header>
            <p>
              Talk about the frameworks I used and how they are helpful
            </p>
            <p>
              describe proficiency in each one that is important
            </p>
            <p>
              things i like the most or want to work on or learn
              <p>
                front end: html css javascript es6
                <br /> 
                back end: node.js, express mongoDB, firebase, next.javascript
                <br />
                version control: github, testing: jest, deployment: docker, aws, firebase, additional tools: postman, graphql
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
