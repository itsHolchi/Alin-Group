"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    return `text-white transition duration-300 p-2 rounded ${
      activeSection === section 
        ? 'font-semibold border-b-2 border-alin-gold text-alin-gold'
        : 'hover:text-alin-gold hover:border-b-2 hover:border-alin-gold'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/70">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/#"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <Image
              src={"/alin-logo.png"}
              alt={"Alin Cargo"}
              width={300}
              height={200}
              className="w-auto h-16 object-contain"
            />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-alin-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className="hidden sm:block text-xl">
            <ul className="flex space-x-8">
              <li>
                <Link href="#home" className={getLinkClass('home')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className={getLinkClass('services')}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className={getLinkClass('contact')}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#howto" className={getLinkClass('howto')}>
                  How to
                </Link>
              </li>
              <li>
                <Link href="#locate" className={getLinkClass('locate')}>
                  Locate/Book
                </Link>
              </li>
            </ul>
          </nav>
          {isOpen && (
            <div className="sm:hidden absolute top-full left-0 right-0 backdrop-blur-sm bg-black/90">
              <nav className="container mx-auto px-4 py-4">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#home"
                      className={getLinkClass('home')}
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className={getLinkClass('services')}
                      onClick={toggleMenu}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className={getLinkClass('contact')}
                      onClick={toggleMenu}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#howto"
                      className={getLinkClass('howto')}
                      onClick={toggleMenu}
                    >
                      How to
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#locate"
                      className={getLinkClass('locate')}
                      onClick={toggleMenu}
                    >
                      Locate/Book
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}