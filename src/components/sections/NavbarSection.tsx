import React, { useState } from "react";

const NavbarSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-primary text-white px-8 fixed top-0 w-full">
            <div className="container flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-2xl font-bold">Mohammad</div>

                {/* Nav menu for md screens and above */}
                <nav className="hidden md:flex space-x-4" aria-label={"Desktop Navigation"}>
                    <a href="#home" className="hover:text-neutral-light">Home</a>
                    <a href="#projects" className="hover:text-neutral-light">Projects</a>
                    <a href="#contact" className="hover:text-neutral-light">Contact Me</a>
                </nav>

                {/* Toggle menu */}
                <div role={"button"} className="md:hidden" onClick={toggleMenu}>
                    <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                        <span className="bar origin-top-left transition-all duration-300 ease-in-out"></span>
                        <span className="bar transition-all duration-300 ease-in-out"></span>
                        <span className="bar origin-bottom-left transition-all duration-300 ease-in-out"></span>
                    </div>
                </div>
            </div>

            {/* Nav menu for mobile */}
            <div role={"navigation"} className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-primary`} aria-label="Mobile Navigation">
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <a href="#home" className={`hover:text-neutral-light ${!isOpen ? 'hidden' : ''}`} onClick={toggleMenu} aria-label={"Home"}>Home</a>
                    <a href="#projects" className={`hover:text-neutral-light ${!isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>Projects</a>
                    <a href="#contact" className={`hover:text-neutral-light ${!isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>Contact Me</a>                    
                </nav>
            </div>
        </header>
    );
}

export default NavbarSection;