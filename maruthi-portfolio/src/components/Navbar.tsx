import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// A helper component for the link style to keep the code DRY and type-safe
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
const NavLink = ({ href, children }: NavLinkProps) => (
  <a href={href} className="relative whitespace-nowrap text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
    {children}
  </a>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define links in an array for easy mapping
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Logo', href: '/' }, // The "Logo" link remains a central part of the nav
    { title: 'Work', href: '/work' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative bg-white border-b border-black w-full">
      {/* 
        - The NAV element's layout changes based on screen size.
        - Mobile (`flex justify-end`): The hamburger icon is pushed to the right.
        - Desktop (`md:justify-center`): The links are centered, restoring your original design.
      */}
      <nav className="flex items-center justify-end md:justify-center p-4 md:p-6 h-[68px]">
        
        {/* 1. DESKTOP MENU (Your original design) */}
        {/*
          - This container is HIDDEN on small screens (`hidden`).
          - It APPEARS on medium screens and up (`md:flex`), restoring your exact layout.
          - It uses responsive gaps to look good on all desktop sizes.
        */}
        <div className="hidden md:flex items-center text-black text-lg gap-12 lg:gap-40 xl:gap-56 2xl:gap-60">
          {navLinks.map((link) => (
            <NavLink key={link.title} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* 2. MOBILE HAMBURGER BUTTON */}
        {/*
          - This button is ONLY visible on small screens (`md:hidden`).
          - It is positioned on the right because of the parent's `justify-end`.
          - It toggles the mobile menu's visibility.
        */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black text-2xl z-50" // z-50 keeps it above other content
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* 3. MOBILE DROPDOWN PANEL */}
      {/*
        - This entire block only renders when `isMenuOpen` is true.
        - `md:hidden` ensures it also disappears if the screen is resized to desktop width.
        - It's positioned absolutely to overlay the page content.
      */}
      {isMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black flex flex-col items-center py-8 space-y-6 text-xl"
        >
          {navLinks.map((link) => (
            <NavLink key={link.title} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;