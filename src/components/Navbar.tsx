import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

/* ---------- NavLink ---------- */
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
};

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative whitespace-nowrap text-black
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:bg-black after:transition-all after:duration-300
        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
      `}
    >
      {children}
    </a>
  );
};

/* ---------- Navbar ---------- */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navLinks = [
    { title: "Home", href: "#home", id: "home" },
    { title: "About", href: "#about", id: "about" },
    { title: "Logo", href: "#home", id: "home" },
    { title: "Work", href: "#work", id: "work" },
    { title: "Contact", href: "#contact", id: "contact" },
  ];

  /* ---------- Scroll Spy ---------- */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // middle of viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 bg-white border-b border-black w-full z-50">
      <nav className="flex items-center justify-end md:justify-center px-6 h-[68px]">

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center text-lg gap-12 lg:gap-40 xl:gap-56">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              href={link.href}
              isActive={activeSection === link.id}
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
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
              isActive={activeSection === link.id}
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
