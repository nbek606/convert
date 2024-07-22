<script lang="ts" setup>
    import TransitionFade from '@/components/transitionFade/index.vue'
    import Loader from '@/components/loader/index.vue'
        
    import { useRoute, useRouter } from 'vue-router'
    import { onMounted, ref, Ref } from 'vue'

    import { useTenderStore } from '@/store/tender'

    const { tenderDetails } = useTenderStore()

    const route = useRoute()
    const router = useRouter()

    let tender: Ref<any | null> = ref(null)

    const back = () => {
        router.push({ name: 'tender' })
    }    
    
    onMounted (async () => {
        try {
            tender.value = await tenderDetails(route.params.id)
        } catch (error) {
            console.log(error)
        } 
    })
</script>
<template>
    <TransitionFade>
        <div 
            class="tender__details-loader"
            v-show="!tender"
        >
            <Loader />
        </div>
        <div 
            class="tender__details container"
            v-show="tender"
        >
            <div class="tender__details-wrap">
                <div 
                    class="tender__details-back"
                    @click="back"
                >
                    Back
                </div>
                <h1 class="tender__details-title">
                    {{ tender?.title }}
                </h1>
                <h3 class="tender__details-category">
                    {{  tender?.category  }}
                </h3>
                <p class="tender__details-description">
                    {{  tender?.description }}
                </p>
            </div>
        </div>
    </TransitionFade>    
</template>
<style lang="scss">
    @import './style.scss';
</style>