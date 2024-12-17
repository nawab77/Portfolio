import React from "react";
import "./Navbar.css";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { createBrowserRouter } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("about");

  return (
    <div className="navbar">
      <h1>NawaB</h1>
      <ul className="nav-menu">
        {/* <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <hr /> : <></>}
        </li> */}
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          <AnchorLink className="anchor-link" href="#home">
            Home
          </AnchorLink>
        </li>
        <li
          className={menu === "about" ? "active" : ""}
          onClick={() => setMenu("about")}
        >
          <AnchorLink className="anchor-link" href="#about">
            About me
          </AnchorLink>
        </li>
        <li
          className={menu === "services" ? "active" : ""}
          onClick={() => setMenu("services")}
        >
          <AnchorLink className="anchor-link" href="#services">
            Services
          </AnchorLink>
        </li>
        <li
          className={menu === "portfolio" ? "active" : ""}
          onClick={() => setMenu("portfolio")}
        >
          <AnchorLink className="anchor-link" href="#portfolio">
            Portfolio
          </AnchorLink>
        </li>
        <li
          className={menu === "contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          <AnchorLink className="anchor-link" href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
