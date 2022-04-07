<template>
  <div>
    <canvas id="schedule-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import scheduleChartData from '../js/schedule-data.js'
export default {
//   name: 'PlanetChart',
  data () {
    return {
      scheduleChartData: scheduleChartData,
      chart: null
    }
  },
  mounted () {
    const ctx = document.getElementById('schedule-chart')
    this.chart = new Chart(ctx, this.scheduleChartData)
  }
}
</script>
