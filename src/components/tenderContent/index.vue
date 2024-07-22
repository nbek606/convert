<script lang="ts" setup>
    import Pagination from "@/components/pagination/index.vue"
    import TransitionFade from '@/components/transitionFade/index.vue'
    import TenderList from "@/components/tenderList/index.vue"
    import Search from "@/components/search/index.vue"
    import Loader from "@/components/loader/index.vue"

    import { onMounted, toRefs, ref, Ref, computed } from "vue";
    import { useTenderStore } from '@/store/tender'

    const { tender,changeSearchText } = useTenderStore()
    const { getTenderList, totalPages } = toRefs(useTenderStore())

    const sendSearch = (searchText: string) => {
        changeSearchText(searchText)
    }

    const tenderRefEl: Ref<HTMLElement | null> = ref(null)
    const isSwitchedPagination = ref(false)    

    const sendTender = async (page: number) => { 
       tenderRefEl.value?.scrollIntoView({ behavior: 'smooth' })  
       isSwitchedPagination.value = true
       await tender(page)
       isSwitchedPagination.value = false
    }

    const isTenderList = computed(() => {
        return getTenderList?.value?.length > 0
    })

    onMounted(async () => {
        await sendTender(1) 
    })

</script>
<template>
    <div 
        class="tender__content container" 
        ref="tenderRefEl"
    >

        <h1 class="tender__content-title">
            Tenders
        </h1>

        <TransitionFade>
            <div 
                class="tender__content-wrap"
                v-show="isTenderList"
            >
                <Search 
                    @sendSearch="sendSearch"
                />

                <TenderList 
                    :list="getTenderList"
                    :is-switched-pagination="isSwitchedPagination"
                />
                
                <Pagination 
                    :total-pages="totalPages"
                    @changePage="sendTender"
                />
            </div>
            <div 
                v-show="!isTenderList"
                class="tender__content-loader"
            >
                <Loader />
            </div>
        </TransitionFade>    
    </div> 
</template>
<style lang="scss">
    @import './style.scss';
</style>