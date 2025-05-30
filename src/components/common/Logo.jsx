'use client';

import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <img src="/logo1.png" alt="Logo" className="w-15 h-15" />
      <span className="text-xl font-bold">RoyalFanHouse</span>
    </Link>
  );
};

export default Logo;
