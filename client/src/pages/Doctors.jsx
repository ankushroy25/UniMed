import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import axios from "axios";
import Spinner from "../components/Spinner";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const specialties = [
    "General Medicine",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Cardiology",
    "Neurology",
    "Gynecology",
    "Oncology",
    "Urology",
    "Ophthalmology",
  ];

  const fetchDoctors = async () => {
    try {
      let url = "/api/doctors?page=" + currentPage;

      if (searchQuery && searchQuery.length > 3) {
        const searchQuery1 = encodeURIComponent(searchQuery);
        console.log(searchQuery1);
        url += "&searchQuery=" + searchQuery1;
      }

      if (selectedSpecialty) {
        url += "&specialty=" + selectedSpecialty;
      }

      const response = await axios.get(url);
      if (response.status === 200) {
        const { doctors, totalPages } = response.data;

        setDoctors(doctors);

        setTotalPages(totalPages);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [currentPage, searchQuery, selectedSpecialty]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <div className="py-8 px-16 min-h-[700px] flex flex-col justify-between">
      <div>
        <div className="py-4 mb-4 mx-auto lg:flex lg:flex-row justify-center shadow-gray-400 shadow-md bg-slate-600 rounded-md">
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Doctors"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
            />
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Specialties</option>

              {specialties.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <Spinner /> // Show spinner if loading
        ) : doctors.length === 0 ? (
          <div>No doctors found.</div> // Show message if no doctors found
        ) : (
          <Grid container spacing={4}>
            {doctors.map((doctor, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Link to={`/doctors/${doctor._id}`}>
                  <div className="h-full shadow-lg shadow-slate-500 hover:shadow-gray-700 rounded-md flex flex-col ">
                    <div className=" mx-auto overflow-hidden flex justify-center rounded-t-lg w-full ">
                      <img
                        src={`/api/images/${doctor.profileImage}`}
                        alt={doctor.name}
                        className="w-full h-40 object-cover min-h-[260px] "
                      />
                    </div>
                    <div className="bg-gray-200 p-4 flex-grow flex flex-col justify-between rounded-md">
                      <div className="flex flex-col gap-1">
                        <Typography variant="h6" className="mt-2">
                          {doctor.name}
                        </Typography>
                        <Typography variant="body2" className=" ">
                          {doctor.specialty}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          {doctor.chamberAddress}
                        </Typography>
                      </div>
                      <Typography variant="body2" className="text-gray-600">
                        {doctor.contact}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l-md focus:outline-none"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Doctors;
