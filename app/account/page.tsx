'use client';

import React from 'react';

const AccountPage = () => {
  // Sample total account balance
  const totalAccountBalance = 24500.75 + 14500 + 8500 + 1000 + 500 + 1000; // Example calculation

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Account Details */}
        <h1 className="text-2xl font-bold mb-4">Account Overview</h1>
        <div className="bg-gray-700 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2">Account Details</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Wallet Balance:</strong> $24,500.75</p>
        </div>

        {/* Total Account Balance */}
        <div className="bg-gray-700 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2">Total Account Balance</h2>
          <p className="text-xl font-bold text-green-400">
            ${totalAccountBalance.toLocaleString()}
          </p>
        </div>

        {/* Crypto Holdings */}
        <h2 className="text-lg font-semibold mb-4">Cryptocurrency Holdings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="font-bold">Bitcoin (BTC)</h3>
            <p>Quantity: 0.5</p>
            <p>Value: $14,500</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="font-bold">Ethereum (ETH)</h3>
            <p>Quantity: 5</p>
            <p>Value: $8,500</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="font-bold">Tether (USDT)</h3>
            <p>Quantity: 1000</p>
            <p>Value: $1,000</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="font-bold">Cardano (ADA)</h3>
            <p>Quantity: 2000</p>
            <p>Value: $500</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="font-bold">Solana (SOL)</h3>
            <p>Quantity: 50</p>
            <p>Value: $1,000</p>
          </div>
        </div>

        {/* Transaction History */}
        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
        <table className="w-full bg-gray-700 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-600 text-left">
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Coin</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Value (USD)</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Deposit</td>
              <td className="px-4 py-2">BTC</td>
              <td className="px-4 py-2">0.1</td>
              <td className="px-4 py-2">$2,900</td>
              <td className="px-4 py-2">2024-12-15</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Withdrawal</td>
              <td className="px-4 py-2">ETH</td>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">$1,700</td>
              <td className="px-4 py-2">2024-12-12</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Deposit</td>
              <td className="px-4 py-2">USDT</td>
              <td className="px-4 py-2">500</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">2024-12-10</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Withdrawal</td>
              <td className="px-4 py-2">SOL</td>
              <td className="px-4 py-2">10</td>
              <td className="px-4 py-2">$200</td>
              <td className="px-4 py-2">2024-12-05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPage;
