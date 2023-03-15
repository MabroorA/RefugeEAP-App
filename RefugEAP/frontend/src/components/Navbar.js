import React from "react";
import "./Navbar.css";
import { MenuItems } from "../data";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import beluga from '../images/beluga.jpg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (showLinks) {
      linksContainerRef.current.style.height = `100vh`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={beluga} alt="logo"/>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="bar" ref={linksRef}>
              {MenuItems.map((item) => {
                const {id, url, title} = item
                return (
                  <li key={id}>
                    <Link to={url}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
