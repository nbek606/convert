<script lang="ts" setup>
    import { toRefs } from 'vue'

    import BaseSelect from '@/ui/baseSelect/index.vue'
    import { useCurrency } from '@/helpers/currency';
    import { useConvertStore } from '@/store/convert';

    const { currencyOptions } = useCurrency()
    const { changeBaseCurrency } = useConvertStore()
    const { baseCurrency } = toRefs(useConvertStore())

</script>
<template>
    <div class="base__currency">
        <BaseSelect
            :options="currencyOptions"
            :value="baseCurrency"
            @change="changeBaseCurrency"
        />
    </div>
</template>
<style lang="scss" scoped>
    @import './style.scss';
</style>