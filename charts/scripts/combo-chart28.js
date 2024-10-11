const data28 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Combo Bar Dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
      pointStyle: 'rect',
    },
    {
      label: 'Combo Line Dataset',
      borderColor: 'rgb(0, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
      type: 'line',
      pointStyle: 'line',
      tension: 0.4,
    },
  ],
};

const config28 = {
  type: 'bar',
  data: data28,
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
};

const myChart28 = new Chart(document.getElementById('myChart28'), config28);
