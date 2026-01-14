import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

/* ---------- NavLink Component ---------- */
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle in-page smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }

    onClick?.(); // close mobile menu if needed
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative whitespace-nowrap text-black
                 after:absolute after:left-0 after:-bottom-1
                 after:h-[2px] after:w-0 after:bg-black
                 after:transition-all after:duration-300
                 hover:after:w-full"
    >
      {children}
    </a>
  );
};

/* ---------- Navbar Component ---------- */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Logo", href: "#home" },
    { title: "Work", href: "#work" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative bg-white border-b border-black w-full z-50 sticky top-0">
      {/* NAV BAR */}
      <nav className="flex items-center justify-end md:justify-center px-6 h-[68px]">
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center text-lg gap-12 lg:gap-40 xl:gap-56">
          {navLinks.map((link) => (
            <NavLink key={link.title} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black text-2xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black
                        flex flex-col items-center py-8 space-y-6 text-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
