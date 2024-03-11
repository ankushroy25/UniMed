import React from "react";

const About = () => {
  return (
    <div>
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                A mix of development and craftsmanship at the core of what we
                do.
              </h2>
              <p className="mt-6 text-gray-600">
                We pride ourselves on conveying hard-to-discover styles, sizes
                and widths since we realize that each individual’s needs
                contrast. Whether you’re experiencing issues looking over our
                vast determination of different shoes or have a straightforward
                inquiry, our client benefit group is prepared and willing to
                help.
              </p>
              <p className="mt-4 text-gray-600">
                Next time you require another match of kicks for this experience
                we call life, our group is here to ensure that you get the
                execution that you require from your apparatus. Regardless of
                whether you are difficult to fit or have explicit requirements,
                let <b> ShopShoe.com</b> enable you to make progress toward your
                objective.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-16">
        <div className="container mx-auto px-8 py-4">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold capitalize text-gray-800  lg:text-4xl">
                What our clients are saying
              </h1>

              <div className="mx-auto mt-6 flex">
                <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
              </div>
            </div>

            <div className="mt-8 flex justify-between md:mt-0">
              <button
                title="left arrow"
                className="mx-3 rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                title="right arrow"
                className="rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3">
            <div className="rounded-lg border p-8 bg-gray-500 bg-opacity-30">
              <p className="leading-loose text-gray-900">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="-mx-2 mt-8 flex items-center">
                <img
                  className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 ">Robert</h1>
                  <span className="text-sm text-gray-900">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-transparent bg-blue-500 p-8 ">
              <p className="leading-loose text-white">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="-mx-2 mt-8 flex items-center">
                <img
                  className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-blue-200"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-white">Jeny Doe</h1>
                  <span className="text-sm text-blue-200">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-8  bg-gray-500 bg-opacity-30">
              <p className="leading-loose text-gray-800">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="-mx-2 mt-8 flex items-center">
                <img
                  className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 ">Ema Watson</h1>
                  <span className="text-sm text-gray-800">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
