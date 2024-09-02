<script lang="ts" setup> 
    import { Ref, onMounted, ref, computed } from 'vue'
    import { useRoute, useRouter, RouteRecordNameGeneric } from 'vue-router'

    import HeaderMenuItem from '@/components/headerMenuItem/index.vue'

    import { useMenu } from '@/helpers/menu'

    const route = useRoute()
    const router = useRouter()
    const { menuList } = useMenu()

    const active: Ref<string | RouteRecordNameGeneric | null> = ref(null)

    const changeMenuItemActive = (name: string | RouteRecordNameGeneric) => {
        active.value = name
    }

    const currentRouteName = computed(() => {
        return route.name
    })

    onMounted( async () => {
        await router.isReady()
        changeMenuItemActive(currentRouteName.value)
    })
</script>
<template>
    <nav class="header__menu">
        <HeaderMenuItem 
            v-for="item in menuList"
            :key="item.name"
            :title="item.title"
            :name="item.name"
            :link="item.link"
            :active="active"
            @click="changeMenuItemActive(item.name)"
        />
    </nav>
</template>
<style lang="scss">
    @import './style.scss';
</style>