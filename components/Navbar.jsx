"use client"

import Link from "next/link"
import { useState } from "react";
import { FaMagnifyingGlass ,FaBars, FaX} from "react-icons/fa6";

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <div className="flex w-full h-18 justify-center bg-[#f5ebdd]">
        <div className="fixed w-2/3 justify-between h-15 bg-[#eaeaea]/75 backdrop-blur-md border border-white/30 shadow-lg  shadow-black/5 font-[Montserrat] font-semibold text-black z-10 my-3 rounded-2xl">
            <div className="flex items-center h-full justify-between px-3">
                    <h1>
                        Nama Website
                    </h1>
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
                            <li>
                                <FaMagnifyingGlass 
                                size={24}
                                />  
                            </li>
                            <li>
                                <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="sm:hidden flex h-full cursor-pointer"
                                >
                               {isOpen ? <FaX/> :      <FaBars/>}
                               {/* mobile menu */}
                                <div 
                                    className={`sm:hidden pl-3 absolute top-18 left-0 w-full bg-[#e3a008] border-t border-amber-600 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
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
        </div>
    )
}