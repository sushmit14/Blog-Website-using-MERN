import React from "react";
import "./styles.css"

function About(props) {
  return (
    <div className="container-fluid">
      <h1>About Us</h1>
      <p>{props.aboutContent}</p>
    </div>
  );
}

export default About;