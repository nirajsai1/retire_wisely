import calendar from "../images/showcase_calendar.png";
import { useState } from "react";
import {InlineWidget} from "react-calendly";
import { Clock , MapPin } from "lucide-react";
import logo from "../images/baa_logo.jpeg";
import mbp from "../images/mb_picture.jpeg"
function Book_an_appointment()
{
     const [selected, setSelected] = useState(null);
  const handleClick = (index) => {
    setSelected(index);
  };

    const services = [
    {
      title: "100+",
      description:
        "Licensed Proffesionals",
    },
    {
      title: "99%",
      description:
        "Satisfaction",
    },
    {
      title: "10x",
      description:
        "Growth Rate",
    }];
    return(
        <>
        <h1 className="text-center text-[#002E5B] text-3xl pt-5">You can count on our work</h1>
        <p className="text-center text-sm pt-5 pb-12 text-[#002E5B] font-serif">Understanding your requirements and objectives is important to us. We listen and work together to create a truly unique and unforgettable experience.</p>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 md:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        
        <div className="md:w-1/2 h-[650px] overflow-y-auto flex flex-col border-r border-r-gray-300">
          <div className="border-b border-b-gray-300 w-full flex flex-col justify-center items-center pb-4">
            <img
              src={logo}
              alt="Financial Success"
              className="w-[120px] h-[120px] mb-4 pt-4"
            />
          </div>

          <div className="pl-5 pr-4 pt-4">
            <img
              src={mbp}
              alt="Host"
              className="w-20 h-20 rounded-full border-2 border-white mb-2"
            />
            <h2 className="text-lg font-semibold text-gray-500 pl-2 ">
              Tarun Mandava
            </h2>
            <h3 className="text-xl font-bold text-[#002E5B] mt-2 pl-2">
              Let's Connect and Achieve Financial Success!
            </h3>
            <div className="flex pt-3 pl-2 font-semibold text-gray-500">
              <Clock className="text-gray-500" />
              <p className="pl-2">45 min</p>
            </div>
            <div className="flex pt-2 pl-2 font-semibold text-gray-500">
              <MapPin className="text-gray-500" />
              <p className="pl-2 break-all">https://zoom.us/j/4844674744</p>
            </div>

            <p className="text-[#002E5B] pl-2 text-md pt-5 font-semibold">
              Please choose a time that works best for you, and I'll be happy to discuss how we can meet your financial goals together.
            </p>

            <h1 className="text-[#002E5B] pl-2 text-lg font-bold pt-4">What to Expect:</h1>
            <ul className="list-disc marker:text-[#002E5B] text-[#002E5B] pl-6 space-y-2 mb-4 pb-2 text-sm">
              <li>A personalized, no-obligation consultation</li>
              <li>Clear and easy-to-understand information on our services</li>
              <li>
                Answers to any questions you may have about financial planning, insurance, retirement, or any of our solutions
              </li>
            </ul>
            <p className="text-[#002E5B] pl-2 pb-5">Looking forward to meeting with you and helping you secure a brighter financial future!</p>
          </div>
        </div>

        <div className="md:w-1/2 h-[650px]">
          <InlineWidget
            url="https://calendly.com/tarunmandava-fin"
            styles={{ height: "100%", minWidth: "320px" }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "00a2ff",
              textColor: "4d5055",
            }}
          />
        </div>

      </div>
    </div>
        <h1 className="text-center text-[#002E5B] text-3xl pt-12">Connect with Financial Professional to Support Your Need</h1>
        <p className="text-center text-sm pt-5 text-[#002E5B] font-serif">Discover why hundreds of client households place their trust in us for investment management and how we can assist you in attaining your financial objectives. Our driving force is to aid individuals</p>
        <p className="text-center text-sm pt-2 pb-12 text-[#002E5B] font-serif">in expanding the Kingdom of God through their giving and investments. By applying time-honored Biblical principles, we empower people to make prudent financial choices.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-20">
    {services.map((service, idx) => (
      <div
        key={idx}
        onClick={() => handleClick(idx)}
        className={`cursor-pointer border-4 p-6 rounded shadow-sm transition-all duration-200 
            ${selected === idx ? "border-green-600" : "border-[#002E5B] hover:border-green-600"}`}          
      >
        <h3 className="text-center text-4xl font-bold text-[#002E5B] mb-4 pb-5">{service.title}</h3>
        <p className="text-center text-2xl font-semibold text-[#002E5B] pb-4">{service.description}</p>
      </div>
    ))}
  </div>
        </>
    );
}
export default Book_an_appointment;