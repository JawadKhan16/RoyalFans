import "@/app/globals.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { CartProvider } from '@/components/pages/cart/CartContext';

export const metadata = {
  title: 'RoyalFans',
  description: 'Buy fans and appliances at best prices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider> 
          <Navbar />
          
          <main>{children}</main>
        
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
