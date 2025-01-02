import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <ul className="icons">
        {/*add linkin logo and link here, add link to download current resume*/}
        <li>
          <a href="https://www.linkedin.com/in/hannahmjohnson2014/" 
            className="icon brands alt fa-linkedin" 
            target="_blank" 
            rel="noreferrer">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/hmj11001" 
          className="icon brands alt fa-github"
          target="_blank" 
          rel="noreferrer" >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="mailto:hannah.m.johnson9996@gmail.com" 
          className="icon solid alt fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; hmj11001</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a> 
        </li>
      </ul>
    </section>
  );
};

export default Footer;
