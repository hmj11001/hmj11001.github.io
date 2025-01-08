import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase, SiJest, SiPostman, SiGraphql, SiNextdotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import styles from './Section2.module.css';  // Import the CSS Module

const Section2 = () => {
  return (
    <section id="skills" className="main style2">
      <div className="container">
        <div className="row gtr-150">
          {/* Icons Column */}
          <div className="col-6 col-12-medium">
            <ul className={styles.majorIcons}>
              <li><FaReact size={90} title="React" className={styles.icon} /><span className={styles.tooltip}>React</span></li>
              <li><FaJsSquare size={90} title="JavaScript" className={styles.icon} /><span className={styles.tooltip}>JavaScript</span></li>
              <li><FaNodeJs size={90} title="Node.js" className={styles.icon} /><span className={styles.tooltip}>Node.js</span></li>
              <li><SiExpress size={90} title="Express.js" className={styles.icon} /><span className={styles.tooltip}>Express.js</span></li>
              <li><FaHtml5 size={90} title="HTML5" className={styles.icon} /><span className={styles.tooltip}>HTML5</span></li>
              <li><FaCss3Alt size={90} title="CSS3" className={styles.icon} /><span className={styles.tooltip}>CSS3</span></li>
              <li><FaDocker size={90} title="Docker" className={styles.icon} /><span className={styles.tooltip}>Docker</span></li>
              <li><FaAws size={90} title="AWS" className={styles.icon} /><span className={styles.tooltip}>AWS</span></li>
              <li><SiNextdotjs size={90} title="Next.js" className={styles.icon} /><span className={styles.tooltip}>Next.js</span></li>
            </ul>
          </div>

          {/* Text Content Column */}
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>Technical Skillset</h2>
            </header>

            <h4><strong>Frontend Development</strong></h4>  
              <p>My primary focus has been on building dynamic, responsive web applications using <strong>React</strong> and <strong>JavaScript (ES6+)</strong>. I am proficient in <strong>HTML5</strong> and <strong>CSS3</strong>, allowing me to structure and style websites effectively. With React, I can build fast, interactive user interfaces, and I use <strong>Tailwind CSS</strong> for utility-first design.
            </p>

            <h4><strong>Backend Development</strong></h4>
            <p>  
              On the server-side, I am highly skilled in <strong>Node.js</strong> for building scalable and high-performance applications. I use <strong>Express.js</strong> for routing and managing APIs, and I'm comfortable with <strong>MongoDB</strong> for NoSQL data storage and <strong>PostgreSQL</strong> for relational data management.
            </p>

            <h4><strong>Deployment & Cloud</strong></h4> 
              <p>I have experience containerizing applications with <strong>Docker</strong>, making them portable and easy to deploy in various environments. Additionally, I have deployed apps on <strong>AWS</strong> and use <strong>GitHub</strong> for version control, enabling collaboration and smooth deployment processes.
            </p>

            <h4><strong>Testing & APIs</strong> </h4>
              <p>I am proficient in testing with <strong>Jest</strong> and API development using tools like <strong>Postman</strong> for testing and debugging. I also use <strong>GraphQL</strong> for efficient data fetching, ensuring that applications are optimized and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
