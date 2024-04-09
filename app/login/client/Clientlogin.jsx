"use client"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { useState } from "react"

export default function LoginClient({handleLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [respone, setRespone] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    function submitForm(e){
        e.preventDefault()
        handleLogin(username, password).then((data) => {
            setRespone(data)
        })
    }

    return(
        <div>
            <Navbar />
            <section className="mt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center">Login</h1>
                    <p className="text-center text-gray-600 mt-2">Dashbord Login Page</p>
                    <div className="flex justify-center">
                    <form className="mt-8 w-[60%]">
                        <input type="text" placeholder="Username" className="block w-full p-3 border border-gray-300 rounded-md mb-4" onChange={handleUsername} value={username} required/>
                        <input type="password" placeholder="Password" className="block w-full p-3 border border-gray-300 rounded-md mb-4" onChange={handlePassword} value={password} required />
                        {respone ? <p className="text-red-500">{respone.message}</p> : ''}
                        <input type="submit" className="block w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 active:bg-blue-700" onClick={submitForm} />
                    </form>
                    </div>
                </div> 
            </section>
            <Footer />
        </div>
    )
}