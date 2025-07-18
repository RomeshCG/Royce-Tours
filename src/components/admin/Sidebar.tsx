import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const navItems = [
  { name: 'Dashboard', key: 'dashboard' },
  { name: 'Tours', key: 'tours' },
];

const Sidebar = () => {
  const [active, setActive] = useState('tours');
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen flex flex-col">
      <div className="h-20 flex items-center justify-center border-b">
        <span className="text-2xl font-bold text-blue-600">Admin</span>
      </div>
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                className={`w-full text-left px-6 py-3 rounded-lg transition font-medium ${
                  active === item.key
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActive(item.key)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-6 border-t">
        <button
          onClick={handleLogout}
          className="w-full bg-red-100 text-red-700 py-2 rounded-lg font-semibold hover:bg-red-200 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 