import React from 'react';
import TypeWriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Kenny Cui</h2>
        <div className="text-2xl py-2">
          <TypeWriter 
              options={{
                strings: ['Computer Engineering @ University of Toronto', 'Based in Toronto, Canada', 'Aspiring Software Engineer'],
                autoStart: true,
                loop: true,
              }}
          />
        </div>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-5xl mx-auto">
            Computer engineering student with deep passion 
            in computer architecture and system software.
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

