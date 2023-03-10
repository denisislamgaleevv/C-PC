import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

export const Test = () => {
  const { scrollRef } = useSnapCarousel();
  return (
    <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'auto',
        scrollSnapType: 'x mandatory'
      }}
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <li
          style={{
            
            flexShrink: 0,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Item {i}
        </li>
      ))}
    </ul>
  );
};

 