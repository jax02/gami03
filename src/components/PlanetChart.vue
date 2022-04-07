<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '../js/planet-data.js'
export default {
  name: 'PlanetChart',
  data () {
    return {
      planetChartData: planetChartData,
      chart: null
    }
  },
  mounted () {
    const ctx = document.getElementById('planet-chart')
    this.chart = new Chart(ctx, this.planetChartData)
  }
}
</script>
