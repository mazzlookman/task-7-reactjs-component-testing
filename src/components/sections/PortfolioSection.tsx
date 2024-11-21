import React from "react"
import Card from "../composites/Card";

const PortfolioSection: React.FC = () => {
    const portfolioItems = [
        {
          title: 'Project 1',
          description: 'Deskripsi singkat tentang Project 1.',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          title: 'Project 2',
          description: 'Deskripsi singkat tentang Project 2.',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Project 3',
            description: 'Deskripsi singkat tentang Project 3.',
            imageUrl: 'https://via.placeholder.com/150',
          },          
        // Tambahkan lebih banyak item sesuai kebutuhan
      ];

    return (
        <>
          <div className="px-8 pt-24" id="projects">          
            <div className="container">
                <h1 className="text-3xl font-bold text-center mb-8 text-primary">Mini Projects</h1>
                <div className="flex flex-wrap justify-center">
                {portfolioItems.map((item, index) => (
                    <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    />
                ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default PortfolioSection;