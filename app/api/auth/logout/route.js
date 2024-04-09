import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import * as jwt from 'jsonwebtoken';

export const config = {
    api: {
        bodyParser: true,
    },
}

export async function POST(req, res){
    const prisma = new PrismaClient()
    const { token } = req.json()

    const jwtToken = cookies().get('token')

    if(!jwt){
        return Response.json({ message: 'You are not logged in' })
    }

    const jwtParse = jwt.decode(jwtToken, { complete: true })

    const jwtId  = jwtParse.payload.id

    
    const user = await prisma.admin_jwt.delete({
        where: {
            id :  jwtId
        }
    })

    return Response.json({ message: 'Logout success' })
}