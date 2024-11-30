import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (e: React.FormEvent) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={className}
  >
    {label}
  </button>
);

export default Button;
