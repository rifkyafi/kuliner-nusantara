import DATA_PULAU from "./data";

const ALL_MENU =  DATA_PULAU.flatMap((pulau) =>
    pulau.menu[0].data.map((item) => ({
        ...item,
        pulau: pulau.nama
    }))
)

export function getPopularMenu(jumlah = 4) {
    const randomMenu = [...ALL_MENU].sort(() => 0.5 - Math.random());
    return randomMenu.slice(0, jumlah)
}

export default getPopularMenu;