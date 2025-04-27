import React from "react";
import { motion } from "framer-motion";

import partnerlogo1 from "../assets/Partner-logo01.svg";
import partnerlogo2 from "../assets/Partner-logo02.svg";
import partnerlogo3 from "../assets/Partner-logo03.svg";
import partnerlogo4 from "../assets/Partner-logo04.svg";

const logos = [partnerlogo1, partnerlogo2, partnerlogo3, partnerlogo4];

const Partners = () => {
  return (
    <motion.section
      className="partners"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="partners__content">
        <span>Trusted partners</span>

        {/* Marquee animation from left to right */}
        <motion.div
          className="partners__images"
          animate={{ x: ["-100%", "0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map(
            (logo, index) => (
              <div className="partner__logo" key={index}>
                <img src={logo} alt={`partner-${index}`} />
              </div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partners;
