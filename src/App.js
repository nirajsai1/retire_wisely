import React, { useState ,useRef , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./js/Home";
import Aboutus from "./js/Aboutus";
import Contactus from "./js/Contactus";
import Partnership from "./js/Partnership";
import Resources from "./js/Resources";
import Services from "./js/Services";
import image from "./images/Logo.jpg";
import Faq from "./js/services/Faq";
import FC from "./js/Financial_Calculators";
import Useful_links from "./js/services/Useful_Links";
import clock from "./images/clock_icon.webp";
import instagram from "./images/Instagram.webp";
import facebook from "./images/Facebook.webp";
import College_planning from "./js/quick_links/College_planning";
import Retirement_planning from "./js/quick_links/Retirement_planning";
import Tax_planning from "./js/quick_links/Tax_planning";
import Privacy_policy from "./js/Privacy_policy";
function App() {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = () => {
    setDropdownOpen(false); // Close on click
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handlenav = () =>
  {
    navigate('/')
  }
  return (
      <div>
        <div className="bg-green-400 p-5 flex justify-center items-center gap-x-8 text-white text-sm w-full z-10">
          <button className="font-semibold">BOOK APPOINTMENT</button>
          <div className="flex items-center gap-x-2">
            <img src={clock} className="w-5 h-5" alt="clock" />
            <p>8 AM to 6 PM - Monday to Friday</p>
          </div>
          <p>Chat on WhatsApp with +1 (484) 467-4744</p>
        </div>
        <div className="sticky top-0 bg-white shadow z-20">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-3">
            <img src={image} alt="Logo" className="flex-[3] max-w-[180px] mr-32 ml-16 cursor-pointer" onClick={handlenav}  />
            <div className="flex flex-[2] gap-x-12 text-sm font-semibold">
              <Link to="/">HOME</Link>
              <Link to="/aboutus">ABOUT US</Link>
              <Link to="/services">SERVICES</Link>
              <div className="relative group inline-block">
              <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="font-semibold text-sm focus:outline-none"
            >
              RESOURCES
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-md z-30 w-40">
                <Link
                  to="/fc"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleOptionClick}
                >
                  Financial Calculators
                </Link>
                <Link
                  to="/useful_links"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleOptionClick}
                >
                 Useful Links 
                </Link>
                <Link
                  to="/faq"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleOptionClick}
                >
                  Frequently Asked Questions
                </Link>
              </div>
            )}
          </div>
    </div>
              <Link to="/partnership">PARTNERSHIP</Link>
              <Link to="/contactus">CONTACT US</Link>
              <Link to='/useful_links'>Fc</Link>
              <div className="flex gap-4">
              <img src={facebook} className="w-5 h-5"></img>
              <img src={instagram} className="w-5 h-5"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/fc" element={<FC />} />
            <Route path="/useful_links" element={<Useful_links />} />
            <Route path="/retirement_p" element={<Retirement_planning/>}></Route>
            <Route path="/college_p" element={<College_planning></College_planning>}></Route>
            <Route path="/tax_p" element={<Tax_planning></Tax_planning>}></Route>
            <Route path='/pp' element={<Privacy_policy/>}></Route>
          </Routes>
        </div>
        <footer className="bg-[#002e5b] text-white">
      <div className="bg-[#19e49a] px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold">Looking For A Financial Consultant?</h2>
        <button className="mt-3 sm:mt-0 bg-[#002e5b] hover:bg-[#001f3d] text-white font-semibold px-6 py-2 rounded shadow">
          BOOK AN APPOINTMENT
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        <div>
          <h3 className="text-xl font-bold border-t-2 border-[#19e49a] pt-2 mb-3">ABOUT</h3>
          <p className="text-gray-300">
            At Retire Wisely Financial Services, we strive to simplify your financial life after your retirement. 
            We help high-net-worth families, and business owners set tangible goals and then put strategies 
            in place that assist them in achieving those goals through thoughtful planning and open communication.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold border-t-2 border-[#19e49a] pt-2 mb-3">CONTACT INFO</h3>
          <p>Call: (484) 467-4744</p>
          <p>Email: letstalk@retirewisely.biz</p>
          <p className="mt-2">116 Foreside Rd<br />Malvern PA 19355 U.S.</p>
          <p>Monday – Friday: 9:00am – 9:00pm</p>
        </div>
        <div>
          <h3 className="text-xl font-bold border-t-2 border-[#19e49a] pt-2 mb-3">QUICK LINKS</h3>
          <ul className="space-y-1">
            <li><Link to='/retirement_p'>Retirement planning</Link></li>
            <li><Link to='/college_p'>College Planning</Link></li>
            <li><Link to='/tax_p'>Tax planning</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold border-t-2 border-[#19e49a] pt-2 mb-3">INFORMATION</h3>
          <ul className="grid grid-cols-2 gap-y-1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/AboutUs'>AboutUs</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/resources'>Resources</Link></li>
            <li><Link to='/contactus'>Contactus</Link></li>
            <li><Link to='/pp'>Privacy Policy</Link></li>
            <li>Book an Appointment</li>
            <li>Our Blog</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-400 py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2025 Retire Wisely Financial Services Inc.</p>
        <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#" className="bg-white text-[#002e5b] p-2 rounded-full"></a>
          <a href="#" className="bg-white text-[#002e5b] p-2 rounded-full"></a>
        </div>
      </div>
    </footer>
      </div>
  );
}

export default App;
