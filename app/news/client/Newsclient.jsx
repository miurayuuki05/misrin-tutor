import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function Newsclient(){
    return(
        <div>
            <Navbar />
            <section className="mt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center">News</h1>
                    <p className="text-center text-gray-600 mt-2">News Page</p>
                    <div className="flex justify-center">
                        <div className="mt-8 w-[80%] grid md:grid-cols-3 grid-cols-1 gap-5">
                            <div>
                                <div className="bg-gray-200 p-4 rounded-md">
                                    <h1 className="text-2xl font-bold">News 1</h1>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                                </div>
                            </div>

                            <div>
                                <div className="bg-gray-200 p-4 rounded-md">
                                    <h1 className="text-2xl font-bold">News 2</h1>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                                </div>
                            </div>

                            <div>
                                <div className="bg-gray-200 p-4 rounded-md">
                                    <h1 className="text-2xl font-bold">News 3</h1>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                                </div>
                            </div>
                            
                            <div>
                                <div className="bg-gray-200 p-4 rounded-md">
                                    <h1 className="text-2xl font-bold">News 3</h1>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                                </div>
                            </div>

                            <div>
                                <div className="bg-gray-200 p-4 rounded-md">
                                    <h1 className="text-2xl font-bold">News 3</h1>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}