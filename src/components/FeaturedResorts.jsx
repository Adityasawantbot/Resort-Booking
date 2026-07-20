import React from "react";
import "./FeaturedResorts.css";

const resorts = [
  {
    id: 1,
    name: "Mountain Paradise Resort",
    location: "Manali, Himachal Pradesh",
    price: "₹6,500",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    amenities: ["Pool", "Spa", "WiFi"],
  },
  {
    id: 2,
    name: "Ocean Breeze Resort",
    location: "Goa",
    price: "₹8,200",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    amenities: ["Beach", "Restaurant", "Bar"],
  },
  {
    id: 3,
    name: "Green Valley Resort",
    location: "Kerala",
    price: "₹5,900",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    amenities: ["Spa", "Nature", "Pool"],
  },
];

function FeaturedResorts() {
  return (
    <section className="featured">
      <div className="container">

        <h2 className="section-title">
          Featured Resorts
        </h2>

        <p className="section-subtitle">
          Handpicked luxury resorts for your next unforgettable vacation.
        </p>

        <div className="resort-grid">

          {resorts.map((resort) => (
            <div className="resort-card" key={resort.id}>

              <div className="image-box">
                <img src={resort.image} alt={resort.name} />
                <span className="rating">⭐ {resort.rating}</span>
              </div>

              <div className="resort-content">

                <h3>{resort.name}</h3>

                <p className="location">
                  📍 {resort.location}
                </p>

                <div className="amenities">
                  {resort.amenities.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                <div className="bottom">

                  <div>
                    <small>Starting From</small>

                    <h4>{resort.price}/Night</h4>
                  </div>

                  <button>
                    Book Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedResorts;