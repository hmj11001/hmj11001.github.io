import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiExpress, SiNextdotjs } from 'react-icons/si';
import styles from './Section2.module.css'; // Import the CSS Module

const Section2 = () => {
  return (
    <section id="skills" className="main style2">
      <div className="container">
        <div className="row gtr-150">
          {/* Icons Column */}
          <div className="col-6 col-12-medium">
            <ul className={styles.majorIcons}>
              <li><FaReact size={60} title="React" className={styles.icon} /><span className={styles.tooltip}>React</span></li>
              <li><FaJsSquare size={60} title="JavaScript" className={styles.icon} /><span className={styles.tooltip}>JavaScript</span></li>
              <li><FaNodeJs size={60} title="Node.js" className={styles.icon} /><span className={styles.tooltip}>Node.js</span></li>
              <li><SiExpress size={60} title="Express.js" className={styles.icon} /><span className={styles.tooltip}>Express.js</span></li>
              <li><FaHtml5 size={60} title="HTML5" className={styles.icon} /><span className={styles.tooltip}>HTML5</span></li>
              <li><FaCss3Alt size={60} title="CSS3" className={styles.icon} /><span className={styles.tooltip}>CSS3</span></li>
              <li><FaAws size={60} title="AWS" className={styles.icon} /><span className={styles.tooltip}>AWS</span></li>
              <li><SiNextdotjs size={60} title="Next.js" className={styles.icon} /><span className={styles.tooltip}>Next.js</span></li>
            </ul>
          </div>

          {/* Text Content Column */}
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2><strong>Technical Skillset</strong></h2>
            </header>

            <h4><strong>Frontend</strong></h4>
            <p>React, Next.js, JSX, Tailwind CSS, shadcn/ui</p>

            <h4><strong>Backend</strong></h4>
            <p>Node.js, Express, REST APIs, Drizzle ORM, Next.js API routes</p>

            <h4><strong>Databases</strong></h4>
            <p>Firebase, MongoDB, PostgreSQL (Neon)</p>

            <h4><strong>Auth & Payment</strong></h4>
            <p>Clerk (social/email auth), PayPal integration, credit systems</p>

            <h4><strong>DevOps & Tools</strong></h4>
            <p>Docker, AWS, Vercel, GitHub, Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
