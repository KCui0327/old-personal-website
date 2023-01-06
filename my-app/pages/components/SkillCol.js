import React from 'react';

export default function ImageColumns({description}) {
  return (
    <div className="flex justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md ml-8 text-center">
      {description}
    </div>
  );
}
