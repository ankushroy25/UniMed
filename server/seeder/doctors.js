const mongoose = require("mongoose");
const Doctor = require("../models/DoctorModel.js");

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
const generateRandomDoctor = () => {
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

  const randomIndex = Math.floor(Math.random() * names.length);
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

const doctors = [
  {
    name: "Dr. Aniruddha Sen",
    specialty: "General Medicine",
    contact: "+91 98765 43222",
    chamberName: "MediCare Clinic",
    chamberAddress: "12A, Sarat Bose Road, Near Minto Park, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700020",
  },
  {
    name: "Dr. Sneha Das",
    specialty: "General Medicine",
    contact: "+91 98765 43223",
    chamberName: "HealthyLife Clinic",
    chamberAddress: "32, Shakespeare Sarani, Opp. Kala Mandir, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700017",
  },
  {
    name: "Dr. Prakash Banerjee",
    specialty: "General Medicine",
    contact: "+91 98765 43224",
    chamberName: "MediHealth Clinic",
    chamberAddress: "8/1A, Loudon Street, Near Park Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Pediatrics",
    contact: "+91 98765 43225",
    chamberName: "TinyTots Clinic",
    chamberAddress:
      "18, Sarat Chatterjee Avenue, Near Deshapriya Park, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700029",
  },
  {
    name: "Dr. Rahul Gupta",
    specialty: "Pediatrics",
    contact: "+91 98765 43226",
    chamberName: "ChildCare Clinic",
    chamberAddress: "42, Prince Anwar Shah Road, Near South City Mall, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700068",
  },
  {
    name: "Dr. Ananya Banerjee",
    specialty: "Pediatrics",
    contact: "+91 98765 43227",
    chamberName: "KidsHealth Clinic",
    chamberAddress: "57, Chowringhee Road, Near Maidan Metro Station, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700071",
  },
  {
    name: "Dr. Arjun Das",
    specialty: "Orthopedics",
    contact: "+91 98765 43228",
    chamberName: "BoneCare Clinic",
    chamberAddress: "22, Park Street, Near Park Circus, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Priyanka Sen",
    specialty: "Orthopedics",
    contact: "+91 98765 43229",
    chamberName: "OrthoClinic",
    chamberAddress: "88, Shakespeare Sarani, Near Elgin Road, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700025",
  },
  {
    name: "Dr. Vikram Sharma",
    specialty: "Orthopedics",
    contact: "+91 98765 43230",
    chamberName: "JointCare Clinic",
    chamberAddress: "12, Diamond Harbour Road, Near Behala Chowrasta, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700034",
  },
  {
    name: "Dr. Anshika Goel",
    specialty: "Dermatology",
    contact: "+91 98765 43231",
    chamberName: "SkinCare Clinic",
    chamberAddress: "10, Loudon Street, Near Park Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Aarav Sen",
    specialty: "Dermatology",
    contact: "+91 98765 43232",
    chamberName: "GlowSkin Clinic",
    chamberAddress: "25, Shakespeare Sarani, Near Quest Mall, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700029",
  },
  {
    name: "Dr. Sneha Banerjee",
    specialty: "Dermatology",
    contact: "+91 98765 43233",
    chamberName: "ClearSkin Clinic",
    chamberAddress: "15, Park Street, Near Park Circus, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700017",
  },
  {
    name: "Dr. Vikram Sharma",
    specialty: "Cardiology",
    contact: "+91 98765 43234",
    chamberName: "HeartCare Clinic",
    chamberAddress: "30, Shakespeare Sarani, Near Birla Planetarium, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700017",
  },
  {
    name: "Dr. Priya Sen",
    specialty: "Cardiology",
    contact: "+91 98765 43235",
    chamberName: "Heartbeat Clinic",
    chamberAddress: "45, Park Street, Near Park Circus, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Arjun Das",
    specialty: "Cardiology",
    contact: "+91 98765 43236",
    chamberName: "CardioClinic",
    chamberAddress: "20, Camac Street, Near Minto Park, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700020",
  },
  {
    name: "Dr. Aditi Sharma",
    specialty: "Neurology",
    contact: "+91 98765 43240",
    chamberName: "NeuroCare Clinic",
    chamberAddress: "12, Park Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Rohan Malhotra",
    specialty: "Neurology",
    contact: "+91 98765 43241",
    chamberName: "BrainHealth Clinic",
    chamberAddress: "15, Shakespeare Sarani, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700029",
  },
  {
    name: "Dr. Nandini Patel",
    specialty: "Neurology",
    contact: "+91 98765 43242",
    chamberName: "MindClinic",
    chamberAddress: "10, Loudon Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Debaleena Bhattacharya",
    specialty: "Gynecology",
    contact: "+91 98765 43243",
    chamberName: "Women's Wellness Clinic",
    chamberAddress: "22, Park Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Neha Kapoor",
    specialty: "Gynecology",
    contact: "+91 98765 43244",
    chamberName: "CareForHer Clinic",
    chamberAddress: "15, Shakespeare Sarani, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700029",
  },
  {
    name: "Dr. Rakesh Das",
    specialty: "Gynecology",
    contact: "+91 98765 43245",
    chamberName: "MotherCare Clinic",
    chamberAddress: "10, Loudon Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Arjun Gupta",
    specialty: "Oncology",
    contact: "+91 98765 43246",
    chamberName: "CancerCare Clinic",
    chamberAddress: "22, Park Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Arpita Singh",
    specialty: "Oncology",
    contact: "+91 98765 43247",
    chamberName: "HopeCancer Clinic",
    chamberAddress: "15, Shakespeare Sarani, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700029",
  },
  {
    name: "Dr. Siddharth Sharma",
    specialty: "Oncology",
    contact: "+91 98765 43248",
    chamberName: "LifeCancer Clinic",
    chamberAddress: "10, Loudon Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Sohom Saha",
    specialty: "Urology",
    contact: "+91 98765 43249",
    chamberName: "UroCare Clinic",
    chamberAddress: "22, Park Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Niharika Patel",
    specialty: "Urology",
    contact: "+91 98765 43250",
    chamberName: "UroWellness Clinic",
    chamberAddress: "15, Shakespeare Sarani, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700029",
  },
  {
    name: "Dr. Ritesh Malhotra",
    specialty: "Urology",
    contact: "+91 98765 43251",
    chamberName: "UroLife Clinic",
    chamberAddress: "10, Loudon Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Aarav Gupta",
    specialty: "Ophthalmology",
    contact: "+91 98765 43252",
    chamberName: "EyeCare Clinic",
    chamberAddress: "22, Park Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
  {
    name: "Dr. Anjali Sharma",
    specialty: "Ophthalmology",
    contact: "+91 98765 43253",
    chamberName: "VisionClinic",
    chamberAddress: "15, Shakespeare Sarani, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700029",
  },
  {
    name: "Dr. Siddharth Patel",
    specialty: "Ophthalmology",
    contact: "+91 98765 43254",
    chamberName: "SightCare Clinic",
    chamberAddress: "10, Loudon Street, Kolkata",
    chamberCity: "Kolkata",
    chamberState: "West Bengal",
    chamberZipcode: "700016",
  },
];

// for (let i = 0; i < 10; i++) {
//   doctors.push(generateRandomDoctor());
// }

module.exports = doctors;
