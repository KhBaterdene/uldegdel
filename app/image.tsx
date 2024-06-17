'use client';
import NextImage from 'next/image';
import { useState } from 'react';

const Image = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);

  if (error)
    return <div className="aspect-square w-full h-auto bg-neutral-200"></div>;

  return (
    <NextImage
      src={
        src.replace('http://plugin-core-api', 'https://erxes.bto.mn/gateway') ||
        ''
      }
      alt={alt}
      height={400}
      width={400}
      className="aspect-square w-full h-auto object-cover overflow-hidden"
      onError={() => setError(true)}
    />
  );
};

export default Image;
