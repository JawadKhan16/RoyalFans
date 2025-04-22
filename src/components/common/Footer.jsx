
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
    
        <div>
          <h2 className="text-2xl font-bold mb-2">RoyalFans</h2>
          <p className="text-sm text-gray-400">Quality fans & home appliances at your doorstep.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@RoyalFans.com
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-sm flex items-start gap-2">
            <MapPin size={16} className="mt-1" />
            123, Electric Market Road,<br />
            Pune, Maharashtra, India - 400001
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4 border-gray-700">
        &copy; 2025 RoyaFans. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
