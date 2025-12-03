import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

const FlashCardModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log({ title, category, description });
    // Handle form submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#F5F5F5] rounded-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-start p-6">
          <div>
            <h2 className="text-xl lg:text-2xl font-medium text-black mb-1">
              Create New Flashcard Set
            </h2>
            <p className="text-sm lg:text-base text-gray-600">
              Add a new flashcard set to the platform
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 bg-white lg:p-3 p-1 rounded-md lg:rounded-lg hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className='text-xl' />
          </button>
        </div>

        {/* Form Content */}
        <div className="px-6 space-y-4 lg:space-y-6">
          {/* Title Field */}
          <div>
            <label className="block lg:text-base text-sm font-medium text-black mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter set title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 lg:py-3 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Field */}
          <div>
            <label className="block lg:text-base text-sm font-medium text-black mb-2">
              Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full  px-4 lg:py-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 bg-white"
              >
                <option value="">Select category</option>
                <option value="science">Science</option>
                <option value="math">Mathematics</option>
                <option value="history">History</option>
                <option value="language">Language</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={20} className="text-gray-600" />
              </div>
            </div>
          </div>

          {/* Description Field */}
          <div>
            <label className="block lg:text-base text-sm font-medium text-black mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter set description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 lg:py-3 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-3 p-6">
          <button
            onClick={onClose}
            className="lg:px-6 px-4 lg:py-3 py-2 border border-gray-300 rounded-lg lg:text-base text-sm text-black font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="lg:px-6 px-4 lg:py-3 py-2 bg-[#FFBF23] rounded-lg text-black lg:text-base text-sm font-medium hover:bg-[#F5B520] transition-colors"
          >
            Create Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCardModal;