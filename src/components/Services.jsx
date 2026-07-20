import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    icon: "🏨",
    title: "Luxury Resorts",
    description: "Experience premium stays with world-class hospitality."
  },
  {
    id: 2,
    icon: "🏊",
    title: "Swimming Pool",
    description: "Relax and enjoy beautiful infinity and private pools."
  },
  {
    id: 3,
    icon: "🍽️",
    title: "Fine Dining",
    description: "Taste delicious cuisines prepared by expert chefs."
  },
  {
    id: 4,
    icon: "💆",
    title: "Spa & Wellness",
    description: "Refresh your body and mind with luxury spa treatments."
  },
  {
    id: 5,
    icon: "🏕️",
    title: "Adventure Camping",
    description: "Enjoy outdoor adventures, trekking, and camping."
  },
  {
    id: 6,
    icon: "🎉",
    title: "Events & Weddings",
    description: "Celebrate unforgettable weddings and special occasions."
  }
];

function Services() {
  return (
    <section className="services">
      <div className="container">

        <h2 className="section-title">
          Our Services
        </h2>

        <p className="section-subtitle">
          We provide everything you need for a perfect holiday experience.
        </p>

        <div className="services-grid">

          {services.map((service) => (
            <div className="service-card" key={service.id}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;