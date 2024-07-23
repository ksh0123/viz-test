// src/App.js
import React, { useState } from "react";
import ToggleMenu from "./components/ToggleMenu";
import TimelineComponent from "./components/Timeline";
import Mindmap from "./components/Mindmap";
import CategoryChart from "./components/CategoryChart";
import "./App.css";

const App = () => {
  const [view, setView] = useState("timeline");

  const renderView = () => {
    switch (view) {
      case "timeline":
        return <TimelineComponent key="timeline" />;
      case "mindmap":
        return <Mindmap key="mindmap" />;
      case "category":
        return <CategoryChart key="category" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToggleMenu onToggle={setView} />
      <div className="visualization-container">{renderView()}</div>
    </div>
  );
};

export default App;
