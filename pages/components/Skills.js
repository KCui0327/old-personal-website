import React from 'react';
import ImageColumns from './SkillCol';
import Python from '../imgs/python.png';
import CPP from '../imgs/cpp.png';
import C from '../imgs/c.png';
import js from '../imgs/js.png';
import html from '../imgs/html.png';
import css from '../imgs/CSS.png';
import java from '../imgs/java.png';
import sql from '../imgs/sql.png';
import git from '../imgs/git.png';
import Tensorflow from '../imgs/tensorflow.png';
import Reactjs from '../imgs/react.png';
import pandas from '../imgs/pandas.png';
import numpy from '../imgs/numpy.png';
import Nodejs from '../imgs/nodejs.png';

const prefix = '';

export default function Skills() {
  return (
    <div className="p-10">
        <h3 className="text-3xl py-1">Technical Skills</h3>
        <h4 className="text-xl py-3 text-gray-800">Programming Languages</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <ImageColumns description="Python" image={prefix + Python}/>
            <ImageColumns description="C++" image={prefix + CPP}/>
            <ImageColumns description="C" image={prefix + C}/>
            <ImageColumns description="JavaScript" image={prefix + js}/>
            <ImageColumns description="Java" image={prefix + java}/>
            <ImageColumns description="SQL" image={prefix + sql}/>
            <ImageColumns description="HTML5" image={prefix + html}/>
            <ImageColumns description="CSS3" image={prefix + css}/>
          </div>
        <h4 className="text-xl py-3 text-gray-800">Frameworks / Libraries</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <ImageColumns description="Git" image={prefix + git}/>
            <ImageColumns description="TensorFlow" image={prefix + Tensorflow}/>
            <ImageColumns description="pandas" image={prefix + pandas}/>
            <ImageColumns description="NumPy" image={prefix + numpy}/>
            <ImageColumns description="React.js" image={prefix + Reactjs}/>
            <ImageColumns description="Node.js" image={prefix + Nodejs}/>
          </div>
    </div>
  );
}
