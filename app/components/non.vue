<template>
  <n-layout-sider
    :width="220"
    :native-scrollbar="false"
    :collapsed="store.collapsed.value"
    collapse-mode="width"
    show-trigger="bar"
    bordered
    @update:collapsed="store.toggle"
  >
    <NuxtLink to="/" #="{ navigate, href }" custom>
      <n-a class="sticky top-0 z-10 flex p-2" :href="href" @click="navigate">
        <CyberdyneIcon v-if="store?.collapsed.value" />
        <CyberdyneTextIcon v-else />
      </n-a>
    </NuxtLink>
    <n-menu
      :value="currentKey"
      :default-expanded-keys="expandedKeys"
      :options="options"
      :root-indent="18"
      @update:value="
        (k: string) => {
          currentKey = k
        }
      "
    />
    <footer
      :class="`absolute bottom-0 w-full flex flex-col justify-center items-center gap-4 ${!store?.collapsed.value ? 'p-4' : 'py-4'}`"
    >
      <domain-selector
        v-if="route.domain"
        :action-class="!store?.collapsed.value ? 'w-full' : ''"
        :reduced="!store?.collapsed.value"
        :placement="store?.collapsed.value ? 'right' : 'top'"
      />
      <environment-selector
        v-if="route.env"
        :action-class="!store?.collapsed.value ? 'w-full' : ''"
        :reduced="!store?.collapsed.value"
        :placement="store?.collapsed.value ? 'right' : 'top'"
      />
    </footer>
  </n-layout-sider>
</template>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { NuxtLink } from '#components'

import type { SidebarInjection } from '~/components/sidebar-provider.vue'

import Icon from '~/components/icon-wrapper'
import CyberdyneIcon from '~/assets/icons/cyberdyne.svg'
import CyberdyneTextIcon from '~/assets/icons/cyberdyne-text.svg'
import type { MenuNode, MenuResponse } from '~/composables/menu'
import { useRouteInfos } from '#imports'

const store = inject(useAppConfig().injectionKeys.sidebar) as SidebarInjection

const route = useRouteInfos(useRoute())

const rawData = ref<MenuResponse>([])

const loadMenu = async (domain: string, environment: string) => {
  rawData.value = (await useMenu(domain, environment)).data.value
}

watch(
  () => [route.value.env, route.value.domain],
  async ([env, domain]) => {
    if (!env || !domain) return
    await loadMenu(domain, env)
  },
  { immediate: true },
)

const menus = computed(() => rawData.value)

const { t } = useI18n()

const mapping = (items: MenuResponse): MenuOption[] =>
  items.map((item: MenuNode) => ({
    ...item,
    key: item.id,
    label:
      item.link != null
        ? () =>
            h(
              NuxtLink,
              { to: `/${route.value.domain}/${route.value.env}${item.link}` },
              { default: () => t(item.name) },
            )
        : () => t(item.name),
    icon:
      item.icon != null ? () => h(Icon, { iconName: item.icon }) : undefined,
    children: item.children?.length > 0 && mapping(item.children),
  }))

const options = computed(() => (menus.value ? mapping(menus.value) : []))

const currentKey = ref<string>('')
const expandedKeys = ref<string[]>([])

const routeMatched = (menu: MenuNode): boolean =>
  route.value.path === menu?.link &&
  (menu.params == null ||
    JSON.stringify(route.value.params) === JSON.stringify(menu.params))

const matchExpanded = (items: MenuNode[]): boolean => {
  let matched = false
  for (const item of items) {
    if (item.children != undefined && matchExpanded(item.children)) {
      expandedKeys.value.push(item.id)
    }
    if (routeMatched(item)) {
      currentKey.value = item.id
      matched = true
    }
  }
  return matched
}

watchEffect(() => menus.value && matchExpanded(menus.value))
</script>

<style lang="scss" scoped>
.nuxt-icon {
  @apply w-full
  h-6;
}

.logo {
  padding: 12px 20px;
  background: var(--n-color);
  text-decoration: none;
}

.n-layout-sider--collapsed .logo {
  padding: 9px;
}
</style>