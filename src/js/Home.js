import React from "react";
import { useState } from "react";
import Homepage from "../images/Homepage.png";
import consulting from "../images/consulting.png";
import partnership from "../images/partnership.png";
import services_img from "../images/services.png";
import retirewisely from "../images/retire_wisely.png";
import background from "../images/background.png";
import estate from "../images/Estate_planing.png";
import insurance from "../images/Insurance_planing.jpg";
import retirement from "../images/Retirement_planing.jpg";
import List_of_products from "../images/List_of_products.png";
import mb from "../images/mb_big.jpeg";
import { Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tarun_mandava from "../images/Tarun_mandava.jpg"; 
function Home() {
  const services = [
  {
    title: "Estate Planning (Will & Trust)",
    description:
      "Estate planning is the process of anticipating and arranging for the management and disposal of a person’s estate during the person’s life in preparation for a person’s future incapacity or death. We provide comprehensive will & trust estate planning.",
    image: estate,
  },
  {
    title: "Retirement Planning",
    description:
      "Retirement planning doesn’t take Age but making your money work for you when your job income stops.",
    image: retirement,
  },
  {
    title: "Insurance Planning",
    description:
      "Insurance planning is an essential part of an effective financial plan that includes assessing risks and selecting the best insurance products to mitigate those risks. Insurance can help alleviate financial burdens that often occur when unexpected circumstances arise, safeguarding your home, income, and other assets.",
    image: insurance,
  },
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigate=useNavigate();
  return (
    <div>
  <img src={Homepage} alt="Home page image" className="w-full object-cover" />

  <div className="bg-gray-100 py-12">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start justify-between gap-8">
      <div className="md:w-2/3 text-base text-gray-800 leading-relaxed">
        <p>
          Our team of financial experts helps clients gain control of their finances by providing tailored
          solutions based on their needs and goals. As independent professionals, we prioritize understanding
          individual requirements to support clients on their financial journey.
        </p>
      </div>
      <div className="bg-white border-l-4 border-[#d89e7f] p-6 shadow-md md:w-1/3 w-full">
        <p className="text-blue-900 font-semibold text-lg">
          “Take control of your finances with tailored solutions from our experts”
        </p>
      </div>
    </div>
  </div>

  <div className="py-12">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {[consulting, services_img, partnership].map((img, idx) => (
          <div className="text-center w-full md:w-auto" key={idx}>
            <img
              src={img}
              alt="Feature"
              className="max-h-[350px] max-w-[350px] mx-auto mb-4 shadow-lg border-t-4 border-l-4 border-r-4 border-b-4 border-transparent hover:border-b-[#d89e7f] transition duration-300"
            />
            <h2 className="text-xl font-bold text-gray-900">
              {['Consulting', 'Services', 'Partnership'][idx]}
            </h2>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-12 flex flex-col md:flex-row items-center gap-10">
    <div className="relative w-full md:w-1/2">
      <img src={retirewisely} alt="Mandava Financial Services" className="w-full h-auto rounded" />
    </div>
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl font-semibold text-[#002E5B] mb-4">
        Why Mandava Financial Services?
      </h2>
      <p className="text-[#002E5B] text-sm leading-relaxed">
        Mandava Financial Services is an independent financial services marketing company that is bringing Wall Street to Main Street and also giving an equal Business Opportunity to those who dream of owning their own financial services agency. No matter what financial challenges clients may face, Mandava Financial Services has the experience and resources to create a successful financial plan. Our experienced licensed professionals teach our clients about the “Circle of Safety”. In these unprecedented financial times, it is important to help clients preserve their capital, while seeking long-term growth and appreciation. Our professionals are among the most educated and well-trained in the industry. When you work with Mandava Financial Services, you know that you are working with the best.
      </p>
    </div>
  </div>

  <img src={background} alt="Decorative background" className="w-full" />

  <div className="w-full bg-gray-100 py-10">
    <h2 className="text-3xl font-bold text-center mb-6 text-[#002E5B]">Our Services</h2>
    <Slider {...settings} className="max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div className="w-full px-2" key={index}>
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-[400px] h-auto object-cover"
            />
            <div className="p-4 bg-gray-100 flex-1">
              <h3 className="text-xl font-semibold text-[#002E5B] mb-4">{service.title}</h3>
              <p className="text-[#002E5B] text-sm font-serif mb-6">{service.description}</p>
              <button
                className="bg-[#644e40] hover:bg-gray-900 text-white px-6 py-2 rounded font-semibold"
                onClick={() => navigate('/services')}
              >
                More Services
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>

  <div className="bg-white text-gray-800">
    <section className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-24 py-12">
      <h2 className="text-3xl font-light text-gray-700 mb-6">Meet Our Team</h2>
      <p className="text-blue-900 text-sm mb-10 max-w-3xl">
        Meet our experienced team of financial professionals, ready to guide you towards your goals in investments,
        retirement, taxes, insurance, and more. Personalized advice awaits!
      </p>
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-60">
          <img src={tarun_mandava} alt="Tarun Kumar" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">Tarun Mandava</h3>
          <p className="text-lg text-gray-500 mb-4">CEO/President</p>
          <div className="bg-gray-100 rounded-md p-5 mb-4">
            <p className="text-gray-700 text-sm">
              Tarun Mandava is an IT Engineer by background but now owns and operates a successful financial services
              agency. Tarun has 20+ years of corporate…
            </p>
          </div>
          <button
            className="bg-[#644e40] hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-md transition"
            onClick={() => navigate('/psection')}
          >
            VIEW PROFILE
          </button>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 md:px-20 py-12 border-t ">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-4 md: pl-28">
        <div className="p-2 rounded-md bg-green-100 text-green-600 ">
          <Handshake className="w-10 h-10 " />
        </div>
        <h2 className="text-3xl font-semibold text-gray-500 text-center md:text-left ">
          Our Product Providers
        </h2>
      </div>
    </section>
    <img
      src={List_of_products}
      alt="List of Product Providers"
      className="w-full max-w-screen-xl mx-auto px-4 md:px-20 py-3 pb-16"
    />
  </div>
</div>

        );
}

export default Home;
