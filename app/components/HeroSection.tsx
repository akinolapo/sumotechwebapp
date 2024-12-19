import Image from "next/image";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

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
              <span className="flex gap-2">1. <Image src="/btc.png" alt="btc" width={24} height={24}/> BTC</span>
              <span>$102,385.81</span>
              <span className="text-red-400 flex items-center"><FaArrowDown/> 2.53%</span>
            </li>
            <li className="flex justify-between">
              <span className="flex gap-2">2. <Image src="/eth.png" alt="eth" width={24} height={24}/> ETH</span>
              <span>$3,699.02</span>
              <span className="text-red-400 flex items-center"><FaArrowDown/> 4.73%</span>
            </li>
            <li className="flex justify-between">
              <span className="flex gap-2">3. <Image src="/doge.png" alt="doge" width={24} height={24}/> DOGE</span>
              <span>$0.3644</span>
              <span className="text-red-400 flex items-center"><FaArrowDown/> 6.43%</span>
            </li>
            <li className="flex justify-between">
              <span className="flex gap-2">4. <Image src="/minidoge.png" alt="minidoge" width={24} height={24}/> MINIDOGE</span>
              <span>$0.001499</span>
              <span className="text-green-400 flex items-center"><FaArrowUp/> 13.88%</span>
            </li>
            <li className="flex justify-between">
              <span className="flex gap-2">5. <Image src="/xrp.png" alt="xrp" width={24} height={24}/> XRP</span>
              <span>$2.41</span>
              <span className="text-red-400 flex items-center"><FaArrowDown/> 6.15%</span>
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
              <span className="flex gap-2"><Image src="/sol.png" alt="xrp" width={24} height={24}/>UFD<span className="text-gray-400 text-sm">/SOL</span></span>
              <span>$0.1698</span>
              <span className="text-green-400 flex items-center"><FaArrowUp/> 526%</span>
            </li>
            <li className="flex justify-between">
            <span className="flex gap-2"><Image src="/sol.png" alt="xrp" width={24} height={24}/>UNO<span className="text-gray-400 text-sm">/SOL</span></span>
              <span>$0.0008991</span>
              <span className="text-green-400 flex items-center"><FaArrowUp/> 423%</span>
            </li>
            <li className="flex justify-between">
            <span className="flex gap-2"><Image src="/sol.png" alt="xrp" width={24} height={24}/>LI<span className="text-gray-400 text-sm">/SOL</span></span>
              <span>$0.01221</span>
              <span className="text-green-400 flex items-center"><FaArrowUp/> 1318%</span>
            </li>
            <li className="flex justify-between">
            <span className="flex gap-2"><Image src="/sol.png" alt="xrp" width={24} height={24}/>ANDY70B<span className="text-gray-400 text-sm">/SOL</span></span>
              <span>$0.03500</span>
              <span className="text-green-400 flex items-center"><FaArrowUp/> 402%</span>
            </li>
            <li className="flex justify-between">
            <span className="flex gap-2"><Image src="/sol.png" alt="xrp" width={24} height={24}/>DRONES<span className="text-gray-400 text-sm">/SOL</span></span>
              <span>$0.006311</span>
              <span className="text-green-400 flex items-center"><FaArrowUp/> 303%</span>
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
