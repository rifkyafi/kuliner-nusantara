"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { getIsland,getRecomendationMenu } from "@/app/components/popularMenu";
import { FaArrowRight } from "react-icons/fa6";

export default function ChoiceIsland(){
    const[Island, setIsland] = useState([]) 
    const[recomMenu, setRecomMenu] = useState([])

    useEffect(() =>{
        setIsland(getIsland(8))
    } ,[])

useEffect(() => {
        setRecomMenu(getRecomendationMenu(5))
    }, [])

    return(
        <div className="h-auto flex flex-col w-full flex-wrap px-8">
            <div  className="flex min-h-screen w-full items-center">
                <div className="flex w-full h-auto items-center">
                    <ul className="flex flex-col w-full h-full items-center gap-6">
                        {/* pilih pulau */}
                        <li className="flex flex-col w-full gap-3 pt-10" >
                            <h1 className="text-4xl font-[Playfair_Display] font-bold pl-3 pb-3">
                                Pilih Pulau 
                            </h1>
                            <div className="flex w-full h-72 overflow-x-scroll overflow-y-hidden scrollbar-custom">
                                <ul className="flex gap-4 text-xl px-3 font-[Montserrat]"> 
                                    {Island.map((pulau) => (
                                    <li key={pulau.id}
                                className="w-56 h-65.5 flex-col bg-[#eaeaea] outline-1 rounded-b-lg">
                                        <img
                                        src={pulau.bentuk_pulau} 
                                        alt={pulau.nama}
                                        className="w-full h-40 object-cover" 
                                        />
                                        <span className="flex flex-col pt-5 px-2">
                                            <h3 className="text-lg font-bold">
                                                {pulau.nama}
                                            </h3>
                                            <p className="text-sm">
                                                Jumlah kuliner: {pulau.total_kuliner} ++
                                            </p>
                                            <ul className="text-xs w-full flex flex-nowrap flex-row gap-1 truncate text-gray-500">
                                                {pulau.preview_menu.map((menu) =>(
                                                    <li key={menu.id}>
                                                        {menu.name},
                                                    </li>
                                                ))}
                                            </ul>
                                        </span> 
                                    </li>

                                ) )}
                                </ul>
                            </div>
                        </li>
                        <li className="flex w-full flex-row justify-between items-center pt-10">
                            <div>
                                <h1 className="font-[Playfair_Display] text-4xl font-bold">
                                    Rekomendasi Kuliner
                                </h1>
                                <p className="font-[Montserrat] text-gray-500 text-sm">
                                    Pilihan makanan khas yang sering dicari
                                </p>
                            </div>
                            <div>
                                <Link href="/kuliner" className="flex items-center gap-2 font-[Montserrat] ">
                                    Lihat semua <FaArrowRight/>
                                </Link>
                            </div>
                        </li>
                            <div className="flex w-full h-72 overflow-x-scroll overflow-y-hidden scrollbar-custom jc">
                                <ul className="flex gap-4 text-xl px-3 font-[Montserrat] justify-center"> 
                                    {recomMenu.map((recom) => (
                                    <li key={recom.id}
                                className="w-68 h-65 flex-col bg-[#eaeaea] outline-1 rounded-b-lg">
                                        <img
                                        src={recom.image} 
                                        alt={recom.name}
                                        className="w-full h-40 object-cover" 
                                        />
                                        <span className="flex flex-col pt-5 px-2">
                                            <p className="text-sm text-gray-500">
                                                {recom.pulau}
                                            </p>
                                            <h3 className="text-lg font-bold font-[Playfair_Displays]">
                                                {recom.name}
                                            </h3>
                                            <ul className="text-xs w-full flex flex-nowrap flex-row gap-1 truncate text-gray-500">
                                                {/* {getRecomendationMen.map((menu) =>(
                                                    <li key={menu.id}>
                                                        {menu.name},
                                                    </li>
                                                ))} */}
                                            </ul>
                                        </span> 
                                    </li>
                                ) )}
                                </ul>
                            </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}