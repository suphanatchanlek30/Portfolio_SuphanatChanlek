'use client';

import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#020202] gradient-overlay">
      {children}
    </div>
  );
};

export default PageLayout;
