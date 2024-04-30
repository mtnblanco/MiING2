import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";
import { prisma } from "@/libs/db";

export const authOptions = {
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" , placeholder: "jsmith"},
                password: { label: "Password", type: "password", placeholder: "******"},
                },
            async authorize(credentials,req){
            const userFound = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })
                if (!userFound) throw new Error("Usuario no encontrado")
                const matchPassword = credentials.password === userFound.password //hacerlo con bcrypt para encriptadas
                console.log(matchPassword)
                if (!matchPassword) throw new Error("Contraseña incorrecta. Intente nuevamente.")

                return {
                    id: userFound.id,
                    name: userFound.name,
                    email: userFound.email,

                }
            }
        }),
    ],
    pages: {
        signIn: "/auth/login",
    }
};


const handler = NextAuth(authOptions);

export {handler as GET,handler as POST}

//chequear por que no puedo ir del dashboard a la pagina quer pongo
