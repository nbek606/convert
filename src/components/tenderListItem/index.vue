<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import { Ref, ref} from 'vue'

    interface IProps {
        id: string,
        title: string,
        category: string,
        description?: string
    }

    const props = defineProps<IProps>()
    
    const showItem: Ref<boolean> = ref(true)

    const router = useRouter()

    const sendDetails = (id: string) => {
        router.push({ name: 'tender-details', params: { id: id } })
    }
</script>
<template>
    <div class="tender__list-item">
        <Transition>
            <div 
                class="tender__list-item__wrap"
                v-show="showItem"
            >
                <div 
                    class="tender__list-item__title"
                    @click="sendDetails(id)"
                >
                    <h1>
                        {{  title  }}
                    </h1>
                </div>
                <div  class="tender__list-item__category">
                <p>
                        {{ category }}
                </p>
                </div>
                <div  class="tender__list-item__description">
                    <p>
                        {{  description  }}
                    </p>
                </div>
            </div>    
        </Transition>    
    </div>
</template>
<style lang="scss">
    @import "./style.scss";
</style>