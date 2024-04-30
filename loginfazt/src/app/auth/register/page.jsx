"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
function RegisterPage(){

    const { register, handleSubmit, formState: {errors} } = useForm();
    const router = useRouter();
    const [error, setError] = useState(null);
    const onSubmit = handleSubmit(async (data) => {

        if (data.password !== data.confirmPassword) {
            alert("Las contraseñas no coinciden");
        }


       const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
            }),
            headers: {
                "Content-Type": "application/json"
            },
            });

            if (res.ok){ //si se pudo crear correctamente el usuario     
                router.push("/api/auth/signin");
            } else {
                setError("El mail ya está registrado.");

            }
            console.log(res);
    });
    console.log(errors);

    return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={onSubmit} className="w-1/4 bg-white p-8 rounded-lg shadow-lg">
            {error && (
            <p className="bg-red-500 text-sm text-white p-2 rounded">{error}</p>
            )}

            <h1 className="font-bold text-4xl mb-4 text-center animate-color-change ">
                Registrarse
            </h1> 

            <label htmlFor="firstname" className="text-slate-500 mb-2 block text-sm">
                Nombre:
            </label>
            <input type="text" { ...register("firstname",{required:{value:true, message:"Este campo es obligatorio"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="tincho"/>
            {
                errors.firstname && (
                    <span className="text-red-500 text-sm">{errors.firstname.message}</span>
                )
            }
            

            <label htmlFor="lastname" className="text-slate-500 mb-2 block text-sm">
                Apellido:
            </label>
            <input type="text" { ...register("lastname",{required:{value:true, message:"Este campo es obligatorio"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="tech"/>
            {
                errors.lastname && (
                    <span className="text-red-500 text-sm">{errors.lastname.message}</span>
                )
            }

            <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
                Mail:
            </label>
            <input type="email" { ...register("email",{required:{value:true, message:"Este campo es obligatorio"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="tinchotech@gmail.com"/>
            {/* Indico el error */}
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
            placeholder="******"/>
            
            {
                errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                )
            }
            
            <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">
            Confirma la contraseña:
            </label>
            <input type="password" { ...register("confirmPassword",{required:{value:true, message:"Este campo es obligatorio"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="******"/>

            {
                errors.confirmPassword && (
                    <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                )
            }

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2 transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105">
                Registrarse
            </button>
        </form>
    </div>
    )     
}
export default RegisterPage;