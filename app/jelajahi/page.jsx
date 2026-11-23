"use client"

import { Suspense } from "react";
import Jelajahi from "../pages/Jelajahi";

export default function Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f5ebdd] flex items-center justify-center font-[Montserrat]">Memuat pulau...</div>}>
            <Jelajahi />
        </Suspense>
    );
}