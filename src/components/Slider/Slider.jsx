'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import * as Icon from '@phosphor-icons/react';
import 'swiper/css/bundle';
import Link from "next/link";
import Image from "next/image";

const Slider = () => {
    return (
        <div className="slider-block relative !mt-10">
            <div className="prev-arrow items-center justify-content">
                <Icon.CaretLeft weight="bold" className="text-white heading6"/>
            </div>

            <div className="slider-main bg-white">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.prev-arrow',
                        nextEl: '.next-arrow',
                    }}
                    loop={true}
                    pagination={{clickable: true}}
                    speed={400}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="h-full w-auto relative"
                    autoplay={{
                        delay: 3000,
                    }}
                >
                    <SwiperSlide>
                        <div className="slider-item slider-first">
                            <div className="bg-img relative">
                                <Image
                                    src={'/images/slider2.jpg'}
                                    width={5000}
                                    height={5000}
                                    priority={true}
                                    alt="slider1"
                                    className="object-contain w-full h-full" // Use object-contain to preserve aspect ratio
                                />
                            </div>

                            <div className="container">
                                <div className="text-content flex-column-between">
                                    <div className="heading5">
                                        <div className="relative overflow-hidden">
                                            <span lang="km" className="block relative overflow-hidden">
                                                ព្យាបាលមុន និង ស្នាម យ៉ាងមានប្រសិទ្ធិភាព
                                            </span>
                                            <span lang="km" className="block absolute top-0 left-0 w-full h-full">
                                                ព្យាបាលមុន និង ស្នាម យ៉ាងមានប្រសិទ្ធិភាព
                                            </span>
                                        </div>
                                    </div>
                                    <div lang="km" className="body mt-3 text-secondary">
                                        ព្យាបាលស្បែកឲ្យកាន់តែភ្លឺស្អាត និងមានសុខភាពល្អ
                                    </div>
                                    <div lang="km" className="body2 button-block md:mt-10 !mt-6">
                                        <Link href="/" className="button-main bg-blue-700 text-white hover:bg-blue-500">
                                            ចាប់ផ្ដើមឥឡូវនេះ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-item slider-first">
                            <div className="bg-img relative">
                                <Image
                                    src={'/images/slider3.jpg'}
                                    width={5000}
                                    height={5000}
                                    priority={true}
                                    alt="slider1"
                                    className="object-contain w-full h-full" // Use object-contain to preserve aspect ratio
                                />
                            </div>

                            <div className="container">
                                <div className="text-content flex-column-between">
                                    <div className="heading5">
                                        <div className="relative overflow-hidden">
                                            <span lang="km" className="block relative overflow-hidden">
                                                មានការជឿទុកចិត្តពីភ្ញៀវជាច្រើន
                                            </span>
                                            <span lang="km" className="block absolute top-0 left-0 w-full h-full">
                                                មានការជឿទុកចិត្តពីភ្ញៀវជាច្រើន
                                            </span>
                                        </div>
                                    </div>
                                    <div lang="km" className="body mt-3 text-secondary">
                                        ការព្យាបាលប្រកបដោយប្រសិទ្ធិភាពខ្ពស់
                                    </div>
                                    <div lang="km" className="body2 button-block md:mt-10 !mt-6">
                                        <Link href="/" className="button-main bg-blue-700 text-white hover:bg-blue-500">
                                            ចាប់ផ្ដើមឥឡូវនេះ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-item slider-first">
                            <div className="bg-img relative">
                                <Image
                                    src={'/images/hifu1.jpg'}
                                    width={5000}
                                    height={5000}
                                    priority={true}
                                    alt="slider1"
                                    className="object-contain w-full h-full" // Use object-contain to preserve aspect ratio
                                />
                            </div>

                            <div className="container">
                                <div className="text-content flex-column-between">
                                    <div className="heading5">
                                        <div className="relative overflow-hidden">
                                            <span lang="km" className="block relative overflow-hidden">
                                                ទទួលបានការយកចិត្តទុកដាក់ខ្ពស់
                                            </span>
                                            <span lang="km" className="block absolute top-0 left-0 w-full h-full">
                                                ទទួលបានការយកចិត្តទុកដាក់ខ្ពស់
                                            </span>
                                        </div>
                                    </div>
                                    <div lang="km" className="body mt-3 text-secondary">
                                        ការព្យាបាលត្រឹមត្រូវ ធ្វើឲ្យស្បែកមានសុខភាពល្អ
                                    </div>
                                    <div lang="km" className="body2 button-block md:mt-10 !mt-6">
                                        <Link href="/" className="button-main bg-blue-700 text-white hover:bg-blue-500">
                                            ចាប់ផ្ដើមឥឡូវនេះ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-item slider-first">
                            <div className="bg-img relative">
                                <Image
                                    src={'/images/slider4.jpg'}
                                    width={5000}
                                    height={5000}
                                    priority={true}
                                    alt="slider1"
                                    className="object-contain w-full h-full" // Use object-contain to preserve aspect ratio
                                />
                            </div>

                            <div className="container">
                                <div className="text-content flex-column-between">
                                    <div className="heading5">
                                        <div className="relative overflow-hidden">
                                            <span lang="km" className="block relative overflow-hidden">
                                                ថែរក្សាសម្រស់ឲ្យក្មេងជាងវ័យ
                                            </span>
                                            <span lang="km" className="block absolute top-0 left-0 w-full h-full">
                                                ថែរក្សាសម្រស់ឲ្យក្មេងជាងវ័យ
                                            </span>
                                        </div>
                                    </div>
                                    <div lang="km" className="body mt-3 text-secondary">
                                        ជួយធ្វើឲ្យស្បែកភ្លឺថ្លា ស្បែកមានសំណើមភ្លឺថ្លា
                                    </div>
                                    <div lang="km" className="body2 button-block md:mt-10 !mt-6">
                                        <Link href="/" className="button-main bg-blue-700 text-white hover:bg-blue-500">
                                            ចាប់ផ្ដើមឥឡូវនេះ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="next-arrow items-center justify-content">
                <Icon.CaretRight className="text-white heading6" weight="bold"/>
            </div>
        </div>
    );
};

export default Slider;