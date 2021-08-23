import React from "react";
import "./FooterSection.scss";

const FooterSection = () => {
  return (
    <footer className="FooterSection">
      <div className="FooterSection__follow-us">
        <h1>Follow us on:</h1>
        <div className="FooterSection__follow-us__networks">
          <a href="https://discord.gg/nD8FzcTugn">
            <div className="social-icon discord" />
          </a>
          <a href="https://t.me/alephiumgroup">
            <div className="social-icon telegram" />
          </a>
          <a href="https://medium.com/@alephium">
            <div className="social-icon medium" />
          </a>
          <a href="https://www.reddit.com/r/Alephium/">
            <div className="social-icon reddit" />
          </a>
          <a href="https://twitter.com/alephium">
            <div className="social-icon twitter" />
          </a>
          <a href="https://www.linkedin.com/company/alephium">
            <div className="social-icon linkedin" />
          </a>
          <a href="https://www.facebook.com/alephium">
            <div className="social-icon facebook" />
          </a>
        </div>
      </div>
      <div className="FooterSection__copyright">
        <span>© 2021 Alephium, All rights reserved</span>
      </div>
    </footer>
  );
};

export default FooterSection;
