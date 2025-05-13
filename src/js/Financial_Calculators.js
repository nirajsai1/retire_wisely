import React from "react";
import insurance_planning from "../images/Insurance_planing.jpg"
function Financial_Calculators()
{
  const categories = [
    {
      title: 'Retirement',
      items: [
        'Social security retirement income estimator',
        'How does inflation impact my retirement income needs?',
        'Convert discretionary expenses to savings',
        'Requirement Minimum Distributions (RMD)',
      ],
    },
    {
      title: 'Savings',
      items: [
        'Becoming a millionaire',
        'How long will it take to double my money?',
        'How long until my savings reach my goal?',
        'Save now vs. save later',
        'How much should I save to reach my goal?',
        'What will my current savings grow to?',
        'Calculate rate of return',
        'How do taxes and inflation impact my return?',
        'US National Debt',
      ],
    },
    {
      title: 'Insurance',
      items: [
        'What is my life expectancy?',
        'What are the chances of becoming disabled?',
        'How much will I earn in my lifetime?',
        'What are the tax advantages of an annuity?',
        'How long will my current life insurance proceeds last? Browse our partner-sponsored Glasses, with a variety of options to suit every taste and budget, available to buy online',
      ],
    },
    {
      title: 'Taxation',
      items: [
        'Federal income tax calculator',
        'How much self-employment tax will I pay?',
        'What is my tax-equivalent yield?',
        'Tax refund estimator',
        'Tax freedom day',
        'United States Tax History',
      ],
    },
    {
      title :'College',
      items : [
        'Will I be able to pay back my student loans?',
'Advantages of the Coverdell ESA.',
'Advantages of a 529 College Savings Plan',
'What is the value of a college education?',
'What are the payments on a parental (PLUS) loan?',
'Student Loan Calculator',
      ]
    },
    {
      title :'Credit',
      items : [
        'How long will it take to pay off my credit card(s)?',
'How long until my loan is paid off?',
'What would my loan payments be?',
'What is the balance owing on my loan?',
'Which is better, cash up front or payments over time?',
'What is the impact of making extra debt payments?',
'Should I pay off debts or invest the money?',
      ]
    }
  ];
    return(
        <>
  <div className="bg-gray-100 flex items-center justify-center px-4 py-10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl font-semibold text-gray-700 mb-6">
          Unlocking Financial Insights: The Power of Financial Calculators
        </h2>
        <p className="text-[#002E5B] text-sm leading-relaxed">
          Financial calculators offer individuals the opportunity to explore “what-if” scenarios,
          enabling them to make informed decisions based on their unique financial circumstances.
          They serve as valuable tools for both individuals seeking to manage their personal finances
          and professionals working in financial planning, investment management, banking, and related fields.
        </p>
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <img
          src={insurance_planning}
          alt="Team using financial calculator"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>

  <div className="max-w-screen-xl mx-auto px-4 sm:px-20 py-4 bg-white p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 pb-20">
    {categories.map((category) => (
      <div key={category.title} className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">{category.title}</h2>
        <ul className="space-y-2">
          {category.items.map((item, index) => (
            <li key={index} className="text-sm text-[#002E5B] hover:underline cursor-pointer">
              &#9675; {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</>

    )
}
export default Financial_Calculators;