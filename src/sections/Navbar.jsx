import { useState } from 'react';

const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Projects', href: '#projects' },
  { id: 4, name: 'Experience', href: '#experience' },
  { id: 5, name: 'Contact', href: '#contact' },
];

const NavItems = ({ onClick }) => (
  <ul className="nav-ul">
    {navLinks.map((link) => (
      <li key={link.id} className="nav-li" onClick={onClick}>
        <a href={link.href} className="hover:text-white transition-colors">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-black-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-center py-4 mx-auto">
          {/* Brand/Logo */}
          <a
            href="/"
            className="text-white-800 font-bold text-xl hover:text-white transition-colors font-mono tracking-tight"
          >
            Mbouzi.AI
          </a>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={toggleMenu}
            className="text-white-600 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Nav Items */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`nav-sidebar overflow-hidden transition-all duration-300 ease-in-out bg-black-200/95 sm:hidden absolute left-0 right-0 px-5 py-4 ${
          isOpen ? 'max-h-screen opacity-100 border-b border-black-300' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
