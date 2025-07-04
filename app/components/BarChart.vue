<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import { useGammeStore } from '~~/store/useGamme'
import {getValueColors} from '~/utils/colors-getter'

const colorMode = useColorMode()
const gammeStore = useGammeStore()

const props = defineProps<{
  title?: string
  data?: number[]
  applications?: string[]
  width?: string
  height?: string
}>()

const chartRef = ref<HTMLElement | null>(null)
let chartInstance: echarts.ECharts | null = null

const getTextColor = () =>
  colorMode.value === 'dark' ? '#ffffff' : '#222222'

const renderChart = () => {
  if (!chartRef.value) return

  chartInstance?.dispose()
  chartInstance = echarts.init(chartRef.value)

  const option: echarts.EChartsOption = {
    title: {
      text: props.title || '',
      left: 'center',
      top: '0%',
      textStyle: {
        color: getTextColor()
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    xAxis: {
      type: 'category',
      data: props.applications,
      axisLabel: {
        color: getTextColor()
      },
      axisLine: {
        lineStyle: {
          color: getTextColor()
        }
      }
    },
    yAxis: {
      type: 'value',
      
      axisLabel: {
        color: getTextColor()
      },
      axisLine: {
        lineStyle: {
          color: getTextColor()
        }
      },
      splitLine: {
        lineStyle: {
          color: colorMode.value === 'dark' ? '#444' : '#ddd'
        }
      }
    },
    series: [
      {
        data: props.data,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: getValueColors(gammeStore.currentGamme.toLowerCase(), 'extralight')
        },
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: getValueColors(gammeStore.currentGamme.toLowerCase(), 'medium')
        }
      }
    ]
  }

  chartInstance.setOption(option)
}

onMounted(() => {
  renderChart()
})

watch(() => gammeStore.currentGamme, renderChart)
watch(() => props.data, renderChart)
watch(() => props.categories, renderChart)
watch(() => colorMode.value, renderChart)
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