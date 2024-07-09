import { PrismaClient } from '@prisma/client';
import { bcrypt } from 'hash-wasm';
import generateOtp from "./otp";
import { cookies } from "next/headers";

const prisma = new PrismaClient()

export default async function submitForm(data){
    const salt = new Uint8Array(16)
    crypto.getRandomValues(salt)

    const key = await bcrypt({
        password: data.password,
        salt,
        costFactor: 10,
        outputType: 'encoded'
    })

    let Parentname = '' + data.parentName
    let Studentname = '' + data.studentName
    let Studentgrade = '' + data.studentGrade
    let Subject = '' + data.subject;
    let Parentphone = '' + data.parentPhone;
    let Address = '' + data.address;
    let Email = '' + data.email;

    data.password = key

    const emailCount = await prisma.studentdata.count({
        where: {
            email: Email
        }
    })

    if(emailCount == 0){
    try{

        await prisma.studentdata.create({
            data: {
                parentname: Parentname,
                studentname: Studentname,
                studentgrade: Studentgrade,
                subject: Subject,
                parentphone: Parentphone,
                address: Address,
                email: Email,
                password: data.password
            }
        })
        
        return 'Success'
    } catch(e){
        console.log(e)
    }
    }else{
        console.log('Email already exists')
        return 'Email already exists';
    }
}