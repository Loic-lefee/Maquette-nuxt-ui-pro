<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useGammeStore } from '~~/store/useGamme'
import { useEnvStore } from '~~/store/useEnv'
import { color } from 'chart.js/helpers'
import { usePageTitle } from '~~/app/utils/getPageTitle'

const gammeStore = useGammeStore()
const envStore = useEnvStore()
const route = useRoute()
const toast = useToast()
const { pageTitle } = usePageTitle()

const open = ref(false)

watchEffect(() => {
  if (process.client) {
  document.documentElement.style.setProperty(
    '--ui-primary',
    `var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)`
  )
  document.documentElement.style.setProperty(
    '--ui-text-dimmed',
    `var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)`
  )
  document.documentElement.style.setProperty(
    '--ui-text-highlighted',
    `var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)`
  )
  document.documentElement.style.setProperty(
    '--ui-bg-elevated',
    `var(--color-${gammeStore.currentGamme.toLowerCase()}-extralight)`
  )
  document.documentElement.style.setProperty(
    '--ui-text',
    `var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)`
  )

  document.documentElement.style.setProperty(
    '--ui-border-accented',
    `var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)`
  )
  
  document.documentElement.style.setProperty(
    '--ui-border',
    `var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)`
  )

  document.documentElement.style.setProperty(
    '--ui-text-muted',
    `--ui-text-black`
  )
  }
})


const links = computed(() => {
  const color = `text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-light)]`

  return [[
    {
      label: 'Accueil',
      icon: 'i-lucide-house',
      class: `text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)]`,
      to: '/',
      onSelect: () => { open.value = false }
    },
    {
      label: 'Tableau de bord',
      icon: 'ic:outline-space-dashboard',
      class: color,
      to: '/dashboard',
      defaultOpen: true,
      type: 'trigger',
      children: [
        {
          label: 'Global',
          to: '/dashboard',
          exact: true,
          class: color,
          onSelect: () => { open.value = false }
        },
        {
          label: 'Mono Client',
          to: '/dashboard/client',
          exact: true,
          class: color,
          onSelect: () => { open.value = false }
        }
      ]
    },
    {
      label: 'Installations',
      icon: 'icon-park-solid:install',
      class: color,
      iconClass:  `${color} `,
      to: '/Installations',
      onSelect: () => { open.value = false }
    },
    {
      label: 'Etat des services',
      icon: 'pajamas:dashboard',
      class: color,
      to: '/status',
      onSelect: () => { open.value = false }
    },
    {
      label: 'Quick Connect',
      icon: 'material-symbols:person-rounded',
      class: color,
      to: '/qconnect',
      onSelect: () => { open.value = false }
    },
    {
      label: 'Settings',
      icon: 'i-lucide-settings',
      class: color,
      to: '/settings',
      defaultOpen: true,
      type: 'trigger',
      children: [
        {
          label: 'General',
          to: '/settings',
          exact: true,
          class: color,
          onSelect: () => { open.value = false }
        },
        {
          label: 'Members',
          to: '/settings/members',
          class: color,
          onSelect: () => { open.value = false }
        },
        {
          label: 'Notifications',
          to: '/settings/notifications',
          class: color,
          onSelect: () => { open.value = false }
        }
      ]
    }
  ],
  [
    {
      label: 'Feedback',
      icon: 'i-lucide-message-circle',
      class: color,
      to: 'https://github.com/nuxt-ui-pro/dashboard',
      target: '_blank'
    },
    {
      label: 'Help & Support',
      icon: 'i-lucide-info',
      class: color,
      to: 'https://github.com/nuxt/ui-pro',
      target: '_blank'
    }
  ]]
}) ///satisfies NavigationMenuItem[][]


onMounted(async () => {

})
</script>

  
  
<template>

    <div class="hidden">
    <div class="bg-[var(--color-secu-light)]"></div>
    <div class="bg-[var(--color-secu-medium)]"></div>
    <div class="bg-[var(--color-secu-dark)]"></div>
    <div class="bg-[var(--color-secu-extralight)]"></div>
    <div class="bg-[var(--color-pop-light)]"></div>
    <div class="bg-[var(--color-pop-medium)]"></div>
    <div class="bg-[var(--color-pop-dark)]"></div>
    <div class="bg-[var(--color-pop-extralight)]"></div>
    <div class="bg-[var(--color-dom-light)]"></div>
    <div class="bg-[var(--color-dom-medium)]"></div>
    <div class="bg-[var(--color-dom-dark)]"></div>
    <div class="bg-[var(--color-dom-extralight)]"></div>
    <div class="bg-[var(--color-gru-light)]"></div>
    <div class="bg-[var(--color-gru-medium)]"></div>
    <div class="bg-[var(--color-gru-dark)]"></div>
    <div class="bg-[var(--color-gru-extralight)]"></div>
    <div class="bg-[var(--color-ovh-light)]"></div>
    <div class="bg-[var(--color-ovh-medium)]"></div>
    <div class="bg-[var(--color-ovh-dark)]"></div>
    <div class="bg-[var(--color-scw-light)]"></div>
    <div class="bg-[var(--color-scw-medium)]"></div>
    <div class="bg-[var(--color-scw-dark)]"></div>

    <div class="text-[var(--color-secu-light)]"></div>
    <div class="text-[var(--color-secu-medium)]"></div>
    <div class="text-[var(--color-secu-dark)]"></div>
    <div class="text-[var(--color-secu-extralight)]"></div>
    <div class="text-[var(--color-pop-light)]"></div>
    <div class="text-[var(--color-pop-medium)]"></div>
    <div class="text-[var(--color-pop-dark)]"></div>
    <div class="text-[var(--color-pop-extralight)]"></div>
    <div class="text-[var(--color-dom-light)]"></div>
    <div class="text-[var(--color-dom-medium)]"></div>
    <div class="text-[var(--color-dom-dark)]"></div>
    <div class="text-[var(--color-dom-extralight)]"></div>
    <div class="text-[var(--color-gru-light)]"></div>
    <div class="text-[var(--color-gru-medium)]"></div>
    <div class="text-[var(--color-gru-dark)]"></div>
    <div class="text-[var(--color-gru-extralight)]"></div>
    <div class="text-[var(--color-ovh-light)]"></div>
    <div class="text-[var(--color-ovh-medium)]"></div>
    <div class="text-[var(--color-ovh-dark)]"></div>
    <div class="text-[var(--color-scw-light)]"></div>
    <div class="text-[var(--color-scw-medium)]"></div>
    <div class="text-[var(--color-scw-dark)]"></div>
    <div class="bg-red-600"></div>
    <div class="bg-purple-600"></div> 
    <div class="bg-indigo-500"></div>
  </div>


  <UDashboardGroup unit="rem" >
  
      

    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      :ui="{footer: 'lg:border-t lg:border-default',
      }"
      :class="`bg-[var(--color-${gammeStore.currentGamme.toLowerCase()}-extralight)]`"
    >
      <template #header="{ collapsed }">
        
        <TeamsMenu :collapsed="collapsed"
         />
      </template>

      <template #default="{ collapsed }" >

        <UDashboardSearchButton :collapsed="collapsed" class="bg-transparent ring-default" :class="`text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)]`"/>
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          tooltip
          popover
          :ui="{
          icon: 'transition-colors duration-200',
          inactiveIcon: `text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)] group-hover:text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)]`,
          activeIcon: `text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)] group-hover:text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-dark)]`
          }"
          
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[1]"
          orientation="vertical"
          tooltip
          class="mt-auto"
        />
      </template>

      <template #footer="{ collapsed }">
        <UserMenu :collapsed="collapsed"/>
      </template>
    
    </UDashboardSidebar>
    <div class="flex flex-col flex-1 min-h-screen " >
        
    <div class="sticky top-0 z-50">
      <UBanner 
        :title="`Environnement actuel : ${envStore.getNormalizedEnv()}`" 
        :class="envStore.getColorByEnv()"
        :icon="envStore.getIconByEnv()"
/>

      <UDashboardNavbar :class="`bg-[var(--color-${gammeStore.currentGamme.toLowerCase()}-extralight)]`">
        <template #title>
          <span :class="`text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)] font-bold`">{{  pageTitle }} </span>
        </template>
        <template #leading>
          <UDashboardSidebarCollapse :class="`text-[var(--color-${gammeStore.currentGamme.toLowerCase()}-medium)] font-bold`" />
        </template>

        <template #right>
          <div class="flex items-center gap-4" >
            <USelectMenu v-model="gammeStore.currentGamme" :items="gammeStore.gamme" class="w-24 font-semibold"  />

            <USelectMenu v-model="envStore.currentEnv" :items="envStore.env" class="w-32 font-semibold" />
          </div>
        </template> 
      </UDashboardNavbar>
      </div>
    
    <div class="h-screen overflow-y-auto">
  <slot />
  </div>
  </div>

    <NotificationsSlideover />
  </UDashboardGroup>
</template>


