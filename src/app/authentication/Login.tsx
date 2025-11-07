"use client"
import Image from "next/image"
import Link from "next/link"
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
        <div className="bg-violet-200 min-h-80 min-w-100 rounded-2xl justify-center text-center items-center shadow-lg border-2 border-black shadow-black">
            <div className="pt-2 bg-violet-500 rounded-t-xl text-center justify-center items-center border-b-2 border-black">
                <h3 className="pb-2 font-bold">Login</h3>
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
                    <div>
                    <form>
                        <div className="flex">
                            <div className="w-1/2 ml-2 mr-2 text-black mb-1">
                                <input className="pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 ml-2 mr-2 mb-1 text-black">
                                <input className="pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="text-end pr-2">
                            <Link className="text-violet-800" href={''}>Forgot Password</Link>
                        </div>
                        <div>
                            <button className="mb-2 w-full max-w-sm mx-auto bg-violet-400 border hover:bg-violet-700 flex items-center justify-center p-1 rounded-2xl" 
                                onClick={handleRedirection}
                            >
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                    <div>
                        <button className="w-full max-w-sm mx-auto bg-white border flex items-center justify-center hover:bg-gray-50 p-1 rounded-2xl">
                            <Image src={google} alt="Sing in with google" width={20}/>
                            <span className="text-gray-700 font-medium pl-3">
                                Sing in with Google
                            </span>
                        </button>
                        <Link className="text-violet-800" href={'/register'}>Create account</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login