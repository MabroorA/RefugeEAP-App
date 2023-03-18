import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section footer">
      <p className="copyright">
        copyright &copy; RefugEAP Network
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
