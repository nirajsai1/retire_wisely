import React from "react";
import partnership from "../images/partnership_1.jpg";
function Partnership()
{
    return(
        <>
        <div className="bg-gray-50">
        <section className="flex flex-col md:flex-row  p-10 items-center justify-between max-w-screen-xl mx-auto px-20 py-3">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h4 className="text-green-600 font-semibold uppercase text-sm mb-4">
          Aspiring for Partnership
        </h4>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-700 leading-tight">
          Leaders with Vision<br />
          Helping People with<br />
          Dreams...
        </h1>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={partnership}
          alt="Business people working"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
        </div>
        </>
    )
}
export default Partnership;