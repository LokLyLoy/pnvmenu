'use client'
import React from 'react';
import * as Icon from '@phosphor-icons/react'
import Link from "next/link";

const TopNav = () => {
    return (
        <div className='bg-slate-600'>
            <div className='container flex items-center justify-between h-[44px]'>
                <div className='left-block flex items-center max-sm:right-block'>
                    <div className='location flex items-center'>
                        <Icon.MapPin weight='bold' className='text-white text-xl'/>
                        <span className='caption1 text-white !ml-2 text-m'>#88 Stoeung MeanChey, PhnomPenh</span>
                    </div>
                </div>

                <div className='right-block flex items-center gap-5'>
                    <div className='line h-6 w-auto bg-grey max-sm:hidden'>
                        <div className='list-social flex items-center gap-2.5 max-sm:hidden'>
                            <span className='text-white caption2'>Our Plaform: </span>

                            <Link href='https://www.facebook.com/PnVSkinClinicCenter.2' target='_blank' className='item !rounded-full w-7 h-7 border-gray border-1 flex items-center justify-center'>
                                <i className='icon-facebook text-[15px]'></i>
                            </Link>

                            <Link href='https://www.tiktok.com/@pnv_skin?is_from_webapp=1&sender_device=pc' target='_blank' className='item rounded-full w-7 h-7 border-gray border-1 flex items-center justify-center'>
                                <i className='icon-tiktok text-[15px]'></i>
                            </Link>

                            <Link href='https://www.instagram.com/pnv_skincare_center?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' className='item rounded-full w-7 h-7 border-gray border-1 flex items-center justify-center'>
                                <i className='icon-insta text-[15px]'></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;