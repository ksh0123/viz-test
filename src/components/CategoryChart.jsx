// src/components/CategoryChart.js
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const CategoryChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    Chart.register(...registerables);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["React", "Angular", "Vue", "Other"],
        datasets: [
          {
            label: "Framework Usage",
            data: [10, 5, 3, 2], // Example data
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default CategoryChart;
