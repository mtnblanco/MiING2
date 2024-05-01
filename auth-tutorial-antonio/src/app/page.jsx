"use client"
import { useRouter } from "next/navigation"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

import { useEffect, useState } from 'react';
import CardPublicacion from '../../components/CardPublicacion';
import Header from '../../components/Header';
import { obtenerPublicaciones } from '../../actions/publicacion';
import { Button } from "@/components/ui/button"
import { fakeDataGenerator } from "../../actions/fakeDataGenerator";


export default function Home() {
  const [publicaciones, setPublicaciones] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const data = await obtenerPublicaciones();
        setPublicaciones(data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchPublicaciones();
  }, []);

  const onClick = async () => {
    console.log("entra onclick")
    const res = await fakeDataGenerator(3);
    router.refresh(); //no refresca, no funciona
    console.log(res);
  }

  return (
  <main className="flex h-full flex-col items-center bg-celeste">
    <Header />
    <section className="space-y-6 text-center bg-celeste">
      <h1 className="text-6xl font-semibold text-white drop-shadow-md">
        Home OhMyBoat!🛥️
      </h1>
      <Button onClick={onClick}>Generador</Button>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {publicaciones.map((publicacion) => (
          <CardPublicacion
            key={publicacion.id}
            marina={publicacion.marina}
            modelo={publicacion.modelo}
            nombre={publicacion.title}
            img={publicacion.img}
          />
        ))}
      </section>
    </section>
  </main>
);

}