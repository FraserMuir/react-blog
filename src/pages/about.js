import React from "react";
import { usePage } from "../components/Layout";

const About = () => {
  usePage({ title: "About", description: "All About Us" });

  return <h1>About</h1>;
};

export default About;
