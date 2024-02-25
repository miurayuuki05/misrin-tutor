"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
import { EffectFade } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

register();

export default function Hero() {
  return (
    <div className="w-full z-0">
        <Swiper
            effect="fade"
            modules={[Pagination, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false}}
        >
            <SwiperSlide className="relative">
                <Image
                    className="w-full object-cover h-[580px] object-top"
                    src="/images/slide1.jpg"
                    alt="Hero 1"
                    width={1920}
                    height={1080}
                />
                <div className="absolute flex items-center left-0 top-0 text-center p-3 w-full mx-auto h-[580px]">
                    <div className=" w-full">
                        <h1 className="text-5xl font-bold text-white">Welcome to Misrin</h1>
                        <p className="text-xl font-semibold text-white">Learning made easy</p>
                        <div className="mt-10">
                            <a href="#" className="bg-green-600 text-black p-3 font-bold rounded-full hover:bg-green-300 hover:text-blue-950 duration-200">Get Started</a>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="w-full object-cover h-[580px] object-top"
                    src="/images/slide2.jpg"
                    alt="Hero 2"
                    width={1920}
                    height={1080}
                />
                <div className="absolute flex items-center left-0 top-0 text-center p-3 w-full mx-auto h-[580px]">
                    <div className="p-32 w-full">
                        <h1 className="text-5xl font-bold text-white">Welcome to Misrin</h1>
                        <p className="text-xl font-semibold text-white">Learning made easy</p>
                        <div className="mt-10">
                            <a href="#" className="bg-green-600 text-black p-3 font-bold rounded-full hover:bg-green-300 hover:text-blue-950 duration-200">Get Started</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="w-full object-cover h-[580px] object-top"
                    src="/images/slide3.jpg"
                    alt="Hero 3"
                    width={1920}
                    height={1080}
                />
                <div className="absolute flex items-center left-0 top-0 text-center p-3 w-full mx-auto h-[580px]">
                    <div className="p-32 w-full">
                        <h1 className="text-5xl font-bold text-white">Welcome to Misrin</h1>
                        <p className="text-xl font-semibold text-white">Learning made easy</p>
                        <div className="mt-10">
                            <a href="#" className="bg-green-600 text-black p-3 font-bold rounded-full hover:bg-green-300 hover:text-blue-950 duration-200">Get Started</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  );
}