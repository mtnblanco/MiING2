"use client"
import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
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
   <main className="flex h-full flex-col items-center justify-center bg-sky-800">
    <div className="space-y-6 text-center">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className,)}>
        Home OhMyBoat! 🛥️.
      </h1>
      <p className="text-white text-lg">
        Aca se muestran las publicaciones.
      </p>

      <div>
        <div className={cn("font-semibold text-white drop-shadow-md", font.className,)}>

          <Button onClick={() => onClick("login")}variant="secondary" size="lg" className="mr-4" >
            Iniciar sesión
          </Button>
          |
          <Button onClick={() => onClick("register")}variant="secondary" size="lg" className="ml-4" >
            Registrarse
          </Button>

        </div>
      </div>

    </div>

   </main>
  );
}
