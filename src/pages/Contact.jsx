import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      {/* Hero Section */}

      <section className="contact-hero">

        <div className="container">

          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Get in touch with our team anytime.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="contact">

        <div className="container contact-grid">

          {/* Left Side */}

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              Have questions about bookings or resorts? Our support team is
              always ready to help.
            </p>

            <div className="info-box">
              <h4>📍 Address</h4>
              <p>Pune, Maharashtra, India</p>
            </div>

            <div className="info-box">
              <h4>📞 Phone</h4>
              <p>+91 9876543210</p>
            </div>

            <div className="info-box">
              <h4>✉ Email</h4>
              <p>support@resortbook.com</p>
            </div>

          </div>

          {/* Right Side */}

          <div className="contact-form">

            <h2>Send Message</h2>

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="map">

        <div className="container">

          <h2 className="section-title">
            Our Location
          </h2>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Pune&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </>
  );
}

export default Contact;