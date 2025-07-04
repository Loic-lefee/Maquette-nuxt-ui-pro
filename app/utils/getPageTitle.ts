import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function usePageTitle() {
    const route = useRoute()
    const uuid = computed(() => route.params.uuid)

    const pageTitle = computed(() => {
        switch (route.name) {
            case 'dashboard':
                return 'Tableau de bord'
            case 'dashboard-client':
                return 'Mono-client'
            case `dashboard-client-uuid`:
                return `Client : ${uuid.value}`


            default:
                return 'Accueil'
        }
    })

    return { pageTitle }
}
