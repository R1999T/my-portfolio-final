import { GlobalStyles } from "./styles/GlobalStyles";
import React, { useState, useEffect } from "react";


import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience"


function App() {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "contact"];

      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition <
          element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />

    </>
  );

}

export default App;
// function App() {
//   return (
//     <h1>Test Working</h1>
//   )
// }

// export default App