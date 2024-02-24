import Image from "next/image";

export default function Sectiontwo() {
   return(
    <div className="flex justify-center mt-24 bg-[#f0f0f0] pt-20 pb-32">
    <div className="w-full md:w-[80%]">
        <div>
            <p className="text-sm text-neutral-400">Enjoy Online Lessons with Tutors</p>
            <h2 className="text-blue-400 text-4xl">Online <span className="text-green-400">Lessons</span></h2>
        </div>
        <div className="relative">
            <Image className="w-full h-[600px] object-cover" src="/images/section2.jpg" alt="sectiontwo" width={1000} height={600} />
            <div className="absolute top-10 left-0 w-[40%] h-[90%] bg-white">
                <div className="flex justify-center items-center w-full h-full">
                    <div className=" p-5">
                        <p className="text-2xl text-green-400">Find Best</p>
                        <h3 className="text-5xl text-blue-500">Tutors Anywhere</h3>
                        <p className="text-sm mt-20 text-neutral-500">Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                        <div className="flex justify-between mt-10">
                            <p className="text-3xl text-green-400">10 <span className="text-base text-neutral-500"><br/>Tutors</span></p>
                            <p className="text-3xl text-green-400">10 <span className="text-base text-neutral-500"><br/>Students</span></p>
                            <p className="text-3xl text-green-400">10 <span className="text-base text-neutral-500"><br/>Courses</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   )
}