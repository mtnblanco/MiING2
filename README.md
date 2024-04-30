APP OhMyBoat! 🛥️

------------------  
IMPORTANTE!!! USAR SUDO ANTES DE UN COMANDO SI ALGUNO TIRA ERROR(ej: sudo npx prisma init ).

✍️ Pasos  
 --> Cuando clonen el repositorio tienen que usar estos tres comandos (teniendo en cuenta que ya tienen npm/node)  
 npm install react  
 npm install next  
 npm install prisma -D  
 (una sola vez)  

------------------  

--> Manejo de la base de datos  
 Usamos una local (sqlite,ya configurado)  
 para inicializarla, usamos  
 --> npx prisma init (si hay una carpeta prisma ya no sera necesario)
 --> npx prisma migrate dev  
 Si aplicamos algun cambio  
 --> npx prisma migrate dev  
 Si solo la queremos resetear  
 --> npx prisma migrate reset  

------------------  

Por el momento estamos usando tambien
--> npm install next-auth
--> npm install react-hook-form
--> npm install bcrypt
aniadir mas data adelante...  
