import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";


export default function Footer() {
  return (
    <div className=" bg-gray-100 w-full flex justify-around p-20 content-center">
        <div className="p-2">
            <ul>
                <div className="flex gap-8 pb-5">
                    <a href="https://github.com/KCui0327"><BsGithub className="text-4xl cursor-pointer hover:text-cyan-500" /></a>
                    <a href="https://www.linkedin.com/in/kennycui0327"><BsLinkedin className="text-4xl cursor-pointer hover:text-cyan-500" /></a>
                    <a href="mailto: kenny.cui@mail.utoronto.ca"><GoMail className="text-4xl cursor-pointer hover:text-cyan-500" /></a>
                </div>
            </ul>
        </div>
    </div>
  );
}
