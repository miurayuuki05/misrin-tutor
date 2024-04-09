import { PrismaClient } from "@prisma/client"

export default async function verifyOtp(otp : any, email : string){    
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
        }else{
            console.log('OTP is incorrect')
        }
        
    } catch(e){
        console.log(e)
    }
}