import React, { useState } from 'react';
import TourPackageModal from './TourPackageModal';

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

interface TourPackageCardProps {
  tourPackage: TourPackage;
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({ tourPackage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative">
          <img
            src={tourPackage.image}
            alt={tourPackage.title}
            className="w-full h-48 object-cover"
          />
          {/* Price Tag */}
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
            ${tourPackage.price}
          </div>
          {/* Rating */}
          <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center gap-1">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="font-semibold text-xs">{tourPackage.rating}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-bold text-lg text-gray-800 mb-2">{tourPackage.title}</h3>
          
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">{tourPackage.description}</p>

          {/* Duration and Group Size */}
          <div className="flex gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-gray-500">🕒</span>
              <span className="font-medium">{tourPackage.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-500">👥</span>
              <span className="font-medium">{tourPackage.groupSize}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <ul className="space-y-1">
              {tourPackage.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="text-orange-500 text-xs">📍</span>
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            View Details & Book
          </button>
        </div>
      </div>

      {/* Modal */}
      <TourPackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourPackage={tourPackage}
      />
    </>
  );
};

export default TourPackageCard; 