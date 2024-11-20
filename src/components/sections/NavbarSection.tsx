import React, { useState } from "react";

const NavbarSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-primary text-white">
            <div className="container flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">Mohammad</div>

                {/* Nav menu for md screens and above */}
                <nav className="hidden md:flex space-x-4">
                    <a href="#home" className="hover:text-neutral-light">Home</a>
                    <a href="#projects" className="hover:text-neutral-light">Projects</a>
                    <a href="#contact" className="hover:text-neutral-light">Contact Me</a>
                </nav>

                {/* Toggle menu */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                        <span className="bar origin-top-left transition duration-300 ease-in-out"></span>
                        <span className="bar transition duration-300 ease-in-out"></span>
                        <span className="bar origin-bottom-left transition duration-300 ease-in-out"></span>
                    </div>
                </div>
            </div>

            {/* Nav menu for mobile */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-primary`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <a href="#home" className="hover:text-neutral-light">Home</a>
                    <a href="#projects" className="hover:text-neutral-light">Projects</a>
                    <a href="#contact" className="hover:text-neutral-light">Contact Me</a>
                </nav>
            </div>
        </header>
    );
}

export default NavbarSection;