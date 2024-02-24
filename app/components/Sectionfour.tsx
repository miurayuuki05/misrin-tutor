import Image from "next/image";

export default function Sectionfour() {
   return(
    <div className="flex justify-center py-24">
    <div className="w-[90%] md:w-[80%]">
        <div>
            <p className="text-sm text-neutral-400">Find the Right Tutor for You</p>
            <h2 className="text-blue-400 text-4xl">Featured <span className="text-green-400">Tutors</span></h2>
        </div>
        <div className="flex md:flex-row flex-col justify-between mt-16 gap-20 md:gap-0">
            <div className="relative md:w-[30%] w-full">
                <Image className="h-[450px] object-cover rounded-t-md" src="/images/cardprofile/profile1.jpg" alt="sectionfour" width={1000} height={600} />
                <div className="absolute text-center bottom-0 bg-[#ebebeb] w-full p-3">
                    <p className="text-sm text-neutral-600">Calistung, Matematika, Fisika</p>
                    <p className="text-xl">Taylor Jones</p>
                    <a className="bg-green-500 p-1 rounded-full px-2 hover:bg-green-400 hover:text-neutral-800 duration-200" href="#">View Tutor</a>
                </div>
            </div>
            <div className="relative md:w-[30%] w-full">
                <Image className="h-[450px] object-cover rounded-t-md" src="/images/cardprofile/profile1.jpg" alt="sectionfour" width={1000} height={600} />
                <div className="absolute text-center bottom-0 bg-[#ebebeb] w-full p-3">
                    <p className="text-sm text-neutral-600">Calistung, Matematika, Fisika</p>
                    <p className="text-xl">Taylor Jones</p>
                    <a className="bg-green-500 p-1 rounded-full px-2 hover:bg-green-400 hover:text-neutral-800 duration-200" href="#">View Tutor</a>
                </div>
            </div>
            <div className="relative md:w-[30%] w-full">
                <Image className="h-[450px] object-cover rounded-t-md" src="/images/cardprofile/profile1.jpg" alt="sectionfour" width={1000} height={600} />
                <div className="absolute text-center bottom-0 bg-[#ebebeb] w-full p-3">
                    <p className="text-sm text-neutral-600">Calistung, Matematika, Fisika</p>
                    <p className="text-xl">Taylor Jones</p>
                    <a className="bg-green-500 p-1 rounded-full px-2 hover:bg-green-400 hover:text-neutral-800 duration-200" href="#">View Tutor</a>
                </div>
            </div>


        </div>
    </div>
    </div>
   )
}