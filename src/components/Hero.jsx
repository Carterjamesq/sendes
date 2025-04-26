import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="toaster">
          <span>100+ projects was designed for business</span>
        </div>
        <h1>
          Transforming visions
          <br></br>
          into digital solutions
        </h1>
        <p>
          We create websites that look stunning and drive results—elevating
          <br></br>
          your online presence to achieve your business goals.
        </p>
        <div className="hero-buttons">
          <a className="cta-button" href="#!">
            Get a project quote
          </a>
          <a className="secondary-button" href="#!">
            See my works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
