
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

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
        <img src="../public/Oh_My_Boat_logo_4.png" alt="Logo de Oh My Boat" />
        <Button onClick={() => onClick("login")}>Iniciar sesión</Button>
        <Button onClick={() => onClick("register")}>Registrarse</Button>
        
      </div>
    </header>
  );

}