import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Vista Visuals" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Professional website design agency specializing in high-conversion business websites, 
              landing pages, and ecommerce solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="https://stats.uptimerobot.com/KRG8tZph06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Server Status</a></li>
              <li><a href="https://dash.vistavisuals.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Client Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-blue-500" />
                <span>care@vistavisuals.in</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MessageCircle size={18} className="text-blue-500" />
                <span>+91 82604 09721</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-sm">Reliance Jio office back side, Banka khajuri chakk, Baleshwar, Odisha, India 756002</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/918260409721" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} fill="currentColor" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vista Visuals. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
