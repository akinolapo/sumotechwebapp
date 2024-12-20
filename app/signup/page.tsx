'use client';

import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle signup here (e.g., API call)
    console.log('Signup with:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Signup Form */}
      <div className="w-full max-w-md bg-card-bg border border-custom rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-accent text-foreground border border-custom rounded-md shadow-sm focus:ring-highlight focus:border-highlight sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-accent text-foreground border border-custom rounded-md shadow-sm focus:ring-highlight focus:border-highlight sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-accent text-foreground border border-custom rounded-md shadow-sm focus:ring-highlight focus:border-highlight sm:text-sm"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-highlight text-foreground py-2 px-4 rounded-md shadow-md hover:bg-primary transition"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-foreground">
            Already have an account?{' '}
            <a href="/login" className="text-highlight hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
