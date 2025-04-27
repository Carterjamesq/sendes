import { useState } from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Showcase from "./components/Showcase";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Showcase />
    </>
  );
}

export default App;
