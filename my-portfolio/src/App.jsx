import { GlobalStyles } from "./styles/GlobalStyles";


import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";


function App() {

  return (
    <>
      <GlobalStyles />
      <Navbar />

      <Hero />
      <About />
      <Services />
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