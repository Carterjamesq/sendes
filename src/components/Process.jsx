import React from "react";

const Process = () => {
  return (
    <section className="process" id="process">
      <div className="toaster">
        <span>Project Scope</span>
      </div>
      <h2>My work process</h2>
      <div
        className="process__grid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid__item">
          <span>01</span>
          <div className="grid__body">
            <p>
              We start by understanding your goals, design preferences, and
              audience to lay a solid foundation.
            </p>
            <div className="divider"></div>
            <h3>Consulting</h3>
          </div>
        </div>
        <div className="grid__item">
          <span>02</span>
          <div className="grid__body">
            <p>
              During design, we invite client feedback to ensure optimal
              structure and functionality early on.
            </p>
            <div className="divider"></div>
            <h3>Collaborative review</h3>
          </div>
        </div>
        <div className="grid__item">
          <span>03</span>
          <div className="grid__body">
            <p>
              Establishing a structure focused on functionality and
              accessibility, including interactions that ensure total immersion.
            </p>
            <div className="divider"></div>
            <h3>Make it pop</h3>
          </div>
        </div>
        <div className="grid__item">
          <span>04</span>
          <div className="grid__body">
            <p>
              We refine every detail, iterating until you're completely
              satisfied with the final best output product.
            </p>
            <div className="divider"></div>
            <h3>Review</h3>
          </div>
        </div>
        <div className="grid__item">
          <span>05</span>
          <div className="grid__body">
            <p>
              Delivering a fully functional, launch-ready website or landing
              page for a seamless transition from concept to completion.
            </p>
            <div className="divider"></div>
            <h3>Ready to take off</h3>
          </div>
        </div>
        <div className="grid__item">
          <span>06</span>
          <div className="grid__body">
            <p>
              We stay engaged for as long as you need us, making sure our
              designs are implemented smoothly.
            </p>
            <div className="divider"></div>
            <h3>Project support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
