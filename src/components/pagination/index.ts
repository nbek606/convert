export const usePagination = () => {

    const getShowPages = (maxPagesShown: number, totalPages: number, currentPage: number): Array<number> => {
        let startPage: number = 1
        let endPage: number = 1
        const pages: Array<number> = []

        if (totalPages <= maxPagesShown) {
            startPage = 1
            endPage = totalPages
        } else {
            let beforeCurrentPages = Math.floor(maxPagesShown / 2)
            let afterCurrentPages =  Math.ceil(maxPagesShown / 2) - 1

            if (currentPage <= beforeCurrentPages) {
                startPage = 1
                endPage = maxPagesShown
            } else if (currentPage + afterCurrentPages >= totalPages) {
                startPage = totalPages - maxPagesShown + 1
                endPage = totalPages
            } else {
                startPage = currentPage - beforeCurrentPages
                endPage = currentPage + afterCurrentPages
            }
        }

        for (let i:number = startPage; i <= endPage; i++) pages.push(i)

        return pages
    }

    return {
        getShowPages
    }
}