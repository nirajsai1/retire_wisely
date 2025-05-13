import tax_planning from "../../images/tax_planning.png";
import { useNavigate } from "react-router-dom";
function Tax_planning()
{
    const navigate=useNavigate();
    return(
        <>
<div>

  <div className="bg-green-400 py-10 px-4 sm:px-6">
    <h1 className="text-3xl font-bold text-blue-900 text-center md:text-left md:px-48">
      Tax Planning
    </h1>
  </div>

  <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20 py-12 font-serif gap-10">
    
    <div className="flex-1 px-2 md:px-8">
      <p className="text-sm text-[#1a1a1a] mb-6">
        Tax planning is a critical financial strategy that can help individuals and businesses reduce their tax liability, optimize their financial situation, and achieve long-term financial goals. Tax planning involves analyzing financial data to determine the best way to reduce taxes and maximize income after taxes.
      </p>

      <div className="flex flex-col md:flex-row items-start mb-6 gap-6">
        <img src={tax_planning} alt="Tax Planning" className="w-full md:w-[350px] rounded shadow" />
        <p className="text-sm text-[#1a1a1a]">
          Effective tax planning requires a thorough understanding of current tax laws, regulations, and deductions. It also requires careful consideration of individual financial goals and objectives, such as retirement planning, estate planning, and business growth. By identifying opportunities to reduce taxes and optimize financial strategies, tax planning can help individuals and businesses improve their bottom line and achieve financial success.
        </p>
      </div>

      <p className="text-sm text-[#1a1a1a] mb-4">
        Some common tax planning strategies include maximizing retirement contributions, taking advantage of tax deductions and credits, investing in tax-efficient accounts, and structuring business transactions to minimize tax liability. It’s important to work with a qualified tax professional or financial advisor who can help identify the best tax planning strategies for your individual needs and circumstances.
      </p>

      <p className="text-sm text-[#1a1a1a] mb-4">
        Overall, effective tax planning can help individuals and businesses make smart financial decisions that save money, reduce risk, and improve their long-term financial outlook.
      </p>
    </div>

    <div className="w-full md:w-[320px] bg-white border-l border-gray-200">
    
      <div className="border-b">
        {[
          { label: 'Retirement planning', path: '/retirement_p' },
          { label: 'Tax planning', path: '/tax_p' },
          { label: 'College Planning', path: '/college_p' },
        ].map((item, index) => (
          <div
            key={index}
            className="px-6 py-4 font-semibold text-green-600 border-b border-white-300 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="bg-green-500 text-white px-6 py-6">
        <h3 className="text-lg font-bold mb-2">How can we help you?</h3>
        <h4 className="text-md font-bold mb-2">Committed to Service</h4>
        <p className="text-sm leading-relaxed mb-4">
          Every successful financial strategy starts with an excellent client relationship. Our mission and values include exceeding our client’s every expectation. Call us today to find out how we can suggest long- and short-term strategies that will help you realize your financial dreams.
        </p>
        <p className="text-sm italic">Let’s Plan For The Future</p>
        <p className="text-sm italic mb-4">Plan for tomorrow today!</p>

        <button
          className="w-full mt-2 bg-white text-green-600 font-semibold py-2 rounded shadow hover:bg-gray-100 transition"
          onClick={() => navigate('/contactus')}
        >
          CONTACT US
        </button>
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Tax_planning;