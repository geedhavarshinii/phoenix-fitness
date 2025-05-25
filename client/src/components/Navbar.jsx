import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // SVGs
import Logo from "../assets/phoenix-firebird-svgrepo-com.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Home',   href: '#' },
    { label: 'About',  href: '#about' },
    { label: 'Classes',href: '#classes' },
    { label: 'Login',  href: '#' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/70 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* logo */}
        <a href="#" className="flex items-center gap-2">
          {/* <img src={Logo} className="h-8 w-auto" /> */}
          <span className="text-2xl font-extrabold text-phoenixOrange">
            Phoenix
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-phoenixPink transition"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="rounded-full bg-phoenixOrange px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-105 transition"
            >
              Join Us
            </a>
          </li>
        </ul>

        {/* hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded p-2 hover:bg-gray-200/60"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="md:hidden px-4 pb-6">
          <ul className="space-y-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-phoenixPink/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block rounded-full bg-phoenixOrange px-5 py-2 text-center text-sm font-semibold text-white shadow hover:brightness-105"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
