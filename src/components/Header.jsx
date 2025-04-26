import React from "react";
import logo from "../assets/Logo.svg";
import avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{
          default: { ease: "linear" },
          duration: 1,
        }}
        className="container"
      >
        <div className="logo__navbar">
          <img src={logo} />
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a href="#home" className="header__link">
                  Services
                </a>
              </li>
              <li className="header__item">
                <a href="#about" className="header__link">
                  Cases
                </a>
              </li>
              <li className="header__item">
                <a href="#contact" className="header__link">
                  Process
                </a>
              </li>
              <li className="header__item">
                <a href="#contact" className="header__link">
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
