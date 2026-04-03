import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Vista<span className="text-blue-500">Visuals</span>
              </span>
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
              <li><a href="https://stats.uptimerobot.com/sY0fbYFbfJ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Server Status</a></li>
              <li><a href="https://books.zohosecure.in/portal/vistavisuals" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Client Portal</a></li>
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
                <span className="text-sm">14-15/1, Kamaraj Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560042</span>
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
