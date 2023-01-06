import React from 'react';
import ImageColumns from './SkillCol';

export default function Skills() {
  return (
    <div className="p-10">
        <h3 className="text-3xl py-1">Technical Skills</h3>
        <h4 className="text-2xl py-3 text-gray-800">Programming Languages</h4>
        <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-5 place-content-evenly">
                <ImageColumns description="Python" />
                <ImageColumns description="C/C++" />
                <ImageColumns description="JavaScript" />
                <ImageColumns description="HTML5" />
                <ImageColumns description="CSS3" />
            </div>
        </div>
        <h4 className="text-2xl py-2 text-gray-800">Frameworks</h4>
        <h4 className="text-2xl py-2 text-gray-800">Libraries</h4>
    </div>
  );
}
