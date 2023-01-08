import React from 'react';
import Image from 'next/image';
import MNIST from '../imgs/mnist.png';
import Terminal from '../imgs/terminal.png';
import Forgetful from '../imgs/forgetful.png';

export default function Projects() {
  return (
    <div className="p-10 mb-12">
      <h3 className="text-3xl py-1">Personal Projects</h3>
      <p className="text-md py-2 leading-8 text-gray-800">
        Projects displayed are projects that I enjoyed making the most and where I gained 
        the most experience from. I have also included a link to the GitHub repository for
        each project. Feel free to check them out by <span className="text-teal-500">clicking</span> on of one them!
      </p>
      <p className="text-md py-2 leading-8 text-gray-800">
        For more projects, please visit my <a href="https://github.com/KCui0327">
          <span className="text-teal-500 font-bold">Github</span>
        </a>
      </p>
      <div className="lg:flex gap-10">
        <a href="https://github.com/KCui0327/CNN-MNIST-TENSORFLOW">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Image src={MNIST} width={150} height={150} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2"> MNIST Prediction Model</h3>
              <p className="py-2 max-w-sm">
                A neural network model that predicts handwritten digits from the MNIST dataset.
              </p>
            </div>
          </a>
        <a href="https://github.com/KCui0327/linux_terminal">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <Image src={Terminal} width={235} height={150} className="mx-auto"/>
            <h3 className="text-lg font-medium pt-8 pb-2">Linux Terminal Emulator</h3>
            <p className="py-2 max-w-sm">
              A linux terminal emulator that supports basic commands such as ls, cd, mkdir, etc.
            </p>
          </div>
        </a>
        <a href="https://github.com/KCui0327/forgetful-text">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <Image src={Forgetful} width={160} height={200} className="mx-auto"/>
            <h3 className="text-lg font-medium pt-8 pb-2">Forgetful App</h3>
            <p className="py-2 max-w-sm">
              Forgetful is a web app that allows users to create and manage their own to-do lists.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
