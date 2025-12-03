import { Plus, Search, BookOpen } from 'lucide-react'
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import React, { useState } from 'react'

const Questions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      author: 'John',
      question: 'What is the typical frequency range for diagnostic ultrasound?',
      subject: 'SPI',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Which artifact is caused by the presence of a strong reflector?',
      subject: 'SPI', 
      difficulty: 'Medium'
    },
    {
      id: 3,
      question: 'What does the Doppler shift depend on?',
      subject: 'Vascular',
      difficulty: 'Medium'
    }
  ]);

  const handleDelete = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit question:", id);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-[#3A9CFF] text-white';
      case 'Medium': return 'bg-[#FFB620] text-white';
      case 'Hard': return 'bg-[Medium] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen lg:p-0 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0">
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl lg:text-[32px] font-medium text-black">Question Management</h1>
          <p className="text-sm md:text-base font-normal text-[#696969]">Manage practice questions and exam content</p>
        </div>
        <div className="w-full lg:w-auto">
          <button className="bg-[#FFBF23] flex gap-3 items-center justify-center font-normal text-base px-4 py-3 rounded-sm w-full lg:w-auto">
            <Plus size={20} /> Add Question
          </button>
        </div>
      </div>

      {/* Questions Section */}
      <div className="bg-[#F5F5F5] rounded-xl p-4 lg:p-6 space-y-3">
        {/* Section Header (light strip with search) */}
        <div className="rounded-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-0">
          <div>
            <h2 className="text-xl lg:text-2xl font-medium text-black mb-1">All Questions</h2>
            <p className="text-sm lg:text-base text-gray-600">{questions.length} questions total</p>
          </div>
          <div className="w-full lg:max-w-[360px]">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Question"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-2 mt-2">
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-white rounded-xl p-3 lg:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start lg:items-center gap-3 w-full lg:w-auto">
                <div className="bg-[#E7E5E5] p-3 rounded-lg text-gray-700 shrink-0">
                  <BookOpen size={20} />
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="text-sm lg:text-base font-semibold text-black">
                    {question.author && `${question.author} `}{question.question}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#E4E4E4] text-gray-700 text-xs font-medium px-2.5 py-1 rounded">
                      {question.subject}
                    </span>
                    <span className={`text-xs font-normal px-2 py-1 rounded ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end lg:self-auto">
                <button 
                  onClick={() => handleEdit(question.id)} 
                  className="p-2 hover:bg-gray-100 bg-[#F5F5F5] rounded-full transition-colors" 
                  aria-label="Edit question"
                >
                  <FiEdit size={18} className="text-gray-600" />
                </button>
                <button 
                  onClick={() => handleDelete(question.id)} 
                  className="p-2 hover:bg-gray-100 bg-[#F5F5F5] rounded-full transition-colors" 
                  aria-label="Delete question"
                >
                  <MdOutlineDelete size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Questions