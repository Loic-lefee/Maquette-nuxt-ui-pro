
<script setup lang="ts">
import {getValueColors} from '~/utils/colors-getter'
import DonutChart from '~/components/DonutChart.vue'
import { onMounted } from 'vue'
import { useGammeStore } from '../../store/useGamme'
import { useEnvStore } from '~~/store/useEnv'
import { useRoute } from 'vue-router'


const appConfig = useAppConfig()
const gammeStore = useGammeStore()
const envStore = useEnvStore()




const GammeData = ref<echarts.PieSeriesOption['data']>([])
const EnvironnementData = ref<echarts.PieSeriesOption['data']>([])
const SecuData = ref<echarts.PieSeriesOption['data']>([])
const PopData = ref<echarts.PieSeriesOption['data']>([])
const GruData = ref<echarts.PieSeriesOption['data']>([])
const DomData = ref<echarts.PieSeriesOption['data']>([])

onMounted(() => {

 

 GammeData.value = [
  { value: 40, name: 'SECU', itemStyle: {color: getValueColors("secu", "medium")}},
  { value: 30, name: 'DOM', itemStyle: {color: getValueColors("dom", "medium")} },
  { value: 20, name: 'GRU', itemStyle: {color: getValueColors("gru", "medium")} },
  { value: 10, name: 'POP', itemStyle: {color: getValueColors("pop", "medium")} },
  
]

 EnvironnementData.value = [
  { value: 5, name: 'OVH-PREPROD', itemStyle: {color: getValueColors("ovh", "light")} },
  { value: 10, name: 'OVH-PROD' , itemStyle: {color: getValueColors("ovh", "medium")}},
  { value: 14, name: 'OVH-DEV', itemStyle: {color: getValueColors("ovh", "dark")} },
  { value: 19, name: 'SCW-STAGING', itemStyle: {color: getValueColors("scw", "light")}},
  { value: 24, name: 'SCW-PROD', itemStyle: {color: getValueColors("scw", "medium")} },
  { value: 28, name: 'SCW-DEV', itemStyle: {color: getValueColors("scw", "dark")} }
  
]


SecuData.value = [
  { value: 5, name: 'OVH-PREPROD', itemStyle: {color: getValueColors("ovh", "light")} },
  { value: 10, name: 'OVH-PROD' , itemStyle: {color: getValueColors("ovh", "medium")}},
  { value: 14, name: 'OVH-DEV', itemStyle: {color: getValueColors("ovh", "dark")} },
  { value: 19, name: 'SCW-STAGING', itemStyle: {color: getValueColors("scw", "light")}},
  { value: 24, name: 'SCW-PROD', itemStyle: {color: getValueColors("scw", "medium")} },
  { value: 28, name: 'SCW-DEV', itemStyle: {color: getValueColors("scw", "dark")} }
  
  
]


PopData.value = [
  { value: 5, name: 'OVH-PREPROD', itemStyle: {color: getValueColors("ovh", "light")} },
  { value: 10, name: 'OVH-PROD' , itemStyle: {color: getValueColors("ovh", "medium")}},
  { value: 14, name: 'OVH-DEV', itemStyle: {color: getValueColors("ovh", "dark")} },
  { value: 19, name: 'SCW-STAGING', itemStyle: {color: getValueColors("scw", "light")}},
  { value: 24, name: 'SCW-PROD', itemStyle: {color: getValueColors("scw", "medium")} },
  { value: 28, name: 'SCW-DEV', itemStyle: {color: getValueColors("scw", "dark")} }
  
  
]

GruData.value = [
  { value: 5, name: 'OVH-PREPROD', itemStyle: {color: getValueColors("ovh", "light")} },
  { value: 10, name: 'OVH-PROD' , itemStyle: {color: getValueColors("ovh", "medium")}},
  { value: 14, name: 'OVH-DEV', itemStyle: {color: getValueColors("ovh", "dark")} },
  { value: 19, name: 'SCW-STAGING', itemStyle: {color: getValueColors("scw", "light")}},
  { value: 24, name: 'SCW-PROD', itemStyle: {color: getValueColors("scw", "medium")} },
  { value: 28, name: 'SCW-DEV', itemStyle: {color: getValueColors("scw", "dark")} }
  
  
]

 DomData.value = [
  { value: 5, name: 'OVH-PREPROD', itemStyle: {color: getValueColors("ovh", "light")} },
  { value: 10, name: 'OVH-PROD' , itemStyle: {color: getValueColors("ovh", "medium")}},
  { value: 14, name: 'OVH-DEV', itemStyle: {color: getValueColors("ovh", "dark")} },
  { value: 19, name: 'SCW-STAGING', itemStyle: {color: getValueColors("scw", "light")}},
  { value: 24, name: 'SCW-PROD', itemStyle: {color: getValueColors("scw", "medium")} },
  { value: 28, name: 'SCW-DEV', itemStyle: {color: getValueColors("scw", "dark")} }
  
  
]

})

const selectedGammes = ref<string[]>(['SECU','POP','DOM','GRU'])

function onGammeSegmentClick(params: any) {
  const clickedGamme = params.name
  if (selectedGammes.value?.includes(clickedGamme)) {
    selectedGammes.value = selectedGammes.value.filter(g => g !== clickedGamme)
    if (selectedGammes.value.length === 0) selectedGammes.value = null
  } else {

    selectedGammes.value = selectedGammes.value ? [...selectedGammes.value, clickedGamme] : [clickedGamme]
  }
}


</script>
  



<template>
  <UDashboardPanel>

    <template #body>
      <div class="space-y-6 text-black w-full px-4" >
        <!-- INTRO -->
        <UCard class="w-full">
          <h2 class="text-xl font-bold mb-2">Bienvenue sur Skynet </h2>
          <p>
            Skynet est notre outil interne de gestion dédié aux opérations techniques du service IT. 
            Il centralise l’ensemble des fonctionnalités nécessaires au suivi, au déploiement et à la maintenance de nos environnements.
            Grâce à Skynet, vous pouvez 
          </p>
          <ul class="list-disc ml-8 mt-2 mb-2">
            <li>Consulter la liste des clients depuis le tableau de bord, avec une vue détaillée de leurs services</li>
            <li>Réaliser des déploiements clients en toute simplicité</li>
            <li>Suivre l’état et la santé des services en temps réel</li>
            <li>Accéder rapidement aux environnements de production grâce à la fonctionnalité Quick Connect</li>
            <li>Superviser l’historique des actions</li>
          </ul>
          <p>
            Skynet est l’interface centrale de pilotage de notre infrastructure. Conçu par l’équipe IT, il vous permet d’agir rapidement, de manière fiable et sécurisée.
          </p>
        </UCard>

        <!-- ÉTAT DU PARC CLIENT -->
        <UCard>
  <h3 class="text-lg font-semibold mb-4">État du parc client</h3>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    <!-- 1. Pie Chart 1 : Gamme -->
    <div class="flex flex-col items-center justify-center">
      <div class="p-6">
        <DonutChart
          title="Répartition gamme"
          :data="GammeData"
          width="300px"
          selectedMode="false" 
          height="300px"
          @segment-click="onGammeSegmentClick"
        />
      </div>
    </div>

    <!-- 2. Infos clients -->
    <div class="relative flex flex-col items-center">
      <p class="absolute top-5 text-xl font-bold text-center mb-2">Nombre total de clients</p>
      <p class="m-auto text-2xl font-semibold">128,100€</p>
    </div>

    <!-- 3. Pie Chart 2 : Environnements -->
    <div class="flex flex-col items-center justify-center" >
      <div class="p-6">
        <DonutChart
          title="Répartition environnement"
          :data="EnvironnementData"
          width="300px"
          height="300px"
        />
      </div>
    </div>

  </div>
</UCard>

        <!-- ÉTAT DES SERVICE PAR  GAMMES -->
        <UCard>
  <h3 class="text-lg font-semibold mb-4">État des services par gammes</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    <!-- 1. Pie Chart 3 : SECU -->
     <div
      v-if="selectedGammes && selectedGammes.includes('SECU')"
      class="flex flex-col items-center justify-center"
    >
      <div class="p-6">
        <DonutChart
          title="SECU"
          :data="SecuData"
          width="300px"
          height="300px"
          color="secu-medium"
        />
      </div>
    </div>

    <!-- 1. Pie Chart 4 : GRU -->
    <div
      v-if="selectedGammes && selectedGammes.includes('GRU')"
      class="flex flex-col items-center justify-center"
    >
      <div class="p-6">
        <DonutChart
          title="GRU"
          :data="GruData"
          width="300px"
          height="300px"
          color="gru-medium"
        />
      </div>
    </div>

    <!-- 1. Pie Chart 4 : DOM -->
    <div
      v-if="selectedGammes && selectedGammes.includes('DOM')"
      class="flex flex-col items-center justify-center"
    >
      <div class="p-6">
        <DonutChart
          title="DOM"
          :data="DomData"
          width="300px"
          height="300px"
        />
      </div>
    </div>

    <!-- 1. Pie Chart 5 : POP -->
    <div
      v-if="selectedGammes && selectedGammes.includes('POP')"
      class="flex flex-col items-center justify-center"
    >
      <div class="p-6">
        <DonutChart
          title="POP"
          :data="PopData"
          width="300px"
          height="300px"
        />
      </div>
    </div>

  </div>
  
</UCard>

        
</div>
    </template>
  </UDashboardPanel>
  </template>
