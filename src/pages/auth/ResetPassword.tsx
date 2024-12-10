import { useState } from "react";
import { auth } from "./firebase";
import { updatePassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadSpinner from "../../components/LoadSpinner";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handlePasswordReset = async () => {
    setLoading(true);

    if (!auth.currentUser) {
      toast.error("No user is currently logged in.");
      setLoading(false);
      return;
    }

    try {
      await updatePassword(auth.currentUser, newPassword);
      navigate("/home");
      toast.success("Password successfully reset!");
    } catch (error) {
      console.error("Error resetting password:", error, error);
      toast.error("Error resetting password. Please try again.");
      setError("Error resetting password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-900 to-gray-800">
      <Toaster position="top-center" />
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Reset Password</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="new-password">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handlePasswordReset}
            disabled={loading}
          >
            {loading ? (
              <LoadSpinner />
            ) : (
              "Reset Password"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

