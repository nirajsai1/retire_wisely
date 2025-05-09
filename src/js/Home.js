import React from "react";
import { useState } from "react";
import Homepage from "../images/Homepage.png";
import consulting from "../images/consulting.png";
import partnership from "../images/partnership.png";
import services from "../images/services.png";
import retirewisely from "../images/retire_wisely.png";
import background from "../images/background.png";
import estate from "../images/Estate_planing.png";
import insurance from "../images/Insurance_planing.jpg";
import retirement from "../images/Retirement_planing.jpg";
import List_of_products from "../images/List_of_products.png";
import mb from "../images/mb_big.jpeg";
import { Handshake } from "lucide-react";
function Home() {
  return (
    <div>
      <img src={Homepage} alt="Home page image" className="w-full" />
      <div className="bg-gray-100 py-12">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-2/3 text-lg text-gray-800 leading-relaxed">
            <p>
              Our team of financial experts helps clients gain control of their finances by providing tailored
              solutions based on their needs and goals. As independent professionals, we prioritize understanding
              individual requirements to support clients on their financial journey.
            </p>
          </div>
          <div className="bg-white border-l-4 border-green-500 p-6 shadow-md md:w-1/3">
            <p className="text-blue-900 font-semibold text-lg">
              “Take control of your finances with tailored solutions from our experts”
            </p>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="text-center">
              <img src={consulting} alt="Consulting" className="max-h-[300px] max-w-[300px] mx-auto mb-4 shadow-lg" />
              <h2 className="text-xl font-bold text-gray-900">Consulting</h2>
            </div>
            <div className="text-center">
              <img src={services} alt="Services" className="max-h-[300px] max-w-[300px] mx-auto mb-4 shadow-lg" />
              <h2 className="text-xl font-bold text-gray-900">Services</h2>
            </div>
            <div className="text-center">
              <img src={partnership} alt="Partnership" className="max-h-[300px] max-w-[300px] mx-auto mb-4 shadow-lg" />
              <h2 className="text-xl font-bold text-gray-900">Partnership</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center gap-10">

      <div className="relative w-full md:w-1/2">
        <img
          src={retirewisely}
          alt="RetireWisely Financial Services"
          className="w-full h-auto object-cover rounded shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded">
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          Why Retire Wisely Financial Services?
        </h2>
        <p className="text-gray-800 leading-relaxed">
          RetireWisely is an independent financial services marketing company that is bringing Wall Street to Main Street and 
          also giving an equal Business Opportunity who has dream of owning their own financial services agency. 
          No matter what financial challenges clients may face, RetireWisely has the experience and resources to create 
          a successful financial plan. Our experienced licensed professionals teach our clients about the “Circle of Safety”. 
          In these unprecedented financial times, it is important to help clients preserve their capital, while seeking long-term 
          growth and appreciation. Our professionals are among the most educated and well-trained in the industry. 
          When you work with RetireWisely, you know that you are working with the best.
        </p>
      </div>
    </div>
    <img src={background}></img>
    <div className="bg-white text-gray-800">
      {/* Team Section */}
      <section className="max-w-screen-xl mx-auto px-24 py-16 ">
        <div className="flex gap-10 ">
        <h2 className="text-4xl font-light text-gray-700 mb-2">Meet Our Team</h2>
        <p className="text-blue-900 text-sm mb-10 max-w-3xl">
          Meet our experienced team of financial professionals, ready to guide you towards your goals in investments,
          retirement, taxes, insurance, and more. Personalized advice awaits!
        </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-60">
            <img
              src={mb} // Replace with your image path
              alt="Madhu Budati"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Info Box */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-900">Madhu Budati</h3>
            <p className="text-lg text-gray-500 mb-4">CEO/President</p>
            <div className="bg-gray-100 rounded-md p-5 mb-4">
              <p className="text-gray-700 text-sm">
                Madhusudana Budati is an IT Engineer by background but now owns and operates a successful financial services
                agency. Madhusudana has 20+ years of corporate…
              </p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition">
              VIEW PROFILE
            </button>
          </div>
        </div>
      </section>

      {/* Product Providers Section */}
      <section className="bg-white px-6 md:px-20 py-12 border-t">
        <div className="flex items-center gap-4 max-w-screen-xl mx-auto px-28 py-12">
          <div className="p-2 rounded-md bg-green-100 text-green-600">
            <Handshake className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-500">Our Product Providers</h2>
        </div>
      </section>
    </div>
    <img src={List_of_products} className="max-w-screen-xl mx-auto px-20 py-3 pb-16"></img>
    </div>
  );
}

export default Home;
