import { useState } from "react";
import "./../../assets/css/faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How does Fixify find the best worker?",
    answer:
      "Our AI-powered matching system recommends nearby verified workers based on your selected service, location, availability, and ratings."
  },
  {
    question: "Can I track the worker after booking?",
    answer:
      "Yes. Once a worker accepts your request, you can track their live location until they arrive."
  },
  {
    question: "How does OTP verification work?",
    answer:
      "Before the service starts, you'll receive a secure OTP. The worker can begin the job only after you share the OTP."
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. You can cancel your request before the worker begins the service, subject to the cancellation policy."
  },
  {
    question: "Are all workers verified?",
    answer:
      "Yes. Every worker undergoes identity verification and profile approval before joining the platform."
  },
  {
    question: "How can I become a Fixify worker?",
    answer:
      "Register as a worker, complete your profile, upload the required documents, and wait for admin verification."
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            Frequently Asked Questions
          </h2>

          <p className="section-subtitle">
            Everything you need to know about Fixify.
          </p>

        </div>

        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >

              {faq.question}

              {active === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}

            </button>

            {active === index && (

              <div className="faq-answer">

                {faq.answer}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;