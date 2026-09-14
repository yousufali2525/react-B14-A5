import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[56px] max-w-[1100px] items-center px-4 sm:h-[72px] sm:px-5">

        
        <div className="flex w-full items-center justify-between md:hidden">

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center text-gray-500"
            aria-label="Open menu"
          >
            {menuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>

         
          <img
            src={logo}
            alt="Dev Stack"
            className="absolute left-1/2 h-auto w-[72px] -translate-x-1/2"
          />

         
          <div className="ml-auto flex items-center gap-2">
            <button className="text-[8px] font-medium text-slate-600">
              Sign In
            </button>

            <button className="rounded-full bg-pink-600 px-3 py-1 text-[8px] font-medium text-white">
              Sign Up
            </button>
          </div>

        </div>


        
        <div className="hidden w-full items-center justify-between md:flex">

        
          <img
            src={logo}
            alt="Dev Stack"
            className="w-[145px] h-auto"
          />

          
          <nav className="flex items-center gap-[27px]">
            <a
              href="#"
              className="text-[13px] font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              className="text-[13px] text-slate-500 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-[13px] text-slate-500 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-[13px] text-slate-500 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="text-[13px] text-slate-500 hover:text-pink-500"
            >
              Contact
            </a>
          </nav>

          
          <div className="flex items-center gap-5">
            <button className="text-[13px] text-slate-600">
              Sign In
            </button>

            <button className="rounded-full bg-pink-600 px-5 py-[9px] text-[13px] font-medium text-white transition hover:bg-pink-700">
              Sign Up
            </button>
          </div>

        </div>

      </div>


      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-md md:hidden">

          <nav className="flex flex-col gap-4">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600"
            >
              Technologies
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600"
            >
              Projects
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600"
            >
              About
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600"
            >
              Contact
            </a>

          </nav>

        </div>
      )}
    </header>
  );
};

export default Nav;