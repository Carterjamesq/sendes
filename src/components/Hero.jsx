import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="toaster"
        >
          <span>100+ projects was designed for business</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1>
            Turning success into
            <br></br>a key to growth
          </h1>
          <p>
            I create stunning websites and apps that will help you
            <br></br>
            get the maximum benefits of your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hero-buttons"
        >
          <a className="cta-button" href="#!">
            Get a project quote
          </a>
          <a className="secondary-button" href="#cases">
            See my works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
