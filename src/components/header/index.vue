<script lang="ts" setup>
    import HeaderMenu from '@/components/headerMenu/index.vue'
    import BaseCurrency from '@/components/baseCurrency/index.vue'
</script>
<template>
    <header class="header">
        <div class="header__wrap container">
            <HeaderMenu />
            <BaseCurrency />
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @import './style.scss';
</style>