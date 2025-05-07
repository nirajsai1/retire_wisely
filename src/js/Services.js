import React from "react";
import { Link } from "react-router-dom";
import rtp from "../images/retirement_tax_planning.png";
function Services()
{
    return(
        <>
        <div className="bg-gray-50 ">
            <section className="flex flex-col md:flex-row  p-10 justify-between items-center max-w-screen-xl mx-auto px-20 py-3">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className=" text-3xl md:text-4xl text-[#4cbb17] font-semibold  leading-tight pb-8">Our Services</h1>
                    <h4 className="text-3xl md:text-xl ">
                    We offer wide spectrum of Wealth Building Strategies<br/>
                    and Solutions in Asset Protection, Asset Accumulation<br/>
                    and Asset Distribution.
                    </h4>
                </div>
                <div>
                    <img src={rtp}></img>
                </div>
            </section>
        </div>
        </>
    );
}
export default Services;