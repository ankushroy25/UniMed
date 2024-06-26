// import shoeBanner from "../assets/shoeBanner.png";

const Banner = () => {
  return (
    <div>
      <div className="container my-8 mx-auto md:px-6">
        <section className=" text-center">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex flex-col md:flex-row items-center lg:grid-cols-2">
                <div className="md:mb-12 lg:mb-0">
                  {/* <img
                    src={shoeBanner}
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt="image"
                  /> */}
                </div>
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 mx-auto">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.15)] dark:shadow-black/50 md:px-12 lg:-ml-14 ">
                    <h2 className="mb-16 text-3xl font-bold">
                      Trusted by the best companies <br />
                      <span className="">around the world</span>
                    </h2>
                    <div className="grid gap-x-6 md:grid-cols-2">
                      <div className="mb-12">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png"
                          className="neutralscale px-6"
                        />
                      </div>

                      <div className="mb-12">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo5-1.png"
                          className="neutralscale px-6"
                        />
                      </div>

                      <div className="mb-12 md:mb-0">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png"
                          className="neutralscale px-6"
                        />
                      </div>

                      <div className="">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png"
                          className="neutralscale px-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
