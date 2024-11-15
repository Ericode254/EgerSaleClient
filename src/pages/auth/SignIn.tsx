import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/auth/signin', {
        email: formData.email,
        password: formData.password,
      });

      toast.success(response.data.message || "Signed in successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error during sign-in");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-900 to-gray-800">
      <Toaster position="top-center" />
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign In</h2>

        {/* Email section */}
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

        {/* Forgot Password Link */}
        <div className="flex justify-between items-center mb-6">
          <a href="#" className="text-sm text-green-500 hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Sign In Button */}
        <div className="text-center">
          <button
            className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>

        {/* Create Account Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?
            <a href="/auth/signup" className="text-green-500 hover:underline"> Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
