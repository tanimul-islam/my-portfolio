"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute  z-10 w-full">
      <div className=" conatiner mx-auto grid grid-cols-3 items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          TANIMUL
        </Link>

        {/* Desktop Navigation */}
        <nav
          className=" group flex-1 list-none items-center justify-center gap-x-5 relative hidden rounded-full border
      border-white/10 bg-white/5 backdrop-blur-lg lg:flex "
        >
          {[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: "About", href: "/#about" },
            { label: "Blog", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-block w-10 py-4 text-sm font-light text-white/70 
      transition-[text-shadow,color] duration-300 hover:text-white/85"
            >
              {item.label}
            </Link>
          ))}

          {/* More Dropdown (If needed in the future) */}

          {/* Call-to-Action Button */}
          <Link
            href="/book-call"
            className="px-5 py-2 text-sm font-light text-white bg-white/5  rounded-full transition-all duration-300 hover:bg-white/20 hover:text-white"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-md p-4">
          {[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: "About", href: "/#about" },
            { label: "Blog", href: "/blog" },
            { label: "More", href: "#" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 text-center text-white/70 text-sm font-light transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {/* Call-to-Action Button */}
          <Link
            href="/book-call"
            className="block text-center mt-4 px-4 py-2 text-sm font-light text-white bg-white/10 rounded-full transition-all duration-300 hover:bg-white/15 hover:text-white"
          >
            Book a Call
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
