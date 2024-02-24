import Image from "next/image"
import { TbSquareLetterR } from "react-icons/tb";


export default function Navbar() {
    return(
        <nav className="p-5 bg-white fixed z-50 top-0 left-0 flex w-full justify-evenly">
            <div className="w-[40%] flex items-center justify-center">
                <TbSquareLetterR className="text-5xl text-blue-500" />
                <p className="text-xl font-bold text-green-600">MisRin&apos;s Bimbel</p>
            </div>
            <div className="w-[60%] flex items-center">
                <ul className="flex w-[100%] justify-evenly">
                    <a className="hover:text-amber-500 duration-200" href="#"><li>Home</li></a>
                    <a className="hover:text-amber-500 duration-200" href="#"><li>Find a Tutor</li></a>
                    <a className="hover:text-amber-500 duration-200" href="#"><li>Become a Tutor</li></a>
                    <a className="hover:text-amber-500 duration-200" href="#"><li>News</li></a>
                    <a className="hover:text-amber-500 duration-200" href="#"><li>About</li></a>
                </ul>
            </div>
        </nav>
    )
}