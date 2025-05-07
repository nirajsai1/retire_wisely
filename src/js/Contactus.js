import React from "react";
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
    return(
        <>
        <div class="max-w-screen-xl mx-auto px- py-3">
        <div className="bg-green-400">
            <div className="pb-2 ">PA office</div>
        </div>
        <div className="pt-7">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="flex items-center justify-center">
        <img
          src={close_the_sale}
          alt="Handshake"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>

      {/* Map */}
      <div className="flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps?q=116+Foreside+Rd,+Malvern,+PA+19355&output=embed"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-lg border"
        ></iframe>
      </div>

      {/* Contact Card */}
      <Card>
        <CardContent>
          <h2 className="text-2xl font-bold text-blue-900">Contact Person</h2>

          <div className="flex items-center gap-4">
            <img
              src={Madhusudhan}
              alt="Madhusudana Budati"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div pb-4>
              <h3 className="text-lg font-semibold text-gray-800">Madhusudana Budati</h3>
              <p className="text-sm text-gray-600">Financial Consultant</p>
              <p className="text-sm text-green-600">mbudati@retirewisely.biz</p>
            </div>
          </div>

          <div className="flex items-start gap-2 text-gray-700 ">
            <MapPin className="w-5 h-5 mt-1" />
            <span>116 Foreside Rd, Malvern PA 19355 US</span>
          </div>

          <div className="flex items-start gap-2 text-green-600">
            <Mail className="w-5 h-5 mt-1" />
            <span>letstalk@retirewisely.biz</span>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="">
      <h1 className="">FeedBack Form</h1>
    </div>
        </div>
        </>
    );
}
export default Contactus;