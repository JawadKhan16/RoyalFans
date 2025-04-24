'use client';

import dynamic from 'next/dynamic';

const Shop = dynamic(() => import('./Shop'), { ssr: false });

export default function Page() {
  return <Shop/>;
}
