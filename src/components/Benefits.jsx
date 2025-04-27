import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { animate } from "motion";

const Benefits = () => {
  const countRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animation = animate(0, 200, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => animation.stop(); // cleanup if component unmounts
  }, []);

  return (
    <motion.section
      id="benefits"
      className="benefits"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container">
        <div className="toaster">
          <span>Benefits</span>
        </div>
        <div className="benefits__header">
          <h2>
            Crafting designs
            <br />
            that drive growth
          </h2>
          <p>
            Fits best for: agencies, SaaS, digital creators,
            <br />
            businesses, e-commerce.
          </p>
        </div>

        <div className="benefits__grid">
          <div className="benefits__grid-item"></div>
          <div className="benefits__grid-item">
            <span ref={countRef}>{count}%</span>
          </div>
          <div className="benefits__grid-item"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
