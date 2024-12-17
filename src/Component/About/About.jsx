import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>
      {/* <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div> */}
      <div className="about-skills">
        <div className="about-skill">
          <p>React Js</p>
          <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p>
          <hr style={{ width: "60%" }} />
        </div>
        <div className="about-skill">
          <p>HTML & CSS</p>
          <hr style={{ width: "60%" }} />
        </div>
        <div className="about-skill">
          <p>MongoDB</p>
          <hr style={{ width: "50%" }} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default About;
