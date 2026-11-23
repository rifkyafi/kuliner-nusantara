'use client'

import { getIsland } from "../components/popularMenu"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { FaMapPin, FaStar } from "react-icons/fa"

export default function Jelajahi() {
    const [Island, setIsland] = useState([])
    const [selectedIsland, setSelectedIsland] = useState(null)
    const searchParams = useSearchParams();
    const queryId = searchParams.get("id")

    useEffect(() =>{
        const dataPulau = getIsland(8);
        setIsland(dataPulau);
        
        if(dataPulau.length > 0) {
            if (queryId) {
                const pulauDipilih = dataPulau.find((parameter) => 
                String(parameter.id) === String(queryId));
    
                setSelectedIsland(pulauDipilih || dataPulau[0]);
            } else {
                setSelectedIsland(dataPulau[0])
            }
        }
    },[queryId])



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
                                            <Link
                                                href={`/jelajahi?id=${pulau.id}`}
                                                className={`rounded-full p-2 text-nowrap outline-1 sm:text-md text-xs cursor-pointer transition-colors ${
                                                    selectedIsland?.id === pulau.id
                                                        ? "bg-linear-to-br from-gray-800/85 to-gray-500/85 border border-white/30 shadow-lg shadow-black/5 text-white" 
                                                        : "bg-linear-to-br from-[#eaeaea]/30 to-gray-50/5 border border-black/30 shadow-lg shadow-white/5 text-black"
                                                }`}
                                            >
                                                {pulau.nama}
                                            </Link>
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
                            className="flex flex-col rounded-2xl bg-linear-to-br from-white via-[#fffaf2] to-[#faeedb] border border-amber-200/70 shadow-lg shadow-amber-900/5 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1.5 transition-all duration-300 text-stone-800"
                        >
                            <Link href={`/jelajahi/${item.id}`} className="flex flex-col h-full">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-40 object-cover rounded-2xl p-2"
                                />

                                <span className="flex flex-col py-2 px-3 flex-1 justify-between">
                                    <div>
                                        <p className="text-xs text-black truncate flex bg-amber-500 w-fit px-2.5 py-0.5 rounded-full font-medium">
                                            {selectedIsland?.nama}
                                        </p>
                                        <h3 className="text-lg font-bold font-[Playfair_Display] truncate mt-1.5">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs flex items-center gap-1 text-gray-500 mt-1">
                                            <FaMapPin className="text-amber-600 shrink-0"/> {item.origin}
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <p className="text-xs flex gap-1 text-stone-600">
                                            Kisaran: <span className="font-semibold text-stone-800">{item.price_range_ind}</span>
                                        </p>
                                        <p className="text-xs items-center flex gap-1 pt-1 font-semibold text-amber-600">
                                            <FaStar className="text-amber-500"/> {item.rating || "4.5"}
                                        </p>
                                    </div>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}