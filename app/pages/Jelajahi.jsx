'use client'

import { getIsland } from "../components/popularMenu"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Jelajahi() {
    const [Island, setIsland] = useState([])
    const [selectedIsland, setSelectedIsland] = useState(null)

    useEffect(() =>{
        const dataPulau = getIsland(8);
        setIsland(dataPulau);
        if(dataPulau.length > 0) {
            setSelectedIsland(dataPulau[0]);
        }
    },[])

   

    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="flex sm:h-93 h-screen w-full bg-[#f5ebdd] items-center px-3">
                <ul className="flex sm:flex-row flex-col h-full w-full items-center  sm:justify-around justify-center sm:gap-0 gap-5">
                    <li className="sm:w-1/2  w-full">
                        <ul className="flex flex-col sm:gap-4 gap-3">
                            <li>
                                <h3 className="font-[Montserrat]">
                                Jelajahi / Beranda / {selectedIsland?.nama}
                                </h3>
                                <ul className="flex text-sm gap-2 flex-wrap sm:flex-row pt-3 font-[Montserrat]">
                                    {Island.map((pulau) => (
                                        <li key={pulau.id}>
                                            <button
                                            type="button"
                                            onClick={() => setSelectedIsland(pulau)}
                                            className={`bg-[#eaeaea] rounded-full p-2 text-nowrap outline-1 sm:text-md text-xs cursor-pointer transition-colors ${
                                            selectedIsland?.id === pulau.id
                                            ? "bg-linear-to-br from-gray-800/85 to-gray-500/85 border border-white/30 shadow-lg shadow-black/5 text-white" : "bg-linear-to-br from-[#eaeaea]/30 to-gray-50/5 border border-black/30 shadow-lg shadow-white/5 text-black"}`}>
                                                {pulau.nama}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="flex flex-col sm:gap-3 gap-1">
                                <h1 className="font-bold font-[Playfair_Display] sm:text-6xl text-3xl">
                                    {selectedIsland?.nama}
                                </h1>
                                <p className="font-[Montserrat] sm:text-sm text-xs">
                                    {selectedIsland?.desc}
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img
                            src={selectedIsland?.gambar_pulau} 
                            alt={selectedIsland?.nama} 
                            className="sm:w-100 w-80 sm:h-80  h-60 object-cover rounded-2xl border border-white/30 shadow-lg shadow-black/10"
                            />
                    </li>
                </ul>
            </div>
            {/* Section Daftar Makanan Sesuai Pulau yang Dipilih */}
<div className="flex flex-col w-full px-6 py-10">
    <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="font-bold font-[Playfair_Display] sm:text-4xl text-2xl">
                Kuliner Khas {selectedIsland?.nama}
            </h2>
            <p className="text-gray-500 font-[Montserrat] text-sm mt-1">
                Menampilkan makanan khas dari pulau {selectedIsland?.nama}
            </p>
        </div>
    </div>

    {/* Grid Card Makanan */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-[Montserrat]">
        {selectedIsland?.makanan?.map((item) => (
            <li 
            key={item.id} 
            className="bg-[#eaeaea] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
            <Link
            href={`/jelajahi/${item.id}`}>
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-44 object-cover"
                    />
                <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                        <h3 className="font-bold font-[Playfair_Display] text-lg line-clamp-1">
                            {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                            Asal: {item.origin}
                        </p>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-300 text-xs">
                        <span className="text-gray-700 font-medium">
                            {item.price_range_ind}
                        </span>
                        <span className="text-amber-600 font-bold">
                            ★ {item.rating || "4.5"}
                        </span>
                    </div>
                </div>
                </Link>
            </li>
        ))}
    </ul>
</div>
        </div>
    )
}