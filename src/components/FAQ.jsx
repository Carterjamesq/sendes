import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <motion.div
        className="container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="faq__header">
          <div className="toaster">
            <span>Some questionnaires</span>
          </div>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq__content">
          <div className="faq__card">
            <h4>How long does it take to complete a project?</h4>
            <p>
              It varies, depending on the previously agreed deadlines, the
              average project takes 1 month to create from concept to final
              design, including edits and requests from the client.
            </p>
          </div>
          <div className="faq__card">
            <h4>What is included in the design process?</h4>
            <p>
              The process begins with identifying the core problem, followed by
              conducting in-depth research to fully understand its context and
              implications. From there, various possible solutions are
              brainstormed and carefully evaluated to select the most promising
              one. A prototype is then developed to bring the idea to life,
              which undergoes thorough testing and troubleshooting. Based on the
              feedback and findings, improvements are made, leading to the
              release of the final, refined product.
            </p>
          </div>
          <div className="faq__card">
            <h4>Do you offer post-launch support?</h4>
            <p>
              Yes, post-launch support is an essential part of our UX/UI design
              process. I provide ongoing assistance to ensure your product runs
              smoothly after it goes live. This includes fixing any unforeseen
              UI issues, making small design adjustments based on user feedback,
              and supporting design handoffs for development updates. Our goal
              is to help your product evolve effectively after launch.
            </p>
          </div>
          <div className="faq__card">
            <h4>Can I customize the package?</h4>
            <p>
              Absolutely. Whether you need specific deliverables, additional
              screens, or integration with development, i’ll tailor the scope to
              match your goals and budget. I work with you to define what makes
              the most sense for your product and timeline.
            </p>
          </div>
          <div className="faq__card">
            <h4>What payment methods do you accept?</h4>
            <p>
              I accept a variety of secure payment methods to make the process
              easy and flexible. These include bank transfers, major
              credit/debit cards, PayPal, and invoicing for business accounts.
              If you have a preferred payment method, feel free to let us know —
              we’ll do our best to accommodate it.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
