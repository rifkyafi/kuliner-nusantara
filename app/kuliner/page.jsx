'use client'

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { searchMenu } from "@/app/components/route"
import Link from "next/link"
import { FaMapPin, FaStar, FaMagnifyingGlass } from "react-icons/fa6"

function KulinerContent() {
    const searchParams = useSearchParams()
    const keyword = searchParams.get("q") || ""
    const [results, setResults] = useState([])

    useEffect(() => {
        setResults(searchMenu(keyword))
    }, [keyword])

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#f5ebdd] px-6 py-12">

            {/* Header Pencarian */}
            <h1 className="font-bold font-[Playfair_Display] sm:text-4xl text-2xl mb-2">
                Hasil Pencarian
            </h1>
            <p className="text-gray-500 font-[Montserrat] text-sm mb-8">
                Menampilkan{" "}
                <span className="font-bold text-stone-800">{results.length} hasil</span>
                {" "}untuk{" "}
                <span className="font-bold text-amber-600">"{keyword}"</span>
            </p>

            {/* Jika tidak ada hasil */}
            {results.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 mt-20 text-stone-500 font-[Montserrat]">
                    <FaMagnifyingGlass className="text-4xl text-amber-300" />
                    <p>Makanan "<strong>{keyword}</strong>" tidak ditemukan.</p>
                    <Link href="/" className="text-amber-600 underline text-sm">
                        ← Kembali ke Beranda
                    </Link>
                </div>
            ) : (
                /* Grid Hasil — desain card sama persis dengan Jelajahi.jsx */
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-[Montserrat]">
                    {results.map((item) => (
                        <li key={item.id}
                            className="flex w-full h-52 rounded-2xl bg-linear-to-br from-white via-[#fffaf2] to-[#faeedb] border border-amber-200/70 shadow-lg shadow-amber-900/5 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1.5 transition-all duration-300 text-stone-800"
                        >
                            <Link href={`/jelajahi/${item.id}`} className="flex h-full w-full">
                                <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-40 h-full object-cover rounded-2xl p-2 shrink-0"
                                />
                                <span className="flex flex-col py-3 px-3 flex-1 justify-between min-w-0">
                                    <div>
                                        <p className="text-xs text-black bg-amber-500 w-fit px-2.5 py-0.5 rounded-full font-medium truncate">
                                            {item.pulau}
                                        </p>
                                        <h3 className="text-base font-bold font-[Playfair_Display] truncate mt-1.5">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs flex items-center gap-1 text-gray-500 mt-1 truncate">
                                            <FaMapPin className="text-amber-600 shrink-0" /> {item.origin}
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-amber-200/40">
                                        <p className="text-xs flex gap-1 text-stone-600 truncate">
                                            Kisaran: <span className="font-semibold text-stone-800">{item.price_range_ind}</span>
                                        </p>
                                        <p className="text-xs flex items-center gap-1 pt-1 font-semibold text-amber-600">
                                            <FaStar className="text-amber-500 shrink-0" /> {item.rating || "4.5"}
                                        </p>
                                    </div>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

// Wajib dibungkus Suspense karena useSearchParams() di Next.js 16
export default function KulinerPage() {
    return (
        <Suspense>
            <KulinerContent />
        </Suspense>
    )
}