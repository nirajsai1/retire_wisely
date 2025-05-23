import React, { useState ,useRef , useEffect} from "react";
import { CalendarPlus ,Clock } from "lucide-react";
import { FaWhatsapp , FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate , useLocation } from "react-router-dom";
import Book_an_appointment from "./js/Book_an_appointment";
import Home from "./js/Home";
import Aboutus from "./js/Aboutus";
import Contactus from "./js/Contactus";
import Partnership from "./js/Partnership";
import Resources from "./js/Resources";
import Services from "./js/Services";
import Faq from "./js/services/Faq";
import FC from "./js/Financial_Calculators";
import Useful_links from "./js/services/Useful_Links";
import College_planning from "./js/quick_links/College_planning";
import Retirement_planning from "./js/quick_links/Retirement_planning";
import Tax_planning from "./js/quick_links/Tax_planning";
import Privacy_policy from "./js/Privacy_policy";
import  {Our_blog}  from "./js/Our_blog";
import ProfileSection from "./js/ProfileSection";
import munna_llc from "./images/munna_llc.jpg";
import Blog1 from "./js/blogs/Blog1";
import Blog2 from "./js/blogs/Blog2";
import Blog3 from "./js/blogs/Blog3";
import Blog5 from "./js/blogs/Blog5";
import Blog44 from "./js/blogs/Blog4";
function App() {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
const closeMobileMenu = () => setMobileMenuOpen(false);
const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = () => {
    setDropdownOpen(false); 
  };
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
   const location = useLocation();
   const isActive = (path) => location.pathname === path;
const activeClass = "text-gray-900";
const defaultClass = "text-[#644e40]";
  return (
      <div>
      <div className="hidden md:flex bg-[#644e40] p-3 justify-center items-center gap-8 text-white text-sm w-full z-10">
        <div 
          className="flex items-center px-4 py-2 cursor-pointer transition hover:bg-gray-900 hover:rounded-xl hover:border hover:border-[#d7a07d] whitespace-nowrap"
          onClick={() => navigate('/baa')}
        >
          <CalendarPlus className="text-white w-5 h-5" />
          <span className="font-semibold pl-3 text-white">BOOK AN APPOINTMENT</span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <Clock className="w-5 h-5" />
          <p>8 AM to 6 PM - Monday to Friday</p>
        </div>

        <div className="flex items-center whitespace-nowrap">
          <FaWhatsapp className="w-7 h-7 pr-2" />
          <p>Chat on Whatsapp with +1 925-487-0584</p>
        </div>
      </div>

      <div className="flex md:hidden bg-[#644e40] px-2 py-2 items-center gap-2 text-white text-[10px] w-full overflow-x-auto whitespace-nowrap scrollbar-none">
        <div 
          className="flex items-center px-2 py-1 cursor-pointer transition hover:bg-[#002E5B] hover:rounded-lg hover:border hover:border-[#002E5B]"
          onClick={() => navigate('/baa')}
        >
          <CalendarPlus className="text-white w-3.5 h-3.5" />
          <span className="font-semibold pl-1">BOOK AN APPOINTMENT</span>
        </div>

        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <p className="leading-none">8 to 6 - Mon to Fri</p>
        </div>

        <div className="flex items-center gap-1">
          <FaWhatsapp className="w-4 h-4" />
          <p className="leading-none">+1 925-487-0584</p>
        </div>
      </div>
      <div className="h-px bg-[#f2efe8]"></div>
      <div className="sticky top-0 bg-white shadow z-20 text-[#002E5B]">
  <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-3 text-white">
    <img
  src={munna_llc}
  alt="Logo"
  className="flex-[3]  ml-4 mr-2 md:ml-16 md:mr-32 cursor-pointer max-h-[80px] max-w-[80px]"
  onClick={handlenav}
/>

<div className="lg:hidden">
  <button onClick={toggleMobileMenu} className="focus:outline-none text-[#002E5B] hover:text-[#da9f7e]">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
      viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

    <div className="hidden lg:flex flex-[2] gap-x-12 text-sm font-semibold items-center">
      <Link to="/" className={isActive("/") ? activeClass : defaultClass}>HOME</Link>
      <Link to="/aboutus" className={isActive("/aboutus") ? activeClass : defaultClass}>ABOUT US</Link>
      <Link to="/services" className={isActive("/services") ? activeClass : defaultClass}>SERVICES</Link>

      <div className="relative group inline-block">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={`font-semibold text-sm focus:outline-none ${isActive("/fc") || isActive("/useful_links") || isActive("/faq") ? activeClass : defaultClass}`}
          >
            RESOURCES
          </button>
          {dropdownOpen && (
            <div className="absolute bg-gray-900 shadow-lg mt-2 rounded-md z-30 w-40 text-white">
              <Link to="/fc" className="block px-4 py-2 hover:bg-[#da9f7e]" onClick={handleOptionClick}>Financial Calculators</Link>
              <Link to="/useful_links" className="block px-4 py-2 hover:bg-[#da9f7e]" onClick={handleOptionClick}>Useful Links</Link>
              <Link to="/faq" className="block px-4 py-2 hover:bg-[#da9f7e]" onClick={handleOptionClick}>Frequently Asked Questions</Link>
            </div>
          )}
        </div>
      </div>

      <Link to="/partnership" className={isActive("/partnership") ? activeClass : defaultClass}>PARTNERSHIP</Link>
      <Link to="/contactus" className={isActive("/contactus") ? activeClass : defaultClass}>CONTACT US</Link>

      <div className="flex gap-4 text-[#002E5B]">
        
      <a href="https://www.facebook.com/profile.php?id=61563002765802"><FaFacebook className="w-5 h-5" /></a>
      <a href="https://www.linkedin.com/company/munna-llc-mandava-financial-services/"><FaLinkedinIn className="w-5 h-5" /></a>
      </div>
    </div>
  </div>

{mobileMenuOpen && (
  <div className="lg:hidden px-6 pb-6 flex flex-col space-y-5 text-sm font-semibold text-[#002E5B]">
    <Link 
      to="/" 
      onClick={closeMobileMenu} 
      className={`py-2 ${isActive("/") ? activeClass : defaultClass}`}
    >
      HOME
    </Link>
    
    <Link 
      to="/aboutus" 
      onClick={closeMobileMenu} 
      className={`py-2 ${isActive("/aboutus") ? activeClass : defaultClass}`}
    >
      ABOUT US
    </Link>
    
    <Link 
      to="/services" 
      onClick={closeMobileMenu} 
      className={`py-2 ${isActive("/services") ? activeClass : defaultClass}`}
    >
      SERVICES
    </Link>

    <div className="flex flex-col">
      <button 
        onClick={toggleMobileDropdown} 
        className="text-left py-2 flex items-center justify-between"
      >
        RESOURCES
        <span>{mobileDropdownOpen ? '▲' : '▼'}</span>
      </button>

      {mobileDropdownOpen && (
        <div className="ml-4 mt-2 flex flex-col space-y-3 text-sm transition-all duration-300">
          <Link to="/fc" onClick={closeMobileMenu} className="py-1">Financial Calculators</Link>
          <Link to="/useful_links" onClick={closeMobileMenu} className="py-1">Useful Links</Link>
          <Link to="/faq" onClick={closeMobileMenu} className="py-1">FAQ</Link>
        </div>
      )}
    </div>

    <Link 
      to="/partnership" 
      onClick={closeMobileMenu} 
      className={`py-2 ${isActive("/partnership") ? activeClass : defaultClass}`}
    >
      PARTNERSHIP
    </Link>

    <Link 
      to="/contactus" 
      onClick={closeMobileMenu} 
      className={`py-2 ${isActive("/contactus") ? activeClass : defaultClass}`}
    >
      CONTACT US
    </Link>

    <div className="flex gap-6 mt-6">
      <a 
        href="https://www.facebook.com/profile.php?id=61563002765802" 
        aria-label="Facebook"
      >
        <FaFacebook className="w-6 h-6" />
      </a>
      <a 
        href="https://www.linkedin.com/company/munna-llc-mandava-financial-services/" 
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="w-6 h-6" />
      </a>
    </div>
  </div>
)}

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
            <Route path='/our_blog' element={<Our_blog></Our_blog>}></Route>
            <Route path='/baa' element={<Book_an_appointment></Book_an_appointment>}></Route>
            <Route path='/psection' element={<ProfileSection/>}></Route>
            <Route path='/blog1' element={<Blog1/>}></Route>
            <Route path='/blog2' element={<Blog2/>}></Route>
            <Route path='/blog3' element={<Blog3/>}></Route>
            <Route path='/blog5' element={<Blog5/>}></Route>
            <Route path='/blog4' element={<Blog44/>}></Route>
          </Routes>
        </div>
        <footer className="bg-[#333333] text-white">

  <div className="bg-[#644e40] px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
    <h2 className="text-xl sm:text-2xl font-bold">Looking For A Financial Consultant?</h2>
    <button
      onClick={() => navigate('/baa')}
      className="mt-3 sm:mt-0 bg-gray-900 hover:bg-[#001f3d] text-white font-semibold px-6 py-2 rounded shadow"
    >
      BOOK AN APPOINTMENT
    </button>
  </div>
  <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
    <div>
      <h3 className="text-xl font-bold border-t-2 border-[#d89e7f] pt-2 mb-3">ABOUT</h3>
      <p className="text-gray-300">
        At Mandava Financial Services, we strive to simplify your financial life after your retirement. 
        We help high-net-worth families and business owners set tangible goals and then put strategies 
        in place to achieve those goals through thoughtful planning and open communication.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-bold border-t-2 border-[#d89e7f] pt-2 mb-3">CONTACT INFO</h3>
      <p>Call: +1 319-853-3385</p>
      <p>Email:  tarunmandava.fin@gmail.com </p>
      <p className="mt-2">1984 Allerton Way <br/>Spring Hill, TN 37174</p>
      <p>Mon – Fri: 9:00am – 9:00pm</p>
    </div>

    <div>
      <h3 className="text-xl font-bold border-t-2 border-[#d89e7f] pt-2 mb-3">QUICK LINKS</h3>
      <ul className="space-y-1">
        <li><Link to="/retirement_p">Retirement Planning</Link></li>
        <li><Link to="/college_p">College Planning</Link></li>
        <li><Link to="/tax_p">Tax Planning</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold border-t-2 border-[#d89e7f] pt-2 mb-3">INFORMATION</h3>
      <ul className="grid grid-cols-2 gap-y-1 gap-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/pp">Privacy Policy</Link></li>
        <li><Link to="/baa">Book Appointment</Link></li>
        <li><Link to="/our_blog">Our Blog</Link></li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-400 py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
    <p className="text-center sm:text-left">&copy; 2025 Mandava Financial Services Inc.</p>
    
    <div className="flex gap-4 mt-3 sm:mt-0">
      <a href="https://www.facebook.com/profile.php?id=61563002765802" aria-label="Facebook" className="bg-white text-[#002e5b] p-2 rounded-full">
        <FaFacebook className="w-4 h-4" />
      </a>
      <a href="https://www.linkedin.com/company/munna-llc-mandava-financial-services/" aria-label="Instagram" className="bg-white text-[#002e5b] p-2 rounded-full">
        <FaLinkedinIn className="w-4 h-4" />
      </a>
    </div>
  </div>
</footer>
      </div>
  );
}

export default App;
