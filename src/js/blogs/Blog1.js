import blog1 from "../../images/new_blog.jpg";
import { Link } from "react-router-dom";
function Blog1()
{
    return(
        <>
        <div className="bg-gray-100">
        <div className="bg-[#f4f0ec]">
            <h1 className="text-[#002E5B] text-3xl font-black md: pl-36 py-12">Congratulations to Executive Director, Tarun Kumar Mandava on earning Silver Legacy Ownership!</h1>
        </div>
         <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={blog1}
            className="w-[800px] max-w-full h-[400px] object-cover rounded"
            alt="Blog Visual"
          />
          <div className="pt-2 pb-2">
          <h1 className="text-[#002E5B] md:text-xl font-extrabold pt-2">Congratulations to Executive Director, Tarun Kumar Mandava on earning Silver Legacy Ownership!</h1>
          <p className="text-[#002E5B] pt-6 text-sm text-semibold gap-y-8">Experior Financial Group, Inc. extends its congratulations to Tarun Kumar Mandava for achieving the status of Silver Legacy Ownership. Being a Silver Legacy Owner at Experior means that in the event of retirement, disability, or death, you and/or your beneficiary will receive a payout on your code and code overrides in the amount of 75% for a period of 10 years.<br/><br/>

In just 1 year with Experior, Tarun has helped 60 clients make informed financial decisions with the support of his team of 28 agents. In recognition of Tarun’s accomplishments, we offer our congratulations and best wishes for future success. We’re excited to see what the future holds as he continues to grow and reach new heights with Experior!</p>
  <h1 className="text-[#002E5B] md:text-xl font-extrabold pt-4 pb-4">We asked Tarun Kumar Mandava what this legacy ownership means to him, and he responded,</h1>
        
 <div className="bg-white border-l-4 border-[#d89e7f] p-6 shadow-md md:2/3 w-full">
        <p className="text-blue-900 font-semibold text-lg">“I am truly honored to be recognized as a Shareholder and Legacy Owner at Experior. It’s a privilege to be part of a company that champions leadership, ownership, and service at the highest level. This recognition means a great deal, but more importantly, it reinforces my responsibility to lead with integrity, protect more families, and uplift others on their journey.”
        </p>
      </div>
        <h1 className="text-[#002E5B] md:text-xl font-extrabold pt-4 pb-4">When asked for advice to give agents on achieving legacy ownership, Tarun responded,</h1>

         <div className="bg-white border-l-4 border-[#d89e7f] p-6 shadow-md md:2/3 w-full">
        <p className="text-blue-900 font-semibold text-lg">“Think long term. Don’t chase quick wins, build with intention. Legacy isn’t earned overnight; it’s the result of consistent effort, belief, and impact.<br/>

Plug into the system. Follow the proven path. Experior has the tools, mentorship, and structure, your job is to be coachable and stay the course.<br/>

Serve first. The more families you help, the faster your business grows. Focus on delivering value and the results will follow.<br/>

Lead with integrity. Build trust, build people, and always do what’s in the best interest of your clients and your team.<br/>

Surround yourself with winners. Your circle matters. Align with leaders who inspire you and push you to level up, just like Madhu did for me.<br/>

Earning Legacy status isn’t just a milestone, it’s a mindset. Stay hungry, stay humble, and remember why you started.”</p>
      </div>
 <p className="text-[#002E5B] pt-6 text-sm text-semibold gap-y-8">Congratulations, Tarun! Watching you grow with intention and lead with integrity is inspiring. Your willingness to serve, lead, and keep growing is a powerful example of what building with purpose really looks like. Keep leading with heart, your journey is just beginning!</p>
        </div>
        </div>
 <aside className="lg:col-span-1">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#002E5B] mb-2 pb-5">Recent Posts</h2>
          <ul className="space-y-2 text-blue-700 text-sm">
            <li><Link to='/blog1'>Tarun Kumar Mandava, Silver Legacy Owner!</Link></li>
            <li><Link to='/blog2'>The Best Ways for Agents to Get Life Insurance Leads</Link></li>
            <li><Link to="/blog3">How To Start Your Own Independent Insurance Agency</Link></li>
            <li><Link to="/blog4">Crafting an Effective Bio for Insurance Agents: Tips and Examples</Link></li>
            <li><Link to="/blog5">How to Increase Insurance Sales</Link></li>
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
export default Blog1;