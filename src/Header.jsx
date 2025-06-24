import { Link, useLocation } from 'react-router-dom';
import spsLogo from './images/SPS LOGO _ NEW.jpg';
import { useState, useRef } from 'react';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimeout = useRef();
  const location = useLocation();

  const handleDropdownEnter = () => {
    clearTimeout(closeTimeout.current);
    setShowDropdown(true);
  };
  const handleDropdownLeave = () => {
    closeTimeout.current = setTimeout(() => setShowDropdown(false), 300);
  };

  return (
    <header className="bg-white shadow pt-4 pb-0 px-4 sm:px-6 flex justify-between items-center sticky top-0 z-50 border-b border-gray-200 min-h-[64px] relative overflow-visible w-full">
      <div className="h-full flex flex-col justify-between items-start absolute left-0 top-0 bottom-0 z-20 pl-2 sm:pl-4" style={{height: '100%', minHeight: '64px'}}>
        <Link to="/" className="block h-full w-full">
          <img src={spsLogo} alt="SPS Logo" className="h-full w-auto object-contain" style={{maxHeight: '64px', minHeight: '100%'}} />
        </Link>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 items-center relative ml-24 w-full justify-end">
        <Link to="/" className={`hover:text-yellow-500 transition-colors${location.pathname === '/' ? ' text-yellow-600 font-bold' : ''}`}>Home</Link>
        <div
          className="inline-block relative"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <button className="hover:text-yellow-500 transition-colors focus:outline-none flex items-center gap-1">
            Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {showDropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-50 text-left"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/hard-surfacing" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition-colors">Hard Surfaces</Link>
              <Link to="/soft-surfacing" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition-colors">Soft Surfaces</Link>
              <Link to="/wellpoint-dewatering" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition-colors">WellPoint Dewatering</Link>
              <Link to="/utility-repair" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition-colors">Utility Repair</Link>
            </div>
          )}
        </div>
        <Link to="/about" className={`hover:text-yellow-500 transition-colors${location.pathname === '/about' ? ' text-yellow-600 font-bold' : ''}`}>About</Link>
        <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
      </nav>
      {/* Hamburger for Mobile */}
      <button
        className="md:hidden ml-auto z-30 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      {/* Mobile Menu Drawer */}
      <nav className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-200 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-8 px-6`}
        style={{ minWidth: '220px' }}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Link to="/" className={`block py-3 px-2 text-lg font-bold border-b border-gray-100 hover:text-yellow-600${location.pathname === '/' ? ' text-yellow-600' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <button
          className="w-full text-left py-3 px-2 font-bold border-b border-gray-100 flex items-center justify-between hover:text-yellow-600"
          onClick={() => setMobileServicesOpen((open) => !open)}
        >
          Services
          <svg className={`w-5 h-5 ml-2 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mobileServicesOpen && (
          <div className="pl-4 flex flex-col">
            <Link to="/hard-surfacing" className="py-2 px-2 hover:text-yellow-700" onClick={() => setMobileMenuOpen(false)}>Hard Surfaces</Link>
            <Link to="/soft-surfacing" className="py-2 px-2 hover:text-yellow-700" onClick={() => setMobileMenuOpen(false)}>Soft Surfaces</Link>
            <Link to="/wellpoint-dewatering" className="py-2 px-2 hover:text-yellow-700" onClick={() => setMobileMenuOpen(false)}>WellPoint Dewatering</Link>
            <Link to="/utility-repair" className="py-2 px-2 hover:text-yellow-700" onClick={() => setMobileMenuOpen(false)}>Utility Repair</Link>
          </div>
        )}
        <Link to="/about" className={`block py-3 px-2 text-lg font-bold border-b border-gray-100 hover:text-yellow-600${location.pathname === '/about' ? ' text-yellow-600' : ''}`} onClick={() => setMobileMenuOpen(false)}>About</Link>
        <a href="#contact" className="block py-3 px-2 text-lg font-bold border-b border-gray-100 hover:text-yellow-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
