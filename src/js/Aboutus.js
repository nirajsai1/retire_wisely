import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import tarun_mandava from "../images/Tarun_mandava.jpg";

function Aboutus() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      data.append(key, val);
    });
    data.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/neerajsai290@gmail.com", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("✅ Your message was sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      toast.error("⚠️ Network error. Please try again.");
    }
  };
    return(
<>
      <ToastContainer position="top-right" autoClose={3000} />
  <div className="max-w-screen-xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 items-start pt-16 pr-4">
    
      <div className="flex flex-col items-center text-center md:text-left">
        <img
          src={tarun_mandava}
          alt="Tarun Mandava - CEO/President"
          className="w-72 h-auto object-cover shadow-md rounded-full mx-auto md:mx-0"
        />
        <h2 className="mt-6 text-2xl font-bold text-[#002E5B]">Tarun Kumar Mandava</h2>
        <p className="text-gray-600 text-sm mt-1">CEO / President</p>
      </div>

      <div className="space-y-6 text-gray-800 text-sm text-justify pb-16">
        <p className="pl-4 md:pl-0">
          Welcome to <strong className="text-[#002E5B]">Mandava Financial Services Inc</strong>, where we are
          committed to helping our clients achieve their financial goals and plan for a comfortable retirement. Our
          team of experienced financial professionals provides a range of services, including wealth building,
          financial planning, investment advice, retirement planning, business planning, and estate planning.
        </p>
        <p className="pl-4 md:pl-0">
          Our wealth-building services are designed to help you grow and protect your assets. We offer a variety of
          investment strategies, including stocks, bonds, mutual funds, and exchange-traded funds (ETFs), to help you
          create a diversified portfolio that aligns with your investment objectives and risk tolerance. Our
          investment advisors monitor your portfolio on an ongoing basis to ensure it remains aligned with your goals
          and objectives.
        </p>
        <p className="pl-4 md:pl-0">
          We also offer financial planning services to help you make informed financial decisions. Our financial
          planners work with you to create a comprehensive financial plan that takes into account your income,
          expenses, debt, and savings. We provide guidance on budgeting, debt management, and tax planning, among
          other topics, to help you achieve your financial goals.
        </p>
        <div className="border-l-4 border-[#d89e7f] bg-white p-4 text-gray-700 shadow-sm">
          <p>
            We understand that each of our clients has unique financial needs and objectives, which is why we take a
            personalized approach to every engagement. We take the time to understand your current financial
            situation, your future goals, and your risk tolerance before creating a customized plan that will help
            you achieve your objectives.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
    <div>
      <section className="mb-8">
        <h3 className="text-[#644e40] font-bold text-xl uppercase">Our Mission</h3>
        <p className="text-gray-500 text-lg mb-2">Create Wealth for Families</p>
        <blockquote className="border-l-4 border-[#d89e7f] bg-gray-100 p-4 text-gray-800">
          Empowering financial success through personalized guidance, education, and solutions.
          Trust, navigate complexity, optimize wealth for client goals.
        </blockquote>
      </section>

      <section className="mb-8">
        <h3 className="text-[#644e40] font-bold text-xl uppercase">Our Vision</h3>
        <p className="text-gray-500 text-lg mb-2">Lead Consumer Empowerment Revolution</p>
        <blockquote className="border-l-4 border-[#d89e7f] bg-gray-100 p-4 text-gray-800">
          Empowering financial prosperity—our vision for a secure future guiding your journey to
          financial success with trust and innovation for client goals.
        </blockquote>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-700 leading-relaxed">
          At Mandava Financial Services Inc, we recognize the importance of retirement
          planning. Our retirement planning services are designed to help you prepare for a
          comfortable retirement. We help you determine your retirement income needs, develop a
          plan to achieve those needs, and provide ongoing guidance and support as you work
          towards your retirement goals. <br />
          For business owners, we offer business planning services to help you manage and grow
          your business. We assist with financial analysis, strategic planning, risk management,
          and other areas that are critical to the success of your business.
        </p>
      </section>
    </div>

    <div className="bg-gray-100 p-6 rounded-md">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Book An Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Do you have any additional questions?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
                rows="3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-[#644e40] text-white py-3 rounded-md font-semibold"
            >
              Submit Your Request
            </button>
          </form>
    </div>
  </div>
</>

    );
}
export default Aboutus;