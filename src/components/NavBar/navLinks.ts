export type navLink = {
    title: string,
    link: string
}

const navLinks: Array<navLink> = [
    {
        title: "Главная",
        link: "/"
    },
    {
        title: "API запрос",
        link: "/apiCORS"
    },
    {
        title: "Внешний вид",
        link: "/theme",
    }
]

export default navLinks;

