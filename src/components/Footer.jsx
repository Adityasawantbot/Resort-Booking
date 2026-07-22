import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Company */}

        <div className="footer-column">

          <h2 className="footer-logo">
            Resort<span>Book</span>
          </h2>

          <p>
            Discover premium resorts, luxury stays, and unforgettable travel
            experiences across India.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Resorts</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>

        </div>

        {/* Policies */}

        <div className="footer-column">

          <h3>Policies</h3>

          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>📍 Pune, Maharashtra</p>

          <p>📞 +91 ****</p>

          <p>✉ @gmail.com</p>

          <div className="social-icons">

            <a href="#">🌐</a>

            <a href="#">📘</a>

            <a href="#">📷</a>

            <a href="#">▶</a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 ResortBook. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;