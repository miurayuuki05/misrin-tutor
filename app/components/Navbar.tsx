import Image from "next/image"

export default function Navbar() {
    return(
        <nav className="p-5 bg-white fixed z-10 top-0 left-0 flex w-full justify-evenly">
            <div className="w-[40%] flex justify-center">
                <p>LOGO</p>
            </div>
            <div className="w-[60%]">
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