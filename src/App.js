import React from "react";
// import NavBar from "./components/NavBar";
import Footer from "./Components/Footer/index";
import Header from "./Components/Header/index";

import Contact from "./Components/Contact/index";
import Portfolio from "./Components/Portfolio/index";
import About from "./Components/About/index";
import TechUsed from "./Components/TechUsed/index"
import "../src/app.css";


function App() {
  return (
   <div>
     {/* <NavBar /> */}
     <Header />
     <About />
     <TechUsed />
     <Portfolio />
     <Contact />
     <Footer />
     </div>
  );
}

export default App;