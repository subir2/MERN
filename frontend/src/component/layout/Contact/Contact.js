import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:redlubbers@gmail.com">
        <Button>Contact: redlubbers@gmail.com</Button>
      </a>
      <a className="mailBtn" href="tel:01727589581">
        <Button>Phone : 01770-191336</Button>
      </a>
    </div>
  );
};

export default Contact;