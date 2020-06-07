import React from "react";
import { usePage } from "components/Layout";

const About = () => {
  usePage({ title: "About", description: "All About Us" });

  return (
    <>
      <h1>About</h1>
      <p>
        Web Tricks is a tech info / blog site run by <a href="https://github.com/FraserMuir">Fraser Muir</a>, centered around web
        development. <br /> The posts on the site may be written by various authors that share differing opinions. An <br /> online courses
        section will hopefully be introduced in the future.
      </p>
    </>
  );
};

export default About;
