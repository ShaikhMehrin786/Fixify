import "./../../assets/css/customerReviews.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Patel",
    service: "Electrical Repair",
    rating: 5,
    review:
      "Excellent service! The electrician arrived on time and fixed the issue professionally."
  },
  {
    id: 2,
    name: "Priya Shah",
    service: "Home Cleaning",
    rating: 5,
    review:
      "Very satisfied with the cleaning service. The worker was polite and efficient."
  },
  {
    id: 3,
    name: "Aman Verma",
    service: "Plumbing",
    rating: 4,
    review:
      "Quick response and affordable pricing. Highly recommended."
  }
];

function CustomerReviews() {
  return (
    <section className="reviews-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            What Our Customers Say
          </h2>

          <p className="section-subtitle">
            Genuine reviews from customers who booked services through Fixify.
          </p>

        </div>

        <div className="row">

          {reviews.map((review) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={review.id}
            >

              <div className="review-card">

                <FaQuoteLeft className="quote-icon" />

                <p className="review-text">
                  {review.review}
                </p>

                <div className="rating">

                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}

                </div>

                <hr />

                <h5>{review.name}</h5>

                <span>{review.service}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CustomerReviews;