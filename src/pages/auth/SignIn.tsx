import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed in:", userCredential.user);
      navigate("/home");
      toast.success("Sign-in successful!");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
      toast.error("Error during sign-in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user);
      navigate("/home");
      toast.success("Google sign-in successful!");
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Error during Google sign-in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center h-screen bg-gradient-to-r from-green-900 to-gray-800">
      <Toaster position="top-center" />
      <div className="bg-gray-900 p-3 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Sign In</h2>

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

        {/* Password Section */}
        <div className="mb-4 flex items-center">
          <label
            className="block text-gray-300 text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            placeholder="Enter your password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button
            type="button"
            className="ml-2 text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center mb-2">
            <svg className="animate-spin h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
              <line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center mb-2">
          <button
            className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleSignIn}
            disabled={loading}
          >
            Sign In
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="text-center mb-4">
          <Link to="/auth/forgot-password" className="text-blue-500 hover:underline">
            Forgot your password?
          </Link>
        </div>

        {/* Google Sign-In Button */}
        <div className="text-center">
          <button
            className="w-full px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <FcGoogle className="mr-2 text-2xl" />
            Sign In with Google
          </button>
        </div>

        {/* Link to Sign Up Page */}
        <div className="text-center mt-4">
          <p className="text-gray-300">
            Don't have an account? <Link to="/auth/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

