import React from 'react';
import Image from 'next/image';

export default function ImageColumns({description, image}) {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md ml-8 text-center flex items-center justify-center">
      <Image src={image} width={50} height={50} />
      {description}
    </div>
  );
}
