const data26 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Radar Chart Values',
      backgroundColor: 'rgb(0, 99, 132)',
      borderColor: 'rgba(0, 0, 132)',
      borderWidth: 10,
      //borderDash: [5, 15, 2, 15],
      borderDashOffcet: 10,
      borderCapStyle: 'square',
      borderJoinStyle: 'round',
      lineTension: 0,
      pointBackgroundColor: [
        'green',
        'blue',
        'red',
        'yellow',
        'green',
        'blue',
        'red',
      ],
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      pointBorderRadius: 5,
      //pointStyle: 'triangle,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: [
        'green',
        'blue',
        'red',
        'yellow',
        'green',
        'blue',
        'red',
      ],
      pointHoverBorderWidth: 5,
      pointHoverRadius: 10,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config26 = {
  type: 'radar',
  data: data26,
  options: {},
};

const myChart26 = new Chart(document.getElementById('myChart26'), config26);
