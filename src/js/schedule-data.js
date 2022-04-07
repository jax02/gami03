export const scheduleChartData = {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [50, 50],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        hoverOffset: 4
      }
    ]
  }
  //   options: {
  //     // responsive: true,
  //     // lineTension: 1
  //     // scales: {
  //     //   yAxes: [
  //     //     {
  //     //       ticks: {
  //     //         beginAtZero: true,
  //     //         padding: 25
  //     //       }
  //     //     }
  //     //   ]
  //     // }
  //   }
}

export default scheduleChartData
