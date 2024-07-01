import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Select from "../select/Select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
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
          value: 110,
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
          value: 105,
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
          value: 75,
          levels: "Lower than Average",
        },
      },
    },
    {
      month: "Mar",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 160,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 78,
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
        pointBorderWidth: 0.5,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0.5,
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
        pointBorderWidth: 0.5,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0.5,
        pointRadius: 8,
        pointHitRadius: 10,
      },
    ],
  };
  const labelData = data.datasets.map((entry) => entry.label);

  const generateLegendLabels = () => {
    const lastMonthData = diagnosticHistory[diagnosticHistory.length - 1];
    const lastMonthSystolicValue =
      lastMonthData?.blood_pressure?.systolic?.value;

    const lastMonthDiastolicValue =
      lastMonthData?.blood_pressure?.diastolic?.value;

    const systolicMaxValue = Math.max(...systolicData);
    const systolicMinValue = Math.min(...systolicData);
    const diastolicMaxValue = Math.max(...diastolicData);
    const diastolicMinValue = Math.min(...diastolicData);

    const systolicLabel = lastMonthData?.blood_pressure?.systolic?.levels;
    const diastolicLabel = lastMonthData?.blood_pressure?.diastolic?.levels;

    const systolicLegend = labelData[0];
    const diastolicLegend = labelData[1];

    const legendData = {
      systolic: {
        legend: systolicLegend,
        maxValue: systolicMaxValue,
        minValue: systolicMinValue,
        label: systolicLabel,
        lastMonthValue: lastMonthSystolicValue,
      },
      diastolic: {
        legend: diastolicLegend,
        maxValue: diastolicMaxValue,
        minValue: diastolicMinValue,
        label: diastolicLabel,
        lastMonthValue: lastMonthDiastolicValue,
      },
    };

    return legendData;
  };

  const legendLabels = generateLegendLabels();

  const legendLabelsJson = JSON.stringify(legendLabels);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      htmlLegend: {
        // ID of the container to put the legend in
        containerID: "legend-container",
      },
      title: {
        display: false,
        text: "Blood Pressure",
        textAlign: "start", // Aligns the title to the left
      },
      legend: {
        display: false,
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

  return (
    <div>
      <h2 className="text-lg font-bold pb-4">Diagnosis History</h2>
      <div className="bg-[#F4F0FE] xl:grid xl:grid-cols-12 gap-4 p-4">
        <div className="col-span-8">
          <div className="flex justify-between">
            <h2 className="text-base mb-3 ml-0.5">Blood Pressure</h2>
            <div>
              <Select />
            </div>
          </div>
          <div style={{ height: "270px" }}>
            <Line ref={htmlLegendRef} data={data} options={options} />
          </div>
        </div>
        <div className="col-span-4 ">
          {/* <div>{legendLabels.diastolic.legend}</div> */}
          {legendLabels && (
            <div className="">
              <div className=" py-4 mb-4 border-b border-gray-300">
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-[#E66FD2] rounded-full mr-2"></span>
                  <p className=" text-sm font-bold">
                    {legendLabels.systolic.legend}
                  </p>
                </div>
                {legendLabels.systolic.maxValue >= 80 ? (
                  <>
                    <h2 className="text-[#072635] font-bold text-xl my-2">
                      {" "}
                      {legendLabels.systolic.lastMonthValue}
                    </h2>
                    <p className="flex  gap-1 items-center text-sm text-[#072635]">
                      <span>
                        <TiArrowSortedUp className="text-lg" />
                      </span>
                      {legendLabels.systolic.label}
                    </p>
                  </>
                ) : (
                  <>
                    <h2> {legendLabels.systolic.minValue}</h2>
                    <p>{legendLabels.systolic.label}</p>
                  </>
                )}
              </div>

              <div className="flex items-center">
                <span className="h-3 w-3 bg-[#8C6FE6] rounded-full mr-2"></span>
                <p className="text-sm font-bold">
                  {legendLabels.diastolic.legend}
                </p>
              </div>
              {legendLabels.diastolic.maxValue < 80 ? (
                <>
                  <h2> {legendLabels.diastolic.maxValue}</h2>
                  <p className="flex items-center text-sm text-[#072635]">
                    <span>
                      <TiArrowSortedDown className="text-lg" />
                    </span>
                    {legendLabels.diastolic.label}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-[#072635] font-bold text-xl my-2">
                    {legendLabels.diastolic.lastMonthValue}
                  </h2>
                  <p className="flex gap-1 items-center text-sm text-[#072635]">
                    <span>
                      <TiArrowSortedDown className="text-lg" />
                    </span>
                    {legendLabels.diastolic.label}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
