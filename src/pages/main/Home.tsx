import NavbarMain from "../../components/NavbarMain"

const Home = () => {
    return (
        <>
            <NavbarMain />
            <div className="bg-gray-900 text-white">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center h-screen relative">
                    <h1 className="text-5xl font-bold mb-4 text-center">
                        Welcome to EgerSale
                    </h1>
                    <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
                        Discover products from salers all around Egerton and even become a saler yourself. A saling platform brought right to your door step. Join us now and discover what EgerSale has to offer.
                    </p>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-green-700 transition duration-300 ease-in-out">
                        Discover Products
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
