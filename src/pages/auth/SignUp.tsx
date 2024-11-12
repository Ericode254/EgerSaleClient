import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear error and proceed with signup logic
    setError('');
    try {
      const response = await axios.post('/api/auth/signup', {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      toast.success(response.data.message || "Registration successful!");
    } catch (err) {
      console.error(err);
      toast.error("Error during registration");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center h-screen bg-gradient-to-r from-green-900 to-gray-800">
      <Toaster position="top-center" />
      <div className="bg-gray-900 p-3 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Sign Up</h2>

        {/* Username Section */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            placeholder="Enter your username"
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>

        {/* Email Section */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            placeholder="Enter your email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Phone Number Section */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            placeholder="Enter your phone number"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Password Section */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            placeholder="Enter your password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        {/* Confirm Password Section */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            placeholder="Confirm your password"
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
