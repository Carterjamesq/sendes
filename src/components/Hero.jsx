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
            Transforming visions
            <br></br>
            into digital solutions
          </h1>
          <p>
            We create websites that look stunning and drive results—elevating
            <br></br>
            your online presence to achieve your business goals.
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
          <a className="secondary-button" href="#!">
            See my works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
