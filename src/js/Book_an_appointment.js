import calendar from "../images/showcase_calendar.png";
import { useState } from "react";
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
        <div>
          
           <iframe src="https://calendly.com/tarunmandava-fin" className="flex-1 w-full h-screen border-0"></iframe>
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