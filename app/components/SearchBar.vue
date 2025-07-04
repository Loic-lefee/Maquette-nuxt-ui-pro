<script setup>
import { ref, computed } from 'vue'
import { extract_uuid_name } from '~~/app/composables/db_mock'
import { useRouter } from 'vue-router'


definePageMeta({
  name: 'dashboard-client',
})


const router = useRouter()


const rawClients = extract_uuid_name()

const clients = ref(
  rawClients.map(c => ({
    label: `${c.name} - ${c.uuid}`, 
    value: c.uuid,                  
  }))
)

const searchText = ref('')   // Ce que tape l'utilisateur
const selectedValue = ref(null) // Valeur sélectionnée (uuid)



const filteredClients = computed(() => {
  if (!searchText.value) return clients.value
  const q = searchText.value.toLowerCase()
  return clients.value.filter(
    client =>
      client.label.toLowerCase().includes(q) ||
      client.value.toLowerCase().includes(q)
  )
})

watch(selectedValue, (newVal) => {
  if (!newVal) return
  const selectedClient = clients.value.find(c => c.value === newVal)
  if (selectedClient) {
    searchText.value = selectedClient.label
  }
  router.push({ path: `/dashboard/client/${newVal.value}`})
  
})
</script>

<template> 
  <div class="p-4">
    <UInputMenu
      v-model="selectedValue"
      v-model:search="searchText"
      :items="filteredClients"
      icon="i-heroicons-magnifying-glass"
      placeholder="Rechercher une ville ou UUID..."
      class="w-full"
      size="xl"
    />
  </div>
</template>