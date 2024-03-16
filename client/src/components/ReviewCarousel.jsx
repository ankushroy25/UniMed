import React from "react";
import { FaStar } from "react-icons/fa";
import face1 from "../assets/face-1.jpg";
import face2 from "../assets/face-2.jpg";
import face3 from "../assets/face-3.jpg";
import face4 from "../assets/face-4.jpg";
import face5 from "../assets/face-5.jpg";

const DoctorReviewCarousel = ({ doctorName }) => {
  // Static array of general reviews with dynamic doctor name
  const generalReviews = [
    {
      id: 1,
      review: "Excellent doctor! Provides great care and treatment.",
      patient: "John Doe",
      image: face1,

      stars: 5, // Number of stars for the review
    },
    {
      id: 2,
      review: "Highly recommended! Very satisfied with the treatment.",
      patient: "Jane Smith",
      image: face2,

      stars: 4, // Number of stars for the review
    },
    {
      id: 3,
      review: "Very knowledgeable and attentive. Grateful for the expertise.",
      patient: "Alice Johnson",
      image: face3,

      stars: 4, // Number of stars for the review
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {generalReviews.map((review) => (
        <div key={review.id} className="bg-white shadow-lg rounded-md p-6">
          <div className="flex items-center mb-4">
            <img
              src={review.image}
              alt="Doctor Avatar"
              className="rounded-full w-20 h-20 object-cover mr-4"
            />
            <div>
              <p className="text-lg font-semibold">{review.doctor}</p>
              <div className="flex items-center">
                {[...Array(review.stars)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 mr-1" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm">{review.review}</p>
          <p className="text-gray-500 text-md mt-2">{review.patient}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorReviewCarousel;
