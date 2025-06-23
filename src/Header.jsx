import { Link, useLocation } from 'react-router-dom';
import spsLogo from './images/SPS LOGO _ NEW.jpg';
import { useState, useRef } from 'react';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
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
    <header className="bg-white shadow pt-4 pb-0 px-6 flex justify-between items-center sticky top-0 z-50 border-b border-gray-200 min-h-[64px] relative overflow-visible">
      <div className="h-full flex flex-col justify-between items-start absolute left-0 top-0 bottom-0 z-20 pl-4" style={{height: '100%', minHeight: '64px'}}>
        <Link to="/" className="block h-full w-full">
          <img src={spsLogo} alt="SPS Logo" className="h-full w-auto object-contain" style={{maxHeight: '64px', minHeight: '100%'}} />
        </Link>
      </div>
      <nav className="space-x-6 flex items-center relative ml-24 w-full justify-end">
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
    </header>
  );
}

export default Header;
