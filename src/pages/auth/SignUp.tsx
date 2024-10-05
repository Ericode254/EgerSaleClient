import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";

const SignUp = () => {
    const [image, setImage] = useState("");

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = URL.createObjectURL(e.target.files[0]);
            setImage(img);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-900 to-gray-800">
            <div className="bg-gray-900 p-3 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-3xl font-bold text-white text-center mb-2">Sign Up</h2>

                {/* Image Upload Section */}
                <div className="mb-2 flex flex-col items-center">
                    <label className="relative">
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleImageChange}
                        />
                        <img
                            src={image || "/default-avatar.png"} // Default avatar
                            alt="Profile Avatar"
                            className="w-20 h-20 rounded-full border-4 border-gray-600 object-cover mb-2"
                        />
                        <AiFillCamera className="absolute bottom-1 right-1 text-white text-xl" />
                    </label>
                    <span className="block text-gray-300 text-sm font-semibold mt-1">Upload Profile Image</span>
                </div>

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
                    />
                </div>

                {/* Confirm Password Section */}
                <div className="mb-2">
                    <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="confirm-password">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        placeholder="Confirm your password"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
