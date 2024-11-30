import { useState } from "react";
import { Avatar, Dropdown, Navbar, Modal, Button } from "flowbite-react";
import { auth } from "../pages/auth/firebase"; // Adjust the path to your Firebase config
import { signOut } from "firebase/auth"; // Import signOut from Firebase
import Contact from "../pages/about/Contact";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NavbarMain = () => {
  // State for controlling the modal visibility
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Optionally, redirect the user to the login page or a public pag
      navigate("/auth/signin"); // Redirect to the login page
      toast.success("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <Navbar fluid rounded className="bg-gradient-to-r from-green-900 to-gray-800 text-white">
        <Toaster position="top-center" />
        <Navbar.Brand href="/">
          <img src="/sales.png" className="mr-3 h-6 sm:h-9" alt="EgerSale Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EgerSale</span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link href="/home" className="text-white hover:text-green-500" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about" className="text-white hover:text-green-500">
            Products
          </Navbar.Link>
          <Navbar.Link href="#services" className="text-white hover:text-green-500">
            Sell Product
          </Navbar.Link>
          {/* Trigger Contact Modal */}
          <Navbar.Link href="#" className="text-white hover:text-green-500" onClick={openContactModal}>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>

        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-lg text-green-500">Bonnie Green</span>
              <span className="block truncate text-sm font-medium text-gray-700">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item className="hover:bg-green-600">Dashboard</Dropdown.Item>
            <Dropdown.Item className="hover:bg-green-600">Settings</Dropdown.Item>
            <Dropdown.Item className="hover:bg-green-600">Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="hover:bg-red-600" onClick={handleLogout}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>

      {/* Contact Modal */}
      <Modal show={isContactOpen} onClose={closeContactModal} size="lg" popup>
        <Modal.Header className="bg-green-900 text-white">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
        </Modal.Header>
        <Modal.Body className="bg-gray-900 text-white">
          <Contact />
        </Modal.Body>
        <Modal.Footer className="bg-green-900">
          <Button
            className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out"
            onClick={closeContactModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavbarMain;

