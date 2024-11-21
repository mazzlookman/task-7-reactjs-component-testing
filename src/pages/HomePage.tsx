import React from "react";
import NavbarSection from "../components/sections/NavbarSection";
import HeroSection from "../components/sections/HeroSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";

const HomePage: React.FC = () => {
    return (
        <>
        {/* <div className="relative"> */}
            <NavbarSection />
            <HeroSection />
            <PortfolioSection />
            <ContactSection />
            <FooterSection />
        {/* </div>             */}
        </>
    )
}

export default HomePage;