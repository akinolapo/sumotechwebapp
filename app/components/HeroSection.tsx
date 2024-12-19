import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Today's Cryptocurrency Prices by SumoTech
        </h1>
        <p className="text-sm text-gray-400">
          The global crypto market cap is <span className="text-green-400">$3.56T</span>, a <span className="text-red-400">2.76%</span> decrease over the last day.{" "}
          <a href="#" className="text-blue-500 underline">
            Read More
          </a>
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Trending Coins */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Trending Coins</h2>
          {/* List of Coins */}
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>1. BTC</span>
              <span>$102,385.81</span>
            </li>
            {/* Add more coins as needed */}
          </ul>
        </div>

        {/* Trending on Dex */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Trending on Dex</h2>
          {/* List */}
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>UFD/SOL</span>
              <span className="text-green-400">+496%</span>
            </li>
            {/* Add more pairs */}
          </ul>
        </div>

        {/* Market Cap and CMC Data */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col space-y-4">
          <div>
            <h3 className="text-sm text-gray-400">Market Cap</h3>
            <p className="text-xl">$3.56T</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">CMC100</h3>
            <p className="text-xl">$219.79</p>
          </div>
        </div>

        {/* Fear & Greed */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Fear & Greed</h2>
          <div className="flex items-center justify-center">
            <span className="text-2xl text-green-400">69</span>
            <span className="ml-2">Greed</span>
          </div>
        </div>

        {/* Dominance */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Dominance</h2>
          <p>BTC: 57%</p>
          <p>ETH: 12.56%</p>
        </div>

        {/* Recent News */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">News</h2>
          <ul className="space-y-2">
            <li>
              <h3 className="font-semibold">Hype DYOR</h3>
              <p className="text-sm text-gray-400">The market is currently...</p>
            </li>
            <li>
              <h3 className="font-semibold">Todayq News</h3>
              <p className="text-sm text-gray-400">BTC's price dropped...</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
