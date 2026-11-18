import DATA_PULAU from "../../data";

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

const RECOM_MENU = DATA_PULAU.flatMap((recom) => 
    recom.menu[0].data.map((item) => ({
        id: item.id,
        name: item.name,
        origin: item.origin,
        image: item.image,
        category: item.category,
        price_range_ind: item.price_range_ind,
        price_source: item.price_source,
        pulau: recom.nama,
        price: item.price_range_ind,
        rating: item.rating
    }))
)

export function getRecomendationMenu(jumlah = 5) {
    const recomMenu = [...RECOM_MENU].sort(() => 0.5 - Math.random());
    return recomMenu.slice(0, jumlah)
}

const ALL_IMAGE = ALL_MENU.filter((item) => 
    Boolean(item.image)
)

export function getImagePopularMenu(jumlah = 15) {
    const randomImage = [...ALL_IMAGE].sort(() => 0.5 - Math.random());
    return randomImage.slice(0, jumlah)
}


const ALL_ISLAND = DATA_PULAU.map((pulau) => ({
    id: pulau.id,
    nama:pulau.nama,
    bentuk_pulau: pulau.bentuk_pulau,
    total_kuliner: pulau.menu[0].total,
    preview_menu: pulau.menu[0].data.slice(0,2)
}));

export function getIsland(jumlah =  8){
    const randomIsland = [...ALL_ISLAND].sort(() => 0.5 - Math.random());
    return randomIsland.slice(0,jumlah)
}

export default  getImagePopularMenu;