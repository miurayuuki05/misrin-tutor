import submitForm from "@/app/middleware/submitRegister"
import Formpart from "./Formpartclient"
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'

export default function Formpartserver(){
    
    async function handleSubmit(studentName: string, studentGrade: string, subject: string, parentName: string, parentPhone: string,address: string, email: string, password: string,  honeypot: string){
        "use server"
        let data = {
            parentName: parentName,
            studentName: studentName,
            studentGrade: studentGrade,
            subject:  subject,
            parentPhone: parentPhone, 
            email:  email, 
            password: password,
            address: address,
        }

        if(honeypot !== ''){
            return
        }else{
            cookies().set('email', data.email)
            submitForm(data)
            redirect('/register/otp')
        }
    }
    return(
        <Formpart handleSubmit={handleSubmit}  />
    )
}