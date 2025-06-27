import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAppConfig } from '#app'

export const useGammeStore = defineStore('gamme', () => {
    const gamme = ref(['SECU', 'DOM', 'GRU', 'POP'])
    const currentGamme = ref('SECU')
    const appConfig = useAppConfig()

    function getColor() {
        const colors = [`${currentGamme.value.toLowerCase()}-extralight`,
        `${currentGamme.value.toLowerCase()}-light`,
        `${currentGamme.value.toLowerCase()}-medium`,
        `${currentGamme.value.toLowerCase()}-dark`
        ]
        return colors || null
    }

    return { gamme, currentGamme, getColor }
})