import Navbar from "../components/Navbar"

export default function NotFound(){
    return(
        <div>
            <Navbar />
            <section className="mt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center">Page Not Found</h1>                   
                    <p className="text-center text-gray-600 mt-2">The page you are looking for is not found</p>
                </div> 
            </section>
        </div>
    )
}