import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMockDB } from '~~/app/composables/db_mock'

export function usePageTitle() {
    const route = useRoute()
    const uuid = computed(() => route.params.uuid)
    const DB = useMockDB()

    const pageTitle = computed(() => {
        switch (route.name) {
            case 'dashboard':
                return 'Tableau de bord'
            case 'dashboard-client':
                return 'Mono-client'
            case `dashboard-client-uuid`:
                return `Client : ${DB.findClientNameByUuid(uuid.value)} - ${uuid.value}`
            case 'cartes':
                return 'Cartes'


            default:
                return 'Accueil'
        }
    })

    return { pageTitle }
}
