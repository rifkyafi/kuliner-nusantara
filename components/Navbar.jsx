"use client"

import Link from "next/link"
import { useState } from "react";
import { FaMagnifyingGlass ,FaBars, FaX} from "react-icons/fa6";

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false)
    return(
        <div className="fixed w-full h-[72px] bg-[#e3a008] font-[Montserrat] font-semibold text-black">
            <div className="flex items-center h-full justify-around">
                    <h1>
                        Nama Website
                    </h1>
                    <div className="flex justify-between w-1/4 h-full items-center">
                        <ul className="flex gap-10">
                            <li>
                                <Link href="/">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/jelajahi">
                                    Jelajahi Pulau 
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex h-full items-center justify-around w-1/3">
                            <li>
                                <FaMagnifyingGlass 
                                size={24}
                                />  
                            </li>
                            <li>
                                <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex h-full cursor-pointer"
                                >
                               {isOpen ? <FaX/> :      <FaBars/>}
                                </button>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}