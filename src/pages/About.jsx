import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <section className="about-hero">

        <div className="container">

          <h1>About ResortBook</h1>

          <p>
            Your trusted partner for discovering and booking premium resorts
            across India.
          </p>

        </div>

      </section>

      <section className="about">

        <div className="container about-grid">

          <div className="about-image">

            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Resort"
            />

          </div>

          <div className="about-content">

            <h2>Who We Are</h2>

            <p>
              ResortBook is a modern online resort booking platform built to
              help travelers discover luxury resorts, villas, cottages, and
              unique stays across India.
            </p>

            <p>
              We aim to provide secure bookings, transparent pricing, verified
              reviews, and exceptional customer support to ensure every trip
              becomes a memorable experience.
            </p>

            <button className="btn btn-primary">
              Explore Resorts
            </button>

          </div>

        </div>

      </section>

      <section className="mission">

        <div className="container">

          <div className="mission-grid">

            <div className="mission-card">

              <h3>🎯 Our Mission</h3>

              <p>
                To simplify resort booking through innovative technology,
                trusted recommendations, and excellent customer service.
              </p>

            </div>

            <div className="mission-card">

              <h3>👁 Our Vision</h3>

              <p>
                To become India's most trusted and preferred resort booking
                platform.
              </p>

            </div>

            <div className="mission-card">

              <h3>❤️ Our Values</h3>

              <p>
                Trust, Transparency, Customer Satisfaction, Innovation, and
                Quality.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default About;