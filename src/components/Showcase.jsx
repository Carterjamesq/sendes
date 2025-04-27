import React from "react";
import { motion } from "framer-motion";

import showcase1 from "../assets/Preview image showcasing project01.png";
import showcase2 from "../assets/Preview image showcasing project02.png";
import showcase3 from "../assets/Preview image showcasing project03.png";
import showcase4 from "../assets/Preview image showcasing project04.png";
import showcase5 from "../assets/Preview image showcasing project05.png";
import showcase6 from "../assets/Preview image showcasing project06.png";

import showcase7 from "../assets/Preview image showcasing project07.png";
import showcase8 from "../assets/Preview image showcasing project08.png";
import showcase9 from "../assets/Preview image showcasing project09.png";
import showcase10 from "../assets/Preview image showcasing project10.png";
import showcase11 from "../assets/Preview image showcasing project11.png";
import showcase12 from "../assets/Preview image showcasing project12.png";

const imagesTop = [
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
];
const imagesBottom = [
  showcase7,
  showcase8,
  showcase9,
  showcase10,
  showcase11,
  showcase12,
];

const Showcase = () => {
  return (
    <motion.section
      className="showcase"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Top Row - right to left */}
      <motion.div
        className="showcase__content-top flex"
        animate={{ x: ["0%", "-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        {/* Duplicate images for smooth infinite loop */}
        {[...imagesTop, ...imagesTop].map((img, index) => (
          <div key={index} className="showcase__item">
            <img src={img} alt={`showcase-top-${index}`} />
          </div>
        ))}
      </motion.div>

      {/* Bottom Row - left to right */}
      <motion.div
        className="showcase__content-bottom flex"
        animate={{ x: ["-100%", "0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        {/* Duplicate images for smooth infinite loop */}
        {[...imagesBottom, ...imagesBottom].map((img, index) => (
          <div key={index} className="showcase__item">
            <img src={img} alt={`showcase-bottom-${index}`} />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Showcase;
