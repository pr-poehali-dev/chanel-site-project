import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/collection', label: 'COLLECTION' },
    { path: '/heritage', label: 'HERITAGE' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 border-2 border-gold flex items-center justify-center transition-all duration-300 group-hover:bg-gold">
              <span className="font-cormorant text-2xl font-bold text-gold group-hover:text-black transition-colors duration-300">
                C
              </span>
            </div>
            <span className="font-cormorant text-2xl font-bold tracking-wider text-gold">
              CHANEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-montserrat text-sm tracking-widest transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transition-transform duration-300 origin-left ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <a
              href="https://www.chanel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-black px-6 py-2 text-sm font-montserrat font-semibold tracking-wider hover:bg-gold/90 transition-all duration-300"
            >
              VISIT STORE
              <Icon name="ExternalLink" size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-montserrat text-sm tracking-widest py-2 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.chanel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-black px-6 py-2 text-sm font-montserrat font-semibold tracking-wider hover:bg-gold/90 transition-all duration-300 mt-4"
            >
              VISIT STORE
              <Icon name="ExternalLink" size={14} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
