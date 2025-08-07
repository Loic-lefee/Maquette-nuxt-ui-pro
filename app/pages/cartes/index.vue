<template>
  <UContainer class="max-w-full">
    <div class="flex flex-wrap p-4 gap-4">
    <UCard class="flex-1 min-w-[300px]">
    <h1 class="text-2xl font-bold mb-4">Globe terrestre avec timezone des clients</h1>
    <Globe3DChart />
    </UCard>
    <UCard class="flex-1 min-w-[300px]">
    <h1 class="text-2xl font-bold mb-4">Heatmap France DOM-TOM</h1>
    <Map />
    </UCard>
    </div>
  </UContainer>
</template>

<script setup>
import Globe3DChart from '~/components/Globe3DChart.vue'
import Map from '~/components/Map.vue'
</script>