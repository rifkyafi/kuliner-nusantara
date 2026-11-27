"use client"

import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaMagnifyingGlass ,FaBars, FaX} from "react-icons/fa6";

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/kuliner?q=${encodeURIComponent(searchQuery.trim())}`)
            setSearchOpen(false)
            setSearchQuery("")
        }
    }
    useEffect(()=> {
        const tutupDenganEsc = (tekanTombol) => {
            if (tekanTombol.key === "Escape") {
                setSearchOpen(false)
                setSearchQuery("")
            }
        }
        if (searchOpen) window.addEventListener("keydown", tutupDenganEsc)
            return() => window.removeEventListener("keydown", tutupDenganEsc)
    },[searchOpen])

    return(
        <div className="flex w-full h-18 justify-center bg-[#f5ebdd]">
        <div className="fixed sm:w-2/3 w-full justify-between sm:h-15 h-18 bg-[#eaeaea]/75 backdrop-blur-md sm:border border-b border-white/30 shadow-lg  shadow-black/5 font-[Montserrat] font-semibold text-black z-10 sm:my-3 my-0 sm:rounded-2xl">
            <div className="flex items-center h-full justify-between px-3">
                    <Link
                    href="/">
                        <span className="flex h-full items-center font-[Playfair_Display] gap-2">
                            <img 
                            src="icon.png"
                            alt="Ranusaji website kuliner nusantara" 
                            className="h-10 w-full rounded-full object-contain"/>
                            Ranusaji
                        </span>
                    </Link>
                    <div className="flex justify-between w-1/4 h-full items-center text-sm">
                        <ul className="sm:flex hidden gap-10">
                            <li>
                                <Link href="/">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/jelajahi">
                                    Jelajahi
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex h-full items-center sm:justify-around justify-between sm:w-1/3 w-full">
                            <li className="flex items-center gap-2">                               

                                {/* Icon toggle — klik buka/tutup search, atau submit jika sudah ada teks */}
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (searchOpen && searchQuery.trim()) {
                                            handleSearch()
                                        } else {
                                            setSearchOpen(!searchOpen)
                                            if (searchOpen) setSearchQuery("")
                                        }
                                    }}
                                    className="cursor-pointer hover:opacity-70 transition-opacity"
                                    title="Cari makanan"
                                >
                                    <FaMagnifyingGlass size={20} />
                                </button>
                            </li>
                            <li>
                                <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="sm:hidden flex h-full cursor-pointer "
                                >
                               {isOpen ? <FaX/> :      <FaBars/>}
                               {/* mobile menu */}
                                <div 
                                    className={`sm:hidden pl-3 absolute top-18 left-0 w-full border-t bg-[#eaeaea]/80 backdrop-blur-md sm:border border-b border-white/30 shadow-lg  shadow-black/5  overflow-hidden transition-all duration-300 ease-in-out ${
                                    isOpen 
                                    ? "max-h-60 opacity-100 translate-y-0" 
                                    : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
                                        }`}
                                    >
                                    <ul className="sm:hidden flex  flex-col">
                                    <li className="h-10 flex items-center">
                                        <Link href="/">
                                            Beranda
                                        </Link>
                                    </li>
                                    <li className="h-10 flex items-center">
                                        <Link href="/jelajahi">
                                            Jelajahi Pulau 
                                        </Link>
                                    </li>
                                </ul>
                                </div>
                                </button>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
        {/* ===== SEARCH MODAL OVERLAY ===== */}
            {/* Backdrop blur — klik backdrop untuk menutup modal */}
            {searchOpen && (
                <div
                    className="fixed inset-0 z-50 flex flex-col items-center pt-28 px-4 backdrop-blur-lg bg-black/30"
                    onClick={() => { setSearchOpen(false); setSearchQuery("") }}
                >
                    {/* Kotak modal — stopPropagation agar klik di dalam tidak menutup modal */}
                    <div
                        className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 overflow-hidden"
                        onClick={(klik) => klik.stopPropagation()}
                    >
                        {/* Input area */}
                        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-100">
                            <FaMagnifyingGlass className="text-amber-500 shrink-0" size={18} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(inputPencarian) => setSearchQuery(inputPencarian.target.value)}
                                onKeyDown={(tekanTombol) => tekanTombol.key === "Enter" && handleSearch()}
                                placeholder="Cari makanan, misal: Rendang, Pempek..."
                                className="outline-none text-base bg-transparent w-full text-stone-800 placeholder:text-stone-400 font-[Montserrat]"
                                autoFocus
                            />
                            {/* Tombol X untuk tutup */}
                            <button
                                onClick={() => { setSearchOpen(false); setSearchQuery("") }}
                                className="text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                            >
                                <FaX size={14} />
                            </button>
                        </div>

                        {/* Tombol Cari */}
                        <div className="px-5 py-3 flex justify-end">
                            <button
                                onClick={handleSearch}
                                disabled={!searchQuery.trim()}
                                className={`px-5 py-2 rounded-full text-sm font-semibold font-[Montserrat] transition-all ${
                                    searchQuery.trim()
                                        ? "bg-black text-white hover:bg-stone-800 cursor-pointer"
                                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                                }`}
                            >
                                Cari
                            </button>
                        </div>
                    </div>

                    {/* Hint tutup */}
                    <p className="text-white/60 text-xs mt-4 font-[Montserrat]">Tekan Esc atau klik di luar untuk menutup</p>
                </div>
            )}
        </div>
    )
}