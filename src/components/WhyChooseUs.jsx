import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: "🏨",
    title: "500+ Premium Resorts",
    description: "Choose from carefully selected luxury resorts across India."
  },
  {
    id: 2,
    icon: "💳",
    title: "Secure Payments",
    description: "Fast and secure online payments with trusted gateways."
  },
  {
    id: 3,
    icon: "⭐",
    title: "Verified Reviews",
    description: "Read genuine reviews from thousands of happy travelers."
  },
  {
    id: 4,
    icon: "📞",
    title: "24/7 Support",
    description: "Our travel experts are available anytime to help you."
  }
];

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="container">

        <h2 className="section-title">
          Why Choose Us
        </h2>

        <p className="section-subtitle">
          We make your travel planning simple, secure, and memorable.
        </p>

        <div className="why-grid">

          {features.map((feature) => (
            <div className="why-card" key={feature.id}>

              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;