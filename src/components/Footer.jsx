import React from "react";
import footerLogo from "../assets/Logo-Footer.svg";
import whatsApp from "../assets/footer-social-link-whatsapp.svg";
import telegram from "../assets/footer-social-link-telegram.svg";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container__content">
        <div className="footer__header">
          <img src={footerLogo} />
        </div>
        <div className="divider"></div>
        <div className="footer__content">
          <h4>Let’s collaborate!</h4>
          <h5>Reach out for projects or inquiries.</h5>
          <a className="footer__email" href="mailto:rabchevskiy0@gmail.com">
            rabchevskiy0@gmail.com
          </a>
          <div className="footer__social">
            <a href="#!">
              <img src={whatsApp} />
            </a>
            <a href="#!">
              <img src={telegram} />
            </a>
          </div>
        </div>
        <div className="footer__cta-text">
          <h6>Get In Touch</h6>
        </div>
        <div className="footer__copyrights">
          <span>2025 © Sendes All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
