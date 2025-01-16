"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import SingleBanner1 from "./SingleBanner1";
import Banner1Data from "@/assets/jsonData/banner/Banner1Data.json";

const BannerStyle1 = () => {
    return (
        <>
            <div className="banner-area banner-style-one shadow navigation-custom-large zoom-effect overflow-hidden text-light">
                <div className="banner-fade">
                    <Swiper
                        modules={[Keyboard, Autoplay, Pagination, EffectFade, Navigation]}
                        direction={"horizontal"}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                    >
                        {Banner1Data.map((banner) => (
                            <SwiperSlide key={banner.id} className="banner-style-one">
                                {/* Ensure SingleBanner1 doesn't have an overlay, or modify the styling */}
                                <SingleBanner1 banner={banner} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </>
    );
};

export default BannerStyle1;
