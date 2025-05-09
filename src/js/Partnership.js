import React from "react";
import partnership from "../images/partnership_1.jpg";
import image from "../images/image.png";
function Partnership()
{
  const bulletPoints = [
    "No Major Investment",
    "No Franchise Fees",
    "No Loss of Job Security",
    "No Experience Required",
    "Start as Part Time/Full Time",
    "Revolutionary Compensation System",
    "Proven, Predictable and Profitable Business System",
    "Tremendous leadership team with an unparalleled track record of success",
    "Impressive business history, revolutionizing some of the largest industries in the world",
    "Innovative, consumer-oriented concepts of leading-edge product provider companies",
    "Cutting-edge technology to help build and run your business",
    "World-class recognition and reward system",
  ];
    return(
        <>
        <div className="bg-gray-50">
        <section className="flex flex-col md:flex-row  p-10 items-center justify-between max-w-screen-xl mx-auto px-20 py-3">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h4 className="text-green-600 font-semibold uppercase text-sm mb-4">
          Aspiring for Partnership
        </h4>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-700 leading-tight">
          Leaders with Vision<br />
          Helping People with<br />
          Dreams...
        </h1>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={partnership}
          alt="Business people working"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
        </div>
        <img src={image}></img>
        <div className="max-w-screen-xl mx-auto px-28 py-3">
        <button className=" bg-[#002E5B] text-white font-semibold rounded-md hover:bg-blue-800 transition px-7 py-3">
        BOOK AN APPOINTMENT
      </button>
        </div>
        </>
    )
}
export default Partnership;