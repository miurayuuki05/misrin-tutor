import { cookies } from "next/headers";
import OtpVerificationClient from "./component/Otpclient";
import { redirect } from "next/navigation";

export default async function OtpVerification(){
    let emailS = cookies().get('email')
    let emailString = emailS?.value

    async function verifyOtp(otpInput, emailString){
        "use server"    
        await fetch("http://localhost:3000/api/otpverify", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ otp: otpInput, email: emailString })
        }).then(res => res.json()).then(data => {
            if(data.message === 'Otp verified'){
                redirect('/register/success-register')
            }else{
                console.log('Otp not verified')
            }
        })
    }

    return(
        <OtpVerificationClient email={emailString} handleSubmit={verifyOtp} />
    )
}