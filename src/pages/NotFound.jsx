import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">

      <div className="container">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;