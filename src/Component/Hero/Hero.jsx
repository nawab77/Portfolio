import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Nawab Sarif,</span> Front-end Developer based in India
      </h1>
      <p>
        I am known for interpersonal skills, which have allowed me to build and
        maintain valuable relationships with clients, colleagues, and industry
        peers. I believe that collaboration and teamwork are crucial in
        achieving success, and I actively seek out opportunities to work
        alongside talented individuals who share my passion and drive.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
