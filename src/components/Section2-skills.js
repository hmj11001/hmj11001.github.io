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
            <p>I build dynamic, responsive web apps with <strong>React</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>HTML5</strong>. I use <strong>CSS3</strong> and <strong>Tailwind CSS</strong> to create clean, interactive designs.</p>

            <h4><strong>Backend Development</strong></h4>
            <p>I'm skilled in <strong>Node.js</strong> for scalable applications and use <strong>Express.js</strong> for routing. I work with <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, and <strong>Firebase</strong> for data management.</p>

            <h4><strong>Deployment & Cloud</strong></h4>
            <p>I containerize apps with <strong>Docker</strong> and deploy on <strong>AWS</strong>, ensuring seamless cloud integration. I use <strong>GitHub</strong> for version control and deployment automation.</p>

            <h4><strong>Testing & APIs</strong></h4>
            <p>I'm proficient in <strong>Jest</strong> for testing and use tools like <strong>Postman</strong> for API development. I also implement <strong>GraphQL</strong> for optimized data fetching.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
