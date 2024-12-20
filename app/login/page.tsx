'use client';

import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetPopup, setShowResetPopup] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle login here (e.g., API call)
    console.log('Login with:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Login Form */}
      <div className="w-full max-w-md bg-card-bg border border-custom rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-accent text-foreground border border-custom rounded-md shadow-sm focus:ring-highlight focus:border-highlight sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-accent text-foreground border border-custom rounded-md shadow-sm focus:ring-highlight focus:border-highlight sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-highlight text-foreground py-2 px-4 rounded-md shadow-md hover:bg-primary transition"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <button
            type="button"
            className="text-sm text-highlight hover:underline"
            onClick={() => setShowResetPopup(true)}
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Reset Password Popup */}
      {showResetPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-card-bg w-96 p-6 rounded-lg shadow-md border border-custom">
            <h3 className="text-lg font-bold text-foreground mb-4">Reset Password</h3>
            <p className="text-sm text-foreground mb-4">
              Enter your email to reset your password.
            </p>
            <input
              type="email"
              className="block w-full px-4 py-2 bg-accent text-foreground border border-custom rounded-md shadow-sm mb-4 focus:ring-highlight focus:border-highlight sm:text-sm"
              placeholder="Enter your email"
            />
            <div className="flex items-center justify-end">
              <button
                className="bg-highlight text-foreground py-2 px-4 rounded-md shadow-md hover:bg-primary transition"
                onClick={() => setShowResetPopup(false)}
              >
                Send Reset Link
              </button>
              <button
                className="ml-4 text-foreground hover:underline"
                onClick={() => setShowResetPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
