<script setup lang="ts">
import { ref, computed } from 'vue'
import BarChart from '@/components/BarChart.vue'
import { useGammeStore } from '~~/store/useGamme'
import type { string } from 'zod/v4'
import { useMockDB } from '~~/app/composables/db_mock'
import { useRouter } from 'vue-router'

const router = useRouter()


const gammeStore = useGammeStore()
const mockDB = useMockDB()
const fullData = mockDB.fullData  


// value = sum client

// Champs de recherche et filtres
const searchQuery = ref('')
const selectedApp = ref('Toutes')
const allGammeApp = ref(['Toutes','test1', 'test2', 'test3'])
const selectedVersion = ref('Toutes')
const allAppVersion = ref(['Toutes'])

const currentData = computed(() => fullData[gammeStore.currentGamme])


function updateAllGammeApp() {
  if (!currentData.value) return

  const apps = currentData.value.applications.map(app => app.name)
  allGammeApp.value = ['Toutes', ...apps]
}
updateAllGammeApp()


function countApplicationsForClient(clientUuid: string) {
  let count = 0

  currentData.value.applications.forEach(app => {
    let clientFound = false
    app.versions.forEach(version => {
      version.clients.forEach(client => {
        if (client.uuid === clientUuid) {
          clientFound = true
        }
      })
    })
    if (clientFound) count++
  })

  return count
}
function updateAllAppVersion() {
  allAppVersion.value = ['Toutes']
  if (!currentData.value) {
    allAppVersion.value = ['Toutes']
    return
  }

  if (selectedApp.value === 'Toutes') {
    // Si aucune app spécifique sélectionnée, on remet juste 'Toutes'
    allAppVersion.value = ['Toutes']
    return
  }

  // Trouver l'app sélectionnée dans la gamme courante
  const app = currentData.value.applications.find(
    a => a.name === selectedApp.value
  )

  if (!app) {
    allAppVersion.value = ['Toutes']
    return
  }
  
  // Récupérer les versions de l'app, éviter doublons
  const versionsSet = new Set<string>(app.versions.map(v => v.version))
  
  allAppVersion.value = ['Toutes', ...Array.from(versionsSet)]
}


// Filtrage


const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase()
  const appFilter = selectedApp.value.toLowerCase()
  const versionFilter = selectedVersion.value.toLowerCase()

  // On récupère les clients uniques de la gamme courante
  const clients = [...new Map(
  currentData.value.applications.flatMap(app =>
    app.versions.flatMap(v => v.clients.map(c => [c.uuid, c]))
  )).values()]

  return clients.filter(client => {
    
    const matchesSearch = 

      client.name.toLowerCase().includes(query) ||
      client.nameUrl.includes(query) || 
      client.uuid.toLowerCase().includes(query) 
      

    if (!matchesSearch) return false

    if (appFilter === 'toutes' && versionFilter === 'toutes') {
      return true
    }

    
    return currentData.value.applications.some(app => {
      if (appFilter !== 'toutes' && app.name.toLowerCase() !== appFilter) return false

      return app.versions.some(version => {
        if (versionFilter !== 'toutes' && version.version.toLowerCase() !== versionFilter) return false
        return version.clients.some(c => c.uuid === client.uuid)
      })
    })
  })
  .map(client => ({
    "nom du client": client.name,
    "Name-Url": client.nameUrl,
    UUID: client.uuid,
    "Nombre d'application": countApplicationsForClient(client.uuid)
  }))
})

// Export CSV (basique)
function downloadCSV() {
  const rows = [Object.keys(filteredData.value[0]).join(',')]
  for (const row of filteredData.value) {
    rows.push(Object.values(row).join(','))
  }
  const blob = new Blob([rows.join('\n')], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'tableau.csv'
  a.click()
  URL.revokeObjectURL(url)
}

watch(selectedApp, () => {
  selectedVersion.value = ''
}) 
watch(currentData, () => {
  updateAllGammeApp()
})

watch(selectedApp, () => {
  updateAllAppVersion()
  // On peut aussi reset selectedVersion à "Toutes" si besoin
  selectedVersion.value = 'Toutes'
})


</script>

<template>


  <UDashboardPanel>
    <template #body>
      <div class="space-y-6 text-black w-full">

        <!-- 1. Carte principale -->
        <UCard class="w-full">
          <!-- TITRE GLOBAL -->
          <h3 class="text-lg font-semibold mb-4">
            État du parc client
          </h3>
    

          <!-- 3. Grille avec Graphique et Carte -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- Graphique -->
            <div>
              <BarChart
                title="Répartition application"
                :data="currentData.applications.map(app => app.value)"
                :applications="currentData.applications.map(app => app.name)"
                width="100%"
                height="400px"
              />
            </div>

            <!-- Nombre total de clients -->
            <div class="flex flex-col items-center">
              <h3 class="text-xl font-bold text-center mb-2">
                Nombre total de clients
              </h3>
            <div class="flex-1 flex items-center justify-center w-full">
              <UCard class="w-full ">
                <p class="text-3xl font-semibold text-center">
                  128.100
                </p>
              </UCard>
            </div>
            </div>

          </div> <!-- end grid -->

        </UCard> <!-- end UCard -->

        <UCard class="p-4 space-y-4">
    <!-- En-tête -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4">
      <div class="flex gap-4 ">
        <UCard :class="`w-36 h-8 text-sm bg-[var(--color-${gammeStore.currentGamme.toLowerCase()}-extralight)] flex items-center justify-center px-2`">
           <p class=" font-semibold text-center">
                  Application :
            </p>
        </UCard>
        <USelectMenu v-model="selectedApp" :items="allGammeApp" placeholder="Application" />
        <UCard :class="`w-30 h-8 text-sm bg-[var(--color-${gammeStore.currentGamme.toLowerCase()}-extralight)] flex items-center justify-center px-2`">
           <p class=" font-semibold text-center">
                  Version :
            </p>
        </UCard>
        <USelectMenu v-model="selectedVersion" :items="allAppVersion" placeholder="Version" :disabled="selectedApp === 'Toutes'" />
        <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass" placeholder="Rechercher..."  />
      </div>

      
      <UButton @click="downloadCSV" icon="i-heroicons-arrow-down-tray">
        Télécharger CSV
      </UButton>
    </div>

    <!-- Recherche -->


    <!-- Tableau -->
  
    <UTable 
    :data="filteredData" class="flex-1 " sticky />
  </UCard>

  

  
    </div>
    </template>
  </UDashboardPanel>
</template>