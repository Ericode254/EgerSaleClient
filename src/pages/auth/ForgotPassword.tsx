import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import LoadSpinner from "../../components/LoadSpinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    setLoading(true);
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // parameter must be in the authorized domains list in the Firebase console.
      url: "http://localhost:5173/auth/reset-password",
      handleCodeInApp: true,
      continueUrl: "http://localhost:5173/auth/signin",
    };
    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      toast.success("Password reset email sent!");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error("Error sending password reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-900 to-gray-800">
      <Toaster position="top-center" />
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Forgot Password</h2>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handlePasswordReset}
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <LoadSpinner />
            ) : (
              "Send Reset Email"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

