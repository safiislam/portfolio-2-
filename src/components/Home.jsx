import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import landingImg from "/logo.svg";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  FACEBOOK_URL,
  EMAIL,
  PHONE,
} from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div
      id="home"
      className="container mx-auto bg-lightDesert flex flex-col items-center justify-center min-h-screen py-12"
    >
      <animated.img
        style={logoSpring}
        className="w-32 h-32 mb-6 rounded-full border-4 border-goldDesert"
        src={"images/profile.jpg"}
        alt="Developer Logo"
      />
      <animated.h1 style={logoSpring} className="text-4xl font-bold mb-4">
        ZARIN JAHAN SHAZI
      </animated.h1>
      <animated.p style={logoSpring} className="text-lg text-center mb-6">
        MERN Stack Web Developer
      </animated.p>

      <animated.div style={iconSpring} className="flex space-x-6 mb-12">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={GITHUB_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaGithub className="w-10 h-10" />
          <span className="sr-only">GitHub account</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={LINKEDIN_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaLinkedin className="w-10 h-10" />
          <span className="sr-only">LinkedIn account</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={FACEBOOK_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaSquareFacebook className="w-10 h-10" />
          <span className="sr-only">Facebook account</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={RESUME_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaFileAlt className="w-10 h-10" />
          <span className="sr-only">Resume</span>
        </a>
      </animated.div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-darkDesert" />
          <a
            href={`mailto:${EMAIL}`}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            {EMAIL}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-darkDesert" />
          <a
            href={`tel:${PHONE}`}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
