const portfolioItems = [
  {
    title: "Northwest Arkansas Pool & Spa",
    subtitle: "Website Development",
    createdBy: "Freelance Project",
    url: "https://nwapoolandspa.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/nwaps_cover.webp",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/nwa-pool-spa_img.webp",
  },  
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
    title: "Harvest Group",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://harvestgroup.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/hg_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/harvest_portfolio.png",
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
    title: "Inclusion Begins with I",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://inclusionbeginswithi.org/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/inclusion_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/inclusion_portfolio.png",
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
    title: "Ascend Fabrication",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://ascendfab.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/ascend-fab_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/07/ascend_fab_portfolio.png",
  },
  {
    title: "First National Bank of NWA",
    subtitle: "Website Development",
    createdBy: "Built while working full time at a local agency",
    url: "https://fnbnwa.com/",
    imageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/fnbnwa_cover.png",
    hoverImageUrl: "https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/fnbnwa_1.png",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Scrolling Heading */}
        <div className="overflow-hidden min-h-[8rem] flex items-center mb-10">
          <h2 className="inline-block md:animate-marquee text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white leading-none">
            Web Design & Development
          </h2>
        </div>


        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map(({ title, subtitle, createdBy, url, imageUrl, hoverImageUrl }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-lg overflow-hidden aspect-square shadow-md group cursor-pointer"
            >
              {/* Base Image */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)",
                  }}
                />
              </div>

              {/* Hover Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${hoverImageUrl || imageUrl})` }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end items-center p-4 pb-20 text-center transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-gray-100 dark:text-gray-100 text-xl md:text-2xl font-semibold font-heading mb-2">
                  {title}
                </h3>
                <p className="text-gray-100 dark:text-gray-100 text-sm mb-1">{subtitle}</p>
                <p className="text-gray-100 dark:text-gray-100 text-xs italic">{createdBy}</p>
              </div>

            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="/portfolio"
          className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-200"
        >
          See more projects
        </a>
      </div>
    </section>
  );
}
