import React, { useState } from 'react';
import { X, ChevronDown, Upload } from 'lucide-react';
import { MdOutlineDownloadForOffline } from 'react-icons/md';

const CreateStudyGuideModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('');
  const [showFileTypeMenu, setShowFileTypeMenu] = useState(false);
  const [selectedFileType, setSelectedFileType] = useState(null);

  const handleFileTypeSelect = (type) => {
    setSelectedFileType(type);
    setShowFileTypeMenu(false);
    // Trigger file input based on type
    console.log('Selected file type:', type);
  };

  const handleSubmit = () => {
    console.log({ title, subTitle, category, selectedFileType });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#F5F5F5] rounded-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-start p-6">
          <div>
            <h2 className="text-xl lg:text-2xl font-medium text-black mb-1">Create New Study Guide</h2>
            <p className="text-sm lg:text-base text-gray-600">Add a new study guide to the platform</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 bg-white lg:p-3 p-1 rounded-md lg:rounded-lg hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="text-xl" />
          </button>
        </div>

        {/* Form Content */}
        <div className="px-6 space-y-4 lg:space-y-6">
          {/* Title Field */}
          <div>
            <label className="block lg:text-base text-sm font-medium text-black mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter guide title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 lg:py-3 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Sub title Field */}
          <div>
            <label className="block lg:text-base text-sm font-medium text-black mb-2">Sub title</label>
            <input
              type="text"
              placeholder="Enter guide title"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className="w-full px-4 lg:py-3 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Field */}
          <div>
            <label className="block lg:text-base text-sm font-medium text-black mb-2">Category</label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 lg:py-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 bg-white"
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

          {/* Upload File Field */}
          <div>
            <label className="block lg:text-base text-sm font-medium text-black mb-2">Upload A file Audio or PDF</label>
            <div className="relative">
              <button
                onClick={() => setShowFileTypeMenu(!showFileTypeMenu)}
                className="w-full px-4 lg:py-3 py-2  bg-[#FEEFD0]  rounded-lg flex items-center justify-center gap-2 text-gray-700 transition-colors"
              >
                {/* <Upload size={20} /> */}
                <MdOutlineDownloadForOffline size={20} />
                <span>Upload File</span>
              </button>

              {/* File Type Dropdown Menu */}
              {showFileTypeMenu && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 min-w-[120px]">
                  <button
                    onClick={() => handleFileTypeSelect('audio')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-[#FFBF23] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFBF23]"></div>
                    </div>
                    <span className="text-gray-700">Audio</span>
                  </button>
                  <button
                    onClick={() => handleFileTypeSelect('pdf')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <span className="text-gray-700">PDF</span>
                  </button>
                </div>
              )}
            </div>
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
            Create Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStudyGuideModal;