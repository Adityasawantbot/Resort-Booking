import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing experience! The booking process was smooth, and the resort exceeded our expectations.",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Beautiful location, excellent hospitality, and clean rooms. Highly recommended for families.",
  },
  {
    id: 3,
    name: "Aman Verma",
    location: "Delhi",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    review:
      "One of the best resort booking platforms I've used. Secure, fast, and easy to navigate.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <h2 className="section-title">
          What Our Customers Say
        </h2>

        <p className="section-subtitle">
          Trusted by thousands of happy travelers across India.
        </p>

        <div className="testimonial-grid">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                className="user-image"
              />

              <h3>{item.name}</h3>

              <span className="location">
                {item.location}
              </span>

              <div className="stars">
                {item.rating}
              </div>

              <p>{item.review}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;