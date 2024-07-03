export const revenueData = [
    [
        {
            name: 'Jessica Taylor',
            gender: 'Female',
            age: 28,
            profile_picture: 'https://fedskillstest.ct.digital/4.png',
            date_of_birth: '1996-08-23',
            phone_number: '(415) 555-1234',
            emergency_contact: '(415) 555-5678',
            insurance_type: 'Sunrise Health Assurance',
            diagnosis_history: [
                {
                    month: 'March',
                    year: 2024,
                    blood_pressure: {
                        systolic: {
                            value: 160,
                            levels: 'Higher than Average',
                        },
                        diastolic: {
                            value: 78,
                            levels: 'Lower than Average',
                        },
                    },
                    heart_rate: {
                        value: 78,
                        levels: 'Lower than Average',
                    },
                    respiratory_rate: {
                        value: 20,
                        levels: 'Normal',
                    },
                    temperature: {
                        value: 98.6,
                        levels: 'Normal',
                    },
                },
                // Additional months of diagnostic history
            ],
            diagnostic_list: [
                {
                    name: 'Hypertension',
                    description: 'Chronic high blood pressure',
                    status: 'Under Observation',
                },
                // Additional diagnostics
            ],
            lab_results: [
                'Blood Tests',
                'CT Scans',
                // More lab results
            ],
        },
    ],
];
export const bloodPressureData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Systolic Pressure',
            data: [180, 100, 90, 122, 130, 128],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
        },
        {
            label: 'Diastolic Pressure',
            data: [80, 85, 78, 82, 90, 88],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-1',
        },
    ],
};
export const months = [
    { value: 'Last 6 months' },
    { value: 'Last 12 months' },
    { value: 'Last 18 months' },
    { value: 'Last 24 months' },
];

export const options = {
    scales: {
        yAxes: [
            {
                id: 'y-axis-1',
                ticks: {
                    min: 60,
                    max: 180,
                    stepSize: 20,
                    callback: function (value) {
                        return value;
                    },
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Blood Pressure (mmHg)',
                },
            },
        ],
    },
};
