"use client"
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OtpVerificationClient({handleSubmit, email}){
    const [otpInput, setOtpInput] = useState('')

    const handleOtp = (e) => {
        e.preventDefault()
        setOtpInput(e.target.value)
    }

    const submitOtp = (e) => {
        e.preventDefault()
        let emailString = email
        handleSubmit(otpInput, emailString)
    }

    return(
        <div>
            <Navbar />
            <section className="mt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center">Check Your Email For OTP</h1>
                    <p className="text-center text-gray-600 mt-2">Enter the OTP sent to your email</p>
                    <input type="text" className="w-[80%] p-3 mt-8" placeholder="Enter OTP" onChange={handleOtp} value={otpInput}/>
                    <button className="hover:bg-green-600 active:bg-green-700 text-center w-[80%] flex p-3 mt-8 bg-green-500 text-white" onClick={submitOtp}>Submit</button>
                </div> 
            </section>
        </div>
    )
}