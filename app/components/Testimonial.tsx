"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/pagination";

register();

export default function Sectionthree() {
   return(
    <div className="flex justify-center bg-[#f0f0f0]">
    <div className="w-full">
        <div className="relative">
        <Image className="w-full md:h-[500px] h-[600px] object-cover" src="/images/section3.jpg" alt="sectionthree" width={1000} height={600} />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#2d24af6e]">
            <div className="flex justify-center">
            <div className="opacity-100 w-full md:w-[80%] mt-24">
                <p className="text-sm text-neutral-400">Happy Clients Said About Our Service</p>
                <h2 className="text-white text-4xl">Our  <span className="text-green-400">Testimonials</span></h2>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false}}
                    className="h-[300px] "
                >
                    <SwiperSlide>
                        <div>
                            <p className="text-white text-2xl mt-10 bg-blue-500 p-2 rounded-lg">“I was looking for a tutor for my kids and I found the perfect one here. I am very happy with the service.”</p>
                            <div className="flex items-center mt-5 bg-green-500 justify-between p-2 rounded-full">
                                <Image className="w-10 h-10 rounded-full" src="/images/profplace.png" alt="testimonial1" width={50} height={50} />
                                <p className="text-white text-2xl">John Doe</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p className="text-white text-2xl mt-10 bg-blue-500 p-2 rounded-lg">“I was looking for a tutor for my kids and I found the perfect one here. I am very happy with the service.”</p>
                            <div className="flex items-center mt-5 bg-green-500 justify-between p-2 rounded-full">
                                <Image className="w-10 h-10 rounded-full" src="/images/profplace.png" alt="testimonial2" width={50} height={50} />
                                <p className="text-white text-2xl">John Doe</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p className="text-white text-2xl mt-10 bg-blue-500 p-2 rounded-lg">“I was looking for a tutor for my kids and I found the perfect one here. I am very happy with the service.”</p>
                            <div className="flex items-center mt-5 bg-green-500 justify-between p-2 rounded-full">
                                <Image className="w-10 h-10 rounded-full" src="/images/profplace.png" alt="testimonial3" width={50} height={50} />
                                <p className="text-white text-2xl">John Doe</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            </div>
        </div>
        </div>        
    </div>
    </div>
   )
}