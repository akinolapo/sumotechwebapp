'use client';

import React, { useEffect, useState } from 'react';

interface Coin {
  id: number;
  name: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  last7Days: string; // URL or SVG for the 7-day trend chart
}

const CoinList: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockData: Coin[] = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Coin ${i + 1}`,
      price: parseFloat((Math.random() * 50000).toFixed(2)),
      change1h: parseFloat((Math.random() * 2 - 1).toFixed(2)), // Random % change between -1% to +1%
      change24h: parseFloat((Math.random() * 10 - 5).toFixed(2)), // Random % change between -5% to +5%
      change7d: parseFloat((Math.random() * 20 - 10).toFixed(2)), // Random % change between -10% to +10%
      marketCap: Math.random() * 1e12,
      volume24h: Math.random() * 1e10,
      circulatingSupply: Math.random() * 1e8,
      last7Days: 'https://via.placeholder.com/50x20', // Placeholder for 7-day chart
    }));
    setCoins(mockData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top 20 Cryptocurrencies</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-800 text-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-left">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">1h %</th>
              <th className="px-4 py-2">24h %</th>
              <th className="px-4 py-2">7d %</th>
              <th className="px-4 py-2">Market Cap</th>
              <th className="px-4 py-2">Volume (24h)</th>
              <th className="px-4 py-2">Circulating Supply</th>
              <th className="px-4 py-2">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="border-b border-gray-700">
                <td className="px-4 py-2">{coin.id}</td>
                <td className="px-4 py-2">{coin.name}</td>
                <td className="px-4 py-2">${coin.price.toFixed(2)}</td>
                <td
                  className={`px-4 py-2 ${
                    coin.change1h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {coin.change1h}%
                </td>
                <td
                  className={`px-4 py-2 ${
                    coin.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {coin.change24h}%
                </td>
                <td
                  className={`px-4 py-2 ${
                    coin.change7d >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {coin.change7d}%
                </td>
                <td className="px-4 py-2">${(coin.marketCap / 1e9).toFixed(2)}B</td>
                <td className="px-4 py-2">${(coin.volume24h / 1e6).toFixed(2)}M</td>
                <td className="px-4 py-2">{coin.circulatingSupply.toLocaleString()} coins</td>
                <td className="px-4 py-2">
                  <img src={coin.last7Days} alt="7-day trend" className="w-16 h-6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinList;
