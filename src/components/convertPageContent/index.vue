<script lang="ts" setup>
    import { toRefs, ref, Ref, watch } from 'vue'

    import BaseBox from '@/ui/baseBox/index.vue'
    import BaseInput from '@/ui/baseInput/index.vue'
    import BaseSelect from '@/ui/baseSelect/index.vue'

    import { useConvertStore } from '@/store/convert'
    import { useCurrency } from '@/helpers/currency';

    const { baseCurrency } = toRefs(useConvertStore())
    const { getCurrencyByKey } = useConvertStore()

    const { currencyOptions } = useCurrency()

    const firstInputValue: Ref<string> = ref('0')
    const secondInputValue: Ref<string> = ref('0')
    const firstSelectedValue: Ref<string> = ref(baseCurrency.value)
    const secondSelectedValue: Ref<string> = ref('usd')        

    const firstInput = (value: string) : void => {
        firstInputValue.value = value
        calculate(value, true)
    }

    const secondInput = (value: string) : void => {
        firstInputValue.value = value
        calculate(value, false)
    }

    const calculate = (value: string, isFirst: boolean): void => {
        if (secondSelectedValue.value === firstSelectedValue.value) {
            firstInputValue.value = value
            secondInputValue.value = value

            return
        }

        if (isFirst)  {
            secondInputValue.value = value
            const currency: number = getCurrencyByKey(firstSelectedValue.value, secondSelectedValue.value)
            secondInputValue.value = (+value * currency).toFixed(2)
        } else {
            const currency: number = getCurrencyByKey(secondSelectedValue.value, firstSelectedValue.value)
            firstInputValue.value = (+value * currency).toFixed(2)
        }
    }

    watch(firstSelectedValue, () => {
        calculate(firstInputValue.value ,true)
    })

    watch(secondSelectedValue, () => {
        calculate(firstInputValue.value ,true)
    })
</script>
<template>
    <div class="convert__page-content">
        <div class="container">
            <BaseBox>
                <div class="convert__page-content__list">
                    <div class="convert__page-content__list-item">
                        <BaseSelect 
                            :options="currencyOptions"
                            v-model:selected="firstSelectedValue"
                        />
                        <BaseInput 
                            :value="firstInputValue"
                            type="number"
                            @input="firstInput"
                        />
                    </div>
                    <div class="convert__page-content__list-item">
                        <BaseSelect 
                            :options="currencyOptions"
                            v-model:selected="secondSelectedValue"
                        />
                        <BaseInput 
                            :value="secondInputValue"
                            @input="secondInput"
                        />
                    </div>
                </div>
            </BaseBox> 
        </div>   
    </div>
</template>
<style lang="scss">
    @import './style.scss';
</style>