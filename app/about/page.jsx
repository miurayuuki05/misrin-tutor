import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function About(){
    return(
        <div>
            <Navbar />
            <section className="mt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center">About Us</h1>
                    <p className="text-center text-gray-600 mt-2">Pelangi Bimbel</p>
                    <div className="flex justify-center">
                        <div className="mt-8 w-[80%]">
                            <p className="text-center text-lg text-gray-800">
                                At Pelangi Bimbel, we believe that learning should be an exciting adventure for children. Our innovative approach combines interactive lessons, engaging activities, and a nurturing environment to create a truly fun learning experience.
                            </p>
                            <p className="text-center text-lg text-gray-800 mt-4">
                                With our team of passionate and dedicated educators, we strive to ignite a love for learning in every child. Through hands-on projects, creative exercises, and personalized guidance, we empower children to explore their interests, develop critical thinking skills, and unlock their full potential.
                            </p>
                            <p className="text-center text-lg text-gray-800 mt-4">
                                At Pelangi Bimbel, we understand that every child is unique. That's why we tailor our curriculum to cater to individual learning styles and abilities. Whether your child is a visual learner, an auditory learner, or a kinesthetic learner, we have the resources and teaching methods to ensure their success.
                            </p>
                            <p className="text-center text-lg text-gray-800 mt-4">
                                Join us at Pelangi Bimbel and give your child the gift of joyful learning. Together, we can inspire a lifelong love for knowledge and set them on the path to success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}