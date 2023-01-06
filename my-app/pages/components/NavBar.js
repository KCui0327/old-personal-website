import React from 'react';
import { BsFillLaptopFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <nav className="p-10 mb-12 flex justify-between">
        <h1 className="text-xl font-sans">Kenny Cui's Portfolio</h1>
        <ul className="flex items-center">
            <li>
                <BsFillLaptopFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md ml-8">Resume</a>
            </li>
        </ul>
    </nav>
  );
}
