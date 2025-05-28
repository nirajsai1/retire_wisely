import React from "react";
import insurance_planning from "../images/Insurance_planing.jpg"
function Financial_Calculators()
{
 const categories = [
  {
    title: 'Retirement',
    items: [
      { text: 'Social security retirement income estimator', link: 'https://www.calcxml.com/do/social-security-retirement-income-estimator?teaser&c=4a4a4a' },
      { text: 'How does inflation impact my retirement income needs?', link: 'https://www.calcxml.com/do/ret05?teaser&c=4a4a4a' },
      { text: 'Convert discretionary expenses to savings', link: 'https://www.calcxml.com/do/ret08?teaser&c=4a4a4a' },
      { text: 'Requirement Minimum Distributions (RMD)', link: 'https://www.investor.gov/financial-tools-calculators/calculators/required-minimum-distribution-calculator' },
    ],
  },
  {
    title: 'Savings',
    items: [
      { text: 'Becoming a millionaire', link: 'https://www.calcxml.com/do/be-a-millionaire?teaser&c=4a4a4a' },
      { text: 'How long will it take to double my money?', link: 'https://www.calcxml.com/do/double-savings?teaser&c=4a4a4a' },
      { text: 'How long until my savings reach my goal?', link: 'https://www.calcxml.com/do/savings-goal-calculator?teaser&c=4a4a4a' },
      { text: 'Save now vs. save later', link: 'https://www.calcxml.com/do/savings-calculator-now?teaser&c=4a4a4a' },
      { text: 'How much should I save to reach my goal?', link: 'https://www.calcxml.com/do/savings-goal-calculator-how-much?teaser&c=4a4a4a' },
      { text: 'What will my current savings grow to?', link: 'https://www.calcxml.com/do/savings-calculator-growth?teaser&c=4a4a4a' },
      { text: 'Calculate rate of return', link: 'https://www.calcxml.com/do/rate-of-return-calculator?teaser&c=4a4a4a' },
      { text: 'How do taxes and inflation impact my return?', link: 'https://www.calcxml.com/do/investment-return?teaser&c=4a4a4a' },
      { text: 'US National Debt', link: 'https://www.usdebtclock.org/' },
    ],
  },
  {
    title: 'Insurance',
    items: [
      { text: 'What is my life expectancy?', link: 'https://www.calcxml.com/do/ins02?teaser&c=4a4a4a' },
      { text: 'What are the chances of becoming disabled?', link: 'https://www.calcxml.com/do/ins05?teaser&c=4a4a4a' },
      { text: 'How much will I earn in my lifetime?', link: 'https://www.calcxml.com/do/ins07?teaser&c=4a4a4a' },
      { text: 'What are the tax advantages of an annuity?', link: 'https://www.calcxml.com/do/what-are-the-tax-advantages-of-an-annuity?teaser&c=4a4a4a' },
      { text: 'How long will my current life insurance proceeds last?', link: 'https://www.calcxml.com/do/ins09?teaser&c=4a4a4a' },
    ],
  },
  {
    title: 'Taxation',
    items: [
      { text: 'Federal income tax calculator', link: 'https://www.calcxml.com/do/federal-income-tax-calculator?teaser&c=4a4a4a' },
      { text: 'How much self-employment tax will I pay?', link: 'https://www.calcxml.com/do/self-employment-tax-calculator?teaser&c=4a4a4a' },
      { text: 'What is my tax-equivalent yield?', link: 'https://www.calcxml.com/do/inc11?teaser&c=4a4a4a' },
      { text: 'Tax refund estimator', link: 'https://www.calcxml.com/do/tax-refund-estimator?teaser&c=4a4a4a' },
      { text: 'Tax freedom day', link: 'https://www.calcxml.com/do/tax-freedom-day?teaser&c=4a4a4a' },
      { text: 'United States Tax History', link: 'https://www.efile.com/tax-history-and-the-tax-code/' },
    ],
  },
  {
    title: 'College',
    items: [
      { text: 'Will I be able to pay back my student loans?', link: 'https://www.calcxml.com/do/student-loan-repayment?teaser&c=4a4a4a' },
      { text: 'Advantages of the Coverdell ESA.', link: 'https://www.calcxml.com/do/coverdell-esa?teaser&c=4a4a4a' },
      { text: 'Advantages of a 529 College Savings Plan', link: 'https://www.calcxml.com/do/529-college-savings-plan?teaser&c=4a4a4a' },
      { text: 'What is the value of a college education?', link: 'https://www.calcxml.com/do/value-of-college-education?teaser&c=4a4a4a' },
      { text: 'What are the payments on a parental (PLUS) loan?', link: 'https://www.calcxml.com/do/parent-plus-loan?teaser&c=4a4a4a' },
      { text: 'Student Loan Calculator', link: 'https://www.bankrate.com/loans/student-loans/student-loan-calculator/' },
    ],
  },
  {
    title: 'Credit',
    items: [
      { text: 'How long will it take to pay off my credit card(s)?', link: 'https://www.calcxml.com/do/how-long-will-it-take-to-pay-off-my-credit-card?teaser&c=4a4a4a' },
      { text: 'How long until my loan is paid off?', link: 'https://www.calcxml.com/do/pay-off-loan?teaser&c=4a4a4a' },
      { text: 'What would my loan payments be?', link: 'https://www.calcxml.com/do/loan-payment-calculator?teaser&c=4a4a4a' },
      { text: 'What is the balance owing on my loan?', link: 'https://www.calcxml.com/do/loan-balance?teaser&c=4a4a4a' },
      { text: 'Which is better, cash up front or payments over time?', link: 'https://www.calcxml.com/do/lump-sum-or-payments?teaser&c=4a4a4a' },
      { text: 'What is the impact of making extra debt payments?', link: 'https://www.calcxml.com/do/extra-payment-calculator?teaser&c=4a4a4a' },
      { text: 'Should I pay off debts or invest the money?', link: 'https://www.calcxml.com/do/pay-off-debt-or-invest?teaser&c=4a4a4a' },
    ],
  },
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
  &#9675;{" "}
  <span
    onClick={() => window.open(item.link, '_blank')}
    className="hover:underline cursor-pointer"
  >
    {item.text}
  </span>
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