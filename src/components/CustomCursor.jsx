// src/CustomCursor.jsx
import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const [trailPositions, setTrailPositions] = useState(Array(8).fill({ x: 0, y: 0 }));

  // Variables to track the cursor position
  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;

  useEffect(() => {
    // Update the mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Animate the main dot and update trail positions
    const animateCursor = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;

      // Move the main cursor dot
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }

      // Update trail positions
      setTrailPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        for (let i = newPositions.length - 1; i > 0; i--) {
          newPositions[i] = newPositions[i - 1];
        }
        newPositions[0] = { x: dotX, y: dotY };
        return newPositions;
      });

      requestAnimationFrame(animateCursor);
    };

    animateCursor(); // Start the animation loop

    // Clean up event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDot} className="cursor-dot"></div>
      {trailPositions.map((position, index) => (
        <div
          key={index}
          className="trail-dot"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${1 - index * 0.1})`,
            opacity: `${1 - index * 0.1}`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
