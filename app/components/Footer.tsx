import { TbSquareLetterR } from 'react-icons/tb';
import { SiGooglemaps } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";



export default function Footer() {
    return(
        <div className="w-full flex justify-center bg-[#0a0a2e] mt-24 text-white py-10">
            <div className='w-[80%] md:w-[60%] flex flex-wrap justify-between'>
                <div className='md:w-[30%] w-full'>
                    <div className='flex items-center mb-5'>
                        <TbSquareLetterR className="text-5xl text-blue-500" />
                        <p className="text-xl font-bold text-green-600">MisRin&apos;s Bimbel</p>
                    </div>
                    <p className='text-neutral-400 text-sm'>Et scaevola delicata vix, mea ei invidunt quodsi eripuit definiebas at pri. Placerat voluptaria meleos malis civibus an dolor</p>
                </div>

                <div className='md:w-[30%] w-full md:mt-0 mt-20'>
                    <h3 className='text-xl'>Quick Links</h3>
                    <ul className='text-neutral-400 text-sm mt-5'>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Find a Tutor</a></li>
                        <li><a href='#'>Become a Tutor</a></li>
                        <li><a href='#'>News</a></li>
                        <li><a href='#'>About</a></li>
                    </ul>
                </div>

                <div className='md:w-[30%] w-full md:mt-0 mt-20'>
                    <h3 className='text-xl'>Our Contacts</h3>
                    <ul className='text-neutral-400 text-sm mt-5'>
                        <li className='flex items-center'>
                            <SiGooglemaps className='text-xl mr-2' />
                            <span className='text-xs'>Blok C10 No. 13, Jl. Utama Griya Permata Asri</span>
                        </li>
                        <li className='flex items-center'>
                            <IoMail className='text-xl mr-2' />
                            <span className='text-xs'>
                                <a href='mailto:rinaagustina@gmail.com'>rinaagustina@gmail.com</a>
                            </span>
                        </li>
                        <li className='flex items-center'>
                            <FaPhone className='text-lg mr-2' />
                            <span className='text-xs'>+62 819 0549 4162</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}