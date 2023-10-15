import React, { useEffect } from "react";
import {
  Chart,
  initTE,
  TEChart,
} from "tw-elements";

initTE({ Chart });

type ChartData = {
  type: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
};

const ChartCard: ChartData = {
  type: "doughnut",
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Traffic",
        data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        backgroundColor: [
          "rgba(63, 81, 181, 0.5)",
          "rgba(77, 182, 172, 0.5)",
          "rgba(66, 133, 244, 0.5)",
          "rgba(156, 39, 176, 0.5)",
          "rgba(233, 30, 99, 0.5)",
          "rgba(66, 73, 244, 0.4)",
          "rgba(66, 133, 244, 0.2)",
        ],
      },
    ],
  },
};

const MyChart: React.FC = () => {
  useEffect(() => {
    const chart = new Chart(document.getElementById("doughnut-chart"), ChartCard);
    // chart.render();;
  }, []);

  return <div id="doughnut-chart" />;
};

export default MyChart;
