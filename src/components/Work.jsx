import React from "react";
import adidas from "../assets/projects/adidasslika.jpg";
import firstProject from "../assets/projects/nature.jpg";
import data from "../assets/projects/data.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import phpwebshop from "../assets/projects/phpWebshop1.jpg";

const Work = () => {
  return (
    <div name="work" className=" text-gray-300 bg-custom1 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full height">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${firstProject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 overflow-hidden">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                Travel Agency <br />
                (front-end)
              </h3>
              <div className="pt-8 gap-2 flex justify-center ">
                <a
                  href="https://kerekes-travel-agency.netlify.app/"
                  target="_blank"
                >
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Kerekesss/travel-agency"
                  target="_blank"
                >
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${data})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 overflow-hidden">
              <h3 className="text-2xl text-center font-bold text-white tracking-wider">
                Data Analytics <br />
                (front-end)
              </h3>
              <div className="pt-8 gap-2 flex justify-center ">
                <a
                  href="https://kerekes-data-analytics.netlify.app/"
                  target="_blank"
                >
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Kerekesss/data-analytics"
                  target="_blank"
                >
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${adidas})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 overflow-hidden">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                Adidas <br />
                (front-end)
              </h3>
              <div className="pt-8 gap-2 flex justify-center ">
                <a href="https://kerekes-adidas.netlify.app/" target="_blank">
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kerekesss/adidas" target="_blank">
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 overflow-hidden">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                This Portfolio <br />
                (front-end)
              </h3>
              <div className="pt-8  flex justify-center ">
                <a
                  href="https://github.com/Kerekesss/portfolio"
                  target="_blank"
                >
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${phpwebshop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 overflow-hidden">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                PHP Webshop <br />
                (full-stack)
              </h3>
              <div className="pt-8 gap-2 flex justify-center ">
                <a
                  href="http://phpwebshop.infinityfreeapp.com/"
                  target="_blank"
                >
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Kerekesss/php-webshop"
                  target="_blank"
                >
                  <button className="border-2 border-white px-6 py-2 hover:bg-pink-600 rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
