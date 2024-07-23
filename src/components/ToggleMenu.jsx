// src/components/ToggleMenu.js
import React from "react";

const ToggleMenu = ({ onToggle }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => onToggle("timeline")}
      >
        Timeline
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => onToggle("mindmap")}
      >
        Mindmap
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => onToggle("category")}
      >
        Category
      </button>
    </div>
  );
};

export default ToggleMenu;
