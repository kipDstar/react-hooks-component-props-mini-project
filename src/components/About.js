import React from "react";
import blogData from "../data/blog";

function About() {
    return (
        <aside>
            <img 
                src={blogData.image || "https://via.placeholder.com/215"} 
                alt="blog logo" 
            />
            <p className="about">{blogData.about}</p>
        </aside>
    ); 
}

export default About;