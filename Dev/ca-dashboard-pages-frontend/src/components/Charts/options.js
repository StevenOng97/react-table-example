export const options = {
  layout: {
    padding: 20,
  },
  plugins: {
    title: {
      display: true,
      text: 'Chart Title goes here',
      padding: 30,
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 32,
        usePointStyle: true,
        font: {
          size: 16,
          family: 'Poppins',
        },
        padding: 30,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};