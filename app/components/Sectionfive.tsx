import Image from "next/image";

export default function Sectionfive() {
   return(
    <div className="flex justify-center mt-24 bg-[#f0f0f0] pt-20 pb-32">
    <div className="w-full">
        <div className="flex md:flex-row flex-col mx-auto justify-center mb-12 w-[90%] md:w-[80%]">
        <div className="w-[80%]">
            <h2 className="text-blue-400 text-4xl">Want to become a tutor in <span className="text-green-400">Misrin&apos;s Bimbel?</span></h2>
            <p className="text-sm text-neutral-400">Misrin&apos;s Bimbel collaborate professional and talented tutors from all over the world! Join us right now!</p>
        </div>
        <div className="md:w-[20%] w-full mt-5">
            <a className="p-3  text-white bg-green-600 rounded-full hover:bg-yellow-600 duration-200" href="#">Register Now</a>
        </div>
        </div>
        <div className="relative">
        <Image className="w-full md:h-[500px] h-[600px] object-cover" src="/images/section5.jpg" alt="sectionthree" width={1000} height={600} />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#2d24af6e]">
            <div className="flex justify-center">
            <div className="opacity-100 w-full md:w-[80%] mt-24 p-10 text-center text-white">
                <p className="text-lg">Call Us 081905494162</p>
                <h2 className="text-5xl">Do You Need Help?</h2>
                <p className="text-sm text-neutral-300 mb-10">Our specialists can help you with finding the right tutor for you or your kids</p>
                <a href="#" className="bg-green-600 rounded-full p-3 hover:bg-yellow-600 duration-200">Make an Appointment</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
   )
}