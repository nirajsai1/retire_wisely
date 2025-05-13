import rservices from "../../images/retierwisely-services.jpg";
const Useful_Links = () =>
{
    const data = [
        {
          title: 'Taxes & Government Agencies',
          links: [
            { name: 'United States Tax History', url: 'https://www.efile.com/tax-history-and-the-tax-code/' },
            { name: 'Internal Revenue Services', url: 'https://www.irs.gov/' },
            { name: 'Social Security Administration', url: 'https://www.ssa.gov/' },
          ],
        },
        {
          title: 'Market Information',
          links: [
            { name: 'NASDAQ', url: 'https://www.nasdaq.com/' },
            { name: 'New York Stock Exchange', url: 'https://www.nyse.com/index' },
            { name: 'Annualized Returns of S&P 500', url: 'http://www.moneychimp.com/features/market_cagr.htm' },
          ],
        },
        {
          title: 'News',
          links: [
            { name: 'The Wall Street Journal', url: 'https://www.wsj.com/' },
            { name: 'New York Times', url: 'https://www.nytimes.com/' },
            { name: 'CNN Business', url: 'https://www.cnn.com/business' },
          ],
        },
      ];
    return(
        <>
        <section className="bg-gray-300 py-12 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
  
    <div className="flex-1 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-gray-700 mb-6 leading-snug">
        Unlocking Financial Insights: Useful Links
      </h2>
      <p className="text-blue-900 text-lg leading-relaxed">
        Evaluate the potential returns and risks of different investment opportunities, 
        estimate future investment growth, and assess the impact of fees and taxes.
      </p>
    </div>

    <div className="flex-1">
      <div className="shadow-lg border border-gray-200 rounded-md overflow-hidden">
        <img 
          src={rservices} 
          alt="Illustration representing financial insights and analysis" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>

<div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
  {data.map((section, index) => (
    <div key={index}>
      <h3 className="text-xl font-semibold text-blue-900 mb-4">{section.title}</h3>
      <ul className="space-y-3">
        {section.links.map((link, i) => (
          <li key={i} className="flex items-center space-x-2">
            <span className="w-3 h-3 border-2 border-blue-900 rounded-full inline-block" />
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

        </>
    );
}
export default Useful_Links;