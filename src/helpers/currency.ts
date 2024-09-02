import type { TBaseSelectOptions } from "@/types/ui"

export const useCurrency = () => {
    const currencyOptions: TBaseSelectOptions[] = [
        {
            id: 1,
            title: 'RUB',
            value: 'rub'
        },
        {
            id: 2,
            title: 'USD',
            value: 'usd'
        },
        {
            id: 3,
            title: 'EUR',
            value: 'eur'
        },

    ]

    return {
        currencyOptions
    }
}