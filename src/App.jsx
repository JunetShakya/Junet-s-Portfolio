import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"; 
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
