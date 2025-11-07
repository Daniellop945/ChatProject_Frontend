import Link from "next/link"
import Image from "next/image"
import bg from "@/app/Img/icono.png"
import { Search } from "lucide-react"


export default function Menubar(){
    return(
        <div className="flex w-screen">
            <header className="bg-violet-500 flex w-full text-center justify-center items-center">
                <div className="flex justify-start items-center text-center w-1/2">
                    <Image src={bg} alt="Imagen de fondo" width={50}/>
                    <h1 className="text-2xl font-bold">Chat</h1>
                </div>
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-violet-800"/>
                    <input className="pl-10 rounded-2xl p-1 bg-violet-300 focus:bg-white focus:border-2 focus:text-black focus:outline-violet-500" placeholder="Search..."/>
                </div>
                <div className="flex justify-end w-1/2">
                    <nav>
                        <Link className="mr-2 rounded-2xl border-3 border-transparent p-1 bg-violet-800 hover:bg-violet-600 hover:border-white" href={''}>Chat</Link>
                        <Link className="mr-2 rounded-2xl border-3 border-transparent p-1 bg-violet-800 hover:bg-violet-600 hover:border-white" href={''}>Profile</Link>
                        <Link className="mr-2 rounded-2xl border-3 border-transparent p-1 bg-violet-800 hover:bg-violet-600 hover:border-white" href={'/'}>Log out</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}