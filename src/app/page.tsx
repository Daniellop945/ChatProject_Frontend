import Login from "./authentication/Login"
import Image from "next/image"
import bg from "@/app/Img/bg1.png" 

export default function Home() {
  return (
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
        <Login/>
      </div>
    </div>
  );
}