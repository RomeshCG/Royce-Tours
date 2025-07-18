import { useState } from 'react';

const TourManager = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Tours</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => setShowModal(true)}
        >
          + Create Tour
        </button>
      </div>
      {/* Placeholder for tour list */}
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500">Tour list will appear here.</p>
      </div>
      {/* Modal for create/edit tour will go here */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4">Create Tour</h3>
            {/* TourFormModal will be rendered here */}
            <button
              className="mt-4 text-blue-600 hover:underline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourManager; 