import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-container">

        <div className="newsletter-content">

          <h2>
            Get Special Offers & Travel Updates
          </h2>

          <p>
            Subscribe to our newsletter and receive exclusive discounts,
            travel inspiration, and the latest resort deals.
          </p>

        </div>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}

export default Newsletter;