import React from "react";
import "./App.css";
import Header from "./common/Header";
import MainImage from "./common/MainImage";
import About from "./common/About";
import Contact from "./common/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
