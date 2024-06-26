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
    profileImage: "doctor-1.jpg",
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
    profileImage: "doctor-2.jpg",
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
    profileImage: "doctor-3.jpg",
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
    profileImage: "doctor-4.jpg",
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
    profileImage: "doctor-5.jpg",
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
    profileImage: "doctor-6.jpeg",
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
    profileImage: "doctor-7.jpg",
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
    profileImage: "doctor-8.jpg",
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
    profileImage: "doctor-9.jpg",
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
    profileImage: "doctor-10.jpg",
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
    profileImage: "doctor-11.jpeg",
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
    profileImage: "doctor-12.jpg",
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
    profileImage: "doctor-13.jpeg",
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
    profileImage: "doctor-14.jpg",
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
    profileImage: "doctor-15.jpg",
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
    profileImage: "doctor-16.jpg",
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
    profileImage: "doctor-17.jpg",
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
    profileImage: "doctor-18.jpg",
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
    profileImage: "doctor-19.jpg",
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
    profileImage: "doctor-20.jpg",
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
    profileImage: "doctor-21.jpg",
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
    profileImage: "doctor-22.jpg",
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
    profileImage: "doctor-23.jpg",
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
    profileImage: "doctor-24.jpg",
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
    profileImage: "doctor-25.jpg",
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
    profileImage: "doctor-26.jpg",
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
    profileImage: "doctor-27.jpg",
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
    profileImage: "doctor-28.jpg",
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
    profileImage: "doctor-29.jpg",
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
    profileImage: "doctor-30.jpg",
  },
];

const generateDoctorSchedule = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const schedule = [];

  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i + 7);
    const timeSlots = [];

    for (let j = 0; j <= 5; j++) {
      const hours = Math.floor(7 + Math.random() * (21 + 1 - 7));
      const minutes = Math.floor(Math.random() * 4) * 15;
      const time = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
      timeSlots.push({ time, booked: false });
    }

    schedule.push({ date, timeSlots });
  }

  return schedule;
};

for (let doctor of doctors) {
  doctor["schedule"] = generateDoctorSchedule();
}

module.exports = doctors;
