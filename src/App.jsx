import { useState } from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Partners />
    </>
  );
}

export default App;
