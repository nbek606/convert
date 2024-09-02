<script lang="ts" setup>
    import Header from '@/components/header/index.vue'

    import { useConvertStore } from '@/store/convert'
    import { onMounted } from 'vue';
    

    const { currency } = useConvertStore()

    onMounted(async () => {
        await currency()
    })
</script>
<template>
    <Header />
    <router-view />
</template>