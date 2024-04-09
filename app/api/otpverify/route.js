import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function POST(req, res){
    let { email, otp } = await req.json()

    try{
        const prisma = new PrismaClient()
        let data = await prisma.otp_table.findFirst({
            where: {
                email: email
            }
        })

        if(data?.otp === otp){
            await prisma.otp_table.delete({
                where: {
                    email: email
                }
            })
            return Response.json({ message: 'Otp verified' })
        }else{
            return Response.json({ message: 'Otp not verified' })
        }
        
    } catch(e){
        console.log(e)
        return Response.json({ message: 'Otp not verified' })
    }
}