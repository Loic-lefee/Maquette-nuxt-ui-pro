import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useGammeStore = defineStore('gamme', () => {
    const gamme = ref(['SECU', 'DOM', 'GRU', 'POP'])
    const currentGamme = ref('SECU')

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