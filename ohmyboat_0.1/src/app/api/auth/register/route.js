const { NextResponse } = require("next/server");
import { prisma } from "@/libs/db";
import { hash } from "bcrypt";
import next from "next";
export async function POST(request) {
    try {
        const data = await request.json();
    console.log(data)
    //busco si hay mail repetido
    const userFound = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });

    if (userFound) {
        return NextResponse.json({ message: "Email already exists" 
    },{
        status: 400 });
    }
    //const hashedPassword = await hash(data.password, 10); con esto la encripto
    const newUser = await prisma.user.create({
        data: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password, //pongo hashedPassword si la encripto
        },
    });

    const { password: _, ...user } = newUser; //quiero que me envie todo menos la password
    return NextResponse.json(user)
    } catch(error) {
        return NextResponse.json({
            message: error.message,
        },{
            status: 500,
        })
    }
}