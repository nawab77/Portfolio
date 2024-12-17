import React from "react";
import "./Qualification.css";
import qualification_data from "../../assets/qualification_data";

const Qualification = () => {
  return (
    <div id="services" className="qualification">
      <div className="qualification-title">
        <h1>Qualification</h1>
      </div>
      <div className="qualification-container">
        {qualification_data.map((qualification, index) => {
          return (
            <div key={index} className="qualification-format">
              <h3>{qualification.s_name}</h3>
              <h2>{qualification.s_desc}</h2>
              <p>{qualification.s_no}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Qualification;
