import { Avatar, Dropdown, Navbar } from "flowbite-react";

const NavbarMain = () => {
    return (
        <Navbar fluid rounded className="bg-gradient-to-r from-green-900 to-gray-800 text-white">
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
                <Navbar.Link href="#contact" className="text-white hover:text-green-500">
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
                    <Dropdown.Item className="hover:bg-red-600">Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
};

export default NavbarMain;
