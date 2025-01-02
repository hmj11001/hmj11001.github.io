import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import firstpostdirect from "../assets/images/firstpostdirect.gif";
import "../App.css";
import "../assets/css/main.css";

const Project4 = () => {
  return (
    <div>
      <h1>Classic Blog</h1>
     <p> This blog is a simple Next.js project that highlights the simplicity of the framework. It uses static site generation 
        to pre-render pages, making the blog load quickly and perform better for SEO. The posts have their own unique URLs thanks to dynamic routing, 
        which makes everything feel more personalized. 
        </p>
        <p>
        Even though the blog is basic, it’s a great example of how Next.js helps you build fast, easy-to-use websites with little setup. 
        The mix of static generation and dynamic routing results in a smooth, fast experience for anyone visiting the site.
        </p> 
      <img src={firstpostdirect} alt="Blog posts" className="resized-gif"/>
      <p>
      <a href="https://github.com/hmj11001/my-blog" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <br />
      <Link to="/#projects">Back to Portfolio</Link>  {/* Back to the main portfolio page */}
      </p>
    </div>
  );
};

export default Project4;
