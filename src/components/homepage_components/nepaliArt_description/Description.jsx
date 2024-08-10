import React from "react";
import "./description.css";

const Description = () => {
  return (
    <>
      <div className="description">
        <div className="   container d-flex flex-column align-items-center  gap-4 ">
          <h3>Nepali Art: A Brief Overview</h3>
          <span>
            Nepali art is a rich blend of Hindu, Buddhist, and indigenous
            traditions, reflecting the country’s cultural diversity. It began
            during the Lichhavi period (5th-8th century) with intricate stone
            and metal sculptures. The Malla era (12th-18th century) was a golden
            age, renowned for stunning temples, woodcarvings, and the
            development of paubha paintings, the precursor to Tibetan thangkas.
            <br />
            <br />
            In the 19th century, Western influences merged with traditional
            styles, leading to modern developments. Today, Nepali art continues
            to thrive, balancing its ancient heritage with contemporary
            innovation.
          </span>
          <span style={{ borderBottom: "1px solid red", color: "red" }}>
            DISCOVER
          </span>
        </div>
      </div>
    </>
  );
};

export default Description;
