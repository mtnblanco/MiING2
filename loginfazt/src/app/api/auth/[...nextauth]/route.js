import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";
import { prisma } from "@/libs/db";

const authOptions = {
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
                if (!userFound) throw new Error("User not found")
                const matchPassword = credentials.password === userFound.password //hacerlo con bcrypt para encriptadas
                console.log(matchPassword)
                if (!matchPassword) throw new Error("Password incorrect")

                return {
                    id: userFound.id,
                    name: userFound.username,
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
