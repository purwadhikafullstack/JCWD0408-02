import React from 'react'
import { GiHummingbird } from "react-icons/gi";

interface Logo {
    colorText: string;
    colorBird: string;
    size: string;
}
interface LogoScroll {
    size: string;
    scrolled: boolean;
}

export const Logo = ({ colorText, colorBird, size }: Logo) => {
    return (
        <div className={`flex ${size}`}>
            <GiHummingbird className={`text-${colorBird} w-6 h-6`} />
            <p className={`font-semibold left-[16px] -translate-x-2 translate-y-2 top-2 text-xl text-${colorText}`}>Nezztar</p>
        </div>
    )
}

export const LogoScroll = ({ size, scrolled }: LogoScroll) => {
    return (
        <div className={`flex ${size}`}>
            <GiHummingbird className={` transition-colors duration-300 ${scrolled ? "text-white" : "text-btn"} w-6 h-6`} />
            <p className={`font-semibold left-[16px] -translate-x-2 translate-y-2 top-2 text-xl transition-colors duration-300 ${scrolled ? "text-white" : "text-hitam"}`}>Nezztar</p>
        </div>
    )
}