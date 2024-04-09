import { PrismaClient } from '@prisma/client';
import { bcrypt, bcryptVerify } from 'hash-wasm';
import * as jwt from 'jsonwebtoken';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: true,
    },
}

export async function POST(req, res){
    const { username, password } = await req.json()

    const prisma = new PrismaClient()

    const user = await prisma.admin.findUnique({
        where: {
            username: username
        }
    })

    if(!user){
        return Response.json({ message: 'User not found' })
    }

    const isMatch = await bcryptVerify({password : password, hash : user.password})

    if(!isMatch){
        return Response.json({ message: 'Login incorrect' })
    }

    const jwtCount = await prisma.admin_jwt.count()
    const token = jwt.sign({ id: jwtCount + 1, username : user.username ,exp : Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30) }, fs.readFileSync('private.key'), { algorithm: 'HS256' })

    await prisma.admin_jwt.create({
        data: {
            id: jwtCount + 1,
            jwt: token,
            username: user.username
        }
    })

    return Response.json({  
        token : token,
        user: {
            id: jwtCount + 1,
            username: user.username
        } 
    })
}