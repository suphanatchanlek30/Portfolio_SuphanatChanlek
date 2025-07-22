'use client';

import React from 'react';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton = ({ text, onClick, className = '' }: CTAButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-white text-black px-8 py-3 rounded-lg font-medium text-[14px] hover:bg-gray-200 transition-colors duration-200 font-inter ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;
