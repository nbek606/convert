import { defineStore } from "pinia";
import { ref, Ref } from "vue";

import type { TCurrency } from "@/types/convert";

import axios from "@/plugins/axios";

export const useConvertStore = defineStore('convert', () => {
    const currencyList: Ref<TCurrency | null> = ref(null)
    const baseCurrency: Ref<string> = ref('rub')

    const currency = async () => {
        try {
            const { data } = await axios.get('/currency')
            currencyList.value = data
        } catch (error) {
            console.log(error)
        }
    }

    const changeBaseCurrency = (value: string): void => {
        baseCurrency.value = value
    }

    const getCurrencyByKey = (firstValue: string, secondValue: string): number => {
        return Number(currencyList.value?.[`${firstValue}-${secondValue}`])
    }

    return {
        currencyList,
        baseCurrency,
        getCurrencyByKey,
        changeBaseCurrency,
        currency
    }
})