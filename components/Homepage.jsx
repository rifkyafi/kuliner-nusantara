'use client'
import { useState, useEffect } from "react";
import { getPopularMenu } from "@/app/components/popularMenu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import CircularCarousel from '@/app/components/CircularCarousel';
import DATA_PULAU from "@/app/components/data";


export default function Homepage(){
    // popular menu
    const[popularMenu, setPopularMenu] = useState([]);

    useEffect(() => {
        setPopularMenu(getPopularMenu(4))
    }, [])

    const CAROUSEL_ITEMS = DATA_PULAU.map((pulau) => {
        const menu = pulau.menu[0].data.find((m) => Boolean(m.image));

        return{
            src: menu.image,
            alt: menu.name,
            title:menu.name,
            subtitle:pulau.nama
        }
    })


    return(
        <div className="flex w-full min-h-screen bg-[#f5ebdd] ">
            <div className="flex w-full h-auto items-center">
                <ul className="flex w-full h-full items-center  justify-center">
                    <li className="w-1/2 flex  h-auto justify-center ">
                        <div className="flex flex-col  w-[90%] h-auto ">
                            
                                { /* sub title */}
                                <h2 className="flex text-black bg-linear-to-r from-rose-400 via-orange-400 to-amber-300 w-56 h-10 items-center justify-center rounded-full shadow-xs shadow-orange-400">
                                    Eksplorasi Kuliner Indonesia
                                </h2>

                                {/* title */}
                                <h1 className="text-8xl text-black font-[Times_New_Romans] pt-9 ">
                                    Jelajahi Rasa Khas Nusantara
                                </h1>

                                {/* text */}
                                <p className="text-black font-[Montserrat] pb-3">
                                    Temukan makanan khas dari Sumatera, Jawa, Kalimantan, Sulawesi, hingga Papua. Lengkap dengan restoran, harga, jam buka, dan ulasan.
                                </p>
                                {/* search bar */}
                                <div className="flex w-145 h-16 bg-[#eaeaeaea] items-center px-4 text-black mt-4 rounded-full outline-1">
                                    <FaMagnifyingGlass
                                    size={25}/>
                                    <p>
                                        <input type="text" placeholder="Cari makanan atau lainnya"
                                        className="outline-none text-md pl-3"/>     
                                </p>
                                <div className="flex w-full h-full items-center justify-end py-3">
                                    <p className="w-24 h-12 flex items-center justify-center bg-black hover:bg-radial from-[#eaeaea] to-white  text-white  hover:text-black  transitionduration-300 rounded-full py-2">
                                        Cari
                                    </p>
                                </div>
                                </div>
                                <div className="flex w-145 pt-5">
                                    <ul className="flex gap-3 font-[Montserrat]">
                                        <p className="flex h-full items-center">
                                            Populer:
                                        </p>
                                            <ul className="flex text-sm gap-2 flex-wrap">
                                                {popularMenu.map((makanan) => (
                                                    <li key={makanan.id}>
                                                        <button
                                                        type="button"
                                                        className="bg-[#eaeaea] rounded-full py-2 px-1 text-nowrap outline-1">
                                                            {makanan.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                    </ul>
                                </div>
                        </div>
                    </li>
                    <li className="flex w-1/2 h-screen ">
                    <CircularCarousel
                        items={CAROUSEL_ITEMS}
                        preset="cylinder"
                        intro="rise"
                        cardWidth={220}
                        aspectRatio={1}
                        speed={14}
                        captions={false}
                        gap={25}
                        tilt={-5}
                        curve={1}
                        perspective={2500}
                        autoplay="drift"
                        interval={3}
                        direction="left"
                        momentum={0.6}
                        snap
                        pauseOnHover
                        focusOnClick
                        draggable
                        parallax={0.3}
                        stretch={0.5}
                        fadeColor="#000000"
                        depthFade={0.55}
                        innerShade={0.6}
                        cornerRadius={12}
                    />
                    </li>
                </ul>
            </div>
        </div>
    )
}