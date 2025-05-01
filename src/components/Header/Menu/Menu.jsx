'use client'
import React, {useState} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import * as Icon from '@phosphor-icons/react'

const Menu = () => {

    const [fixedHeader, setFixedHeader] = useState(false);
    const pathname = usePathname();
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    return (
    <>
        <div className={`header-menu bg-white ${fixedHeader ? 'fixed' : ''}`}>
            <div className='container flex items-center justify-between h-25'>
                <Link href='/' className='menu-left-block'>
                    <Image
                        width={200}
                        height={100}
                        src='/images/logo.png'
                        alt='logo'
                        priority={true}
                        className='w-15'
                    />

                </Link>

                <div className='menu-center-block h-full'>
                    <ul className='menu-nav flex items-center xl:gap-2 h-full'>
                        <li lang="km"
                            className={`nav-item h-full flex items-center justify-center ${pathname === '/' ? 'active' : ''}`}>
                            <Link href='/' className='nav-link text-title items-center !gap-1'>
                                <span>ទំព័រដើម</span>
                            </Link>
                        </li>

                        <li lang="km"
                            className={`nav-item h-full flex items-center justify-center ${pathname === '/about' ? 'active' : ''}`}>
                            <Link href='/acnetreatment' className='nav-link text-title items-center !gap-1'>
                                <span>ព្យាបាលមុន</span>
                            </Link>
                        </li>

                        <li lang="km"
                            className={`nav-item h-full flex items-center justify-center ${pathname === '/about' ? 'active' : ''}`}>
                            <Link href='/' className='nav-link text-title items-center !gap-1'>
                                <span>ព្យាបាលស្នាម</span>
                            </Link>
                        </li>

                        <li lang="km"
                            className={`nav-item h-full flex items-center justify-center ${pathname === '/about' ? 'active' : ''}`}>
                            <Link href='/' className='nav-link text-title items-center !gap-1'>
                                <span>សេវាកម្មប្រឆាំងភាពចាស់</span>
                            </Link>
                        </li>

                        <li
                            className={`nav-item h-full flex items-center justify-center ${pathname === '/about' ? 'active' : ''}`}>
                            <Link href='/' className='nav-link text-title items-center !gap-1'>
                                <span>Feedback</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='menu-right-block flex items-center'>
                    <div className='icon-call'>
                        <i className='icon-phone-call text-[25px]'></i>
                    </div>
                    <div className='text !ml-2 max-sm:text-[8px]'>
                        <div className='caption1 text items-center' lang="km">ពិភាក្សាដោយឥតគិតថ្លៃ</div>
                        <div className='!text-[13px] sm:text-base md:text-lg'>016 6624 024 | 070 992 996</div>
                    </div>
                    <div className='menu-humburger hidden cursor-pointer' onClick={()=>setOpenMenuMobile(!openMenuMobile)}>
                        {openMenuMobile ? (
                            <Icon.X weight='bold' className='text-2xl'/>
                        ) : (
                            <Icon.List weight="bold" className="text-2xl" />
                        )}
                    </div>
                </div>

            </div>

            <div id='menu-mobile-block' className={`${openMenuMobile && 'open'}`}>
                <div className='menu-mobile-main'>
                    <div className='container'>
                        <ul className='menu-nav-mobile h-full !pt-1 !pb-1'>
                            <li lang="km"
                                className='nav-item-mobile h-full flex-column !gap-2 !px-2 !py-3 cursor-pointer'>
                                <a className='nav-link-mobile flex items-center justify-between' href='/'>
                                    <span className='body2'>ទំព័រដើម</span>
                                </a>
                            </li>

                            <li lang="km"
                                className='nav-item-mobile h-full flex-column !gap-2 !px-2 !py-3 cursor-pointer'>
                                <a className='nav-link-mobile flex items-center justify-between' href='/acnetreatment'>
                                    <span className='body2'>ព្យាបាលមុខ</span>
                                </a>
                            </li>

                            <li lang="km"
                                className='nav-item-mobile h-full flex-column !gap-2 !px-2 !py-3 cursor-pointer'>
                                <a className='nav-link-mobile flex items-center justify-between' href='/'>
                                    <span className='body2'>ព្យាបាលស្នាម</span>
                                </a>
                            </li>

                            <li lang="km"
                                className='nav-item-mobile h-full flex-column !gap-2 !px-2 !py-3 cursor-pointer'>
                                <a className='nav-link-mobile flex items-center justify-between' href='/'>
                                    <span className='body2'>សេវាកម្មប្រឆាំងភាពចាស់</span>
                                </a>
                            </li>

                            <li
                                className='nav-item-mobile h-full flex-column !gap-2 !px-2 !py-3 cursor-pointer'>
                                <a className='nav-link-mobile flex items-center justify-between' href='/'>
                                    <span className='body2'>Feedback</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </>
    );
};

export default Menu;