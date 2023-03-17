import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartDataPoints }) => {
  const dataPointsValues = chartDataPoints.map((dataPoint) => dataPoint.value);

  const totalMaxium = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
