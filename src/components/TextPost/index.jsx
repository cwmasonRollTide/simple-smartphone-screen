import React from 'react';

export default function TextPost ({index, message}) {
  return (
    <div key={index} className="smartphone-bubble">
      {message}
    </div>
  );
}
