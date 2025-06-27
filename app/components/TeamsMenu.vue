<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui-pro'
import { useGammeStore } from '../../store/useGamme'

const gammeStore = useGammeStore()

const links = computed<PageAnchor[]>(() => {
  const color = `text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)]`
  
  return [
    {
      label: 'Skynet',
      icon: 'simple-icons:skynet',
      class: `${color} header-title` ,
      to: '/'
    }
  ]
})
</script>

<template>
  <UPageAnchors 
  :links="links"
  :collapsed="collapsed"
  
  
  />
</template>