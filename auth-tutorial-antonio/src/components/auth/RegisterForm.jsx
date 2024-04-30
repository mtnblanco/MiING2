"use client"
//exportar desde ahi sino no funciona
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form"
import * as z from "zod"
import { useTransition } from "react";
import { RegisterSchema } from "@/schemas";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { login } from "../../../actions/login";

export const RegisterForm = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition(); //usamos esto para la login transition
    const currentDate = new Date();
    const defaultBirthday = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            cellphone: "",
            birthday: "00/00/0000", //no se si esta bien "00/00/0000
            email: "",
            password: "",
        }
    });

  const onSubmit = async (data) => { //async poner
   setError("");
   setSuccess("");
    
    startTransition(() => {login(data)
        .then((response) => {
            setError(response.error)
            setSuccess(response.success)

        })
    console.log(error)
    })
    console.log(data)
   }

    return (
        <CardWrapper 
            headerLabel="Crea una cuenta" 
            backButtonLabel="Ya tienes una cuenta?" 
            backButtonHref="/auth/login"
        >
            <Form {... form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                
                <div className="space-y-4">
                    
                {/* NOMBRE */}   
                <FormField
                        control={form.control}
                        name="firstname"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nombre:</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="tincho"
                                        />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* APELLIDO */}   
                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Apellido:</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="tech"
                                        />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* TELEFONO */}   
                    <FormField
                        control={form.control}
                        name="cellphone"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Teléfono:</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="+54 9 221 --- ----"
                                        />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    
                    {/* BIRTHDAY */}   
                    <FormField
                        control={form.control}
                        name="birthday"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Fecha de Nacimiento:</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        //placeholder="+54 9 221 --- ----"
                                        type="date"
                                        />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    
                    
                    {/* MAIL */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email:</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="tinchotech@gmail.com"
                                        type="email"
                                        />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password:</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="******"
                                        type="password"
                                        />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />


    
                </div>
                {/* luego el error los mostrar */}
                <FormError message={error}/>
                <FormSuccess message={success}/>

                <Button disabled={isPending}
                type="submit" 
                className="w-full">
                    Registrarse
                </Button>
                </form>
            </Form>
        </CardWrapper>     
    );
}

