import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';
import logo from '../assets/roycelogo.png';

const Header = () => {
  const { user, signOut, isAdmin } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
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
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Admin Panel
                </Link>
              )}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user.first_name.charAt(0)}{user.last_name.charAt(0)}
                  </div>
                  <span className="hidden md:block">{user.first_name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {user.first_name} {user.last_name}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link 
                to="/auth" 
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/book" 
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Book Now
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 