import { useNavigate } from "react-router-dom";
import NavbarLand from "../../components/NavbarLand";
import { useState } from "react";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate()

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleRegisterPopUp = () => {
    setShowPopup(false);
    navigate("/auth/signup")
  };

  return (
    <>
      <NavbarLand />

      {/* Registration Pop-up Promo */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-800 p-6 rounded-lg text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Welcome to the best egerton sales platform! Your number one trading platform
            </h2>
            <button
              className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition duration-300 mr-2"
              onClick={handleRegisterPopUp}
            >
              Register Now
            </button>
            <button
              className="text-gray-400 hover:text-gray-300"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center h-screen relative">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Welcome to EgerSale
          </h1>
          <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
            Discover products from sellers all around Egerton and even become a seller yourself. A selling platform brought right to your door step. Join us now and discover what EgerSale has to offer.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-green-700 transition duration-300 ease-in-out">
            Register Now
          </button>

          {/* Exclusive Deal Countdown */}
          {/* <div className="mt-8 text-center">
                        <p className="text-lg text-gray-400 mb-2">
                            Limited Time Offer! Register within:
                        </p>
                        <div className="text-4xl font-bold text-green-500">02:15:30</div>
                        <p className="text-sm text-gray-400">Hours : Minutes : Seconds</p>
                    </div> */}
        </div>

        {/* Why Register Section */}
        <div className="py-16 bg-gray-800">
          <h2 className="text-4xl text-center mb-8 text-white font-bold">Why Register?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">Exclusive Discounts</h3>
              <p className="text-gray-300 text-center">
                Negotiate for anything depending on the amount of money you have and save up.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">Interact</h3>
              <p className="text-gray-300 text-center">
                Interact with different salers all around Egerton.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 transition duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">Exclusive Access</h3>
              <p className="text-gray-300 text-center">
                Get early access to new arrivals and products exclusively for members.
              </p>
            </div>
          </div>
        </div>


        {/* Featured Products Section */}
        <div className="py-16">
          <h2 className="text-4xl text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src="/src/assets/tech.jpg" alt="Tech" className="mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">Electronics</h3>
              <p className="text-gray-300 mb-2">Get electronic products of your choosing.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src="/src/assets/fashion.jpg" alt="Fashion" className="mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">Fashion</h3>
              <p className="text-gray-300 mb-2">Get your latest fashion with the money in your pocket</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src="/src/assets/furniture.jpg" alt="Product 1" className="mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">Furniture</h3>
              <p className="text-gray-300 mb-2">Get the furniture products of your liking and get settled today</p>
            </div>
          </div>
        </div>

        {/* What Customers Say Section */}
        <div className="py-16 bg-gray-900">
          <h2 className="text-4xl text-center mb-8 text-white font-bold">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto px-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition duration-300 transform hover:scale-105">
              <p className="text-xl text-gray-300 font-light italic text-center">
                "The best shopping experience I've ever had! The deals are incredible, and the products are top quality."
              </p>
              <p className="text-gray-400 text-right mt-4">- Sarah J.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition duration-300 transform hover:scale-105">
              <p className="text-xl text-gray-300 font-light italic text-center">
                "I registered and instantly got access to exclusive discounts. Highly recommend!"
              </p>
              <p className="text-gray-400 text-right mt-4">- John D.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition duration-300 transform hover:scale-105">
              <p className="text-xl text-gray-300 font-light italic text-center">
                "Amazing customer service and super-fast delivery. I’m now a loyal customer!"
              </p>
              <p className="text-gray-400 text-right mt-4">- Emily R.</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="py-8 bg-gray-800 text-center">
          <p className="text-gray-300">© 2024 Your eCommerce Store. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
