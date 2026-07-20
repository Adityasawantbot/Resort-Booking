import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How can I book a resort?",
    answer:
      "Simply search for your destination, select your preferred resort, choose your dates, and complete the booking securely.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. Cancellation depends on the resort's cancellation policy, which is shown before you confirm your booking.",
  },
  {
    question: "Are online payments secure?",
    answer:
      "Absolutely! We use secure payment gateways to keep your transactions safe and encrypted.",
  },
  {
    question: "Do I get an instant confirmation?",
    answer:
      "Yes. Once your payment is successful, you'll receive an instant booking confirmation via email.",
  },
  {
    question: "Can I contact customer support?",
    answer:
      "Yes. Our customer support team is available 24×7 to assist you with any questions or issues.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">

        <h2 className="section-title">
          Frequently Asked Questions
        </h2>

        <p className="section-subtitle">
          Find answers to the most common questions from our customers.
        </p>

        <div className="faq-container">

          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>

              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>

                <span>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;