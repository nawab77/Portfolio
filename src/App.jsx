import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Qualification from "./Component/Qualification/Qualification";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
