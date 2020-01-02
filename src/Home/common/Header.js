import React, { Component } from "react";
import logo from "../image/kaonmir_logo.png";
import "./Header.css";

class Header extends Component {
  state = {
    number: 0
  };
  handleclickMenu = e => {
    switch (e.target.dataset.value) {
      case "Home":
        window.scrollTo(0, 0);
        break;
      case "About":
        window.scrollTo(0, 630);
        break;
      case "Contact":
        window.scrollTo(0, 1230);
        break;
      // TODO Contact and IDONTNO..
      default:
        break;
    }
  };
  render() {
    return (
      <header id="header">
        <a href="/" className="main_logo_block">
          <img className="main_logo" src={logo} alt="logo"></img>
        </a>
        <nav className="site_navigation">
          <ul className="main_menu">
            <li>
              <div id="Home" onClick={this.handleclickMenu}>
                Home
              </div>
            </li>
            <li>
              <div id="About" onClick={this.handleclickMenu}>
                About
              </div>
            </li>
            <li>
              <div id="Contact" onClick={this.handleclickMenu}>
                Contact
              </div>
            </li>
            <li>
              <div id="IDONTNO" onClick={this.handleclickMenu}>
                IDONOTNO
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
