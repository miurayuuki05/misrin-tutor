"use client"
import Navbar from "@/app/components/Navbar";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessRegister(){
    const [count, setCount] = useState(10)
    const router = useRouter()


    useEffect(() => {
        if(count == 0){
            router.push('/')
        }else{
            setTimeout(() => {
                setCount(count - 1)
            }, 1000)
        }
    }, [count])

    return(
        <div>
            <Navbar />
            <section className="mt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center">Registration Success</h1>
                    <p className="text-center text-gray-600 mt-2">Thank you for registering, we will contact you soon</p>
                    <p className="text-center text-gray-600 mt-2">You will be redirected to the homepage automatically in {count} seconds</p>
                </div> 
            </section>
        </div>
    )
}