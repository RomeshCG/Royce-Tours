import { Link } from 'react-router-dom';
import logo from '../assets/roycelogo.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/x.png';
import youtubeIcon from '../assets/youtube.png';

const Footer = () => (
  <footer className="bg-slate-800 text-white py-12 mt-16">
    <div className="max-w-6xl mx-auto px-6">
      {/* Top Section - Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Left Column - Company Information */}
        <div className="space-y-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Royce Tours & Travels" className="h-24 w-auto" />
          </div>
          
          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            Discover the magic of Sri Lanka with our expertly crafted tours. We're passionate about sharing the beauty, culture, and adventures that make our island nation truly special.
          </p>
          
          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-blue-400">📍</span>
              <span className="text-gray-300">123 Galle Road, Colombo 03, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">📞</span>
              <span className="text-gray-300">+94 77 123 4567</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">✉️</span>
              <span className="text-gray-300">info@roycetours.lk</span>
            </div>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors">Tour Packages</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
          </ul>
        </div>

        {/* Right Column - Popular Tours */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Popular Tours</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cultural Triangle</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Beach Escape</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hill Country</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wildlife Safari</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Honeymoon Package</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Tours</a></li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-600 mb-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side - Follow Us */}
        <div className="flex items-center gap-4">
          <span className="text-gray-300">Follow us:</span>
          <div className="flex gap-3">
            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-colors">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-colors">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-colors">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-colors">
              <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Royce Tours & Travels. All rights reserved.</p>
          <p className="text-gray-400 text-xs mt-1">Licensed by Sri Lanka Tourism Development Authority</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 