<script setup>
import { ULink } from '#components';
import { useRoute } from 'vue-router'
import SearchBar from '~/components/SearchBar.vue';
import { useMockDB } from '~~/app/composables/db_mock'

const route = useRoute()
const uuid = computed(() => route.params.uuid)
const DB = useMockDB()


const clientApp = computed(() => {
  return DB.getApplicationsByClient(uuid.value) || []
})


const appsByFamily = computed(() => {
  if (!clientApp.value || clientApp.value.length === 0) return {}
  return DB.getApplicationsByFamily(clientApp.value)
})




</script>

<template >
  <SearchBar/>

<div class="w-full p-2 space-y-6 flex-1/3" >
  <UCard class="space-y-6">
      <!-- Header: Applications -->
      <div> 
        
          <h2 class="text-lg font-semibold mb-2 items-center">Applications ( {{ appsByFamily.Applications.length }} apps)</h2>
          <div class="pr-8 pl-8 pb-4">
          <UCarousel
            :items="appsByFamily.Applications"
            :ui="{ item: 'basis-1/5',
            }"
            
            arrows
            dots
          >
            <template #default="{ item }">
                <div class=" p-4">
              <UCard class="h-full shadow-md ">
                <template #header>
                  <h3 class="text-base font-medium">{{ item.name }}</h3>
                </template>

                <div class="text-sm space-y-1">
                  <p><strong>Version:</strong> {{ item.version }}</p>
                  <p><strong>Statut:</strong> {{ item.statut }}</p>
                  <p><strong>Installée le:</strong> {{ item.installation }}</p>
                  <p><strong>Déployée le:</strong> {{ item.deploiement }}</p>
                </div>

                <template #footer>

                  <UButton :to="`/qconnect/client/${item.name}`" icon="icon-park-outline:link-three"> Quick Connect </UButton>
                </template>
              </UCard>
              </div>
            </template>
          </UCarousel>
        </div>
      </div>
      </UCard>

      <UCard class="space-y-6">
      <div>
        
          <h2 class="text-lg font-semibold  items-center">Backend  ( {{ appsByFamily.Backend.length }} apps)</h2>
          <div class="pr-8 pl-8 pb-4">
          <UCarousel
            :items="appsByFamily.Backend"
            :ui="{ item: 'basis-1/5',
            }"
            
            arrows
            dots
          >
            <template #default="{ item }">
                <div class=" p-4">
              <UCard class="h-full shadow-md ">
                <template #header>
                  <h3 class="text-base font-medium">{{ item.name }}</h3>
                </template>

                <div class="text-sm space-y-1">
                  <p><strong>Version:</strong> {{ item.version }}</p>
                  <p><strong>Statut:</strong> {{ item.statut }}</p>
                  <p><strong>Installée le:</strong> {{ item.installation }}</p>
                  <p><strong>Déployée le:</strong> {{ item.deploiement }}</p>
                </div>

                <template #footer>

                  <UButton :to="`/qconnect/client/${item.name}`" icon="icon-park-outline:link-three"> Quick Connect </UButton>
                </template>
              </UCard>
              </div>
            </template>
          </UCarousel>
        </div>
      </div>
      </UCard>

      <UCard class="space-y-6">

      <div>
        
          <h2 class="text-lg font-semibold mb-2 items-center">Outils ( {{ appsByFamily.Outils.length }} apps)</h2>
          <div class="pr-8 pl-8 pb-4">
          <UCarousel
            :items="appsByFamily.Outils"
            :ui="{ item: 'basis-1/5',
            }"
            
            arrows
            dots
          >
            <template #default="{ item }">
                <div class=" p-4">
              <UCard class="h-full shadow-md ">
                <template #header>
                  <h3 class="text-base font-medium">{{ item.name }}</h3>
                </template>

                <div class="text-sm space-y-1">
                  <p><strong>Version:</strong> {{ item.version }}</p>
                  <p><strong>Statut:</strong> {{ item.statut }}</p>
                  <p><strong>Installée le:</strong> {{ item.installation }}</p>
                  <p><strong>Déployée le:</strong> {{ item.deploiement }}</p>
                </div>

                <template #footer>

                  <UButton :to="`/qconnect/client/${item.name}`" icon="icon-park-outline:link-three"> Quick Connect </UButton>
                </template>
              </UCard>
              </div>
            </template>
          </UCarousel>
        </div>
      </div>
      </UCard>

</div>
  
</template>