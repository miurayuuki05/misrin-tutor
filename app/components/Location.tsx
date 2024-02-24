import Image from "next/image";

export default function Location() {
   return(
    <div className="flex justify-center py-24">
    <div className="w-[90%] md:w-[80%]">
        <div>
            <p className="text-sm text-neutral-400">Where do we operate</p>
            <h2 className="text-blue-400 text-4xl">Our <span className="text-green-400">Location</span></h2>
        </div>
        <div className="flex justify-center mt-16">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.6408827263801!2d106.15556440738085!3d-6.1413973199918175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ef82cd9c42b48b3%3A0x7b59045c97ca1145!2sPelangi%20Bimbel!5e0!3m2!1sen!2sid!4v1708769798647!5m2!1sen!2sid" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>
    </div>
   )
}