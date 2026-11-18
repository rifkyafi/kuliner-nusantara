'use client'
import { useState, useEffect } from "react";
import { getPopularMenu, getImagePopularMenu } from "@/app/components/popularMenu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DriftWall from "@/lib/DriftWall";


export default function Homepage(){
    // popular menu
    const[popularMenu, setPopularMenu] = useState([]);
    const [imagePopularMenu, setImagePopularMenu] = useState([])

    useEffect(() => {
        setPopularMenu(getPopularMenu(4))
    }, [])

    useEffect(() => {
        setImagePopularMenu(getImagePopularMenu(15))
    },[])

    const IMAGES_ITEMS = imagePopularMenu.map((makanan) => ({
        image: makanan.image,
        title: makanan.name,
        href: makanan.name   
    }))


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
                                        <p className="flex h-full pt-1">
                                            Populer:
                                        </p>
                                            <ul className="flex text-sm gap-2 flex-wrap">
                                                {popularMenu.map((makanan) => (
                                                    <li key={makanan.id}>
                                                        <button
                                                        type="button"
                                                        className="bg-[#eaeaea] rounded-full p-2 text-nowrap outline-1">
                                                            {makanan.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                    </ul>
                                </div>
                        </div>
                    </li>
                    <li className="flex w-1/2 h-screen relative justify-end target">
                     <DriftWall
                        items={IMAGES_ITEMS.length > 0? IMAGES_ITEMS : undefined}
                        columns={5}
                        tileWidth={150}
                        tileHeight={100}
                        gap={18}
                        tilt={16}
                        turn={-14}
                        perspective={1200}
                        depth={120}
                        speed={42}
                        direction="up"
                        variance={0.45}
                        parallax={0.6}
                        lift={64}
                        fade={0.6}
                        dim={0.55}
                        overlayColor="#060010"
                        radius={14}
                        roll={0}
                        pauseOnHover={false}
                        grayscale={false}
                    />
                    </li>
                </ul>
            </div>
        </div>
    )
}