import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="story" id="story">
      <div className="container">
        <div className="story__content">
          <motion.div
            className="story__col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="toaster">
              <span>My Story</span>
            </div>
            <h2>
              Creating Online
              <br /> Perception
            </h2>
          </motion.div>
          <motion.div
            className="story__col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p>
              From the moment I built my first website, I knew design was more
              than just a skill — it was my way of shaping experiences. I dove
              deep into web design with a strong focus on UX/UI, blending
              creativity with strategy to craft digital products that don't just
              look beautiful, but feel intuitive and human. Every project became
              an opportunity to solve real problems through thoughtful design,
              making users feel seen, heard, and understood.
              <br />
              <br />
              Over the years, I've worked with brands of all sizes, always
              pushing myself to create seamless journeys across screens. I
              believe great design lives at the intersection of empathy and
              innovation, and I bring that belief into everything I create.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
