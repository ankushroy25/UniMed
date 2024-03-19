// Import necessary modules/components
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Alert } from "@mui/material";
import { toast } from "react-toastify";
import DoctorReviewCarousel from "../components/ReviewCarousel";
const DoctorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`/api/doctors/${id}`);
        setDoctor(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };
    fetchDoctor();
  }, [id]);

  const handleSlotClick = (date, time, isBooked) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setShowForm(!isBooked);
  };

  const handleFormSubmit = async () => {
    try {
      setClicked(true);
      toast.info("Booking appointment in progress...");
      const response = await axios.post("/api/appointments", {
        doctorId: id,
        date: selectedDate,
        time: selectedTime,
        name,
        age,
        phone,
        message,
      });
      if (response.status === 201) {
        setShowForm(false);
        setSelectedDate("");
        setSelectedTime("");
        toast.success("Appointment booked successfully!");
        navigate("/my-appointments");
      }
    } catch (error) {
      setClicked(false);
      toast.error("Error booking appointment:", error);
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <div className="antialiased mx-auto min-h-screen px-8 pb-10">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex gap-10 items-center justify-center mt-10 space-y-10">
          <img
            src={`/api/images/${doctor.profileImage}`}
            alt={doctor.name}
            className="w-80 h-80 rounded-full shadow-xl object-cover"
          />
          <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg shadow-xl p-8 max-w-[800px]">
            <div className="text-3xl font-semibold text-gray-800 mb-4">
              {doctor.name}
            </div>
            <div className="text-lg text-gray-600 mb-4">
              <p>Specialty: {doctor.specialty}</p>
              <p>Chamber Address: {doctor.chamberAddress}</p>
              <p>Contact: {doctor.contact}</p>
            </div>
            <p className="text-gray-700">
              {doctor.name} completed MBBS from RG Kar Medical College in 2013
              and MD - {doctor.specialty} from Calcutta Medical College in 2018.
              She has an experience of 5 years in these fields. She is a member
              of Indian Medical Association (IMA).
            </p>
          </div>
        </div>
      )}
      {!loading && (
        <div>
          <div className="text-2xl font-bold text-center text-gray-700  lg:mt-24 md:mt-20 sm:mt-10 mt-5 mb-2">
            See for yourself what our patients say about us!
          </div>
          <div className="w-full  flex justify-center mt-16">
            {" "}
            <DoctorReviewCarousel />{" "}
          </div>
        </div>
      )}
      {/* Display schedule */}
      {!loading && (
        <div className="text-2xl font-bold text-center text-gray-700  lg:mt-24 md:mt-20 sm:mt-10 mt-5 mb-2">
          Don't wait for tomorrow, book your appointment today with the town's
          top-notch doctor!
        </div>
      )}
      <div className="flex justify-between">
        <div className="flex flex-col p-8 justify-center">
          {doctor?.schedule?.length > 0 &&
            doctor.schedule.map((daySchedule, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="text-xl font-semibold text-gray-700">
                  {new Date(daySchedule.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}{" "}
                  -{" "}
                  {new Date(daySchedule.date).toLocaleDateString("en-UK", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </div>
                <div className="flex gap-4 mt-2 mb-10">
                  {daySchedule.timeSlots.map((slot, slotIndex) => (
                    <button
                      key={slotIndex}
                      className={`px-8 py-3 rounded text-white text-md ${
                        slot.booked
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-900"
                      }`}
                      disabled={slot.booked}
                      onClick={() =>
                        handleSlotClick(
                          daySchedule.date,
                          slot.time,
                          slot.bookedByCurrentUser
                        )
                      }
                    >
                      {new Date(`2022-01-01T${slot.time}`).toLocaleTimeString(
                        [],
                        { hour: "2-digit", minute: "2-digit", hour12: true }
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
        {/* Display appointment booking form */}
        {showForm && (
          <div className=" p-8  max-w-[500px] mx-auto mt-2 ">
            <Alert severity="info" className="mb-4">
              Schedule is subject to change. Please confirm with the doctor's
              chamber before visiting.
            </Alert>
            <p className="text-lg font-bold mb-5 text-gray-700">
              You are booking an appointment with {doctor.name} on{" "}
              {new Date(selectedDate).toLocaleDateString("en-UK", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}{" "}
              at{" "}
              {new Date(`2022-01-01T${selectedTime}`).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <input
              type="text"
              placeholder="Patient Name"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Patient Age"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
              name="age"
              min="0"
              max="110"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              type="text"
              placeholder=" Patient Phone Number"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Enter your message (optional)"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 resize-none"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={handleFormSubmit}
              disabled={clicked}
              className={`bg-blue-500 text-white rounded-md px-6 py-3 ${
                clicked ? "bg-gray-500 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              Confirm Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetailPage;
