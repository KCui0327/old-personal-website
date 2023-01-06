import React from 'react';
import Typical from 'react-typical';

export default function HeroSection() {
  return (
    <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Kenny Cui</h2>
        <Typical 
            className="text-2xl py-2" 
            steps={['Computer Engineering @ University of Toronto', 5500, 'Aspiring Software Engineer', 5500]}
            loop={Infinity}
            wrapper="p"
        />
        <p className="text-md py-5 leading-8 text-gray-800">
            Computer engineering student with deep passion 
            in machine learning and software development.
            A proactive problem-solver with strong 
            adaptability in ambiguous environments 
            developed through various competitions and
            volunteer positions. Tackles every challenge 
            with a curious mind, persistence and a positive 
            attitude.
        </p>
    </div>
  );
}

