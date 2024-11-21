import React from 'react';
import 'boxicons';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-white py-6 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
        <div className="flex space-x-4 text-white">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            Github
          </a>
          <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            LinkedIn
          </a>  
          <a href="https://www.youtube.com/channel/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
