import Image from "next/image";

export default function Sectionone() {
   return(
    <div className="flex justify-center my-24">
    <div className="w-full md:w-[80%]">
        <div>
            <p className="text-sm text-neutral-400">We Provide the Best Tutoring Service</p>
            <h2 className="text-blue-400 text-4xl">Useful <span className="text-green-400">Information</span></h2>
        </div>
        <div className="flex md:flex-row flex-col mt-10">
            <div className=" md:w-[33%] w-full p-10 bg-slate-200 rounded-l-md">
                <h3 className="text-xs text-green-600">A Few Words</h3>
                <h1 className="text-2xl mb-5 text-blue-500">Who We Are</h1>
                <p className="text-sm">Normally, a tutor will help a student who is struggling in a subject of some sort. Also, a tutor may be provided for a student who wants to learn at home. Professional instruction in a given topic or field.</p>
            </div>
            <div className=" md:w-[33%] w-full p-10 bg-neutral-300">
                <h3 className="text-xs text-green-600">Most Popular</h3>
                <h1 className="text-2xl mb-5 text-blue-500">Trending Subjects</h1>
                <div className="flex text-sm justify-evenly">
                    <ul>
                        <li>Mathematics</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>English</li>
                        <li>Enginering</li>
                        <li>Biochemistry</li>
                    </ul>
                    <ul>
                        <li>Mathematics</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>English</li>
                    </ul>
                </div>
            </div>
            <div className=" md:w-[33%] w-full p-0 rounded-r-md">
                <div className="w-full">
                    <Image src="/images/section1.png" className="rounded-r-md object-cover w-full object-right md:object-left" alt="Section 1" width={300} height={500} />
                </div>
            </div>
        </div>
    </div>
    </div>
   )
}