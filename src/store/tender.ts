import { defineStore } from "pinia";
import { ref, Ref, computed } from 'vue'
import { useFetch } from "@/plugins/fetch";

export const useTenderStore = defineStore('tender',  () => {
    let tenderList: Ref<any[]> = ref([])
    let totalPages: Ref<number> = ref(1)
    let errorMsg: Ref<string> = ref('')
    let searchText: Ref<string> = ref('')

    const tender = async (page: number) => {
        try {
            const response = await useFetch(`https://api.test-webest.ru/list/?page=${page}`, 'get')

            tenderList.value = response?.data?.slice(0, 30)
            totalPages.value = response?.page_count
        } catch (error)  {
            errorMsg.value = ''
        }
    }

    const tenderDetails = async (id: string | string[]) => {
        return await useFetch(`https://api.test-webest.ru/element/?id=${id}`, 'get')
    }

    const getTenderList = computed(() => {
        if (searchText.value)  {
            return tenderList.value.filter(item =>  item.title.includes(searchText.value))
        }

        return tenderList.value
    })

    const changeSearchText = (text: string) => {
        searchText.value = text
    }

    return {
        getTenderList,
        totalPages,
        changeSearchText,
        tenderDetails,
        tender
    }
})