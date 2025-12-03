import { FiPlus } from "react-icons/fi";

const Content = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className=" lg:text-[32px] font-medium">Content Management</h1>
        <p className="font-normal text-[#696969]">
          Manage study guides and flashcard sets
        </p>
      </div>

      <div>
        <div className="bg-[#FAF7F2] flex gap-4 px-4 py-3 rounded-[49px] inline-block">
          <button className="bg-[#FFE1A4] text-black px-4 py-3 text-base rounded-[38px]">
            Study Guides
          </button>
          <button className="bg-white text-black px-4 py-3 text-base rounded-[38px]">
            Flashcards
          </button>
        </div>
      </div>

      <div className="bg-[#E6F5FA]">
        <div>
          <div>
            <h1>Study Guides</h1>
            <p>Manage all study guide content</p>
          </div>
          <div>
            <button className="bg-[#FFBF23]"> <FiPlus /> Add Study Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
