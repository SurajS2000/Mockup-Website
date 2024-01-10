const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [20, 35, 40, 45, 50, 55, 60],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor:'rgb(55,48,163)'
      },
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor:'rgb(79,70,229)'
      },
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor:'rgb(129,140,248)'
      }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
          },
      scales: {
        x: {stacked: true,},
        y: {
            stacked: true,
          beginAtZero: true
        }
      },
    }
  });