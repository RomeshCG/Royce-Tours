import Sidebar from '../components/admin/Sidebar';
import TourManager from '../components/admin/TourManager';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div id="tours-section">
          <TourManager />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 