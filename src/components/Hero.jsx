import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            default: { ease: "linear" },
            duration: 1,
          }}
          className="toaster"
        >
          <span>100+ projects was designed for business</span>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            default: { ease: "linear" },
            duration: 1.25,
          }}
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
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            default: { ease: "linear" },
            duration: 1.5,
          }}
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
