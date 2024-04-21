"use client"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { useEffect, useLayoutEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Studentdashboard from "../component/Studentdash"
import Tutordashboard from "../component/Tutordash"

// export default function DashboardClient({isAuth, Logoutadmin, userInfo})
export default function DashboardClient(){
    const [user, setUser] = useState("")
    const router = useRouter()
    const [studentToggle, setStudentToggle] = useState(false)
    const [allToggle, setAllToggle] = useState(false)
    
    useLayoutEffect(() => {
        if(!isAuth){
            router.push('/login')
        } 
    }, [])

    function handleLogout(){
        Logoutadmin().then(() => {
            router.push('/login')
        })
    }

    useEffect(() => {
        if(!userInfo){
            return
        }
        const username = userInfo.username ? userInfo.username : ''
        setUser(username)
    }, [])

    return(
        <div>
            <Navbar />
            {isAuth ?
                (<section className="mt-32">
                    <div className="text-center">
                        <div className="flex justify-center">
                        <div className="flex justify-between w-[90%]">
                            {<div className="p-1 text-xl">Welcome <span className="text-yellow-600">{user}</span></div>}
                            <div className="rounded-lg duration-300 text-white select-none cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-700 p-1 w-20" onClick={handleLogout}>Logout</div>
                        </div>
                        </div>
                        <h1 className="text-4xl font-bold text-center">Dashboard</h1>
                        {allToggle ?
                        <div className="flex justify-center">
                            <div className="w-[80%] mt-8">
                                <div className="flex justify-between">
                                    <div className="w-[30%] p-4 border border-gray-300 rounded-md">
                                        <h1 className="text-2xl font-bold text-center">Tutors</h1>
                                        <p className="text-center mt-2">Create, Edit, Delete, or View tutors information</p>
                                        <div className="flex justify-center my-5">
                                            <div className="bg-green-500 hover:bg-green-700 active:bg-green-800 select-none cursor-pointer p-1 text-white rounded-lg duration-200">Manage</div>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-4 border border-gray-300 rounded-md">
                                        <h1 className="text-2xl font-bold text-center">Students</h1>
                                        <p className="text-center mt-2">Create, Edit, Delete, or View student information</p>
                                        <div className="flex justify-center my-5">
                                            <div className="bg-green-500 hover:bg-green-700 active:bg-green-800 select-none cursor-pointer p-1 text-white rounded-lg duration-200">Manage</div>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-4 border border-gray-300 rounded-md">
                                        <h1 className="text-2xl font-bold text-center">Settings</h1>
                                        <div className="flex justify-center my-5">
                                            <div className="bg-green-500 hover:bg-green-700 active:bg-green-800 select-none cursor-pointer p-1 text-white rounded-lg duration-200">Settings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :   
                        (
                        <div className="flex justify-center">
                            {studentToggle ?
                            <Studentdashboard />
                            : <Tutordashboard />
                            }
                        </div>
                        )
                        }
                    </div> 
                </section>)
            :   <section className="mt-64 mb-32">
                    <p className="text-center mt-8 text-red-500">You need to login first</p>
                    <p className="text-center mt-8 text-red-500">Redirecting you to login</p>
                </section>
                }
            <Footer />
        </div>
    )
}