import Image from "next/image";

export default function News() {
   return(
    <div className="flex justify-center py-24">
    <div className="w-[90%] md:w-[80%]">
        <div>
            <p className="text-sm text-neutral-400">Enjoy Online Lessons with Tutors</p>
            <h2 className="text-blue-400 text-4xl">Latest  <span className="text-green-400">News</span></h2>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-20 mt-16">
            <div className="relative md:w-[30%] w-full">
                <Image className="h-[450px] object-cover rounded-t-md" src="/images/section3.jpg" alt="sectionfour" width={1000} height={600} />
                <div className="absolute text-center bottom-0 bg-[#ebebeb] w-full p-5">
                    <p className="text-sm text-neutral-600">JULY 28, 2016 | 1 COMMENT</p>
                    <p className="text-xl">Back-to-School: Tutoring as a Proactive Tool</p>
                    <a className="bg-green-500 p-1 rounded-full px-2 hover:bg-green-400 hover:text-neutral-800 duration-200" href="#">Read More</a>
                </div>
            </div>
            <div className="relative md:w-[30%] w-full">
                <Image className="h-[450px] object-cover rounded-t-md" src="/images/section3.jpg" alt="sectionfour" width={1000} height={600} />
                <div className="absolute text-center bottom-0 bg-[#ebebeb] w-full p-5">
                    <p className="text-sm text-neutral-600">JUNE 25, 2016 | 1 COMMENT</p>
                    <p className="text-xl">10 Tips How to Find Your Ideal Tutor</p>
                    <a className="bg-green-500 p-1 rounded-full px-2 hover:bg-green-400 hover:text-neutral-800 duration-200" href="#">Read More</a>
                </div>
            </div>
            <div className="relative md:w-[30%] w-full">
                <Image className="h-[450px] object-cover rounded-t-md" src="/images/section3.jpg" alt="sectionfour" width={1000} height={600} />
                <div className="absolute text-center bottom-0 bg-[#ebebeb] w-full p-5">
                    <p className="text-sm text-neutral-600">JUNE 20, 2016 | 1 COMMENT</p>
                    <p className="text-xl">Tips How to not get bored when studying</p>
                    <a className="bg-green-500 p-1 rounded-full px-2 hover:bg-green-400 hover:text-neutral-800 duration-200" href="#">Read More</a>
                </div>
            </div>


        </div>
    </div>
    </div>
   )
}