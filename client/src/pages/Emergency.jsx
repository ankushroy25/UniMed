import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Emergency = () => {
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);
  const [ambulanceData, setAmbulanceData] = useState([]);
  const [mapLoading, setMapLoading] = useState(true);
  const { user } = useAuth0();
  const nav = useNavigate();

  useEffect(() => {
    const getAmbulances = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/emergency/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          // setError("Failed to fetch ambulance details");
          console.error("Failed to fetch ambulance details");
          return;
        }

        const data = await response.json();
        setMapLoading(false);
        setAmbulanceData(data);
      } catch (error) {
        console.error("Error booking ambulance:", error);
      }
    };

    getAmbulances();
  }, [user]);

  const bookAmbulanceHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/emergency", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedAmbulance._id,
          userEmail: user.email,
        }),
      });

      if (!response.ok) {
        console.error("Failed to book ambulance");
        return;
      }

      const data = await response.json();
      console.log(data);
      nav("/emergency/ride");
    } catch (error) {
      console.error("Error booking ambulance:", error);
    }
  };
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center">
        <p className="text-center text-4xl font-bold">Emergency</p>
        <div className="flex justify-center my-8">
          {mapLoading ? (
            <p>Loading map...</p>
          ) : (
            <Map
              mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude: 88.305316,
                latitude: 22.580227,
                zoom: 14,
              }}
              style={{ width: 800, height: 500 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              // onLoad={() => setMapLoading(false)}
            >
              {ambulanceData.map((ambulance) => (
                <Marker
                  key={ambulance.name}
                  longitude={Number(ambulance.location.coordinates.longitude)}
                  latitude={Number(ambulance.location.coordinates.latitude)}
                  anchor="bottom"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault;
                      setSelectedAmbulance(ambulance);
                      console.log(selectedAmbulance);
                      e.stopPropagation();
                    }}
                  >
                    <CarRepairIcon />
                  </button>
                </Marker>
              ))}
              {selectedAmbulance ? (
                <Popup
                  key={
                    Number(selectedAmbulance.location.coordinates.longitude) +
                    Number(selectedAmbulance.location.coordinates.latitude)
                  }
                  longitude={Number(
                    selectedAmbulance.location.coordinates.longitude
                  )}
                  latitude={Number(
                    selectedAmbulance.location.coordinates.latitude
                  )}
                  // closeOnClick={false}
                  closeButton={false}
                  anchor="bottom"
                >
                  <div className="text-lg p-1">
                    <p>{selectedAmbulance.name}</p>
                    <p>{selectedAmbulance.phoneNumber}</p>
                    <p>{selectedAmbulance.company}</p>
                    <p>{selectedAmbulance.driverName}</p>
                    <button
                      className="bg-black text-cyan-50 px-2  mt-2 rounded-sm"
                      type="submit"
                      onClick={bookAmbulanceHandler}
                    >
                      Book
                    </button>
                  </div>
                </Popup>
              ) : null}
              <NavigationControl />
              <GeolocateControl />
            </Map>
          )}
        </div>
      </div>
    </div>
  );
};

export default Emergency;
