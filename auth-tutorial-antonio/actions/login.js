"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
export const login = async (values) => {

    const validateFields = LoginSchema.safeParse(values);
    if (!validateFields.success) {
        return { error : "Campos invalidos!"}
    }
 
    return {success : "Email enviado!"}

}