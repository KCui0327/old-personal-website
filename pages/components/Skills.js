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

export default function Skills() {
  return (
    <div className="p-10">
        <h3 className="text-3xl py-1">Technical Skills</h3>
        <h4 className="text-xl py-3 text-gray-800">Programming Languages</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <ImageColumns description="Python" image={Python}/>
            <ImageColumns description="C++" image={CPP}/>
            <ImageColumns description="C" image={C}/>
            <ImageColumns description="JavaScript" image={js}/>
            <ImageColumns description="Java" image={java}/>
            <ImageColumns description="SQL" image={sql}/>
            <ImageColumns description="HTML5" image={html}/>
            <ImageColumns description="CSS3" image={css}/>
          </div>
        <h4 className="text-xl py-3 text-gray-800">Frameworks / Libraries</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <ImageColumns description="Git" image={git}/>
            <ImageColumns description="TensorFlow" image={Tensorflow}/>
            <ImageColumns description="pandas" image={pandas}/>
            <ImageColumns description="NumPy" image={numpy}/>
            <ImageColumns description="React.js" image={Reactjs}/>
            <ImageColumns description="Node.js" image={Nodejs}/>
          </div>
    </div>
  );
}
