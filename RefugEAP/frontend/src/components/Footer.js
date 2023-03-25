import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section footer">
      <p className="copyright">
        copyright &copy; RefugEAP Network
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
      <div className="link-grid">
        <div className="link">
            <a  className="link" href="/join">Join Us</a>
        </div>
        <div>
         <a  className="link" href="/contactus">Get in touch</a>
        </div>
        <div>
        <a className="link" href="https://twitter.com/RefugEAP">@RefugEAP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
