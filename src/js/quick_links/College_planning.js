import cp from "../../images/college_planning.png";
import { useNavigate } from "react-router-dom";
export const  College_planning = () =>
{
    const navigate = useNavigate();
    return(
        <>
        <div className="bg-green-400 py-10 px-6">
              <h1 className="text-3xl font-bold text-blue-900  px-48">College Planning</h1>
                </div>
                <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-20 py-3 font-serif pt-16 pb-20">
              {/* Left Column */}
              <div className="flex-1 px-8 py-6">
                <p className="text-sm text-[#1a1a1a] mb-6">
                Our College Planning Services aims to help students achieve their academic objectives. Our program is dedicated to supporting students in their pursuit of higher education by offering expert guidance and resources. With our assistance, students can overcome any obstacles that may hinder their college journey and reach their full potential.
                </p>
        
                <div className="flex flex-col md:flex-row items-start mb-6">
                  <img src={cp} alt="Retirement Plan" className="w-full md:w-[350px] mb-4 md:mb-0 md:mr-6" />
                  <p className="text-sm text-[#1a1a1a]">
                  We care for our clients’ business as our business. We think and act like business partners, not academic advisors. We share our clients’ aspirations, work to understand their reality, and align our incentives with their objectives — so they know we’re in this together.
<br/>
Personal impact, mentoring, and teamwork are just a few of the benefits of building a career at Consulting WP.
                  </p>
                </div>
        
                <p className=" text-sm text-[#1a1a1a] mb-4">
                Our program involves thorough consultations, which may be conducted in-person, over the phone, or through email, and extensive research to aid the planning process. Regardless of the start date, our fees remain the same, so we encourage students to begin as soon as possible to receive the maximum benefits of our services.
                </p>
                
              </div>
        
              {/* Right Sidebar */}
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
export default College_planning