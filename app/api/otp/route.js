import { PrismaClient } from "@prisma/client";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from 'resend';

const prisma = new PrismaClient();

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req, res){
    let otp = Math.floor(Math.random() * (999999 - 100000) + 100000)
    let emails = await req.json()
    let email = emails.email
    let otpstring = '' + otp
    
    try{
        console.log('sent')
        const data = await resend.emails.send({
            from: 'MisrinTutor <rina@mryk.tech>',
            to: [email],
            subject: 'OTP for registration',
            react: EmailTemplate({ otp : otpstring }),
            text: 'Put this into otp Field: ' + otpstring,
        });

        data.toString()
        
        await prisma.otp_table.create({
            data: {
                email: email,
                otp: otpstring
            }
        })

        return Response.json({ message: 'Otp sent successfully',})
    } catch(e){
        console.log(e)
        return Response.json({ message: 'Otp not sent' })
    }
}