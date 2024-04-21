import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DashboardClient from './client/Clientcomp'
import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import * as jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default async function Page(){
    // let isAuth = false
    // const token = cookies().get('token')?.value || ''
    // const tokenString = token.toString()  
    // let userInfo;

    // if(token){
    //     const user = await prisma.admin_jwt.count({
    //         where: {
    //             jwt: tokenString
    //         }
    //     })

    //     if(user > 0){
    //         isAuth = true
    //         userInfo = jwt.decode(tokenString) || ''
    //     }else{
    //         isAuth = false
    //     }
    // }

    // async function logout(){
    //     "use server"
    //     const cookie = cookies().get('token')?.value || ''
    //     const user = cookies().get('user')?.value || ''
    //     const userId = user.toString()
    //     const cookieString = cookie.toString() 
    //     const userString = user.toString()

    //     const admin = await prisma.admin_jwt.delete({
    //         where: {
    //             id: parseInt(userId),
    //             jwt: cookieString
    //         }
    //     }).then(() => {
    //         cookies().delete('token')
    //         cookies().delete('user')
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    return(
        // <DashboardClient isAuth={isAuth} Logoutadmin={logout} userInfo={userInfo} />
        <DashboardClient />
    )
}