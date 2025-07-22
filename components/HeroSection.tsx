'use client';

import React from 'react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  const handleRequestCV = () => {
    // ดาวน์โหลด CV โดยตรง
    const link = document.createElement('a');
    link.href = '/cv_suphanatchanlek/CV_Suphanat_Chanlek.pdf';
    link.download = 'CV_Suphanat_Chanlek.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="text-center text-white max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-[18px] text-[#929CA5] mb-4 font-normal font-inter">
          Full Stack Developer
        </h2>
        
        {/* Name */}
        <h1 className="text-5xl md:text-[64px] font-semibold mb-8 font-inter text-white opacity-90">
          Suphanat Chanlek
        </h1>
        
        {/* Description */}
        <p className="text-[#929CA5] text-[16px] mb-12 leading-relaxed font-normal font-inter max-w-xl mx-auto">
          test Full stack Developer test Full stack Developer  test Full stack Developer  test Full stack Developer  test Full stack Developer  
          test Full stack Developer test Full stack Developer  test Full stack Developer
        </p>
        
        {/* CTA Button */}
        <CTAButton 
          text="Request CV" 
          onClick={handleRequestCV}
        />
      </div>
    </main>
  );
};

export default HeroSection;
