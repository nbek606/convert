<script lang="ts" setup>
    import { Ref, ref } from 'vue'

    const searchText: Ref<string> = ref('')

    const emit = defineEmits<{
        sendSearch: [searchText: string]
    }>()
</script>
<template>
    <div class="search">
        <div class="search__wrap">
            <input 
                class="search__input" 
                v-model="searchText"
            />
            <button
                class="search__btn"
                @click="emit('sendSearch', searchText)"
            >
                Search
            </button>
        </div>
    </div>
</template>
<style lang="scss">
    @import "./style.scss";
</style>