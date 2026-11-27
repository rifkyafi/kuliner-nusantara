'use client'

import { getIsland } from "../components/route"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { FaMapPin, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Jelajahi() {
    const [Island, setIsland] = useState([])
    const [selectedIsland, setSelectedIsland] = useState(null)
    const searchParams = useSearchParams();
    const queryId = searchParams.get("id")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 9

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

    useEffect(() => {
        setCurrentPage(1)
    },[selectedIsland])

    const totalItems = selectedIsland?.makanan?.length || 0
    const totalPages = Math.ceil(totalItems/itemsPerPage)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentMakanan = selectedIsland?.makanan?.slice(indexOfFirstItem, indexOfLastItem) || []

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
                                        <li key={pulau.id} className="flex">
                                            <Link
                                                href={`/jelajahi?id=${pulau.id}`}
                                                className={`rounded-full p-2 text-nowrap outline-1 sm:text-sm text-xs cursor-pointer transition-colors ${
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
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full font-[Montserrat]">
                    {currentMakanan.map((item) => (
                        <li 
                            key={item.id} 
                            className="w-full h-auto sm:h-50 rounded-2xl bg-linear-to-br from-white via-[#fffaf2] to-white/30 border border-amber-200/70 shadow-lg shadow-amber-900/5 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1.5 transition-all duration-300 text-stone-800 overflow-hidden"
                        >
                            <Link 
                                href={`/jelajahi/${item.id}`} 
                                className="flex sm:flex-row flex-col h-full">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full sm:w-60 h-50 object-cover rounded-2xl p-2"
                                />

                                <span className="flex flex-col py-2 px-3 flex-1 justify-between mt-2">
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
                                    <div className="pt-1">
                                        <p className="text-xs items-center flex gap-1 pt-1 font-semibold text-amber-600">
                                            Rating: <FaStar className="text-amber-500"/> {item.rating || "4.5"}
                                        </p>
                                        <p className="text-xs flex gap-1 text-stone-600 pt-2">
                                            Kisaran: <span className="font-semibold text-stone-800">{item.price_range_ind}</span>
                                        </p>
                                        <p className={`text-xs mt-2 bg-gray-400 flex w-fit  py-1 px-2 rounded-full ${
                                            item.is_halal 
                                            ? "bg-gray-500/10 text-black" 
                                            : "bg-gray-500 text-white"}`}>
                                                {item.is_halal 
                                                ? "Halal"
                                                : "Non Halal"}
                                        </p>
                                    </div>
                                    </div>

                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center gap-2 mt-10 font-[Montserrat]">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1,1))}
                        disabled={currentPage === 1}
                        className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                        currentPage === 1
                            ? "opacity-30 cursor-not-allowed border-gray-300 text-gray-400"
                            : "bg-white border-amber-300 text-stone-700 hover:bg-amber-50 hover:border-amber-500 shadow-sm"
                        }`}
                        title="Halaman Sebelumnya">
                        <FaChevronLeft className="text-xs" />
                    </button>
                        <span>
                            <span>{currentPage}</span> / {totalPages}
                        </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                        currentPage === totalPages
                            ? "opacity-30 cursor-not-allowed border-gray-300 text-gray-400"
                            : "bg-white border-amber-300 text-stone-700 hover:bg-amber-50 hover:border-amber-500 shadow-sm"
                        }`}
                        title="Halaman Selanjutnya">
                         <FaChevronRight className="text-xs" />
                    </button>
                </div>
            </div>
        </div>
    )
}