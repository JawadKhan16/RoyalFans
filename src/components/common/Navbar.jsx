'use client';

import Logo from './Logo';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <header className="bg-black text-white w-full fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-[#d2a679] transition-colors">Home</a>
          <a href="/shop" className="hover:text-[#d2a679] transition-colors">Shop</a>
          <a href="/contact" className="hover:text-[#d2a679] transition-colors">Contact</a>
          

          {/* Search */}
          <SearchBar />
        </nav>

        
        {/* Mobile Manu and Search Icon */}
        <div className="md:hidden flex items-center gap-3">
        
        <SearchBar />
        <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
