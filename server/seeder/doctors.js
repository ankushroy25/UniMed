const mongoose = require("mongoose");

const generateRandomSchedule = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const schedule = [];
  for (let i = 0; i < 4; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const day = daysOfWeek[date.getDay()];
    const timeSlots = [];
    for (let j = 0; j <= 5; j++) {
      const hours = Math.floor(7 + Math.random() * (21 + 1 - 7));
      const minutes = Math.floor(Math.random() * 4) * 15;
      const time = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
      timeSlots.push({ time, booked: false });
    }
    schedule.push({ date, day, timeSlots });
  }
  return schedule;
};

const generateRandomDoctor = (randomIndex) => {
  const names = [
    "Dr. John Doe",
    "Dr. Jane Smith",
    "Dr. Michael Johnson",
    "Dr. Emily Williams",
    "Dr. Robert Brown",
    "Dr. Lisa Jones",
    "Dr. David Miller",
    "Dr. Mary Davis",
    "Dr. James Wilson",
    "Dr. Patricia Martinez",
  ];
  const contacts = [
    "1234567890",
    "9876543210",
    "1112223333",
    "4445556666",
    "7778889999",
    "0001112222",
    "3334445555",
    "6667778888",
    "9990001111",
    "2223334444",
  ];
  const chamberCities = [
    "Kolkata",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Jamshedpur",
  ];
  const chamberStates = [
    "West Bengal",
    "Delhi",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Telangana",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Jharkhand",
  ];
  const chamberZipcodes = [
    "700001",
    "110001",
    "400001",
    "560001",
    "600001",
    "500001",
    "411001",
    "380001",
    "302001",
    "395001",
  ];
  const chamberNames = [
    "ABC Clinic",
    "XYZ Hospital",
    "PQR Medical Center",
    "LMN Health Care",
    "EFG Hospital",
    "IJK Clinic",
    "RST Health Care",
    "UVW Hospital",
    "GHI Medical Center",
    "NOP Clinic",
  ];
  const chamberAddresses = [
    "123 Main St",
    "456 Elm St",
    "789 Oak St",
    "101 Pine St",
    "202 Maple St",
    "303 Cedar St",
    "404 Walnut St",
    "505 Birch St",
    "606 Spruce St",
    "707 Ash St",
  ];
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

  const name = names[randomIndex];
  const contact = contacts[randomIndex];
  const chamberName = chamberNames[randomIndex];
  const chamberAddress = chamberAddresses[randomIndex];
  const specialty = specialties[randomIndex];
  const chamberCity = chamberCities[randomIndex];
  const chamberState = chamberStates[randomIndex];
  const chamberZipcode = chamberZipcodes[randomIndex];

  const doctor = {
    name,
    specialty,
    contact,
    chamberName,
    chamberAddress,
    chamberCity,
    chamberState,
    chamberZipcode,
    schedule: generateRandomSchedule(),
  };

  return doctor;
};

const doctors = [];
for (let i = 0; i < 9; i++) {
  doctors.push(generateRandomDoctor(i));
}

module.exports = doctors;
