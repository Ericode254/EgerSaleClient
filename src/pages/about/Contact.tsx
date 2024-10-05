const Contact = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-900 to-gray-800">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h2>

                {/* Name Section */}
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        placeholder="Enter your name"
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

                {/* Subject Section */}
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        placeholder="Enter subject"
                    />
                </div>

                {/* Message Section */}
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-green-500"
                        placeholder="Enter your message"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
