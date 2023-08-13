import React from "react";
import schools from "../constants/schools.json";
import { useSpring, animated } from "react-spring";

// create School component that receives a school object as props. Render method becomes more readable
const School = ({ school }) => (
  <div className="mb-4 flex items-center">
    <img
      src={school.img}
      alt={school.university}
      className="h-12 w-auto mr-4"
    />
    <div>
      <h3 className="text-xl font-semibold text-darkDesert">{school.degree}</h3>
      <p className="text-lg text-darkDesert">{school.university}</p>
      <p className="text-darkDesert">{school.timePeriod}</p>
    </div>
  </div>
);

export default function Education() {
  const educationSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  return (
    <animated.section
      id="education"
      className="bg-lightDesert p-8 rounded-lg shadow-md w-full mx-auto flex flex-col items-center justify-center h-screen"
      style={educationSpring}
    >
      <div>
        <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
          Education
        </h2>
        {schools.map((school) => (
          <School key={school.id} school={school} />
        ))}
      </div>
    </animated.section>
  );
}
