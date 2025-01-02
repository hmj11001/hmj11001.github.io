import React from "react";

const Header = () => {
  return (
    <section id="header" className="is-preload">
      <div className="inner">
        <span className="icon solid major fa-laptop-code"></span>
        <h1>
          Hi, I'm <strong>Hannah</strong>.
          <br />
          Let's build together. 
        </h1>
        <p>
        Front-End Developer Dedicated to Bringing Ideas to Life.
         
        </p>
        <ul className="actions special">
          <li>
            <a href="#intro" className="button scrolly">
              Explore
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;