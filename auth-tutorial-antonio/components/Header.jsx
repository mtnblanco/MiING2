"use client";

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() { 
      const router = useRouter()
  
  const onClick = (tipo) => {
    if(tipo === "login"){
      router.push("/auth/login")
  } else {
    if (tipo === "register") {
      router.push("/auth/register")
    }
  }
  }
    return (
    <header className="bg-white text-black w-full py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/auth/login">
            <img src="https://cdn.discordapp.com/attachments/1217480569202675732/1220096360129499176/Oh_My_Boat_logo_4.jpg?ex=66353f48&is=6633edc8&hm=ccd057c5ac13bd307becfcc1f59907d8b89164f69226fcd3fc8f6529762a93e9&" alt="Logo de Oh My Boat" width={60} height={120}/>
        </Link>
        <Button onClick={() => onClick("login")}>Iniciar sesión</Button>
        <Button onClick={() => onClick("register")}>Registrarse</Button>
      </div>
    </header>
  );

}