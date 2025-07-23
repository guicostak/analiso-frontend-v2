'use client';

import React from 'react';

interface IslandProps {
  children: React.ReactNode;
  className?: string;
}

export default function Island({ children, className = '' }: IslandProps) {
  return (
    <section
      className={`bg-secondaryColor p-6 rounded-3xl shadow-md transition-all duration-300 flex ${className}`}
    >
      {children}
    </section>
  );
}
