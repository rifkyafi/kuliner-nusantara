'use client'

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import { getMenuById } from "@/app/components/route"
import { FaArrowRight, FaStar, FaUtensils } from "react-icons/fa6"
import Link from "next/link"

function DetailMakananContent() {
    const params = useParams();
    const router = useRouter();
    const [makanan, setMakanan] = useState(null)
    const [activeTab, setActiveTab] = useState("deskripsi")

    useEffect(() => {
        if (params?.id) {
            const data = getMenuById(params.id);
            setMakanan(data)
        }
    },[params]);

    if (!makanan) {
        return (
            <div>
                <h2>
                    Memuat Kuliner ...
                </h2>
                <p>
                    Data makanan tidak ditemukan
                </p>
                <Link
                href="/jelajahi">
                    Kembali
                </Link>
            </div>
        )
    }

    return (
        <div className="flex w-full flex-1 font-[Montserrat] justify-center sm:bg-[#f5ebdd] items-center  overflow-hidden">
            <div className="flex flex-col w-full min-h-screen  backdrop-blur-md sm:border sm:border-white/30 shadow-lg shadow-black/5 sm:rounded-2xl">
                <span className="flex w-full h-15  justify-between items-center px-2 rounded-t-2xl border-b-2 shrink-0">
                    <p className="text-gray-400">
                        {makanan.category}
                    </p>
                        <button
                        onClick={() => router.back()}
                        className="flex h-auto items-center gap-2 cursor-pointer">
                            Kembali <FaArrowRight/>                  
                        </button>
                </span>
                <div className="flex sm:flex-row flex-col gap-5">
                    <div className="flex sm:w-1/2 w-full">
                        <div>
                            <img                             
                            src={makanan.image}
                            alt={makanan.name} 
                            className="w-full sm:h-130 object-center"/>
                        
                        </div>
                    </div>
                    <div className="flex flex-col sm:h-135 sm:w-1/2 w-full sm:px-0 px-2 py-2 overflow-y-auto pr-3 scrollbar-custom">
                        <div className="sm:text-lg text-sm pt-2">
                            Jelajahi / {makanan.pulau} /  <span className="text-[#c59b27]"> {makanan.name} </span>
                        </div>
                        <h1 className="sm:text-5xl lg:text-6xl text-3x font-[Playfair_Display] font-semibold leading-tight">
                            {makanan.name}
                        </h1>
                        <span className="sm:pt-5 pt-2 sm:text-2xl text-lg text-[#c59b27] font-semibold">
                            Harga: {makanan.price_range_ind}
                        </span>
                        <p className="sm:text-md text-sm pt-2 pb-1">
                            {makanan.is_halal? "Halal" : "Non Halal"}
                        </p>
                        <p className="text-[11px] sm:text-xs text-stone-500 pt-1 tracking-wide leading-relaxed">
                            <span className="font-semibold text-stone-700">Terkait:</span>{" "}
                            <span className="text-stone-500/90 italic">
                                {makanan.search_keywords_ind?.join(", ")}
                            </span>
                        </p>
                        <ul className="flex w-full justify-around sm:pt-6 pt-3">
                            <li>
                                <button
                                type="button"
                                onClick={() => setActiveTab("deskripsi")}    
                                className={`pb-2 text-sm sm:text-base cursor-pointer font-medium transition-all  ${
                                    activeTab === "deskripsi"
                                    ? "border-b-2 border-[#c59b27] text-[#c59b27] font-bold"
                                    : "border-b-2 text-gray-500 hover:text-black"
                                }`}
                                >
                                    Deskripsi
                                </button>
                            </li>
                            <li>
                                <button
                                type="button"
                                onClick={() => setActiveTab("bahan")}    
                                className={`pb-2 text-sm sm:text-base cursor-pointer font-medium transition-all  ${
                                    activeTab === "bahan"
                                    ? "border-b-2 border-[#c59b27] text-[#c59b27] font-bold"
                                    : "border-b-2 text-gray-500 hover:text-black"
                                }`}
                                >
                                    Bahan utama
                                </button>
                            </li>
                            <li>
                                <button
                                type="button"
                                onClick={() => setActiveTab("rasa")}
                                className={`pb-2 text-sm sm:text-base cursor-pointer font-medium transition-all  ${
                                    activeTab === "rasa"
                                    ? "border-b-2 border-[#c59b27] text-[#c59b27] font-bold"
                                    : "border-b-2 text-gray-500 hover:text-black"
                                }`}
                                >
                                    Cita Rasa
                                </button>
                            </li>
                        </ul>
                        {/* subbab */}
                        <div className="h-61.25 pr-4">
                            {activeTab === "deskripsi" && (
                                <p
                                className="text-justify sm:pt-3 pt-1 sm:text-lg text-sm">
                                    {makanan.description_ind}
                                </p>
                            )}

                            {activeTab === "bahan" && (
                                <ul className="text-justify sm:pt-3 pt-1 sm:text-lg text-sm list-decimal px-5">
                                    {makanan.ingredients_ind?.map((bahan, idx) => (
                                        <li key={idx}>
                                            {bahan}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            
                            {activeTab === "rasa" && (
                                <ul className="text-justify sm:pt-3 pt-1 sm:text-lg text-sm list-decimal px-5">
                                    {makanan.flavor_profile?.map((rasa, idx) => (
                                        <li key={idx}>
                                             {rasa}
                                        </li>
                                    ))}
                                </ul>
                            )}
                           
                            
                        </div>
                    </div>
                </div>

                <div className="w-full h-full">
                    <h1 className="text-4xl font-[Playfair_Display] font-semibold">
                        Restoran yang Menyediakan
                    </h1>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DetailMakanan() {
    return (
        <Suspense
            fallback={
                <div className="flex w-full min-h-screen justify-center items-center bg-[#f5ebdd] font-[Montserrat] overflow-hidden">
                    <p className="text-stone-500 font-semibold animate-pulse text-sm">
                        Memuat data kuliner...
                    </p>
                </div>
            }
        >
            <DetailMakananContent />
        </Suspense>
    );
}