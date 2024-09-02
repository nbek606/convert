<script lang="ts" setup>
    interface IProps {
        value?: string,
        type?: string
    }

    const props = defineProps<IProps>()

    const emit = defineEmits<{
        (e: 'input', value: string): void
    }>()

    const onInput = (event: Event) => {
        emit('input', (event.target as HTMLInputElement).value)
    }
</script>
<template>
    <input 
        class="base__input"
        :value="value"
        :type="type"
        @input="onInput($event)"
    />
</template>
<style lang="scss">
    @import './style.scss';
</style>