"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 shadow z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <Image
              src={"/alin-logo.png"}
              alt={"Alin Cargo"}
              width={300}
              height={200}
              className="w-full h-20 object-cover"
            />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className="hidden sm:block text-xl">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#about"
                  className="text-white hover:text-alin-gold hover:shadow-lg transition duration-300 p-2 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-white hover:text-alin-gold hover:shadow-lg transition duration-300 p-2 rounded"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-white hover:text-alin-gold hover:shadow-lg transition duration-300 p-2 rounded"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#how"
                  className="text-white hover:text-alin-gold hover:shadow-lg transition duration-300 p-2 rounded "
                >
                  How to
                </Link>
                <Link
                  href="#locate"
                  className="text-white hover:text-alin-gold hover:shadow-lg transition duration-300 p-2 rounded"
                >
                  Locate/Book
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {isOpen && (
          <nav className="mt-4 sm:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="#about"
                  className="block text-white hover:text-blue-600 hover:bg-blue-100 transition duration-300 p-2 rounded"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="block text-white hover:text-blue-600 hover:bg-blue-100 transition duration-300 p-2 rounded"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="block text-white hover:text-blue-600 hover:bg-blue-100 transition duration-300 p-2 rounded"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white hover:invert transition duration-300 p-2 rounded bg-gray-800"
                  onClick={toggleMenu}
                >
                  How to
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white hover:invert transition duration-300 p-2 rounded bg-gray-800"
                  onClick={toggleMenu}
                >
                  Book
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}