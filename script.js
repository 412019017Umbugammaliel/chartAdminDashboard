const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Sales",
      data: [1200, 1400, 1100, 1600, 1500, 1800],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    }],
  };
  
  const userRegistrationData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Registrations",
      data: [20, 15, 25, 30, 28, 40, 35],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    }],
  };
  
  // Create charts
  const salesChartCanvas = document.getElementById("salesChart");
  const salesChart = new Chart(salesChartCanvas, {
    type: "bar",
    data: salesData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  
  const userChartCanvas = document.getElementById("userChart");
  const userChart = new Chart(userChartCanvas, {
    type: "line",
    data: userRegistrationData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  