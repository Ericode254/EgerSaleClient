import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"; // Make sure to import Link for routing

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear error and proceed with signup logic
    setError("");
    setLoading(true); // Set loading to true when processing
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed up:", userCredential.user);
      toast.success("Registration successful!");
      navigate("/auth/signin");
      // Optional: Save additional user data (e.g., username, phone) to your database
      // axios.post('/api/save-user-data', { username: formData.username, phone: formData.phone });
    } catch (err) {
      console.error(err);
      toast.error("Error during registration");
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user);
      toast.success("Google sign-in successful!");
      navigate("/auth/signin");
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Error during Google sign-in");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center h-screen bg-gradient-to-r from-green-900 to-gray-800">
      <Toaster position="top-center" />
      <div className="bg-gray-900 p-3 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Sign Up</h2>
        {/* TODO: show the error message when necessary */}

        {/* Username Section */}
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-semibold mb-2"
            htmlFor="username"
          >
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
          <label
            className="block text-gray-300 text-sm font-semibold mb-2"
            htmlFor="email"
          >
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
          <label
            className="block text-gray-300 text-sm font-semibold mb-2"
            htmlFor="phone"
          >
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
          <label
            className="block text-gray-300 text-sm font-semibold mb-2"
            htmlFor="password"
          >
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
          <label
            className="block text-gray-300 text-sm font-semibold mb-2"
            htmlFor="confirm-password"
          >
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
        <div className="text-center mb-2">
          <button
            className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleSignup}
            disabled={loading} // Disable the button when loading
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="none" d="M4 12a8 8 0 0116 0 8 8 0 01-16 0"></path>
              </svg>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        {/* Google Signup Button */}
        <div className="text-center">
          <button
            className="w-full px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            onClick={handleGoogleSignup}
          >
            <FcGoogle className="mr-2 text-2xl" />
            Sign Up with Google
          </button>
        </div>

        {/* Sign In Link */}
        <div className="mt-4 text-center">
          <Link
            to="/auth/signin"
            className="text-green-500 hover:underline font-semibold text-sm">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

