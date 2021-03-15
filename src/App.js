import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Skills from "./components/Skills";
import About from "./components/About"

function App() {
  return (
   <div>
     <NavBar />
     <Jumbotron />
     <About />
     <Skills />
     <Cards />
     <Footer />
     </div>
  );
}

export default App;
