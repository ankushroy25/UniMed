import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
      doctor: doctorName,
    },
    {
      id: 2,
      review: "Highly recommended! Very satisfied with the treatment.",
      patient: "Jane Smith",
      image: face2,
      doctor: doctorName,
    },
    {
      id: 3,
      review: "Very knowledgeable and attentive. Grateful for the expertise.",
      patient: "Alice Johnson",
      image: face3,
      doctor: doctorName,
    },
    {
      id: 4,
      review: "Listens carefully to concerns and offers effective solutions.",
      patient: "Michael Brown",
      image: face4,
      doctor: doctorName,
    },
    {
      id: 5,
      review: "Always provides top-notch care and advice. Highly trusted.",
      patient: "Jake Wilson",
      image: face5,
      doctor: doctorName,
    },
  ];

  return (
    <div className="max-w-lg mx-auto">
      <Carousel
        autoPlay
        interval={5000} // Set your desired interval for auto-play
        useKeyboardArrows={false}
        swipeable={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        stopOnHover={false}
        emulateTouch
        centerMode
        centerSlidePercentage={40}
        width="100%"
      >
        {generalReviews.map((review) => (
          <div
            key={review.id}
            className="cursor-pointer bg-white shadow-lg rounded-md p-4 w-72 mx-auto"
          >
            <img
              src={review.image}
              alt="Doctor Avatar"
              className="rounded-full w-10 h-10 object-contain mx-auto mb-4"
            />
            <p className="text-center text-lg font-semibold mb-2">
              {review.doctor}
            </p>
            <p className="text-center">{review.review}</p>
            <p className="text-center text-gray-500 mt-2">{review.patient}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DoctorReviewCarousel;
