import React from "react";

const Contact = () => {
  return (
    <section id="four" className="main style2 special">
      <div className="container">
        <header className="major">
          <h2>Want to work together?</h2>
        </header>
        <p>Let's collaborate.</p>
        <ul className="actions special">
          <li>
            <a href="mailto:hannah.m.johnson9996@gmail.com"  className="button wide primary">
              Email me
            </a>
          </li>
          <li>
            <a href="/Hannah_Resume.pdf" download="Hannah_Resume.pdf" className="button wide">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
