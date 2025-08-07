<template>
  <div ref="chartRef" style="width: 100%; height: 700px;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import baseTextureImg from './pictures/world.topo.bathy.200401.jpg'
import heightTextureImg from './pictures/bathymetry_bw_composite_4k.jpg'
import environmentImg from './pictures/starfield.jpg'
import moment from 'moment-timezone' 

const chartRef = ref(null)
let myChart = null

// Exemple de villes avec fuseaux horaires
const cities = [
  ["Paris", 2.3522, 48.8566, 50, "Europe/Paris"],
  ["Lyon", 4.8357, 45.7640, 50, "Europe/Paris"],
  ["Marseille", 5.3698, 43.2965, 50, "Europe/Paris"],
  ["Lille", 3.0573, 50.6292, 50, "Europe/Paris"],
  ["Nice", 7.2620, 43.7102, 50, "Europe/Paris"],
  ["Toulouse", 1.4442, 43.6047, 50, "Europe/Paris"],
  ["Bordeaux", -0.5792, 44.8378, 50, "Europe/Paris"],
  ["Fort-de-France", -61.0588, 14.6161, 73, "America/Martinique"],
  ["Cayenne", -52.3340, 4.9224, 68, "America/Cayenne"],
  ["Saint-Denis (Réunion)", 55.4481, -20.8789, 84, "Indian/Reunion"],
  ["Mamoudzou", 45.2160, -12.7828, 53, 'Africa/Nairobi'],
  ["Nouméa", 166.4572, -22.2558, 55, "Pacific/Noumea"],
  ["Papeete", -149.5665, -17.5516, 49, "Pacific/Tahiti"]
]

// Calcul des valeurs de données
const data = cities.map(([name, lon, lat, val]) => [lon, lat, 50])

onMounted(() => {
  if (!chartRef.value) return
  myChart = echarts.init(chartRef.value)

  const option = {
    backgroundColor: '#000',
    globe: {
      baseTexture: baseTextureImg,
      heightTexture: heightTextureImg,
      shading: 'lambert',
      environment: environmentImg,
      light: {
        main: {
          intensity: 2
        }
      },
      viewControl: {
        autoRotate: false
      }
    },
    visualMap: {
      max: 10,
      min: 0,
      calculable: true,
      inRange: {
        colorLightness: [0.2, 0.9]
      },
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      formatter: (params) => {
        const city = cities.find(([name, lon, lat, timezone]) =>
          lon === params.value[0] && lat === params.value[1]
        )
        const timezone = city?.[4]
        const localTime = timezone ? moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss') : 'Inconnu'
        return `${city?.[0] || 'Inconnu'}<br/>Valeur: ${(params.value[2] )}<br/>Fuseau horaire: ${timezone || 'Inconnu'}<br/>Heure locale: ${localTime}`
      }
    },
    series: [
      {
        type: 'bar3D',
        coordinateSystem: 'globe',
        data,
        barSize: 0.6,
        minHeight: 0.2,
        silent: false,
        shading: 'lambert',
        itemStyle: {
          color: 'orange'
        }
      }
    ]
  }

  myChart.setOption(option)
})

onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose()
  }
})
</script>