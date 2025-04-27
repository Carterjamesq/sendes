import React from "react";
import logo from "../assets/Logo.svg";
import avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container"
      >
        <div className="logo__navbar">
          <img src={logo} />
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a href="#services" className="header__link">
                  Services
                </a>
              </li>
              <li className="header__item">
                <a href="#cases" className="header__link">
                  Cases
                </a>
              </li>
              <li className="header__item">
                <a href="#process" className="header__link">
                  Process
                </a>
              </li>
              <li className="header__item">
                <a href="#faq" className="header__link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="profile-button">
          <div className="profile">
            <span className="pulsing"></span>
            <img src={avatar} />
          </div>
          <a className="primary-button" href="#!">
            Book a call
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
