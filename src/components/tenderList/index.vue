<script lang="ts" setup>
    import TenderListItem from '@/components/tenderListItem/index.vue'
    import TransitionFade from '@/components/transitionFade/index.vue'
    import Loader from "@/components/loader/index.vue"

    interface IProps {
        list: Array<any>,
        isSwitchedPagination?:boolean   
    }

    const props = defineProps<IProps>()
</script>
<template>
    <div class="tender__list">
        <TransitionFade>
            <div 
                class="tender__list-wrap"
                v-show="!isSwitchedPagination"
            >
                <TenderListItem
                    v-for="item in list" 
                    :title="item.title"
                    :id="item.id"
                    :category="item.category"
                    :description="item.description"
                />
            </div>
            <div 
                class="tender__list-loader"
                v-show="isSwitchedPagination"
            >
                <Loader />
            </div>
        </TransitionFade>
       
    </div>
</template>
<style lang="scss">
    @import "./style.scss";
</style>