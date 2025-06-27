<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui-pro'
import { useGammeStore } from '../../store/useGamme'

const gammeStore = useGammeStore()
const props = defineProps<{ collapsed: boolean }>()
const links = computed<PageAnchor[]>(() => {
  const color = `text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)]`
  
  return [
    {
      label: props.collapsed ? '' : 'Skynet',
      icon: 'simple-icons:skynet',
      iconClass: `${color}  ${props.collapsed ? 'mx-auto' : ''}` ,
      class: `flex items-center h-12 w-full ${color} ${props.collapsed ? 'justify-center text-center' : 'justify-start'}`,
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