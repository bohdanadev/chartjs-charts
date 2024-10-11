const data27 = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Gauge chart values',
      backgroundColor: ['grey', 'red', 'grey'],
      borderColor: 'black',
      hoverBackgroundColor: 'black',
      hoverBorderColor: ['grey', 'red', 'grey'],
      borderWidth: 0,
      hoverBorderWidth: 2,
      data: [45, 1, 10],
    },
  ],
};

const config27 = {
  type: 'doughnut',
  data: data27,
  options: {
    cutout: '80%',
    rotation: -90,
    circumference: 180,
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  },
};

const myChart27 = new Chart(document.getElementById('myChart27'), config27);
