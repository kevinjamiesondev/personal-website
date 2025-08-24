import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Connect from "../components/Connect";

const portfolioItems = [
  {
    title: "Arkansas Wildlife Federation",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://arwild.org/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/ar-wild_cover-scaled.jpg",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/mediamodifier_image.jpeg",
  },
  {
    title: "Countertop World",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://countertopworldar.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/counter_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/cw_1.jpeg",
  },
  {
    title: "Hill City Popcorn",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://hillcitypopcorn.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/hill-city_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/mediamodifier_image-2.jpeg",
  },
    {
    title: "Freeman-Burchfield Institute",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://fbcbt.org/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/fbcbt_cover-scaled.jpg",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/freeman_portfolio.png",
  },
  {
    title: "C-Suites Sauna & Plunge",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://c-suitesaunas.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/c-suites_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/c-suites_1.jpeg",
  },
  {
    title: "A-CO Construction",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://a-coservices.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/construction_02.jpg",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/mediamodifier_image-1.jpeg",
  },
  {
    title: "Walnut Farm Montessori School",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://walnutfarmmontessori.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/wfms_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/wfms_portfolio.png",
  },
  {
    title: "Harvest Group",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://harvestgroup.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/hg_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/harvest_portfolio.png",
  },
  {
    title: "NWA DNA Testing",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://nwadna.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/nwadna_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/nwadna_portfolio.png",
  },
  {
    title: "Greater Bentonville Area Chamber of Commerce",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "#",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/08/downtown_bville-scaled.jpg",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/greater_bentonville.jpeg",
  },
  {
    title: "Ramo D'Olivo Wine Bar & Shop",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://ramodolivo.biz/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/ramo_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/ramo_dolivo_1.png",
  },
  {
    title: "Inclusion Begins with I",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://inclusionbeginswithi.org/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/inclusion_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/inclusion_portfolio.png",
  },
  {
    title: "Hauk Custom Pools",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://www.haukcustompools.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/hauk_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/hauk_custom_porfolio.png",
  },
  {
    title: "First National Bank of NWA",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://fnbnwa.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/fnbnwa_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/fnbnwa_1.png",
  },
  {
    title: "Mutty Paws of NWA",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://muttypawsofnwa.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/mutty-paws_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/muttypaws_1.png",
  },
  {
    title: "RLI Services",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://rliservices.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/rli_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/rli_portfolio.png",
  },
  {
    title: "Don Peters Construction",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://www.donpetersconstruction.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dpc_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/dp_construction.png",
  },
  {
    title: "The TX Maids",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://thetxmaids.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/tx-maids_cover-scaled.jpg",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/txmaids_portfolio.png",
  },
  {
    title: "Mostyn Prettyman, PLLC",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://arklawyers.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/mostyn-prettyman_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/mostyn_portfolio.png",
  },
  {
    title: "Meek Mirrors",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/meek_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/meek_portfolio.png",
  },
  {
    title: "Jeffries Eye Associates",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://jeffrieseye.org/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/jeffries_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/jeffries_eye_portfolio.png",
  },
  {
    title: "Ascend Fabrication",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://ascendfab.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/ascend-fab_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/ascend_fab_portfolio.png",
  },
  {
    title: "JC Construction",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://jccnwa.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/jcc_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/jc_portfolio.png",
  },
  {
    title: "Optimal Home Inspection",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://optimalhi.net/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/ohi_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/optimal_home_inspection_1.png",
  },
  {
    title: "Timberbuilt Rooms",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://timberbuiltrooms.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/timberbuilt-rooms_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/timberbuilt_portfolio.png",
  },
  {
    title: "Cape Law Firm",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://capefirm.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/cape-firm_cover-scaled.jpg",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/cape_firm_portfolio.png",
  },
  {
    title: "Camp Underbite",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://campunderbite.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/camp-underbite_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/camp_underbite_portfolio.png",
  },
  {
    title: "Horizon Marketing Solutions",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://horizonmarketingsolution.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/hms_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/horizon_portfolio.png",
  },
  {
    title: "NWA Farmlink",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://nwafarmlink.org/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/nwafarmlink_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/nwalt_farms_mock.png",
  },
  {
    title: "D. Stefano Building & Restoration",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://dstefano.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dstefano_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/dstefano_1.png",
  },
];

const dealerOnWork = [
  {
    title: "Homepage Redesign Example",
    subtitle: "DealerOn",
    description: "Custom homepage redesign for automotive dealerships, focusing on clean design, accessibility, and page speed.",
    url: "/projects/dealeron-homepage",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dealeron_homepage.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dealeron_homepage_hover.png",
  },
  {
    title: "Content Migration Case Study",
    subtitle: "DealerOn",
    description: "Migrated large content sections for dealerships post-Sincro acquisition, improving performance and accessibility.",
    url: "/projects/dealeron-migration",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dealeron_migration.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dealeron_migration_hover.png",
  },
  {
    title: "Bonus Design Concepts",
    subtitle: "DealerOn",
    description: "Additional designs created during redesign projects that weren’t implemented but showcase style and UX.",
    url: "#",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dealeron_bonus.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/dealeron_bonus_hover.png",
  },
];

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Web Design Portfolio | Kevin Jamieson</title>
        <meta
          name="description"
          content="Browse professional web design and development projects by Kevin Jamieson. Custom WordPress websites and modern React projects built for businesses in Northwest Arkansas and beyond."
        />
        <meta
          name="keywords"
          content="web design portfolio, WordPress websites, React websites, web development, Northwest Arkansas"
        />
        <link rel="canonical" href="https://kevinjamiesondev.com/portfolio" />
      </Helmet>

      <Header />

      <section id="portfolio" className="py-12 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-hidden min-h-[6rem] flex flex-col items-center mb-10 mt-20 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
              Featured Work
            </h1>   
            <p className="text-xl mt-4 text-white font-body">
              From local businesses to growing brands, these are a few of the sites I’ve had the chance to bring to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolioItems.map(({ title, subtitle, createdBy, url, imageUrl, hoverImageUrl }, index) => (
              <a
                key={index}
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-lg overflow-hidden aspect-square shadow-md group cursor-pointer"
              >
                {/* Default background */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.99) 100%)" }}
                  />
                </div>

                {/* Hover background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hoverImageUrl || imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                </div>

                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col justify-end items-center p-4 pb-20 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-white text-sm mb-1">{subtitle}</p>
                  <p className="text-white text-xs italic">{createdBy}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section id="dealeron" className="py-12 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-hidden min-h-[6rem] flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center">
              Professional Highlights: DealerOn
            </h2>
            <p className="text-lg mt-4 text-gray-700 font-body max-w-2xl text-center">
              Selected work from my professional web development roles, including content migrations, homepage redesigns, and additional bonus design concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dealerOnWork.map(({ title, subtitle, description, url, imageUrl, hoverImageUrl }, index) => (
              <a
                key={index}
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-lg overflow-hidden aspect-square shadow-md group cursor-pointer"
              >
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.99) 100%)" }}
                  />
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hoverImageUrl || imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end items-center p-4 pb-20 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700 text-sm mb-1">{subtitle}</p>
                  <p className="text-gray-600 text-xs italic">{description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      */}

      <section className="bg-gray-100 text-gray-900">
        <Contact />
      </section>

      <section className="bg-[#1a1a1a] text-white">
        <Connect />
      </section>
    </>
  );
}
