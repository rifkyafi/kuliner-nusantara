'use client'


export default function Footer(){
    return(
        <div  className="flex w-full min-h-85 bg-[#221f1e] items-center py-4 px-4">
            <div className="flex w-full hyphens-auto">
                <ul className="flex w-full h-full items-center flex-wrap sm:gap-0 gap-4">
                    <li className=" flex flex-col h-full sm:w-1/4 w-full">
                        <h1 className="text-[#f5ebdd] font-[Playfair_Display] text-4xl">
                            Ragam Sajian Nusantara
                        </h1>
                        <p  className="text-[#c7b299] font-[Montserrat] text-sm">
                            Website eksplorasi kuliner khas Indonesia dari Sumatera, Jawa, Kalimantan, Sulawesi, hingga Papua.
                        </p>
                        <p className="text-[#c7b299] font-[Montserrat] text-sm pt-2">
                        © 2026     PT. Hihu Media Kreatif 
                        </p>
                    </li>
                    <li className="flex flex-col h-full w-3/4 font-[Montserrat] ">
                        <ul className="flex w-full h-full gap-6 sm:justify-around justify-start flex-wrap">
                            <li>
                                <h3 className="text-[#f5ebdd] text-md font-bold pb-2">
                                    Jelajahi
                                </h3>
                                <ul className="flex flex-col text-[#c7b299] text-sm">
                                    <li>
                                        Sumatra
                                    </li>
                                    <li>
                                        Jawa
                                    </li>
                                    <li>
                                        Kalimantan
                                    </li>
                                    <li>
                                        Sulawesi 
                                    </li>
                                    <li>
                                        Papua
                                    </li>
                                    <li>
                                        Dan lain-lain
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-[#f5ebdd] text-md font-bold pb-2">
                                    Halaman
                                </h3>
                                <ul className="flex flex-col text-[#c7b299] text-sm">
                                    <li>
                                        Beranda
                                    </li>
                                    <li>
                                        Jelajahi Pulau
                                    </li>
                                    <li>
                                        Tentang Kami
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-[#f5ebdd] text-md font-bold pb-2">
                                    Bantuan
                                </h3>
                                <ul className="flex flex-col text-[#c7b299] text-sm">
                                    <li>
                                        Cara Menggunakan
                                    </li>
                                    <li>
                                        Syarat & Ketentuan
                                    </li>
                                    <li>
                                        Kebijakan Privasi
                                    </li>
                                    <li>
                                        Hubungi Kami
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-[#f5ebdd] text-md font-bold pb-2">
                                    Pemesanan
                                </h3>
                                    <ul className="flex flex-col text-[#c7b299] text-sm">
                                        <li>
                                            Website ini bukan layanan pesan-antar. <br/>
                                            Pemesanan melalui <i>platform</i> eksternal apabila tersedia.
                                        </li>
                                        <li>
                                           
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}