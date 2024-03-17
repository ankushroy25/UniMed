import hospitalImg from "../assets/hospital.jpg";
import appointmentsImg from "../assets/appointments.jpg";
import emergencyImg from "../assets/emergency.jpg";
import mentalHealthImg from "../assets/mental.jpg";
import nutritionImg from "../assets/nutrition.jpg";
import medsImg from "../assets/meds.jpg";
import { Link } from "react-router-dom";

const Services = [
  {
    id: 1,
    name: "Shop",
    img: medsImg,
    link: "/products",
  },
  {
    id: 2,
    name: "Emergency",
    img: emergencyImg,
    link: "/emergency",
  },
  {
    id: 1,
    name: "Nutrition",
    img: nutritionImg,
    link: "/nutrition",
  },
  {
    id: 1,
    name: "Appointments",
    img: appointmentsImg,
    link: "/doctors",
  },
  {
    id: 1,
    name: "Mental health",
    img: mentalHealthImg,
    link: "/mental-health",
  },
  {
    id: 1,
    name: "Hospitals info",
    img: hospitalImg,
    link: "/hospitals",
  },
];

const Hero = () => {
  return (
    <div>
      <div className="px-24">
        <h2 className="font-bold text-5xl ml-16 mb-8">Services</h2>
        <div className="container mx-auto">
          <div className="grid  sm:grid-cols-3 gap-2 px-4">
            {Services.map((item, index) => (
              <Link to={item.link} key={index}>
                <div className="justify-center items-center flex flex-col text-center m-2 hover:scale-105 transition-transform">
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.img})` }}
                    className=" group container rounded-t-md
                            flex justify-center text-center items-center mx-auto content-div"
                  ></div>
                  <div className="p-2 w-[300px] text-center bg-slate-700 text-gray-200 text-2xl font-semibold rounded-b-lg">
                    <p>{item.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
