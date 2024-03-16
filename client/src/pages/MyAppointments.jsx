import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineCloseCircle, AiOutlineDownload } from "react-icons/ai";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { Alert } from "@mui/material";

const MyAppointments = () => {
  const [loading, setLoading] = useState(true);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [completeAppointments, setCompleteAppointments] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, [deleted]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("/api/appointments");
      const { data } = response.data;
      console.log(data);
      const upcoming = data.filter((appointment) => {
        return (
          new Date(appointment.date) >= new Date() &&
          appointment.type === "upcoming"
        );
      });
      setUpcomingAppointments(upcoming);
      const complete = data.filter((appointment) => {
        return appointment.type === "completed";
      });
      setCompleteAppointments(complete);
      console.log(completeAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      if (window.confirm("Are you sure you want to cancel this appointment?")) {
        const response = await axios.delete(
          `/api/appointments/${appointmentId}`
        );
        if (response.status === 200) {
          toast.success("Appointment cancelled successfully!");
          setDeleted(true);
        }
      }
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      toast.error("Error cancelling appointment:", error);
    }
  };

  const handleDownloadPrescription = (prescriptionUrl) => {
    const anchor = document.createElement("a");
    anchor.href = prescriptionUrl;
    anchor.download = "prescription_image.jpg";
    anchor.click();
  };

  if (
    !loading &&
    upcomingAppointments.length === 0 &&
    completeAppointments.length === 0
  ) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        {" "}
        <Alert severity="info" className="m-8 ">
          You have no appointments.
          <Link to="/doctors" className="underline ml-2">
            Book an appointment
          </Link>
        </Alert>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-8 min-h-screen">
      <div>
        {loading ? (
          <Spinner />
        ) : (
          upcomingAppointments.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Upcoming Appointments
              </h2>
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="mb-4 p-4 rounded-lg bg-gradient-to-r from-blue-300 to-blue-600 flex justify-between items-center transition duration-500 ease-in-out  w-2/3 "
                >
                  <p className="text-gray-800">
                    You have an appointment with {appointment.doctorId.name} in{" "}
                    {Math.ceil(
                      (new Date(appointment.date) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    days on{" "}
                    {new Date(appointment.date).toLocaleDateString("en-UK", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}{" "}
                    at{" "}
                    {new Date(
                      `2022-01-01T${appointment.time}`
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                  <button
                    onClick={() => handleCancelAppointment(appointment._id)}
                    className="text-gray-800 transform hover:scale-110 transition duration-300 ease-in-out focus:outline-none"
                    title="Cancel Appointment"
                  >
                    <AiOutlineCloseCircle className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          )
        )}
      </div>

      {completeAppointments.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold my-4 text-gray-800">
            Appointments History
          </h2>
          <div>
            {completeAppointments.map((appointment) => (
              <div
                key={appointment._id}
                className="mb-4 p-4 rounded-lg bg-gradient-to-r from-blue-300 to-blue-600  flex justify-between items-center transition duration-500 ease-in-out  w-2/3"
              >
                <p className="text-gray-800">
                  You had an appointment with {appointment.doctorId.name} on{" "}
                  {new Date(appointment.date).toLocaleDateString("en-UK", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}{" "}
                  at{" "}
                  {new Date(
                    `2022-01-01T${appointment.time}`
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>

                <a
                  href={`${
                    appointment.prescription
                      ? appointment.prescription.replace(
                          "upload/",
                          "upload/fl_attachment:prescription/"
                        )
                      : "#"
                  }`}
                  className="text-gray-800 transform hover:scale-110 transition duration-300 ease-in-out focus:outline-none"
                  title="Download prescription"
                >
                  <AiOutlineDownload className="w-6 h-6" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
