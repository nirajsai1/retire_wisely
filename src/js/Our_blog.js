import React from "react";
import blog1 from "../images/blog_1.png";
import blog3 from "../images/blog_3.png";
import blog2 from "../images/blog_2.png";
import blog4 from "../images/blog_4.png";
import blog5 from "../images/blog_5.png";
import {Link} from "react-router-dom";
export const Our_blog = () =>
{
    return(
<>
<div className="bg-gray-100">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-20 py-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
    
      <main className="lg:col-span-3">
      
        {[
          { 
            title: "Step-By-Step Guide To Becoming A Licensed Life Insurance Agent", 
            date: "November 26, 2024", 
            image: blog1, 
            link: "/blog1"
          },
          { 
            title: "The Best Ways for Agents to Get Life Insurance Leads", 
            date: "November 19, 2024", 
            image: blog2, 
            link: "/blog2"
          },
          { 
            title: "How To Start Your Own Independent Insurance Agency", 
            date: "November 16, 2024", 
            image: blog3, 
            link: "/blog3"
          },
          {
            title:"Crafting an Effective Bio for Insurance Agents: Tips and Examples",
            image:blog4,
            link:"/blog4"
          },
          { 
            title: "How to Increase Insurance Sales", 
            date: "November 16, 2024", 
            image: blog5, 
            link: "/blog5"
          }
        ].map((post, index) => (
          <div key={index} className="mb-6 pb-4 border-b border-b-[#644e40]">
            <h1 className="text-2xl font-bold text-[#002E5B] mb-2">{post.title}</h1>
            <div className="text-sm text-gray-500 flex items-center gap-4 mb-4">
              
            </div>
            <div className="">
              <img src={post.image} alt="Insurance Guide" className="w-full h-full  mb-4" />
              <Link to={post.link} className="inline-block bg-gray-900 hover:bg-[#644e40] text-white font-semibold px-6 py-2 rounded-full">
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </main>

      <aside className="lg:col-span-1">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#002E5B] mb-2 pb-5">Recent Posts</h2>
          <ul className="space-y-2 text-blue-700 text-sm">
            <li><Link to='/blog1'>Step-by-Step Guide to Becoming a Licensed Life Insurance Agent</Link></li>
            <li><Link to='/blog2'>The Best Ways for Agents to Get Life Insurance Leads</Link></li>
            <li><Link to="/blog3">How To Start Your Own Independent Insurance Agency</Link></li>
            <li><Link to="blog4">Crafting an Effective Bio for Insurance Agents: Tips and Examples</Link></li>
            <li><Link to="blog5">How to Increase Insurance Sales</Link></li>
          </ul>
        </div>
        <div>
        </div>
      </aside>
    </div>
  </div>
  </div>
</>

    );
}