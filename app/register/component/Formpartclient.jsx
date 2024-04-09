"use client"
import { useState } from "react"

export default function Formpart({ handleSubmit }) {
    const [pname, setPname] = useState("")
    const [sname, setSname] = useState("")
    const [sgrade, setSgrade] = useState("")
    const [ssubject, setSsubject] = useState("")
    const [pphone, setPphone] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [honeypot, setHoneypot] = useState("")
    
    const handleChange1 = (e) => {
        setSname(e.target.value)
    }
    const handleChange2 = (e) => {
        setSgrade(e.target.value)
    }
    const handleChange3 = (e) => {
        setSsubject(e.target.value)
    }
    const handleChange4 = (e) => {
        setPname(e.target.value)
    }
    const handleChange5 = (e) => {
        setPphone(e.target.value)
    }
    const handleChange6 = (e) => {
        setAddress(e.target.value)
    }
    const handleChange7 = (e) => {
        setEmail(e.target.value)
    }
    const handleChange8 = (e) => {
        setPassword(e.target.value)
    }
    const handleChange9 = (e) => {
        if(e.target.value) {
            setHoneypot(e.target.value)
        }
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(sname, sgrade, ssubject, pname, pphone, address, email, password, honeypot)
    }

        
    return(
        <form className="flex flex-col items-center">
            <input className="w-[80%] p-3 mt-8" type="text" placeholder="Parents Name" name="pname" required onChange={handleChange4} value={pname}/>
            <input className="w-[80%] p-3 mt-8" type="text" placeholder="Student Name" name="sname" required onChange={handleChange1} value={sname}/>
            <input className="w-[80%] p-3 mt-8" type="text" placeholder="Student Grade" name="sgrade" required onChange={handleChange2} value={sgrade}/>
            <input className="w-[80%] p-3 mt-8" type="text" placeholder="Subject" name="ssubject" required onChange={handleChange3} value={ssubject}/>
            <input className="w-[80%] p-3 mt-8" type="text" placeholder="Parents Whatsapp Number" name="pphone" required onChange={handleChange5} value={pphone}/>
            <input className="w-[80%] p-3 mt-8" type="text" placeholder="Address" name="address" onChange={handleChange6} value={address}/>
            <input className="w-[80%] p-3 mt-8" type="email" placeholder="Email" name="email" required onChange={handleChange7} value={email}/>
            <input className="w-[80%] p-3 mt-8" type="password" placeholder="Password" name="password" required onChange={handleChange8} value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
            <input type="text" name="honeypot" className="hidden" onChange={handleChange9} value={honeypot}/>
            <input type="submit" className="hover:bg-blue-600 active:bg-blue-700 w-[80%] p-3 mt-8 bg-blue-500 text-white" onClick={submit} />
        </form>
    )
}