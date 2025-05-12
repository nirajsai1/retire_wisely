import calendar from "../images/showcase_calendar.png";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { Clock, MapPin } from "lucide-react";
import logo from "../images/baa_logo.jpeg";
import mbp from "../images/mb_picture.jpeg";

function Book_an_appointment() {
  const [selected, setSelected] = useState(null);

  const services = [
    { title: "100+", description: "Licensed Professionals" },
    { title: "99%", description: "Satisfaction" },
    { title: "10x", description: "Growth Rate" },
  ];

  return (
    <>
      <h1 className="text-center text-[#002E5B] text-2xl md:text-3xl pt-6">You can count on our work</h1>
      <p className="text-center text-sm pt-4 pb-8 text-[#002E5B] font-serif max-w-xl mx-auto">
        Understanding your requirements and objectives is important to us. We listen and work together to create a truly unique and unforgettable experience.
      </p>

      <div className="flex flex-col md:flex-row bg-gray-100 md:min-h-screen items-center justify-center px-4 md:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
          
          <div className="md:w-1/2 h-[650px] overflow-y-auto flex flex-col border-b md:border-b-0 md:border-r border-gray-300">
            <div className="flex flex-col items-center pb-4 border-b border-gray-300">
              <img src={logo} alt="Financial Success" className="w-[100px] h-[100px] mt-4 mb-3" />
            </div>

            <div className="px-5 pt-4">
              <img src={mbp} alt="Host" className="w-16 h-16 rounded-full border-2 border-white mb-3" />
              <h2 className="text-lg font-semibold text-gray-500">Tarun Mandava</h2>
              <h3 className="text-xl font-bold text-[#002E5B] mt-2">Let's Connect and Achieve Financial Success!</h3>

              <div className="flex pt-3 font-semibold text-gray-500">
                <Clock className="w-5 h-5" />
                <p className="pl-2">45 min</p>
              </div>
              <div className="flex pt-2 font-semibold text-gray-500">
                <MapPin className="w-5 h-5" />
                <p className="pl-2 break-words">https://zoom.us/j/4844674744</p>
              </div>

              <p className="text-[#002E5B] text-md pt-4 font-semibold">
                Please choose a time that works best for you, and I'll be happy to discuss how we can meet your financial goals together.
              </p>

              <h1 className="text-[#002E5B] text-lg font-bold pt-4">What to Expect:</h1>
              <ul className="list-disc marker:text-[#002E5B] text-[#002E5B] pl-5 space-y-2 mb-4 text-sm">
                <li>A personalized, no-obligation consultation</li>
                <li>Clear and easy-to-understand information on our services</li>
                <li>Answers to your financial questions</li>
              </ul>
              <p className="text-[#002E5B] pb-5">Looking forward to meeting with you and helping you secure a brighter financial future!</p>
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

      <h1 className="text-center text-[#002E5B] text-2xl md:text-3xl pt-12">Connect with Financial Professional to Support Your Need</h1>
      <p className="text-center text-sm pt-5 text-[#002E5B] font-serif max-w-xl mx-auto">
        Discover why hundreds of client households place their trust in us for investment management and how we can assist you in attaining your financial objectives.
      </p>
      <p className="text-center text-sm pt-2 pb-12 text-[#002E5B] font-serif max-w-xl mx-auto">
        Our driving force is to aid individuals in expanding the Kingdom of God through their giving and investments. By applying time-honored Biblical principles, we empower people to make prudent financial choices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-20">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(idx)}
            className={`cursor-pointer border-4 p-6 rounded shadow-sm transition-all duration-200 
              ${selected === idx ? "border-green-600" : "border-[#002E5B] hover:border-green-600"}`}
          >
            <h3 className="text-center text-4xl font-bold text-[#002E5B] mb-4">{service.title}</h3>
            <p className="text-center text-xl font-semibold text-[#002E5B]">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Book_an_appointment;
