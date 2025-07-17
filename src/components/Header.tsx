import { Link } from 'react-router-dom';
import logo from '../assets/roycelogo.png';

const Header = () => (
  <header className="bg-white shadow-md fixed w-full z-10">
    <div className="container mx-auto flex items-center justify-between py-1 px-6">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Royce Tours & Travels" className="h-16 w-auto" />
      </Link>
      <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-orange-600">Home</Link>
        <Link to="/tours" className="hover:text-orange-600">Tour Packages</Link>
        <Link to="/about" className="hover:text-orange-600">About Us</Link>
        <Link to="/gallery" className="hover:text-orange-600">Gallery</Link>
        <Link to="/contact" className="hover:text-orange-600">Contact</Link>
      </nav>
      <Link to="/book" className="ml-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Book Now</Link>
    </div>
  </header>
);

export default Header; 