<script lang="ts" setup>
    import { computed, ref, Ref } from 'vue'
    import { usePagination } from './index.ts'

    interface IProps {
        totalPages: number,
        maxPagesShown?: number
    }

    const props = withDefaults(defineProps<IProps>(), {
        maxPagesShown: 5
    })

    const emit = defineEmits<{
        changePage: [page: number]
    }>()

    const { getShowPages } = usePagination()

    const currentPage: Ref<number> = ref(1)

    const isNextPage = computed((): boolean => currentPage.value <= props.totalPages - 1) 
    const isPrevPage = computed((): boolean => currentPage.value > 1)
    const pagesShown = computed((): Array<number> => getShowPages(props.maxPagesShown, props.totalPages, currentPage.value))

    const changeCurrentPage = (page: number) => {
        currentPage.value = page
        emit('changePage', page)
    }
</script>
<template> 
    <div class="pagination">
        <button 
            class="pagination__btn"
            v-show="isPrevPage"
            @click="changeCurrentPage(currentPage - 1)"
        >
            Prev
        </button>
        <button
            class="pagination__btn"
            v-for="item in pagesShown"
            :class="{ 'pagination__btn-current': item == currentPage }"
            @click="changeCurrentPage(item)"
        >
            {{  item  }}
        </button>
        <button  
            class="pagination__btn"
            v-show="isNextPage"
            @click="changeCurrentPage(currentPage + 1)"
        >
            Next
        </button>
    </div>
</template>
<style lang="scss" scoped>
    @import './style.scss';
</style>