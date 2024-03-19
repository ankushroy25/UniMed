import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RideMap from "../components/RideMap";
import Spinner from "../components/Spinner";

const EmergencyRide = () => {
  const { user, isLoading } = useAuth0();
  const [ambulanceDetails, setAmbulanceDetails] = useState(null);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    const getBookedAmbulance = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/emergency/ride?email=${user.email}`
        );

        if (!response.ok) {
          setError("Failed to fetch ambulance details");
          console.error("Failed to fetch ambulance details");
          return;
        }

        const data = await response.json();
        console.log(data);
        setAmbulanceDetails(data[0]);
      } catch (error) {
        console.error("Error booking ambulance:", error);
      }
    };

    getBookedAmbulance();
  }, [user]);

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-center text-xl mt-8 font-semibold">{error}</p>
      </div>
    );
  return (
    <div className="min-h-screen">
      <p className="text-center text-4xl mt-4 font-bold">Ambulance Details</p>

      <div className="flex justify-center my-12 ">
        <div className="flex flex-col md:flex-row shadow-xl shadow-black rounded-md">
          <div className="bg-white ">
            {ambulanceDetails && (
              <div className="mt-4br font-semibold text-lg rounded-md p-8">
                <p className="my-2">{ambulanceDetails.name}</p>
                <p className="my-2">Driver : {ambulanceDetails.driverName} </p>
                <p className="my-2">Hospital : {ambulanceDetails.company}</p>
                <p className="my-2">Contact : {ambulanceDetails.contact}</p>
                <p className="my-2">Booked by : {user.name}</p>
                <p className="my-2">Email : {ambulanceDetails.bookedByUser}</p>
                <div className="flex">
                  <div className="h-3 w-3 bg-red-500 mt-1.5 mr-2" />
                  <p className="text-sm">Ambulance</p>
                </div>
                <div className="flex">
                  <div className="h-3 w-3 bg-blue-500 mt-1.5 mr-2 text-sm font-ms" />
                  <p className="text-sm">Your location</p>
                </div>
              </div>
            )}
          </div>
          <div>
            {ambulanceDetails && user && userLocation ? (
              <>
                <RideMap
                  ambulanceDetails={ambulanceDetails}
                  userLocation={userLocation}
                />
              </>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyRide;
