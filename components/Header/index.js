import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 absolute bg-gray-300 w-full text-white flex justify-between items-center px-20">
      <div id="logo">
        <h1 className="h1">Logo</h1>
      </div>
      <nav>
        <ul className="flex">
          <li className="m-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="m-4">
            <Link href="/features">
              <a>Features</a>
            </Link>
          </li>
          <li className="m-4">
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className="m-4">
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li className="m-4">
            <Link href="/clients">
              <a>Clients</a>
            </Link>
          </li>
          <li className="m-4">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="m-4 mr-0">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
