"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
function RegisterPage(){

    const { register, handleSubmit, formState: {errors } } = useForm();
    const router = useRouter();
    const onSubmit = handleSubmit(async (data) => {

        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
        }


       const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
            }),
            headers: {
                "Content-Type": "application/json"
            },
            });

            if (res.ok){ //si se pudo crear correctamente el usuario
                router.push("/api/auth/signin");
            }
            console.log(res);
    });
    console.log(errors);

    return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={onSubmit} className="w-1/4">
            <h1 className="text-slate-200 font-bold text-4xl mb-4 ">
                Register
            </h1> 

            <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
                Username
            </label>
            <input type="text" { ...register("username",{required:{value:true, message:"Username is required"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="infacoc :P"/>
            {
                errors.username && (
                    <span className="text-red-500 text-sm">{errors.username.message}</span>
                )
            }

            <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
                email
            </label>
            <input type="email" { ...register("email",{required:{value:true, message:"Email is required"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="tinchotech@gmail.com"/>
            {/* Indico el error */}
            {
                errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )
            }

            <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
                password
            </label>
            <input type="password" { ...register("password",{required:{value:true, message:"Password is required"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="supersecretpassword123"/>
            
            {
                errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                )
            }
            
            <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">
            Confirm Password
            </label>
            <input type="password" { ...register("confirmPassword",{required:{value:true, message:"Confirm password"}})}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="confirm your password"/>

            {
                errors.confirmPassword && (
                    <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                )
            }

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
                Register
            </button>
        </form>
    </div>
    )     
}
export default RegisterPage;