import { Link } from "react-router-dom";
import cover from "../assets/cover.jpg";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Homepage = () => {
  const { user } = useAuth0();

  useEffect(() => {
    const migrateUser = async () => {
      if (user) {
        try {
          const response = await fetch(
            "http://localhost:5000/api/users/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: user.given_name,
                lastName: user.family_name,
                email: user.email,
                password: user.sub,
                phoneNumber: "983274312",
              }),
            }
          );

          if (!response.ok) {
            const status = await response;
            console.error(status);
            return;
          }

          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error updating user:", error);
        }
      }
    };

    migrateUser();
  }, [user]);

  return (
    <>
      <div className="bg-gradient-to-b">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      UniMed
                    </h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  Elevate Your Every Step with Unparalleled Elegance and
                  Comfort. Explore Our Stunning Collection of Shoes - Where
                  Every Pair Tells a Unique Story. Shop Now and Walk the Talk of
                  Style!
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    Explore
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  className="h-[400px]  shadow-slate-400"
                  src={cover}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Services />
      <Banner />
    </>
  );
};
export default Homepage;
