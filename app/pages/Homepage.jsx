'use client'
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { getPopularMenu, getImagePopularMenu, getIsland, getRecomendationMenu } from "@/app/components/popularMenu";
import { FaMagnifyingGlass, FaArrowRight, FaStar, FaMapPin } from "react-icons/fa6";
import DriftWall from "@/lib/DriftWall";
import Link from "next/link";


export default function Homepage(){
    // popular menu
    const[popularMenu, setPopularMenu] = useState([]);
    const [imagePopularMenu, setImagePopularMenu] = useState([])
    const[Island, setIsland] = useState([]) 
    const[recomMenu, setRecomMenu] = useState([])

    useEffect(() => {
        setPopularMenu(getPopularMenu(4))
    }, [])

    useEffect(() => {
        setImagePopularMenu(getImagePopularMenu(15))
    },[])

    useEffect(() =>{
        setIsland(getIsland(8))
    } ,[])

    useEffect(() => {
        setRecomMenu(getRecomendationMenu(5))
    }, [])

    const IMAGES_ITEMS = imagePopularMenu.map((makanan) => ({
        image: makanan.image,
        title: makanan.name,
        href: makanan.name   
    }))


    return(
        <>
        {/* ==================== HERO SECTION ==================== */}
        <div className="flex w-full min-h-screen bg-[#f5ebdd] ">
            <div className="flex w-full h-auto items-center">
                <ul className="flex w-full h-full items-center  justify-center">
                    <li className="sm:w-1/2 w-full flex  h-auto justify-center ">
                        <div className="flex flex-col  w-[90%] h-auto ">
                            
                                { /* sub title */}
                                <h2 className="flex text-black bg-linear-to-r from-rose-400 via-orange-400 to-amber-300 w-56 h-10 items-center justify-center rounded-full shadow-xs shadow-orange-400 font-[Montserrat] text-sm font-bold">
                                    Eksplorasi Kuliner Indonesia
                                </h2>

                                {/* title */}
                                <h1 className="sm:text-8xl text-6xl text-black font-[Playfair_Display] font-bold pt-9 ">
                                    Jelajahi Rasa Khas Nusantara
                                </h1>

                                {/* text */}
                                <p className="text-black font-[Montserrat] py-3 sm:text-lg text-sm">
                                    Temukan makanan khas dari Sumatera, Jawa, Kalimantan, Sulawesi, hingga Papua. Lengkap dengan restoran, harga, jam buka, dan ulasan.
                                </p>
                                {/* search bar */}
                                <div className="flex sm:w-145  sm:h-16 h-10 bg-[#eaeaeaea] items-center sm:px-4 px-1 text-black sm:mt-4 mt-1 rounded-full outline-1 justify-between">
                                    <FaMagnifyingGlass
                                    className="sm:h-8 w-auto ml-3"/>
                                    <p>
                                        <input type="text" placeholder="Cari makanan atau lainnya"
                                        className="outline-none sm:text-lg text-sm pl-3"/>     
                                </p>
                                <div className="flex lg:w-full h-full items-center justify-end sm:py-3">
                                    <p className="w-24 sm:h-12 h-8 flex items-center justify-center bg-black hover:bg-radial from-[#eaeaea] to-white  text-white  hover:text-black  transitionduration-300 rounded-full sm:py-2 py-0.5">
                                        Cari
                                    </p>
                                </div>
                                </div>
                                <div className="flex w-145 pt-5">
                                    <ul className="flex flex-col gap-3 font-[Montserrat]">
                                        <p className="flex h-full pt-1 sm:text-md text-sm">
                                            Populer:
                                        </p>
                                            <ul className="flex text-sm gap-2 flex-wrap sm:flex-row flex-col">
                                                {popularMenu.map((makanan) => (
                                                    <li key={makanan.id}>
                                                        <Link
                                                        href={`/jelajahi/${makanan.id}`}
                                                        className="bg-[#eaeaea] rounded-full p-2 text-nowrap outline-1 sm:text-md text-xs cursor-pointer">
                                                            {makanan.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                    </ul>
                                </div>
                        </div>
                    </li>
                    <li className="flex w-1/2 h-screen relative justify-end target">
                     <DriftWall
                        items={IMAGES_ITEMS.length > 0? IMAGES_ITEMS : undefined}
                        columns={5}
                        tileWidth={150}
                        tileHeight={100}
                        gap={18}
                        tilt={16}
                        turn={-14}
                        perspective={1200}
                        depth={120}
                        speed={42}
                        direction="up"
                        variance={0.45}
                        parallax={0.6}
                        lift={64}
                        fade={0.6}
                        dim={0.55}
                        overlayColor="#060010"
                        radius={14}
                        roll={0}
                        pauseOnHover={false}
                        grayscale={false}
                    />
                    </li>
                </ul>
            </div>
        </div>

        {/* ==================== CHOICE ISLAND & REKOMENDASI ==================== */}
        <div className="h-auto flex flex-col w-full flex-wrap px-8 py-10">
            <div  className="flex min-h-screen w-full items-center">
                <div className="flex w-full h-auto items-center">
                    <ul className="flex flex-col w-full h-full items-center gap-6">
                        {/* pilih pulau */}
                        <li className="flex flex-col w-full gap-3 pt-10" >
                            <h1 className="text-4xl font-[Playfair_Display] font-bold pl-3 pb-3">
                                Pilih Pulau 
                            </h1>
                            <div className="flex w-full h-74 overflow-x-scroll overflow-y-hidden scrollbar-custom items-center">
                                <ul className="flex gap-4 text-xl px-3 font-[Montserrat]"> 
                                    {Island.map((pulau) => (
                                    <li key={pulau.id}
                                    className="w-56 h-65.5 flex-col rounded-2xl bg-linear-to-b from-white/95 via-white/80 to-white/50 backdrop-blur-md border border-white shadow-lg shadow-stone-900/5 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 text-stone-800">
                                    <Link
                                    href={`/jelajahi?id=${pulau.id}`}
                                    className="cursor-pointer">
                                        <img
                                        src={pulau.gambar_pulau} 
                                        alt={pulau.nama}
                                        className="w-full h-40 object-cover rounded-xl p-1" 
                                        />
                                            <span className="flex flex-col pt-2 px-2">
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
                                        </Link>
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
                                <Link href="/kuliner" className="sm:flex hidden tems-center gap-2 font-[Montserrat] ">
                                    Lihat semua <FaArrowRight/>
                                </Link>
                            </div>
                        </li>
                            <div className="flex w-full min-h-72 ">
                                <ul className="flex flex-wrap gap-4 text-xl px-3 font-[Montserrat] justify-center"> 
                                    {recomMenu.map((recom) => (
                                    <li key={recom.id}
                                className="sm:w-68 w-full h-70 flex-col rounded-2xl bg-linear-to-br from-white via-[#fffaf2] to-[#faeedb] border border-amber-200/70 shadow-lg shadow-amber-900/5 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1.5 transition-all duration-300 text-stone-800">
                                     <Link href={`/jelajahi/${recom.id}`}>
                                            <img
                                            src={recom.image} 
                                            alt={recom.name}
                                            className="w-full h-40 object-cover rounded-xl  p-2" 
                                            />
                                            <span className="flex flex-col py-2 mx-2">
                                                <p className="text-xs text-black truncate flex bg-amber-500 w-fit px-2 py-0.5 rounded-full">
                                                    {recom.pulau}
                                                </p>
                                                <h3 className="text-lg font-bold font-[Playfair_Displays] truncate">
                                                    {recom.name}
                                                </h3>
                                                <p className="text-xs flex items-center gap-1 text-gray-500">
                                              <FaMapPin className="text-black"/>       {recom.origin}, {recom.pulau}
                                                </p>
                                                <p className="text-xs flex pt-0.5 gap-1">
                                                    Kisaran harga: <span>{recom.price_range_ind}</span>
                                                </p>
                                                <p className="text-xs items-center flex gap-1 pt-1">
                                                    <FaStar/> {recom.rating || "Tidak ada"}
                                                </p>
                                            </span>
                                        </Link>
                                    </li>
                                ) )}
                                </ul>
                            </div>
                                <div>
                                <Link href="/kuliner" className="sm:hidden flex items-center gap-2 font-[Montserrat]">
                                    Lihat semua <FaArrowRight/>
                                </Link>
                            </div>
                            <li  className="flex flex-col w-full gap-5">
                                <span className="flex flex-col pl-3">
                                    <h1 className="text-4xl font-[Playfair_Display] font-bold">
                                        Cara Menggunakan Webiste
                                    </h1>
                                    <p className="font-[Montserrat] text-gray-500 text-sm">
                                        Tiga langkah menemukan kuliner
                                    </p>
                                </span>
                            </li>
                            <ul className="flex flex-wrap w-full h-auto justify-around font-[Montserrat] gap-2">
                                <li className="flex  flex-col sm:w-[30%] w-full h-32.5 border rounded-2xl justify-center px-2 gap-1">
                                    <span className="flex gap-2 text-md font-bold">
                                        <h1 className="rounded-full p w-6 h-6 flex justify-center bg-[#f5ebdd] border">
                                            1
                                        </h1>
                                        <h2>
                                            Cari atau pilih pulau
                                        </h2>
                                    </span>
                                    <p className="text-sm">
                                        Ketik nama makanan atau pilih salah satu pulau
                                    </p>
                                </li>
                                <li className="flex  flex-col sm:w-[30%] w-full h-32.5 border rounded-2xl justify-center px-2 gap-1">
                                    <span className="flex  gap-2 text-md font-bold">
                                        <h1 className="rounded-full p w-6 h-6 flex justify-center bg-[#f5ebdd] border">
                                            2
                                        </h1>
                                        <h2>
                                            Lihat detail makanan
                                        </h2>
                                    </span>
                                    <p className="text-sm text-clip">
                                        Baca asal daerah, deskripsi, dan restoran yang menyediakan.
                                    </p>
                                </li>
                                <li className="flex  flex-col sm:w-[30%] w-full h-32.5 border rounded-2xl justify-center px-2 gap-1">
                                    <span className="flex gap-2 text-md font-bold">
                                        <h1 className="rounded-full p w-6 h-6 flex justify-center bg-[#f5ebdd] border">
                                            3
                                        </h1>
                                        <h2>
                                            Pilih restoran & pesan
                                        </h2>
                                    </span>
                                    <p className="text-sm">
                                        Lanjut ke GoFood, GrabFood, atau ShopeeFood
                                    </p>
                                </li>
                            </ul>
                    </ul>
                </div>
            </div>
        </div>

        {/* ==================== FOOTER ==================== */}
       <Footer/>
        </>
    )
}
