import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-md fixed w-full z-10">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <Link to="/" className="flex items-center text-xl font-bold text-blue-700">
        <span className="ml-2">Royce Tours & Travels</span>
      </Link>
      <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/tours" className="hover:text-blue-600">Tour Packages</Link>
        <Link to="/about" className="hover:text-blue-600">About Us</Link>
        <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>
      <Link to="/book" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Book Now</Link>
    </div>
  </header>
);

export default Header; 