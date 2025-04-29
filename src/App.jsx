import { useState } from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Showcase from "./components/Showcase";
import Story from "./components/Story";
import Cases from "./components/Cases";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Showcase />
      <Story />
      <Cases />
      <FAQ />
    </>
  );
}

export default App;
