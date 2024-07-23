// src/components/Timeline.js
import React, { useEffect, useRef } from "react";
import { Timeline, DataSet } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.css";

const TimelineComponent = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = new DataSet([
      { id: 1, content: "Project 1", start: "2023-01-01" },
      { id: 2, content: "Project 2", start: "2023-02-01" },
      // Add more items here
    ]);

    const options = {};
    new Timeline(timelineRef.current, items, options);
  }, []);

  return <div ref={timelineRef}></div>;
};

export default TimelineComponent;
