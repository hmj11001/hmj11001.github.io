import React from 'react';
import { Link } from "react-router-dom";  // Import Link for navigation
import airoomredesign from "../assets/images/airoomredesign.gif";
import "../App.css";
import "../assets/css/main.css";

const Project5 = () => {
    return (
        <div>
            <h1>AI Interior Design App</h1>
            <p>
                This AI Room Redesign app is a full-stack Next.js project that allows users to transform photos of their spaces into professionally styled interiors using AI-generated imagery.
                Built with a modern tech stack—including Next.js, Tailwind CSS, shadcn UI, Drizzle ORM, and a Neon database—it delivers a smooth, interactive user experience.
            </p>
            <p>
                Users can sign in with Clerk authentication (either social login or email), upload their own room images, select from a variety of interior design styles, and generate AI-powered before-and-after views.
                A custom dashboard shows their available credits, and they can securely purchase more via a PayPal-integrated payment system, making it a functional SaaS-style application.
                The app also features a dynamic loading indicator while designs are being processed, and all user-generated content is stored in Firebase.
            </p>
            <p>
                Overall, the project demonstrates how modern frameworks and tools can be combined to create a polished, user-friendly AI app with real-world utility.
            </p>

            <img src={airoomredesign} alt="Blog posts" className="resized-gif" />
            
            <p>Try out the deployed app <a href="https://ai-room-redesign-m1zf.vercel.app/" target="_blank" rel="noreferrer">here</a>
<p>
                <a href="https://github.com/hmj11001/ai-room-redesign" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a> </p>
                <br />
                <Link to="/#projects">Back to Portfolio</Link>  {/* Back to the main portfolio page */}
            </p>
        </div>
    );
};

export default Project5;
