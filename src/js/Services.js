import React, { useState } from "react";
import { Link } from "react-router-dom";
import rtp from "../images/tax_planning.png";

function Services() {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      title: "Estate Planning",
      description:
        "Estate planning is the process of transferring assets from one generation to the next generation",
    },
    {
      title: "Life Insurance",
      description:
        "We can help you plan the best last gift for your family by calculating your liability needs accurately",
    },
    {
      title: "IRA/401K Rollover",
      description:
        "It’s crucial to manage your tax-deferred account effectively. Familiarize yourself with rollover options before making any decisions",
    },
    {
      title: "Annuities",
      description:
        "An annuity is an investment option that can provide a guaranteed income for an individual or their spouse throughout their retirement.",
    },
    {
      title: "Retirement Planning",
      description:
        "Retirement planning focuses on making your money work for you once your job income ceases, regardless of age",
    },
    {
      title: "Income Planning",
      description:
        "Guaranteed lifetime income planning becomes crucial when individuals lack Pension-Like Income",
    },
    {
      title: "College Savings",
      description:
        "Elevate your child’s future with our personalized education planning. Quality education while minimizing financial stress.",
    },
    {
      title: "Mortgage Protection",
      description:
        "MPI is a type of insurance policy that helps your family to make your monthly mortgage payments",
    },
    {
      title: "Investment Planning",
      description:
        "As money grows, so do tax and market risk concerns. Learn how To manage them for healthier investments",
    },
    {
      title: "Healthcare Planning",
      description:
        "Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring in the medical expenses",
    },
    {
      title: "Medicare & Medicaid",
      description:
        "Medicare is a government national health insurance program in the United States. It primarily provides health insurance for Americans aged 65 and older.",
    },
    {
      title: "Final Expenses",
      description:
        "Final expenses are the end-of-life costs an individual incurs shortly before and shortly after they die. That could include final medical bills and funeral costs.",
    },
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <>
      <div className="bg-gray-50">
        <section className="flex flex-col md:flex-row p-10 justify-between items-center max-w-screen-xl mx-auto px-20 py-3">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl text-[#4cbb17] font-semibold leading-tight pb-8">
              Our Services
            </h1>
            <h4 className="text-3xl md:text-xl">
              We offer wide spectrum of Wealth Building Strategies
              <br />
              and Solutions in Asset Protection, Asset Accumulation
              <br />
              and Asset Distribution.
            </h4>
          </div>
          <div>
            <img src={rtp} alt="Retirement Tax Planning" />
          </div>
        </section>
      </div>

      <div className="py-12 px-4 bg-white text-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {services.map((service, idx) => (
      <div
        key={idx}
        onClick={() => handleClick(idx)}
        className={`cursor-pointer border-4 p-6 rounded shadow-sm transition-all duration-200 
            ${selected === idx ? "border-green-600" : "border-[#002E5B] hover:border-green-600"}`}          
      >
        <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
        <p className="text-sm text-gray-700">{service.description}</p>
      </div>
    ))}
  </div>
</div>
    </>
  );
}

export default Services;
