import React from 'react';

interface TourPackage {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  duration: string;
  groupSize: string;
  highlights: string[];
  image: string;
}

interface TourPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourPackage: TourPackage | null;
}

const TourPackageModal: React.FC<TourPackageModalProps> = ({ isOpen, onClose, tourPackage }) => {
  if (!isOpen || !tourPackage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={tourPackage.image}
            alt={tourPackage.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          {/* Price Tag */}
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
            ${tourPackage.price}
          </div>
          {/* Rating */}
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold text-sm">{tourPackage.rating}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{tourPackage.title}</h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-4">{tourPackage.description}</p>

          {/* Duration and Group Size */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">🕒</span>
              <span className="font-medium">{tourPackage.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">👥</span>
              <span className="font-medium">{tourPackage.groupSize}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Highlights</h3>
            <ul className="space-y-2">
              {tourPackage.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-orange-500 text-sm">📍</span>
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
              View Details & Book
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageModal; 