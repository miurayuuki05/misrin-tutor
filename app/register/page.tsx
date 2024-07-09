import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Formpart from "./component/Formpart"

export default function Register(){

    return(
        <div>
            <Navbar />
            <section className="mt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center">Register as Student</h1>
                    <p className="text-center text-gray-600 mt-2">Register to get the best tutor for your child</p>
                </div> 
                <div className="mt-10 md:w-[40%] w-[90%] bg-neutral-300 mx-auto p-5">
                    <Formpart />     
                </div>
            </section>
            <Footer />
        </div>
    )
}