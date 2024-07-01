export const revenueData = [

    {
      "label": "Jan",
      "revenue": 180,
      "cost": 32652
    },
    {
      "label": "Feb",
      "revenue": 54628,
      "cost": 42393
    },
    {
      "label": "Mar",
      "revenue": 117238,
      "cost": 50262
    },
    {
      "label": "Apr",
      "revenue": 82830,
      "cost": 64731
    },
    {
      "label": "May",
      "revenue": 91208,
      "cost": 41893
    },
    {
      "label": "Jun",
      "revenue": 103609,
      "cost": 83809
    },
    {
      "label": "Jul",
      "revenue": 90974,
      "cost": 44772
    },
    {
      "label": "Aug",
      "revenue": 82919,
      "cost": 37590
    },
    {
      "label": "Sep",
      "revenue": 62407,
      "cost": 43349
    },
    {
      "label": "Oct",
      "revenue": 82528,
      "cost": 45324
    },
    {
      "label": "Nov",
      "revenue": 56979,
      "cost": 47978
    },
    {
      "label": "Dec",
      "revenue": 87436,
      "cost": 39175
    }
  ];
  export const bloodPressureData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Systolic Pressure",
        data: [180, 100, 90, 122, 130, 128],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "Diastolic Pressure",
        data: [80, 85, 78, 82, 90, 88],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-1",
      },
    ],
  };
  
  export const options = {
    scales: {
      yAxes: [{
        id: 'y-axis-1',
        ticks: {
          min: 60,
          max: 180,
          stepSize: 20,
          callback: function(value) {
            return value;
          }
        },
        scaleLabel: {
          display: true,
          labelString: 'Blood Pressure (mmHg)'
        }
      }]
    }
  };