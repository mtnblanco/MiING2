import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function CardPublicacion({marina, modelo, nombre, img}) {
    return (
        <div>
            <Card style={{ width: "100%", height: "100%" }}>
                <CardHeader>
                    <CardTitle>{nombre}</CardTitle>
                    <CardDescription>{modelo}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <Image src='/auth-tutorial-antonio/public/barco.jpg' width='50' height='25' alt='Imagen'/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Ver detalle</Button>
                    <p>📍{marina}</p>
                </CardFooter>
            </Card>
        </div>
    );
}
