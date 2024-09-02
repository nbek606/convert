export const useMenu = () => {
    const menuList = [
        {
            title: 'Главная',
            link: '/',
            name: 'home'
        },
        {
            title: 'Конвертация',
            link: '/convert',
            name: 'convert'
        },
    ]

    return {
        menuList
    }
}