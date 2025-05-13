import React from "react";
import blog1 from "../images/blog_1.png";
import blog2 from "../images/blog_2.png";
import blog3 from "../images/blog_3.png";
import blog4 from "../images/blog_4.png";
import blog5 from "../images/blog_5.png";
export const Our_blog = () =>
{
    return(
<>
  <div className="max-w-screen-xl mx-auto px-4 sm:px-20 py-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
    
      <main className="lg:col-span-3">
      
        {[
          { 
            title: "Step-By-Step Guide To Becoming A Licensed Life Insurance Agent", 
            date: "November 26, 2024", 
            image: blog1, 
            link: "https://retirewisely.biz/step-by-step-guide-to-becoming-a-licensed-life-insurance-agent/"
          },
          { 
            title: "Insurance Sales Training: Techniques for Success and Industry-Specific Tips", 
            date: "November 19, 2024", 
            image: blog2, 
            link: "https://retirewisely.biz/step-by-step-guide-to-becoming-a-licensed-life-insurance-agent/"
          },
          { 
            title: "The Best Ways for Agents to Get Life Insurance Leads", 
            date: "November 19, 2024", 
            image: blog3, 
            link: "https://retirewisely.biz/step-by-step-guide-to-becoming-a-licensed-life-insurance-agent/"
          },
          { 
            title: "How To Start Your Own Independent Insurance Agency", 
            date: "November 16, 2024", 
            image: blog4, 
            link: "https://retirewisely.biz/step-by-step-guide-to-becoming-a-licensed-life-insurance-agent/"
          },
          { 
            title: "How Can I Sell My Life Insurance Policy?", 
            date: "November 16, 2024", 
            image: blog5, 
            link: "https://retirewisely.biz/step-by-step-guide-to-becoming-a-licensed-life-insurance-agent/"
          }
        ].map((post, index) => (
          <div key={index} className="mb-6">
            <h1 className="text-xl font-bold text-[#002E5B] mb-2">{post.title}</h1>
            <div className="text-sm text-gray-500 flex items-center gap-4 mb-4">
              <span>📅 {post.date}</span>
              <span>Posted by: <strong>admin</strong></span>
              <span>Category: <em>Insurance</em></span>
              <span>💬 No Comments</span>
            </div>
            <div className="border border-gray-200 p-4">
              <img src={post.image} alt="Insurance Guide" className="w-full object-cover mb-4" />
              <a href={post.link} className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full">
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </main>

      <aside className="lg:col-span-1">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#002E5B] mb-2 pb-5">Recent Posts</h2>
          <ul className="space-y-2 text-blue-700 text-sm">
            <li><a href="#">Step-by-Step Guide to Becoming a Licensed Life Insurance Agent</a></li>
            <li><a href="#">Insurance Sales Training: Techniques for Success and Industry-Specific Tips</a></li>
            <li><a href="#">The Best Ways for Agents to Get Life Insurance Leads</a></li>
            <li><a href="#">How To Start Your Own Independent Insurance Agency</a></li>
            <li><a href="#">How Can I Sell My Life Insurance Policy?</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#002E5B] mb-2">Recent Comments</h2>
          <p className="text-sm text-gray-500">No comments to show.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#002E5B] mb-2 pt-5">Archives</h2>
          <ul className="space-y-2 text-[#27679c] text-sm">
            <li>November 2024</li>
            <li>October 2024</li>
            <li>September 2024</li>
            <li>June 2023</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#002E5B] mb-2 pt-5">Categories</h2>
          <ul className="space-y-2 text-[#27679c] text-sm">
            <li>Insurance</li>
            <li>Uncategorized</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</>

    );
}