import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Cards from "./components/Cards";
import Skills from "./components/Skills";
import About from "./components/About"
import "./app.css";

function App() {
  return (
   <div>
     <NavBar />
     <Header />
     <About />
     <Skills />
     <Cards />
     <Footer />
     </div>
  );
}

export default App;
