import React from "react";
import Rp from "../../images/retirement_planning.png";
import {useNavigate} from "react-router-dom"
function Retirement_planning()
{
  const navigate=useNavigate();
    return(
        <>
        <div className="bg-green-400 py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-900  px-48">Retirement Planning</h1>
        </div>
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-20 py-3 font-serif pt-16 pb-20">
      <div className="flex-1 px-8 py-6">
        <p className="text-sm text-[#1a1a1a] mb-6">
          Welcome to Retire Wisely Financial Services, where we are dedicated to helping you make the most of your retirement years. Our team of experienced financial advisors provides comprehensive financial planning services to high-net-worth families and business owners who are seeking to achieve their financial goals and enjoy a comfortable retirement.
        </p>

        <div className="flex flex-col md:flex-row items-start mb-6">
          <img src={Rp} alt="Retirement Plan" className="w-full md:w-[350px] mb-4 md:mb-0 md:mr-6" />
          <p className="text-sm text-[#1a1a1a]">
            At Retire Wisely, we understand that retirement planning can be overwhelming and confusing, which is why we strive to simplify the process for our clients. We work closely with each client to gain a thorough understanding of their unique financial situation and goals. From there, we develop a customized plan that is tailored to meet their specific needs and objectives.
          </p>
        </div>

        <p className=" text-sm text-[#1a1a1a] mb-4">
          Our range of services includes investment planning, tax planning, estate planning, insurance analysis, and much more. We are committed to providing our clients with the most up-to-date financial advice and guidance to help them achieve financial security and peace of mind.
        </p>
        <p className=" text-sm text-[#1a1a1a] mb-4">
          We believe that communication is key to a successful retirement plan, and we make it a priority to keep our clients informed and up-to-date on their progress. We also offer ongoing support and advice to ensure that our clients remain on track to meet their financial goals.
        </p>
        <p className="text-sm text-[#1a1a1a]">
          At Retire Wisely Financial Services, we are dedicated to helping our clients retire with confidence and security. Contact us today to learn more about how we can help you achieve your financial goals and enjoy the retirement you deserve.
        </p>
      </div>
      <div className="w-full md:w-[320px] bg-white border-l border-gray-200">
        <div className="border-b">
          <div className="px-6 py-4 font-semibold text-green-600 border-b border-white-300 bg-gray-100 cursor-pointer" onClick={() => navigate('/retirement_p')}>Retirement planning</div>
          <div className="px-6 py-4 font-semibold text-green-600 border-b border-white-300 bg-gray-100 cursor-pointer" onClick={() => navigate('/tax_p')}>Tax planning</div>
          <div className="px-6 py-4 font-semibold text-green-600 border-b border-white-300 bg-gray-100 cursor-pointer" onClick={() =>navigate('/college_p')}>College Planning</div>
        </div>

        <div className="bg-green-500 text-white px-6 py-6">
          <h3 className="text-lg font-bold mb-2">How can we help you?</h3>
          <h4 className="text-md font-bold mb-2">Committed to Service</h4>
          <p className="text-sm leading-relaxed mb-4">
            Every successful financial strategy starts with an excellent client relationship. Our mission and values include exceeding our client’s every expectation. Call us today to find out how we can suggest long- and short-term strategies that will help you realize your financial dreams.
          </p>
          <p className="text-sm italic">Let’s Plan For The Future</p>
          <p className="text-sm italic mb-4">Plan for tomorrow today!</p>

          <button className="w-full mt-2 bg-white text-green-600 font-semibold py-2 rounded shadow hover:bg-gray-100 transition" onClick={() => navigate('/contactus')}>
            CONTACT US
          </button>
        </div>
      </div>
    </div>

        </>
    );
}
export default Retirement_planning;