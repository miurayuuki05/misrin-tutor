import Image from "next/image";
import { PiCertificateBold } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";
import { FaPencilRuler } from "react-icons/fa";



export default function Sectionthree() {
   return(
    <div className="flex justify-center bg-[#f0f0f0]">
    <div className="w-full">
        <div className="relative">
        <Image className="w-full md:h-[500px] h-[700px] object-cover" src="/images/section3.jpg" alt="sectionthree" width={1000} height={600} />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#2d24af6e]">
            <div className="flex justify-center">
            <div className="opacity-100 w-full md:w-[80%] mt-24 p-10">
                <p className="text-sm text-neutral-400">All Tutors are Guaranteed by Us</p>
                <h2 className="text-white font-bold text-4xl">100% <span className="text-green-400">Guarantee</span></h2>
                <div className="grid  md:grid-flow-col grid-flow-row gap-5 mt-16">
                    <div className="w-[90%]">
                        <div className="flex">
                            <PiCertificateBold className="text-2xl text-green-400" />
                            <a className="text-xl text-white">Professional Tutors</a>
                        </div>
                        <p className="text-neutral-300">
                            Et scaevola delicata vix, mea ei invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voluptaria ex mel. Eos malis
                        </p>
                    </div>
                    <div className="w-[90%]">
                        <div className="flex">
                            <TfiCup className="text-2xl text-green-400" />
                            <a className="text-xl text-white">Real Results Only</a>
                        </div>
                        <p className="text-neutral-300">
                            Et scaevola delicata vix, mea ei invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voluptaria ex mel. Eos malis
                        </p>
                    </div>
                    <div className="w-[90%]">
                        <div className="flex">
                            <FaPencilRuler className="text-2xl text-green-400" />
                            <a className="text-xl text-white">Certified Tutors</a>
                        </div>
                        <p className="text-neutral-300">
                            Et scaevola delicata vix, mea ei invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voluptaria ex mel. Eos malis
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>        
    </div>
    </div>
   )
}