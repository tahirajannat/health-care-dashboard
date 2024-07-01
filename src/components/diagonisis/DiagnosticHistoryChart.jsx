import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosticHistoryChart = () => {
  const chartRef = useRef(null);

  const diagnosticHistory = [
    {
      month: "Oct",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 120,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 78,
          levels: "Lower than Average",
        },
      },
    },
    {
      month: "Nov",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 115,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 65,
          levels: "Lower than Average",
        },
      },
    },
    {
      month: "Dec",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 160,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 110,
          levels: "Lower than Average",
        },
      },
    },
    {
      month: "Jan",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 117,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 90,
          levels: "Lower than Average",
        },
      },
    },
    {
      month: "Feb",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 150,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 70,
          levels: "Lower than Average",
        },
      },
    },
    {
      month: "Mar, 2024",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 160,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 80,
          levels: "Lower than Average",
        },
      },
    },
  ];

  const labels = diagnosticHistory.map(
    (entry) => `${entry.month}, ${entry.year}`
  );
  const systolicData = diagnosticHistory.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicData = diagnosticHistory.map(
    (entry) => entry.blood_pressure.diastolic.value
  );

  const highestSystolic = Math.max(...systolicData);
  const lowestDiastolic = Math.min(...diastolicData);

  const htmlLegendRef = useRef(null);

  useEffect(() => {
    if (htmlLegendRef.current) {
      const chartInstance = htmlLegendRef.current.chartInstance;

      // Ensure chartInstance and its properties are accessible
      if (chartInstance) {
        const legendContainer = document.getElementById("legend-container");

        while (legendContainer.firstChild) {
          legendContainer.removeChild(legendContainer.firstChild);
        }

        chartInstance.legend.afterUpdate(chartInstance, [], {
          containerID: "legend-container",
        });
      }
    }
  }, []);

  const generateLegendLabels = () => {
    const systolicValue = `${Math.max(...systolicData)}`;
    const systolicLabel = ` ${diagnosticHistory[0].blood_pressure.systolic.levels
    }`;
    const diastolicValue = ` ${Math.min(...diastolicData)}`;
    const diastolicLabel = `${
      diagnosticHistory[0].blood_pressure.diastolic.levels
    })`;
    return [systolicValue,systolicLabel, diastolicValue,diastolicLabel];
  };

  const legendLabels = generateLegendLabels();

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        fill: false,
        lineTension: 0.5,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 8,
        pointHitRadius: 10,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        fill: false,
        lineTension: 0.5,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#8C6FE6",
        pointBackgroundColor: "#8C6FE6",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 8,
        pointHitRadius: 10,
      },
    ],
  };
  const generateLabels = (chart) => {
    return chart.data.datasets.map((dataset, i) => {
      let labelText = dataset.label;

      if (i === 0) {
        labelText += `${highestSystolic}<br/>Higher than Average`;
      } else if (i === 1) {
        labelText += `<div style="font-size: 40px;"> (Lowest: ${lowestDiastolic})</div>`;
      }

      return {
        text: labelText,
        fillStyle: dataset.backgroundColor,
        hidden: !chart.isDatasetVisible(i),
        lineCap: dataset.borderCapStyle,
        lineDash: dataset.borderDash,
        lineDashOffset: dataset.borderDashOffset,
        lineJoin: dataset.borderJoinStyle,
        lineWidth: dataset.borderWidth,
        strokeStyle: dataset.borderColor,
        pointStyle: dataset.pointStyle,
      };
    });
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      htmlLegend: {
        // ID of the container to put the legend in
        containerID: "legend-container",
      },
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 30,
          generateLabels: (chart) => {
            return chart.data.datasets.map((dataset, i) => {
              let labelText = dataset.label;

              if (i === 0) {
                labelText += ` (Highest: ${Math.max(...systolicData)} ${
                  diagnosticHistory[0].blood_pressure.systolic.levels
                })`;
              } else if (i === 1) {
                labelText += ` (Lowest: ${Math.min(...diastolicData)} ${
                  diagnosticHistory[0].blood_pressure.diastolic.levels
                })`;
              }

              return {
                text: labelText,
                fillStyle: dataset.backgroundColor,
                hidden: !chart.isDatasetVisible(i),
                lineCap: dataset.borderCapStyle,
                lineDash: dataset.borderDash,
                lineDashOffset: dataset.borderDashOffset,
                lineJoin: dataset.borderJoinStyle,
                lineWidth: dataset.borderWidth,
                strokeStyle: dataset.borderColor,
                pointStyle: dataset.pointStyle,
              };
            });
          },
          filter: (legendItem, chartData) => {
            return legendItem.text;
          }, // Using the custom label generator
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };
  //   const renderCustomLegend = () => {
  //     const chart = chartRef.current;
  //     if (!chart) return null;

  //     const { datasets } = chart.data;
  //     return datasets.map((dataset, i) => (
  //       `<div key=${i}>
  //         <span style="color: ${dataset.borderColor};">&#9679;</span>
  //         ${dataset.label}<br>(Highest: ${Math.max(...dataset.data)})
  //       </div>`
  //     )).join('');
  //   };

  return (
    <div>
      <h2>Diagnostic History</h2>
      <div style={{ height: "400px" }} className="bg-[#F4F0FE]">
        {/* <div dangerouslySetInnerHTML={{ __html: renderCustomLegend() }} /> */}

        <Line ref={chartRef} data={data} options={options} />
      </div>
      
    </div>
  );
};

export default DiagnosticHistoryChart;
