<template>
  <n-layout-header
    bordered
    class="sticky h-12 z-10 top-0 flex items-center px-5 py-2"
  >
    <n-tooltip>
      <template #trigger>
        <n-button
          class="mr-4"
          text
          @click="
            reloadNuxtApp({
              path: `/${getUserSettings().defaultDomain}/${getUserSettings().defaultEnv}/dashboard`,
              ttl: 1000,
            })
          "
        >
          <n-icon :depth="2" size="20">
            <IconRefresh />
          </n-icon>
        </n-button>
      </template>
      {{ t('header.refresh') }}
    </n-tooltip>
    <n-space :size="20" align="center" class="ml-auto leading-none">
      <n-tooltip>
        <template #trigger>
          <NuxtLink :to="routeInfos.buildNewPath('about')">
            <n-icon :depth="2" size="22">
              <IconHelp />
            </n-icon>
          </NuxtLink>
        </template>
        {{ $t('header.about') }}
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <n-a
            href="https://github.com/LOGITUD/SKYNET_APP/issues/new"
            target="_blank"
          >
            <n-icon :depth="2" size="22">
              <IconBrandGithub />
            </n-icon>
          </n-a>
        </template>
        {{ $t('header.open-issue') }}
      </n-tooltip>
      <n-popover :width="300" placement="bottom-end" trigger="click">
        <template #trigger>
          <n-badge dot processing>
            <n-icon :depth="2" size="22">
              <IconBell />
            </n-icon>
          </n-badge>
        </template>
        <n-list style="margin: 0">
          <n-list-item v-for="i in 5" :key="i">
            Notification {{ i }}
          </n-list-item>
        </n-list>
      </n-popover>
      <n-dropdown
        :options="options"
        placement="bottom-end"
        show-arrow
        @select="handleOptionsSelect"
      >
        <n-avatar round size="small">
          <gravatar-icon :email="email" class="!w-6 !h-6 max-w-max" />
        </n-avatar>
      </n-dropdown>
    </n-space>
    <config-modal
      v-if="isConfigModalVisible"
      v-model:show="isConfigModalVisible"
    />
  </n-layout-header>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components'
import {
  IconBell,
  IconBrandGithub,
  IconHelp,
  IconRefresh,
} from '@tabler/icons-vue'
import { useUserSettings } from '#imports'

const routeInfos = useRouteInfos(useRoute())
const { user, clear } = useUserSession()
const { getUserSettings } = useUserSettings()
const { t } = useI18n()
const isConfigModalVisible = ref(false)

enum Options {
  SETTINGS = 'settings',
  LOGOUT = 'logout',
}

const email = computed(() => user.value?.email ?? 'skynet@logitud.fr')
const greeting = computed(() => {
  const today = new Date()
  const curHr = today.getHours()
  const greeting =
    curHr < 12
      ? 'greeting.morning'
      : curHr < 18
        ? 'greeting.afternoon'
        : 'greeting.evening'
  return t(greeting, { name: user.value?.name as string })
})

const options = computed(() => [
  // TODO: Fix me
  {
    key: 'me',
    label: greeting.value,
    disabled: true,
  },
  { key: 'divider', type: 'divider' },
  {
    key: [Options.SETTINGS],
    label: t('header.settings'),
  },
  { key: 'divider', type: 'divider' },
  { key: [Options.LOGOUT], label: t('auth.sign-out') },
])

const handleOptionsSelect = async (key: Options[]): Promise<void> => {
  switch (key[0]) {
    case Options.LOGOUT:
      try {
        const { logoutUrl } = await $fetch('/api/logout')
        await clear()
        await navigateTo(logoutUrl, { external: true })
      } catch {
        await clear()
        await navigateTo('/login')
      }
      break
    case Options.SETTINGS:
      isConfigModalVisible.value = true
      break
    default:
      break
  }
}
</script>