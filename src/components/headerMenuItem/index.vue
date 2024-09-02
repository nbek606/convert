<script lang="ts" setup>
    import { RouteRecordNameGeneric } from 'vue-router';

    interface IProps {
        title: string,
        link: string,
        name: string,
        active: string | RouteRecordNameGeneric | null
    }

    const props = defineProps<IProps>()
</script>
<template>
    <div 
        class="header__menu-item"
        :class="{ 
            'header__menu-item__active': active == name 
        }"
    >
        <RouterLink :to="link">
            {{  title  }}
        </RouterLink>
    </div>
</template>
<style lang="scss">
    @import './style.scss';
</style>