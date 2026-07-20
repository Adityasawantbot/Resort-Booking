import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <h1>Find Your Dream Resort</h1>

        <p>
          Book luxury resorts, villas and cottages at the best prices across India.
        </p>

        <div className="search-box">

          <div className="search-item">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Where do you want to go?"
            />
          </div>

          <div className="search-item">
            <label>Check In</label>
            <input type="date" />
          </div>

          <div className="search-item">
            <label>Check Out</label>
            <input type="date" />
          </div>

          <div className="search-item">
            <label>Guests</label>

            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>

          </div>

          <button className="hero-btn">
            Search
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;