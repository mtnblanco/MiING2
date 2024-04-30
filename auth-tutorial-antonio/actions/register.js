"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
export const register = async (values) => {

    const validateFields = LoginSchema.safeParse(values);
    if (!validateFields.success) {
        return { error : "Campos invalidos!"}
    }
 
    return {success : "Email enviado!"}

}