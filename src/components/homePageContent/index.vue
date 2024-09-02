<script lang="ts" setup>
    import { computed, toRefs  } from 'vue'

    import BaseBox from '@/ui/baseBox/index.vue'

    import { useCurrency } from '@/helpers/currency';
    import { useConvertStore } from '@/store/convert'

    const { currencyOptions } = useCurrency()
    const { getCurrencyByKey } = useConvertStore()
    const { baseCurrency, currencyList } = toRefs(useConvertStore())

    const baseCurrencyConvertList = computed(() => {
        return currencyOptions.filter((item) => item.value != baseCurrency.value)
    })

    const getVolute = (value: string): number | undefined => {
        return getCurrencyByKey(value, baseCurrency.value)
    }
</script>
<template>
    <div 
        class="base__convert-list"
        v-if="currencyList"
    >
        <div class="container">
            <BaseBox>
                <div
                    v-for="item in baseCurrencyConvertList"
                    class="base__convert-list__item"
                >
                    <span>
                        1
                    </span>
                    <span>
                        {{  item.title  }}
                    </span>
                    <span>
                        =
                    </span>
                    <span>
                        {{ getVolute(item.value) }}
                    </span>
                    <span>
                        {{ baseCurrency }}
                    </span>
                </div>
            </BaseBox>    
        </div>
    </div>    
</template>
<style lang="scss">
    @import './style.scss';
</style>