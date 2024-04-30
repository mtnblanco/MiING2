APP OhMyBoat! 🛥️\n

✍️ Pasos \n
--> Cuando clonen el repositorio tienen que usar estos tres comandos (teniendo en cuenta que ya tienen npm/node)\n
npm install react\n
npm install next\n
npm install prisma -D\n
(una sola vez)\n

--> Manejo de la base de datos\n
Usamos una local (sqlite,ya configurado)\n
para inicializarla, usamos\n
--> npx prisma init\n
--> npx prisma migrate dev\n
Si aplicamos algun cambio\n
--> npx prisma migrate dev\n
Si solo la queremos resetear\n
--> npx prisma migrate reset\n
