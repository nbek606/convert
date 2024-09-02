<script lang="ts" setup>
    import type { TBaseSelectOptions } from '@/types/ui'
    
    interface IProps {
        options: TBaseSelectOptions[],
        selected?: string
    }

    const props = defineProps<IProps>()

    const emit = defineEmits<{
        (e: 'update:selected', value: string): void
        (e: 'change', value: string): void
    }>()

    const onChange = (event: Event) => {
        emit('update:selected', (event.target as HTMLInputElement).value)
        emit('change', (event.target as HTMLInputElement).value)
    }
</script>
<template>
    <select
        :value="selected"
        class="base__select"
        @change="onChange($event)"
    >
        <option
            class="base__select-option"
            v-for="item in options"
            :key="item.id"
            :value="item.value"
        >
            {{ item.title }}
        </option>
    </select>
</template>
<style lang="scss" scoped>
    @import './index.scss';
</style>