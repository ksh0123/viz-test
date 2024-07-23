// src/components/Mindmap.js
import React, { useEffect, useRef } from "react";
import go from "gojs";

const Mindmap = () => {
  const mindmapRef = useRef(null);

  useEffect(() => {
    const $ = go.GraphObject.make;
    const diagram = $(go.Diagram, mindmapRef.current, {
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
    });

    diagram.nodeTemplate = $(
      go.Node,
      "Horizontal",
      $(
        go.TextBlock,
        { margin: 12, stroke: "black", font: "bold 16px sans-serif" },
        new go.Binding("text", "key")
      )
    );

    diagram.model = new go.TreeModel([
      { key: "Projects" },
      { key: "Project 1", parent: "Projects" },
      { key: "Project 2", parent: "Projects" },
      // Add more nodes here
    ]);

    // Cleanup function to avoid creating multiple diagrams on the same div
    return () => {
      diagram.div = null;
    };
  }, []);

  return (
    <div ref={mindmapRef} style={{ width: "100%", height: "500px" }}></div>
  );
};

export default Mindmap;
