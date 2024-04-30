"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";
function LoginPage(){
    const { register, handleSubmit, formState: {errors } } = useForm();
    const router = useRouter();
    const [error,setError] = useState(null)

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const res = await signIn('credentials',{
            email: data.email,
            password: data.password,
            redirect: false,
        })  
        //console.log(res) imprime la data de validar en base de datos
        if (res.error){
            setError(res.error)
        } else {
            console.log("enviando a /dashboard")
            router.push("/dashboard")
            router.refresh()
        }
    })


    return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={onSubmit} className="w-1/4 bg-white p-8 rounded-lg shadow-lg">
        {error && (
            <p className="bg-red-500 text-sm text-white p-2 rounded">{error}</p>
        )}
        <h1 className="font-bold text-4xl mb-4 text-center animate-color-change">
                Iniciar Sesion
        </h1> 
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
                Mail:
        </label>
        <input type="email" { ...register("email",{required:{value:true, message:"Este campo es obligatorio"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="ohmyboat@gmail.com"
        />
        {
            errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
            )
        }


        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
            Contraseña:
        </label>
        <input type="password" { ...register("password",{required:{value:true, message:"Este campo es obligatorio"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="******"
        />

        {
            errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
            )
        }

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2 transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105">
        Iniciar Sesión
        </button>

        </form>
    </div>)     
}
export default LoginPage;