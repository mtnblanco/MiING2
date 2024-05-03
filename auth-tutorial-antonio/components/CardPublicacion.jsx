import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
                        <img src='https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231019093315-01-three-year-cruise-more-obstacles.jpg?quality=100&strip=info&w=940&h=530&crop=1' width='50' height='25' alt='Imagen'/>
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
