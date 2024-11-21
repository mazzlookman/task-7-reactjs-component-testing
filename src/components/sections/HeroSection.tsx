import React from "react";

const HeroSection: React.FC = () => {
    return (
        <div className="bg-neutral-light pb-16 px-8 pt-36" id="home">
            <div className="container flex flex-col items-center md:flex-row md:justify-around lg:flex-row-reverse">
                {/* Image */}
                <div className="flex-shrink-0 mb-6 md:mb-0">
                    <img 
                        src="src/assets/avatars/moon-knight.jpg" 
                        alt="Mohammad Lukman Aqib"
                        className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
                    />
                </div>

                {/* Descriptions */}
                <div className="text-center md:w-2/3 md:text-left leading-relaxed">
                    {/* Name & summary */}
                    <h1 className="text-3xl font-bold mb-4 text-primary">Mohammad Lukman Aqib</h1>
                    <p className="text-gray-700 mb-4">
                        Saya adalah seorang pengembang web dengan pengalaman dalam membangun aplikasi web menggunakan teknologi modern seperti React, TypeScript, dan Tailwind CSS.
                    </p>

                    {/* Skills */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 text-secondary">Skills</h2>
                        <ul className="list-disc list-inside text-neutral-dark">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;