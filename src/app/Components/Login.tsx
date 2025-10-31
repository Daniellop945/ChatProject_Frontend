"use client"
import Image from "next/image"
import bg from "@/app/Img/background.png"
import google from "@/app/Img/google.svg"
import { useRouter } from 'next/navigation';

export function Login(){
    const router = useRouter();
    const handleRedirection = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/main')
    };
    return(
        <div className="bg-violet-200 min-h-80 min-w-100 rounded-2xl justify-center text-center items-center shadow-lg shadow-violet-800">
            <div className="pt-2 bg-violet-800 rounded-tl-2xl rounded-tr-2xl text-center justify-center items-center">
                <h1 className="pb-2">Login</h1>
            </div>
            <br/>
            <div>
                <div className="flex items-center justify-center text-center">
                    <div className="flex items-center justify-center text-center bg-black border-violet-400 border-2 rounded-2xl">
                        <Image
                            src={bg}
                            alt="Imagen de fondo"
                            width={100}
                        />
                    </div>
                    <form>
                        <div className="flex">
                            <div className="w-1/2 ml-2 mr-2 text-black">
                                <input className="pl-2 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800"/>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="w-1/2 ml-2 mr-2 text-black">
                                <input className="pl-2 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800"/>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <button className="mb-2 w-full max-w-sm mx-auto bg-violet-400 border hover:bg-violet-700 flex items-center justify-center p-1 rounded-2xl" onClick={
                                handleRedirection
                            }>
                                Login
                            </button>
                            <button className="w-full max-w-sm mx-auto bg-white border flex items-center justify-center hover:bg-gray-50 p-1 rounded-2xl">
                                <Image src={google} alt="Sing in with google" width={20}
                                />
                                <span className="text-gray-700 font-medium pl-3">
                                    Sing in with Google
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login