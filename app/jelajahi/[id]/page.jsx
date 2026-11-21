'use client'

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { getMenuById } from "@/app/components/popularMenu"
import { FaArrowRight, FaStar, FaUtensils } from "react-icons/fa6"
import Link from "next/link"

export default function DetailMakanan() {
    const params = useParams();
    const router = useRouter();
    const [makanan, setMakanan] = useState(null)

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
        <div className="flex w-full  min-h-screen font-[Montserrat] justify-center bg-[#f5ebdd] items-center -mt-10">
            <div className="flex flex-col w-full h-150 mx-5 bg-[#eaeaea]/75 backdrop-blur-md border border-white/30 shadow-lg shadow-black/5 rounded-2xl justify-between  ">
                <span className="flex w-full h-15  justify-between items-center px-2 rounded-t-2xl border-b-2">
                    {makanan.category}
                        <button
                        onClick={() => router.back()}
                        className="flex h-auto items-center gap-2 cursor-pointer">
                            Kembali <FaArrowRight/>                  
                        </button>
                </span>
                <div className="flex flex-row">
                    <div className="flex sm:w-1/2 w-full">
                        <div>
                            <img 
                            src={makanan.image}
                            alt={makanan.name} 
                            className="w-full h-135 object-cover rounded-bl-2xl"/>
                        
                        </div>
                    </div>
                    <div>
                        <div>
                            Jelajahi / {makanan.pulau} /{makanan.name}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}