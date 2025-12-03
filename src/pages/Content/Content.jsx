import React, { useState } from "react";
import { Plus, BookOpen } from "lucide-react";
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import FlashCardModal from "./Components/FlashCardModal";
import CreateStudyGuideModal from "./Components/CreateStudyGuideModal";

const Content = () => {
  const [activeTab, setActiveTab] = useState("study-guides");
  const [isFlashModalOpen, setIsFlashModalOpen] = useState(false);
  const [isStudyModalOpen, setIsStudyModalOpen] = useState(false);
  const [studyGuides, setStudyGuides] = useState([
    { id: 1, author: "John Smith", subject: "SPI", chapters: 12, status: "Published" },
    { id: 2, author: "John Smith", subject: "SPI", chapters: 12, status: "Published" },
    { id: 3, author: "John Smith", subject: "SPI", chapters: 12, status: "Published" },
    { id: 4, author: "John Smith", subject: "SPI", chapters: 12, status: "Published" },
    { id: 5, author: "John Smith", subject: "SPI", chapters: 12, status: "Published" },
  ]);

  const handleDelete = (id) => {
    setStudyGuides((prev) => prev.filter((g) => g.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit", id);
  };

  return (
    <div className="min-h-screen space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="lg:text-[32px] font-medium text-black">Content Management</h1>
        <p className="text-base font-normal text-[#696969]">Manage study guides and flashcard sets</p>
      </div>

      {/* Tab Navigation */}
      <div>
        <div className="bg-[#FAF7F2] inline-flex gap-4 px-4 py-3 rounded-[49px]">
          <button
            onClick={() => setActiveTab("study-guides")}
            className={`px-4 py-2 text-base rounded-[38px] transition-all ${
              activeTab === "study-guides" ? "bg-[#FFE1A4] text-black" : "bg-white text-black"
            }`}
          >
            Study Guides
          </button>
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`px-4 py-2 text-base rounded-[38px] transition-all ${
              activeTab === "flashcards" ? "bg-[#FFE1A4] text-black" : "bg-white text-black"
            }`}
          >
            Flashcards
          </button>
        </div>
      </div>

      {/* Study Guides Section */}
      {activeTab === "study-guides" && (
        <div className="bg-[#E6F5FA] rounded-xl p-6 space-y-6">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-medium text-black mb-1">Study Guides</h2>
              <p className="text-base text-gray-600">Manage all study guide content</p>
            </div>
            <button onClick={() => setIsStudyModalOpen(true)} className="bg-[#FFBF23] text-black font-medium px-4 py-3 rounded-sm flex items-center gap-3 transition-colors">
              <Plus size={20} />
              Add Study Guide
            </button>
          </div>

          {/* Study Guide List */}
          <div className="space-y-4">
            {studyGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-xl p-4 flex items-center justify-between gap-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#F5F5F5] p-3 rounded-lg text-gray-700">
                    <BookOpen size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-black">{guide.author}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#E4E4E4] text-gray-700 text-xs font-medium px-2.5 py-1 rounded">{guide.subject}</span>
                      <span className="text-gray-600 text-sm">{guide.chapters} chapters</span>
                      <span className="bg-[#106BC6] text-white text-xs font-normal px-2 py-1 rounded">{guide.status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => handleEdit(guide.id)} className="p-2 hover:bg-gray-100 bg-[#E6F5FA] rounded-full transition-colors" aria-label="Edit">
                    <FiEdit size={18} className="text-gray-600" />
                  </button>
                  <button onClick={() => handleDelete(guide.id)} className="p-2 hover:bg-gray-100 bg-[#E6F5FA] rounded-full transition-colors" aria-label="Delete">
                    <MdOutlineDelete size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Flashcards Section */}
      {activeTab === "flashcards" && (
        <div className="bg-[#E6F5FA] rounded-xl p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-medium text-black mb-1">Flashcards</h2>
              <p className="text-base text-gray-600">Manage all flashcard sets</p>
            </div>
            <button onClick={() => setIsFlashModalOpen(true)} className="bg-[#FFBF23] text-black font-medium px-4 py-3 rounded-sm flex items-center gap-3 transition-colors">
              <Plus size={20} />
              Add Flashcard Set
            </button>
          </div>

          <div className="space-y-4">
            {studyGuides.map((set) => (
              <div key={`flash-${set.id}`} className="bg-white rounded-xl p-4 flex items-center justify-between gap-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F5F5F5] p-3 rounded-lg text-gray-700">
                    <BookOpen size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-black">{set.author}</h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#E4E4E4] text-gray-700 text-xs font-medium px-2.5 py-1 rounded">{set.subject}</span>
                      <span className="text-gray-600 text-sm">{set.chapters * 4} cards</span>
                      <span className="bg-[#106BC6] text-white text-xs font-normal px-2 py-1 rounded">{set.status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 bg-[#E6F5FA] rounded-full hover:bg-gray-50 transition-colors" aria-label="Edit">
                    <FiEdit size={18} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-[#E6F5FA] rounded-full hover:bg-gray-50 transition-colors" aria-label="Delete">
                    <MdOutlineDelete size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <FlashCardModal isOpen={isFlashModalOpen} onClose={() => setIsFlashModalOpen(false)} />
      <CreateStudyGuideModal isOpen={isStudyModalOpen} onClose={() => setIsStudyModalOpen(false)} />
    </div>
  );
};

export default Content;
