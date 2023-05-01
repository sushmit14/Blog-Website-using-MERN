import React from "react";

function Contact(props) {
    return (
      <div className="container-fluid">
        <h1>Contact Us</h1>
        <p>{props.contactContent}</p>
      </div>
    );
  }

  export default Contact;