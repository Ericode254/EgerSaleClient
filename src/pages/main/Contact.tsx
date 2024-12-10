import React, { useState } from "react";
import LoadSpinner from "../../components/LoadSpinner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: handle server response for the contact form
    setTimeout(() => {
      // Handle submit
    }, 1000);
  }
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Contact Us</h2>
      <p className="text-gray-300 mb-6 text-center">
        Have questions or need assistance? Reach out to us using the form below.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? <LoadSpinner /> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

