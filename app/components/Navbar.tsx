"use client"
import Image from "next/image"
import { TbSquareLetterR } from "react-icons/tb";

import { useState, useEffect } from "react";


export default function Navbar() {
    const [menu, setMenu] = useState(false)
    
    function handleMenu(){
        setMenu(!menu)
    }

    useEffect(() => {
        let size = window.innerWidth;

        function handleResize(){
            size = window.innerWidth;
            if(size > 768){
                setMenu(true)
                console.log(size)
            }else{
                setMenu(false)
                console.log(size)
            }
        }
        window.addEventListener("resize", handleResize)
    })

    return(
        <nav className="h-20 bg-white fixed z-50 top-0 left-0 flex w-full justify-evenly">
            <div className="w-[40%] flex items-center justify-center">
                <TbSquareLetterR className="text-5xl text-blue-500" />
                <p className="text-xl font-bold text-green-600">MisRin&apos;s Bimbel</p>
            </div>
            <div className="w-[60%] flex items-center">
                <ul className={menu ? "duration-200 flex md:flex-row flex-col w-[100%] justify-evenly fixed md:static top-0 left-0 bg-white md:p-0 p-32" : "md:p-0 p-32 fixed md:static left-0 top-[-100%] duration-200 w-[100%]"}>
                    <a className="hover:text-amber-100 p-2 rounded-full md:text-base text-xl text-neutral-600 duration-200 hover:bg-green-400 " href="#"><li>Home</li></a>
                    <a className="hover:text-amber-100 p-2 rounded-full md:text-base text-xl text-neutral-600 duration-200 hover:bg-green-400" href="#"><li>Find a Tutor</li></a>
                    <a className="hover:text-amber-100 p-2 rounded-full md:text-base text-xl text-neutral-600 duration-200 hover:bg-green-400" href="#"><li>Become a Tutor</li></a>
                    <a className="hover:text-amber-100 p-2 rounded-full md:text-base text-xl text-neutral-600 duration-200 hover:bg-green-400" href="#"><li>News</li></a>
                    <a className="hover:text-amber-100 p-2 rounded-full md:text-base text-xl text-neutral-600 duration-200 hover:bg-green-400" href="#"><li>About</li></a>
                </ul>
            </div>
            <div className="cursor-pointer flex items-center" onClick={()=> handleMenu()}>
                <div className={menu ? "btn-menu open md:hidden block" : "btn-menu md:hidden block"}></div>
            </div>
        </nav>
    )
}