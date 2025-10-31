import Link from "next/link"
import Image from "next/image"
import bg from "@/app/Img/icono.png"

export default function Menubar(){
    return(
        <header className="bg-violet-500 flex">
            <div className="flex justify-start items-center text-center w-1/2">
                <Image src={bg} alt="Imagen de fondo" width={50}/>
                 <h1>Chat</h1>
            </div>
            <div className="flex justify-end w-1/2 pt-4">
                <nav>
                    <Link className="mr-2 rounded-2xl border-3 border-transparent p-1 bg-violet-800 hover:bg-violet-600 hover:border-white" href={''}>Live chat</Link>
                    <Link className="mr-2 rounded-2xl border-3 border-transparent p-1 bg-violet-800 hover:bg-violet-600 hover:border-white" href={''}>Profile</Link>
                    <Link className="mr-2 rounded-2xl border-3 border-transparent p-1 bg-violet-800 hover:bg-violet-600 hover:border-white" href={'/'}>Log out</Link>
                </nav>
            </div>
        </header>
    )
}