import React from "react"
import ProjectsCard from "../composites/ProjectsCard";

const PortfolioSection: React.FC = () => {
    const portfolioItems = [
        {
          title: 'Website Portfolio',
          description: 'Deskripsi singkat tentang project Website Portfolio.',
          imageUrl: "src/assets/images/portfolio.png",
          linkTo: '/'
        },
        {
          title: 'TodoList App with Redux',
          description: 'Deskripsi singkat tentang project TodoList App with Redux.',
          imageUrl: 'src/assets/images/todolist.png',
          linkTo: '/todolist'
        },
        {
            title: 'Products from Fake Store API',
            description: 'Deskripsi singkat tentang project Products from Fake Store API.',
            imageUrl: 'src/assets/images/products-list.png',
            linkTo: '/products'
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
                    <ProjectsCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    linkTo={item.linkTo}
                    />
                ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default PortfolioSection;