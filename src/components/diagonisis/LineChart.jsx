import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Select from '../select/Select';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ diagnosticHistory }) => {
    const [selectedMonth, setSelectedMonth] = useState('Last 6 months');

    const handleMonthChange = (selectedMonth) => {
        setSelectedMonth(selectedMonth);
    };

    useEffect(() => {}, [selectedMonth]);

    let filteredDiagnosticHistory = diagnosticHistory;
    if (selectedMonth === 'Last 6 months') {
        filteredDiagnosticHistory = diagnosticHistory.slice(-6);
    } else if (selectedMonth === 'Last 12 months') {
        filteredDiagnosticHistory = diagnosticHistory.slice(-12);
    } else if (selectedMonth === 'Last 18 months') {
        filteredDiagnosticHistory = diagnosticHistory.slice(-18);
    } else if (selectedMonth === 'Last 24 months') {
        filteredDiagnosticHistory = diagnosticHistory.slice(-24);
    }

    const labels = filteredDiagnosticHistory.map((entry) => {
        const monthAbbreviation = {
            January: 'Jan',
            February: 'Feb',
            March: 'Mar',
            April: 'Apr',
            May: 'May',
            June: 'Jun',
            July: 'Jul',
            August: 'Aug',
            September: 'Sep',
            October: 'Oct',
            November: 'Nov',
            December: 'Dec',
        }[entry.month];

        return `${monthAbbreviation}, ${entry.year}`;
    });

    const systolicData = filteredDiagnosticHistory.map(
        (entry) => entry.blood_pressure.systolic.value
    );
    const diastolicData = filteredDiagnosticHistory.map(
        (entry) => entry.blood_pressure.diastolic.value
    );

    const htmlLegendRef = useRef(null);

    useEffect(() => {
        if (htmlLegendRef.current) {
            const chartInstance = htmlLegendRef.current.chartInstance;

            // Ensure chartInstance and its properties are accessible
            if (chartInstance) {
                const legendContainer =
                    document.getElementById('legend-container');

                while (legendContainer.firstChild) {
                    legendContainer.removeChild(legendContainer.firstChild);
                }

                chartInstance.legend.afterUpdate(chartInstance, [], {
                    containerID: 'legend-container',
                });
            }
        }
    }, []);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                borderColor: '#E66FD2',
                backgroundColor: '#E66FD2',
                fill: false,
                lineTension: 0.5,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#E66FD2',
                pointBackgroundColor: '#E66FD2',
                pointBorderWidth: 0.5,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 0.5,
                pointRadius: 8,
                pointHitRadius: 10,
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                borderColor: '#8C6FE6',
                backgroundColor: '#8C6FE6',
                fill: false,
                lineTension: 0.5,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#8C6FE6',
                pointBackgroundColor: '#8C6FE6',
                pointBorderWidth: 0.5,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
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
                containerID: 'legend-container',
            },
            title: {
                display: false,
                text: 'Blood Pressure',
                textAlign: 'start', // Aligns the title to the left
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 30,
                    generateLabels: (chart) => {
                        return chart.data.datasets.map((dataset, i) => {
                            let labelText = dataset.label;

                            if (i === 0) {
                                labelText += ` (Highest: ${Math.max(
                                    ...systolicData
                                )} ${
                                    diagnosticHistory[0].blood_pressure.systolic
                                        .levels
                                })`;
                            } else if (i === 1) {
                                labelText += ` (Lowest: ${Math.min(
                                    ...diastolicData
                                )} ${
                                    diagnosticHistory[0].blood_pressure
                                        .diastolic.levels
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
            <h2 className='text-lg font-bold pb-4'>Diagnosis History</h2>
            <div className='bg-[#F4F0FE] xl:grid xl:grid-cols-12 gap-4 p-4'>
                <div className='col-span-8'>
                    <div className='flex justify-between'>
                        <h2 className='text-base mb-3 ml-0.5'>
                            Blood Pressure
                        </h2>
                        <div>
                            <Select selectedMonthChange={handleMonthChange} />
                        </div>
                    </div>
                    <div style={{ height: '270px' }}>
                        <Line
                            ref={htmlLegendRef}
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
                <div className='col-span-4 '>
                    {legendLabels && (
                        <div className=''>
                            <div className=' py-4 mb-4 border-b border-gray-300'>
                                <div className='flex items-center'>
                                    <span className='h-3 w-3 bg-[#E66FD2] rounded-full mr-2'></span>
                                    <p className=' text-sm font-bold'>
                                        {legendLabels.systolic.legend}
                                    </p>
                                </div>
                                <h2 className='text-[#072635] font-bold text-xl my-2'>
                                    {legendLabels.systolic.lastMonthValue}
                                </h2>
                                <p className='flex  gap-1 items-center text-sm text-[#072635]'>
                                    <span>
                                        {legendLabels.systolic.label ===
                                        'Lower than Average' ? (
                                            <TiArrowSortedDown className='text-base text-gray-600 mr-1' />
                                        ) : legendLabels.systolic.label ===
                                          'Normal' ? null : (
                                            <TiArrowSortedUp className='text-base text-gray-600 mr-1' />
                                        )}
                                    </span>
                                    {legendLabels.systolic.label}
                                </p>
                            </div>

                            <div className='flex items-center'>
                                <span className='h-3 w-3 bg-[#8C6FE6] rounded-full mr-2'></span>
                                <p className='text-sm font-bold'>
                                    {legendLabels.diastolic.legend}
                                </p>
                            </div>
                            <h2 className='text-[#072635] font-bold text-xl my-2'>
                                {legendLabels.diastolic.lastMonthValue}
                            </h2>
                            <p className='flex gap-1 items-center text-sm text-[#072635]'>
                                <span className=''>
                                    {legendLabels.diastolic.label ===
                                    'Lower than Average' ? (
                                        <TiArrowSortedDown className='text-base text-gray-600 mr-1' />
                                    ) : legendLabels.diastolic.label ===
                                      'Normal' ? null : (
                                        <TiArrowSortedUp className='text-base text-gray-600 mr-1' />
                                    )}
                                </span>
                                {legendLabels.diastolic.label}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LineChart;
