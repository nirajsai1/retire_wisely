import React from "react";
import { useState } from "react";
import {Mail,MapPin} from "lucide-react";
import close_the_sale from "../images/close_the_sale.jpg";
import Madhusudhan from "../images/Madhusudan-Budati.jpeg";
function Card({ className = "", children }) {
    return <div className={`bg-white rounded-2xl shadow-lg p-4 ${className}`}>{children}</div>;
  }
  function CardContent({ className = "", children }) {
    return <div className={`space-y-4 ${className}`}>{children}</div>;
  }
function Contactus()
{
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data (e.g., send to API)
    console.log(formData);
  };
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-20 py-20">
  {/* Image */}
  <div className="h-[400px] flex items-center justify-center">
    <img
      src={close_the_sale}
      alt="Handshake"
      className="shadow-lg h-full w-full object-cover"
    />
  </div>

  {/* Map */}
  <div className="h-[400px]">
    <iframe
      src="https://www.google.com/maps?q=116+Foreside+Rd,+Malvern,+PA+19355&output=embed"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      className="shadow-lg border w-full h-full"
    ></iframe>
  </div>

  {/* Contact Card */}
  <div className="h-[400px]">
    <Card className="h-full flex flex-col justify-between shadow-lg !rounded-none">
      <CardContent className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">Contact Person</h2>
          <div className="flex items-center gap-4 mt-4">
            <img
              src={Madhusudhan}
              alt="Madhusudana Budati"
              className="w-16 h-16 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Madhusudana Budati</h3>
              <p className="text-sm text-gray-600">Financial Consultant</p>
              <p className="text-sm text-green-600">mbudati@retirewisely.biz</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <div className="flex items-start gap-2 text-gray-700">
            <MapPin className="w-5 h-5 mt-1" />
            <span>116 Foreside Rd, Malvern PA 19355 US</span>
          </div>
          <div className="flex items-start gap-2 text-green-600">
            <Mail className="w-5 h-5 mt-1" />
            <span>letstalk@retirewisely.biz</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
<div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">First name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="row-span-2">
          <label className="block font-semibold mb-2">Your Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full h-full p-4 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">E-mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="md:col-span-2 flex items-center">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label>I agree with storage and handling of my data by this website.</label>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2"
          >
            SEND
            <span className="text-xl">➤</span>
          </button>
        </div>
      </form>
    </div>
        </>
    );
}
export default Contactus;