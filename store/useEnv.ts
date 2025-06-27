import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAppConfig } from '#app'

export const useEnvStore = defineStore('env', () => {
    const env = ref(['OVH-PREPROD', 'OVH-PROD', 'OVH-DEV', 'SCW-STAGING', 'SCW-PROD', 'SCW-DEV'])
    const currentEnv = ref('OVH-PROD')
    const appConfig = useAppConfig()

    function getColor() {
        const colors = [
            `${currentEnv.value.toLowerCase()}-light`,
            `${currentEnv.value.toLowerCase()}-medium`,
            `${currentEnv.value.toLowerCase()}-dark`
        ]
        return colors || null
    }

    function getNormalizedEnv() {
        const envStr = currentEnv.value.toUpperCase()
        if (envStr.includes('-PREPROD') || envStr.includes('STAGING')) return 'PRE-PROD/STAGING'
        if (envStr.includes('-PROD')) return 'PROD'
        if (envStr.includes('-DEV')) return 'DEV'
        return 'UNKNOWN'
    }

    function getColorByEnv() {
        const normalized = getNormalizedEnv()
        switch (normalized) {
            case 'PROD':
                return 'bg-red-600'
            case 'PRE-PROD/STAGING':
                return 'bg-purple-600'
            case 'DEV':
                return 'bg-indigo-500'
            default:
                return ''
        }
    }

    function getIconByEnv() {
        const normalized = getNormalizedEnv()
        switch (normalized) {
            case 'PROD':
                return 'mingcute:warning-fill'
            case 'PRE-PROD/STAGING':
                return 'eos-icons:products'
            case 'DEV':
                return 'zondicons:coffee'
            default:
                return 'codicon:workspace-unknown'
        }
    }

    return { env, currentEnv, getColor, getNormalizedEnv, getColorByEnv, getIconByEnv }
})