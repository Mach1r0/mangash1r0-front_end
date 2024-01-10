'use client';
import React, { ReactNode } from 'react';

interface AnimeProps {
  children: ReactNode;
}

export default function AnimeView({ children }: AnimeProps) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column-reverse' as const,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '150vh', // This will make the container take up the whole height of the viewport
    backgroundColor: 'grey', // Replace with your desired color
    gap: '50px',
  };

  const listStyle = {
    display: 'flex',
    gap: '450px', // This adds 50px of space between each child horizontally and vertically
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px',
}
  const inputStyle = {
    padding: '10px',
    width: '200px',
    borderRadius: '5px' as const, // This is a workaround for a TypeScript bug
    border: '1px solid #ccc' as const, // This is a workaround for a TypeScript bug
};

  const Letterstyle = {
    color: 'black',
};

  const labelInputStyle = {
    display: 'flex',
    flexDirection: 'column' as const, // Keep this',
};

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        <div style={labelInputStyle}>
          <a style={Letterstyle}>Search</a>
          <input style={inputStyle} type="text" placeholder="" />
        </div>
        <div style={labelInputStyle}>
          <a style={Letterstyle}>Genres</a>
          <input style={inputStyle} type="text" placeholder="" />
        </div>
        <div style={labelInputStyle}>
          <a style={Letterstyle}>Year</a>
          <input style={inputStyle} type="text" placeholder="" />
        </div>
      </div>
    </div>
  );
}
