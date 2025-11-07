'use client'
import Image from "next/image"
import bg from "@/app/Img/bg1.png"
import Card from "./componets/cardData"

export function registerUser(){
    return(
        <div className="relative flex min-h-screen items-center justify-center font-sans">
            <Image
                src={bg}
                alt="Background"
                layout="fill" 
                objectFit="cover" 
                quality={100} 
                className="z-0" 
            /> 
            <div className="z-10 relative">
                <Card/>
            </div>
        </div>
    )
}

export default registerUser