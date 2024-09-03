import React from 'react'
import { useParams } from 'react-router-dom';

export const GradientWrapper = ({ children, startColor = '#06682D', endColor = '#FFFFFF' }) => {
  const gradientStyle = {
    background: `linear-gradient(to bottom, ${startColor}, ${endColor})`,
    minHeight: '80vh',
  };

  const { section_id } = useParams();
  console.log(section_id);

  



  return (
    <main className="GradientWrapper" style={gradientStyle}>
      {children}
    </main>
  )
}