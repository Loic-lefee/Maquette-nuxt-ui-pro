<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'


const colorMode = useColorMode()

const props = defineProps<{
  title?: string
  data: { name: string; value: number }[]
  width?: string
  height?: string
}>()

const chartRef = ref<HTMLElement | null>(null)
let chartInstance: echarts.ECharts | null = null

const getLegendTextColor = () =>
  colorMode.value === 'dark' ? '#ffffff' : '#222222'


const renderChart = () => {
  if (!chartRef.value) return


  chartInstance?.dispose()
  chartInstance = echarts.init(chartRef.value)

  chartInstance.setOption({
    title: {
      text: props.title || '',
      left: 'center',
      top: '0%',
      textStyle: {
        color: getLegendTextColor()
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '-2%',
      left: 'center',
      orient: 'horizontal',
      textStyle: {
    fontFamily: 'monospace', // pour aligner proprement
    fontSize: 12,
    color: getLegendTextColor()
  }
    },
    series: [
      {
        name: props.title || 'Répartition',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: props.data
      }
    ]
  })
}

onMounted(() => {
  getLegendTextColor()
  renderChart()
})

watch(() => props.data, renderChart)

watch(() => colorMode.value, () => {
  getLegendTextColor()
  renderChart()
})

</script>

<template>
  <div
    ref="chartRef"
    :style="{
      width: width || '100%',
      height: height || '300px'
    }"
  />
</template>
