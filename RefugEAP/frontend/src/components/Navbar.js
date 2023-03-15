import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <ul className="bar">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
                {/* <a href={item.url}
                            className={item.cName} >
                                <i class={item.icon}>
                                    {item.title}
                                </i>
                            </a> */}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
