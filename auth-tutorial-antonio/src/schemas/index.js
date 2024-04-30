import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email requerido",
    }),
    password: z.string().min(1,{
        message: "Contraseña requerida"
    }), //no bloquear con min por ser login es buena practica    
}) 

//fecha default para el registro desde el register form
const fechaDefault = "00/00/0000"

export const RegisterSchema = z.object({
    firstname: z.string().min(1,{
        message: "Ingresa un nombre."
    }),
    lastname: z.string().min(1,{
        message: "Ingresa un apellido."
    }),
    cellphone: z.string().min(1,{
        message: "Ingresa un telefono."
    }),
    birthday: z.string().refine((value) => {
        // Convertir la cadena de fecha en un objeto Date
        const dateOfBirth = new Date(value);
        // Obtener la fecha hace 18 años
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        // Validar que la fecha de nacimiento sea menor o igual a la fecha hace 18 años
        return dateOfBirth <= eighteenYearsAgo;
      }, {
        // Mensaje de error si la validación falla
        message: "Debes tener al menos 18 años para registrarte.",
    }),
    email: z.string().email({
        message: "Email requerido.",
    }),
    password: z.string().min(6,{
        message: "Minimo 6 caracteres requeridos."
    }), //no bloquear con min por ser login es buena practica    
}) 