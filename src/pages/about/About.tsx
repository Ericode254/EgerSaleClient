import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-900 to-gray-800 text-white p-4">
            <h2 className="text-4xl font-bold mb-6">About EgerSale</h2>
            <p className="text-lg max-w-2xl text-center mb-4">
                EgerSale is your one-stop marketplace for buying and selling products with ease. Our platform is designed to provide a seamless experience for users, allowing you to discover amazing products or list your own for sale quickly and effortlessly.
            </p>
            <p className="text-lg max-w-2xl text-center mb-6">
                Our mission is to connect sellers and buyers in a user-friendly environment, fostering a community of trust and convenience. Join us today and start exploring the endless possibilities!
            </p>
            <button className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105" onClick={() => navigate("/auth/signin")}>
                Join EgerSale Now
            </button>
        </div>
    );
};

export default About;
