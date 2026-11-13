"use client"

import { getIsland } from "@/app/components/popularMenu";
import { useState, useEffect } from "react";

export default function ChoiceIsland(){
    const[Island, setIsland] = useState([]) 

    useEffect(() =>{
        setIsland(getIsland(8))
    } ,[])
    return(
        <div className="h-screen flex flex-col w-full flex-wrap pl-8">
            <div  className="flex h-full w-full">
                <ul className="flex w-full h-full items-center">
                    {/* pilih pulau */}
                    <li className="flex flex-col w-full gap-3">
                        <h1 className="text-4xl font-[Playfair_Displayc] font-bold">
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
                    <li></li>
                </ul>
            </div>
        </div>
    )
}