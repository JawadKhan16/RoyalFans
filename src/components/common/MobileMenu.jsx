'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black text-white transform transition-transform duration-300 ease-in-out z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden shadow-lg px-6 py-10`}
      >
        <div className="flex flex-col space-y-6 text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/30 md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default MobileMenu;
