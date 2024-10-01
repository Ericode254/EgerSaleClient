import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const NavbarLand = () => {
    return (
        <Navbar fluid rounded className="bg-gradient-to-r from-green-900 to-gray-800 text-white">
            <NavbarBrand href="/">
                <img src="/sales.png" className="mr-3 h-6 sm:h-9" alt="EgerSale Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EgerSale</span>
            </NavbarBrand>

            <div className="flex md:order-2">
                <Button className="mr-2 bg-green-700 hover:bg-green-600 text-white rounded-lg">Sign Up</Button>
                <Button className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg">Sign In</Button>
                <NavbarToggle />
            </div>

            <NavbarCollapse>
                <NavbarLink href="/" className="text-white hover:text-green-500" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#about" className="text-white hover:text-green-500">
                    About
                </NavbarLink>
                <NavbarLink href="#services" className="text-white hover:text-green-500">
                    Services
                </NavbarLink>
                {/* <NavbarLink href="#pricing" className="text-white hover:text-green-500">
                    Pricing
                </NavbarLink>
                <NavbarLink href="#contact" className="text-white hover:text-green-500">
                    Contact
                </NavbarLink> */}
            </NavbarCollapse>
        </Navbar>
    );
}

export default NavbarLand;
