import { useState, useEffect } from 'react';

export type TourFormData = {
  title: string;
  description?: string;
  price: number;
  image_url: string;
  duration: string;
  location: string;
};

type TourFormModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TourFormData) => void;
  initialData?: TourFormData;
};

const TourFormModal = ({ open, onClose, onSubmit, initialData }: TourFormModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
      setPrice(initialData.price ? String(initialData.price) : '');
      setImageUrl(initialData.image_url || '');
      setDuration(initialData.duration || '');
      setLocation(initialData.location || '');
    } else {
      setTitle('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setDuration('');
      setLocation('');
    }
    setError('');
  }, [initialData, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !imageUrl || !duration || !location) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    onSubmit({
      title,
      description,
      price: parseFloat(price),
      image_url: imageUrl,
      duration,
      location,
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">{initialData ? 'Edit Tour' : 'Create Tour'}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Price (USD) *</label>
            <input
              type="number"
              min="0"
              step="0.01"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Image URL *</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Duration *</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={duration}
              onChange={e => setDuration(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Location *</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={location}
              onChange={e => setLocation(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {initialData ? 'Update Tour' : 'Create Tour'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TourFormModal; 